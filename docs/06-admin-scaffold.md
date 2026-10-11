# 06 · 后台管理与脚手架

> 覆盖场景：给点单 / 商城 / 校园系统配套的管理后台，以及新项目起脚手架。
>
> 数据统计于 **2026-10-12**。

## 一、前端中后台脚手架

| 项目 | Stars | 技术栈 | 许可证 | 点评 |
|---|---|---|---|---|
| [PanJiaChen/vue-element-admin](https://github.com/PanJiaChen/vue-element-admin) | 90.1k | Vue2 + Element | MIT | 中后台脚手架传奇：无数国内后台的前身；vue2 已停更（2024），新项目用其精神续作 |
| [vbenjs/vue-vben-admin](https://github.com/vbenjs/vue-vben-admin) | 33.6k | Vue3 + Vite + Ant Design Vue | MIT | vue-element-admin 的现代接班人，多主题 / 多包管理，社区极活跃 |
| [ant-design/ant-design-pro](https://github.com/ant-design/ant-design-pro) | 38.8k | React + Ant Design | MIT | 蚂蚁中后台最佳实践，React 技术栈首选 |
| [pure-admin/vue-pure-admin](https://github.com/pure-admin/vue-pure-admin) | 20.7k | Vue3 + Element Plus | MIT | 高颜值 Vue3 后台，企业落地案例多 |

## 二、后端全栈脚手架（Java / Go）

| 项目 | Stars | 技术栈 | 许可证 | 点评 |
|---|---|---|---|---|
| [jeecgboot/JeecgBoot](https://github.com/jeecgboot/JeecgBoot) | 48.2k | Spring Boot + Vue3 + 低代码 | Apache-2.0 | 代码生成 + Online 表单 + 报表，"低代码后台"一体化 |
| [YunaiV/ruoyi-vue-pro](https://github.com/YunaiV/ruoyi-vue-pro) | 39.7k | Spring Boot + Vue | MIT | 芋道全家桶（详见分类 03），后台 + 商城 + 工作流 + 支付 |
| [flipped-aurora/gin-vue-admin](https://github.com/flipped-aurora/gin-vue-admin) | 25.1k | Gin + Vue3 | Apache-2.0 | Go 生态后台标杆，代码生成器 + AI 辅助（MCP / Skills） |
| [macrozheng/mall-admin-web](https://github.com/macrozheng/mall-admin-web) | 12.6k | Vue + Element | Apache-2.0 | mall 电商后台前端，可直接配合自研后端 |

## 三、认证 / 权限中间件（校园统一身份认证也靠它们）

| 项目 | Stars | 技术栈 | 许可证 | 点评 |
|---|---|---|---|---|
| [dromara/Sa-Token](https://github.com/dromara/Sa-Token) | 19.1k | Java | Apache-2.0 | 一站式权限认证：登录 / 权限 / SSO 单点登录 / 微服务网关鉴权——**"交我办"式统一身份认证的开源答案** |

## 怎么选

- **Vue3 团队**：vue-vben-admin（功能全）或 vue-pure-admin（颜值）
- **React 团队**：ant-design-pro
- **要"后台直接低代码配出来"**：JeecgBoot 或芋道
- **Go 技术栈**：gin-vue-admin
- **任何系统要做统一登录 / SSO**：Sa-Token（Java）；跨语言用 OAuth2 / OIDC 标准方案（如 Keycloak）
