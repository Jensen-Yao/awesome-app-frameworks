// 自动刷新所有收录项目的 Star 数与归档状态
// 数据源: data/projects.json → 同步回写 data/projects.json 与 index.html 内嵌 JSON 块
// 用法: GITHUB_TOKEN=xxx node scripts/refresh-stars.mjs
import { readFileSync, writeFileSync } from "node:fs";

const TOKEN = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
if (!TOKEN) {
  console.error("缺少 GITHUB_TOKEN 环境变量");
  process.exit(1);
}
const H = {
  Authorization: `Bearer ${TOKEN}`,
  Accept: "application/vnd.github+json",
  "User-Agent": "awesome-app-frameworks-refresh",
};

const data = JSON.parse(readFileSync("data/projects.json", "utf8"));
let updated = 0;
const missing = [];

for (const p of data) {
  try {
    const res = await fetch(`https://api.github.com/repos/${p.r}`, { headers: H });
    if (!res.ok) {
      missing.push(p.r);
      continue;
    }
    const j = await res.json();
    p.s = j.stargazers_count;
    p.archived = !!j.archived;
    if (j.archived && !p.d.includes("已归档")) p.d += "（⚠️ 仓库已归档）";
    updated++;
  } catch (e) {
    missing.push(`${p.r}(${e.message})`);
  }
  await new Promise((r) => setTimeout(r, 120)); // 温和限速，避免触发二次限制
}

const today = new Date().toISOString().slice(0, 10);
writeFileSync("data/projects.json", JSON.stringify(data, null, 1) + "\n");

// 同步内嵌 JSON 与同步日期到 index.html（在线总览页零 fetch、秒开）
let html = readFileSync("index.html", "utf8");
html = html.replace(
  /(<script type="application\/json" id="projects-data">)[\s\S]*?(<\/script>)/,
  `$1\n${JSON.stringify(data, null, 1)}\n$2`,
);
html = html.replace(/(<b id="syncDate">)[^<]*(<\/b>)/, `$1${today}$2`);
writeFileSync("index.html", html);

console.log(
  `✓ 已更新 ${updated}/${data.length} 个项目，同步日期 ${today}` +
    (missing.length ? `；失败: ${missing.join(", ")}` : ""),
);
if (missing.length >= data.length / 2) {
  console.error("失败比例过高，疑似 Token 或网络问题");
  process.exit(1);
}
