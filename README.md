# 🚀 Awesome App Frameworks · 经过市场验证的开源 App / 小程序 / AI 框架精选

> 像瑞幸点单、交我办校园服务这样的产品背后，都有一套"被市场反复验证过"的技术底座。
>
> 本仓库系统性收集并分类整理这些**成熟开源项目**：完整业务系统、拖拽式 AI 辅助开发平台、校园应用框架、跨端框架与 UI 组件库，帮助你在选型时"抄对作业"。

## 🎯 收录原则（市场验证优先）

- ✅ **大厂出品或有大量真实商业案例**（如腾讯 TDesign、京东 Taro、有赞 Vant）
- ✅ **社区规模与活跃度**（Star 数、Issue 响应速度、发版频率）
- ✅ **文档与生态完备**（教程、二开案例、插件生态）
- ✅ **维护状态健康**（非归档、非长期停更）
- ⚠️ **标注许可证与商用注意事项**：AGPL / 修改版 Apache / Fair-code 等特殊许可会明确提示

## 📚 目录

| # | 分类 | 覆盖内容 |
|---|---|---|
| 01 | [点单 / 外卖 / 商城](docs/01-ordering-commerce.md) | 瑞幸式点单 App、外卖平台（用户端/商家端/骑手端）、完整开源商城、商城低代码可视化搭建 |
| 02 | [拖拽式 AI 辅助开发](docs/02-dragdrop-ai-lowcode.md) | AI 工作流平台（Dify / Coze 类）、低代码应用构建器、可视化表单/页面设计器、AI 编程助手 |
| 03 | [校园应用](docs/03-campus.md) | 交我办式办事大厅底座、校园二手交易、表白墙/社区、跑腿代取、在线考试 |
| 04 | [跨端开发框架](docs/04-cross-platform.md) | uni-app / Taro / Flutter / React Native / Expo 等多端框架 |
| 05 | [小程序 & 移动端 UI 组件库](docs/05-ui-libraries.md) | 大厂出品、市场验证的 UI 库（Vant / TDesign / NutUI / WeUI…） |
| 06 | [后台管理与脚手架](docs/06-admin-scaffold.md) | 若依 / 芋道 / JeecgBoot / Ant Design Pro / vue-vben-admin |
| 附 | [开源许可证商用速查](docs/07-license-guide.md) | MIT / Apache-2.0 / AGPL / 修改版许可 / Fair-code 对商用的影响 |

## 🧭 如何选型（决策路径）

1. **先想清楚你要做什么端**
   - 微信小程序 + H5 + App 多端覆盖 → 跨端框架（uni-app / Taro，见分类 04）
   - 追求原生体验与复杂动效 → Flutter / React Native
2. **再看业务完整度**
   - 想要"开箱即用的完整点单/商城系统" → 分类 01 的整套方案（litemall、mall4j、CRMEB 等）
   - 只想要"点单界面 + 自己写后端" → 分类 05 的 UI 组件库 + 分类 01 的参考项目
   - 想快速搭建内部工具 / AI 应用 / 自动化流程 → 分类 02 的低代码平台
   - 做校园项目（二手、表白墙、办事大厅）→ 分类 03
3. **最后查许可证**：任何商用动作前，先读[许可证速查](docs/07-license-guide.md)，再看目标仓库的 LICENSE 原文

## 📅 数据说明

- 所有 Star 数与维护状态统计于 **2026-10-12**，会随迭代更新
- 本仓库只做索引与点评，不对上游项目的可用性、安全性作担保
- 欢迎通过 Issue / PR 推荐新项目或纠错，见[贡献指南](CONTRIBUTING.md)

## 📄 License

本仓库内容以 [MIT](LICENSE) 发布；各被收录项目以其自身许可证为准。
