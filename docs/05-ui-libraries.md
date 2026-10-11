# 05 · 小程序 & 移动端 UI 组件库

> 覆盖场景：点单页 / 商品流 / 规格弹层等移动端界面搭建，大厂出品、被市场验证的组件体系。
>
> 数据统计于 **2026-10-12**。

## 一、小程序组件库

| 项目 | Stars | 适用端 | 许可证 | 点评 |
|---|---|---|---|---|
| [Tencent/weui](https://github.com/Tencent/weui) | 27.4k | 微信小程序 / Web | MIT（基础库） | 微信官方设计语言 WEUI 的基础库，与微信原生风格一致 |
| [youzan/vant-weapp](https://github.com/youzan/vant-weapp) | 18.5k | 微信小程序 | MIT | 有赞出品：有赞微商城（真实电商海量用户）锤炼出的组件库，电商类小程序事实标准 |
| [Tencent/tdesign-miniprogram](https://github.com/Tencent/tdesign-miniprogram) | 1.8k | 微信小程序 | MIT | 腾讯 TDesign 小程序版，企业级设计体系，多框架同源 |
| [Moonofweisheng/wot-design-uni](https://github.com/Moonofweisheng/wot-design-uni) | 2.3k | uni-app（vue3） | MIT | uni-app + vue3 生态里维护最活跃的组件库之一，暗黑模式 / 60+ 组件 |

## 二、移动端 H5 / App 组件库

| 项目 | Stars | 框架 | 许可证 | 点评 |
|---|---|---|---|---|
| [youzan/vant](https://github.com/youzan/vant) | 24.4k | Vue | MIT | 有赞 Vant 移动端：商品 / SKU / 地址编辑等电商组件开箱即用，做点单 / 商城 H5 首选 |
| [ant-design/ant-design-mobile](https://github.com/ant-design/ant-design-mobile) | 12.1k | React | MIT | 蚂蚁移动端：蚂蚁系 App 生产验证，金融级规范 |
| [jd-opensource/nutui](https://github.com/jd-opensource/nutui) | 6.5k | Vue3 | MIT | 京东 NutUI：京东 App 风格，电商组件（商品卡片 / 倒计时 / 大转盘）丰富 |
| [weilanwl/coloruicss](https://github.com/weilanwl/coloruicss) | 12.4k | 微信小程序 CSS | MIT | 高颜值小程序 CSS 库（2024 后停更，样式仍可参考） |
| [umicro/uView](https://github.com/umicro/uView) | 4.2k | uni-app（vue2） | MIT | uni-app 老牌组件库（2.x 停滞，vue3 项目请用 wot-design-uni） |

## 三、桌面 / 中后台组件库（管理端配套）

| 项目 | Stars | 框架 | 许可证 | 点评 |
|---|---|---|---|---|
| [element-plus/element-plus](https://github.com/element-plus/element-plus) | 27.8k | Vue3 | MIT | Element UI 的 Vue3 续作，国内中后台事实标准（饿了么起点、社区接力） |
| [arco-design/arco-design](https://github.com/arco-design/arco-design) | 5.7k | React（另有 Vue 版） | MIT | 字节跳动 ArcoDesign：抖音系产品生产验证 |
| [Tencent/tdesign](https://github.com/Tencent/tdesign) | 4.1k | 多框架同源 | MIT | 腾讯企业级设计体系：Vue / React / 小程序 / Flutter 全端一致 |

## 大厂 UI 体系速查（谁家在用什么）

| 大厂 | 开源体系 | 代表组件库 |
|---|---|---|
| 微信 / 腾讯 | WEUI / TDesign | weui、tdesign-* 系列（含 Flutter 版 1.2k⭐） |
| 有赞（微商城） | Vant | vant、vant-weapp |
| 京东 | NutUI / Taro | nutui、taro |
| 字节跳动 | Arco / Semi | arco-design |
| 蚂蚁集团 | Ant Design | ant-design、ant-design-mobile |
| 饿了么（起点） | Element | element-plus |

## 怎么选

- **做瑞幸式点单小程序**：vant-weapp（电商组件最全）或 tdesign-miniprogram（企业规范）
- **uni-app 多端项目**：wot-design-uni（vue3）；老 vue2 项目用 uView
- **H5 点单 / 商城**：vant（Vue）或 ant-design-mobile（React）
- **管理后台**：element-plus（Vue3）/ arco-design（React）
- 想全端视觉统一（小程序 + App + 后台）→ 腾讯 TDesign 是唯一"一个设计体系通吃"的选项

> 本分类许可证均为 MIT 系，商用干净；注意各库的浏览器 / 小程序基础库版本要求即可。
