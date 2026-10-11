# 04 · 跨端开发框架

> 覆盖场景：一套代码发布微信小程序 / H5 / iOS / Android / 桌面端。
>
> 数据统计于 **2026-10-12**。

| 项目 | Stars | 技术形态 | 许可证 | 点评 |
|---|---|---|---|---|
| [flutter/flutter](https://github.com/flutter/flutter) | 179.8k | Dart，自绘引擎 | BSD-3-Clause | Google 出品，高性能统一 UI；复用 DanXi（分类 03）这类校园 App 实践 |
| [react/react-native](https://github.com/react/react-native) | 126.6k | JS/TS，原生组件桥接 | MIT | Meta 出品（已迁移至 react 组织）；Shopify / Discord 生产验证 |
| [expo/expo](https://github.com/expo/expo) | 52.6k | React Native 工具链 | MIT | RN 最佳开发体验：OTA 热更 / 云构建 / EAS，新项目事实上标配 |
| [ionic-team/ionic-framework](https://github.com/ionic-team/ionic-framework) | 52.7k | Web Components，配 Capacitor 打包 | MIT | Web 技术栈直接打包原生 App，企业混合应用常用 |
| [dcloudio/uni-app](https://github.com/dcloudio/uni-app) | 41.6k | Vue 语法，编译到全端 | Apache-2.0 | **国内小程序多端首选**：一套 Vue 代码 → 各家小程序 / H5 / App / 快应用；配套 HBuilderX 为免费闭源 IDE，工具链绑定需自行评估 |
| [NervJS/taro](https://github.com/NervJS/taro) | 37.7k | React/Vue 均支持，编译到全端 | MIT | 京东出品并生产自用（京东购物小程序），React 技术栈的多端首选；许可证为带附加条款的 MIT 变体（品牌相关），商用读原文 |
| [JetBrains/compose-multiplatform](https://github.com/JetBrains/compose-multiplatform) | 19.4k | Kotlin，声明式 UI | Apache-2.0 | Kotlin 技术栈跨 Android / iOS / 桌面 / Web，KMP 生态核心 |
| [apache/cordova](https://github.com/apache/cordova) | — | WebView 混合 | Apache-2.0 | 时代眼泪：新项目不建议，Ionic + Capacitor 是现代接替者 |

## 怎么选

- **业务重心在国内小程序生态**：uni-app（Vue）或 Taro（React）——两者均被大厂生产验证（DCloud 生态 / 京东）
- **App 体验优先，不碰小程序**：Flutter（UI 一致性）或 React Native + Expo（原生感 + 生态）
- **已有 Web 团队**：Ionic + Capacitor 迁移成本最低
- **Kotlin 团队**：Compose Multiplatform

> 框架本体许可证都很友好；真正要注意的是**配套工具链**（如 HBuilderX 闭源）与**小程序平台规则**。
