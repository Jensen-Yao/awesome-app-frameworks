# 开源许可证商用速查

> ⚠️ 本文是快速参考，不构成法律意见。商用前请阅读目标仓库 LICENSE 原文，必要时咨询法务。

| 许可证 | 能否闭源商用 | 修改后需开源吗 | 代表项目 | 商用要点 |
|---|---|---|---|---|
| MIT | ✅ | ❌ | litemall、newbee-mall、Taro、Vant、若依 | 保留版权与许可声明即可 |
| Apache-2.0 | ✅ | ❌ | mall、Appsmith、RAGFlow、uni-app | 保留 NOTICE 与声明；含专利授权条款 |
| BSD-3 | ✅ | ❌ | Flutter | 保留声明，不得用原作者名义背书 |
| GPL-2.0 / GPL-3.0 | ⚠️ 衍生作品须开源 | ✅ | Discourse、NodeBB | 基于其修改的整套服务须以 GPL 开源 |
| AGPL-3.0 | ⚠️ 网络服务也触发 | ✅ | ShopXO、ToolJet、NocoDB、Teable | **SaaS 部署也必须开源**，商用务必先读原文 |
| 修改版 Apache（附加条款） | ✅（有条件） | ❌ | Dify、FastGPT | 常见限制：禁止多租户 SaaS、保留 Logo / 版权页 |
| Fair-code（Sustainable Use 等） | ⚠️ 仅内部使用 | 视条款 | n8n | **不是 OSI 认证开源**，禁止转售或包装成竞品 SaaS |
| 开源但商用授权型 | ❌ 未经授权不可 | 视条款 | 学之思（xzs）等 | 免费仅限学习/个人，商用需购买授权 |

## 三条实操建议

1. **自用 / 学习**：几乎所有许可都可以，AGPL 也无所谓。
2. **对外提供闭源产品**：优先 MIT / Apache-2.0 / BSD 项目；GPL 与 AGPL 系要极其谨慎。
3. **做 SaaS / 多租户平台**：特别小心 AGPL（触发开源义务）与修改版 Apache 中的"多租户限制"条款（如 Dify、FastGPT）。

> 注：uni-app 框架本体开源（Apache-2.0），但配套的 HBuilderX IDE 为免费闭源软件；选用前请自行评估工具链绑定程度。
