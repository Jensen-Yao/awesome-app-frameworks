// 从各收录项目的 README 中提取"软件预览图"（界面截图/GIF 演示）
// 结果写入 data/projects.json 的 img 字段（校验过 HTTP 200 + image/* 才收录）
// 用法: GITHUB_TOKEN=xxx node scripts/fetch-previews.mjs [--force]
import { readFileSync, writeFileSync } from "node:fs";

const TOKEN = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
if (!TOKEN) {
  console.error("缺少 GITHUB_TOKEN 环境变量");
  process.exit(1);
}
const H = {
  Authorization: `Bearer ${TOKEN}`,
  Accept: "application/vnd.github.raw+json",
  "User-Agent": "awesome-app-frameworks-previews",
};
const FORCE = process.argv.includes("--force");

const BAD_HOST = /(shields\.io|badge|star-history|travis|codecov|circleci|opencollective|weserv|gravatar|badgen|analytics|visitor|weblate|translation|discord|slack)/i;
const GOOD_NAME = /(screenshot|preview|screen|shot|界面|截图|首页|home|ui|app|demo|banner|cover|dashboard|show|display)/i;
const BAD_NAME = /(logo|icon|avatar|qr|qrcode|donate|sponsor|wechat_pay|alipay_pay|footer)/i;
const IMG_EXT = /\.(png|jpe?g|webp|gif|svg)(\?|$)/i;

const branchCache = new Map();
async function defaultBranch(repo) {
  if (!branchCache.has(repo)) {
    const res = await fetch(`https://api.github.com/repos/${repo}`, { headers: H });
    branchCache.set(repo, res.ok ? (await res.json()).default_branch || "main" : "main");
  }
  return branchCache.get(repo);
}

function resolveUrl(u, repo, branch) {
  if (!u) return null;
  u = u.trim().replace(/\s/g, "%20");
  if (u.startsWith("//")) return "https:" + u;
  if (/^https?:\/\//i.test(u)) {
    // github blob / raw / assets 链接统一转 raw 直链
    const blob = u.match(/^https?:\/\/github\.com\/([^/]+)\/([^/]+)\/blob\/([^/]+)\/(.+)$/);
    if (blob) return `https://raw.githubusercontent.com/${blob[1]}/${blob[2]}/${blob[3]}/${blob[4]}`;
    const raw = u.match(/^https?:\/\/github\.com\/([^/]+)\/([^/]+)\/raw\/([^/]+)\/(.+)$/);
    if (raw) return `https://raw.githubusercontent.com/${raw[1]}/${raw[2]}/${raw[3]}/${raw[4]}`;
    return u;
  }
  return `https://raw.githubusercontent.com/${repo}/${branch}/${u.replace(/^\.?\//, "")}`;
}

async function validPreview(url) {
  if (!url || BAD_HOST.test(url)) return false;
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "preview-checker", Range: "bytes=0-2047" },
      redirect: "follow",
    });
    if (!(res.status === 200 || res.status === 206)) return false;
    const ct = (res.headers.get("content-type") || "").toLowerCase();
    if (!ct.startsWith("image/")) return false;
    const len = Number(res.headers.get("content-range")?.split("/")[1] || res.headers.get("content-length") || 0);
    return len === 0 || len > 4000; // 过滤小图标
  } catch {
    return false;
  }
}

async function readmeImages(repo, branch) {
  const res = await fetch(`https://api.github.com/repos/${repo}/readme`, { headers: H });
  if (!res.ok) return [];
  const md = await res.text();
  const urls = [];
  for (const m of md.matchAll(/!\[[^\]]*\]\(\s*([^\s)]+)[^)]*\)/g)) urls.push(m[1]);
  for (const m of md.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)) urls.push(m[1]);
  return urls;
}

const data = JSON.parse(readFileSync("data/projects.json", "utf8"));
let found = 0;
const none = [];

for (const p of data) {
  if (p.img && !FORCE) { found++; continue; }
  delete p.img;
  const branch = await defaultBranch(p.r);
  const urls = await readmeImages(p.r, branch);
  const seen = new Set();
  const candidates = urls
    .map((u) => resolveUrl(u, p.r, branch))
    .filter((u) => u && !BAD_HOST.test(u) && !seen.has(u) && seen.add(u))
    .map((u) => ({
      u,
      score:
        (GOOD_NAME.test(u) ? 3 : 0) -
        (BAD_NAME.test(u) ? 4 : 0) +
        (IMG_EXT.test(u) && !u.endsWith(".svg") ? 2 : 0) +
        (/githubusercontent\.com/.test(u) ? 1 : 0),
    }))
    .filter((c) => c.score > -2)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8);

  for (const c of candidates) {
    if (await validPreview(c.u)) {
      p.img = c.u;
      found++;
      break;
    }
  }
  if (!p.img) none.push(p.r);
  await new Promise((r2) => setTimeout(r2, 100));
}

writeFileSync("data/projects.json", JSON.stringify(data, null, 1) + "\n");

// 同步内嵌 JSON 到 index.html
let html = readFileSync("index.html", "utf8");
html = html.replace(
  /(<script type="application\/json" id="projects-data">)[\s\S]*?(<\/script>)/,
  `$1\n${JSON.stringify(data, null, 1)}\n$2`,
);
writeFileSync("index.html", html);

console.log(`✓ 共 ${data.length} 个项目，已带预览图: ${found}，未找到: ${none.length}`);
if (none.length) console.log("  无预览: " + none.join(", "));
