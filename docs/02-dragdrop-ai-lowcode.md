# 02 · 拖拽式 AI 辅助开发

> 覆盖场景：可视化拖拽搭建 AI 应用 / 工作流、低代码应用构建器（内部工具 / CRUD / 管理面板）、可视化表单与页面设计器、AI 快速原型界面、AI 编程代理。
>
> 数据统计于 **2026-10-12**。

## 一、AI 应用 / 工作流平台（拖拽编排大模型、知识库、工具节点）

| 项目 | Stars | 技术栈 | 许可证 | 点评 |
|---|---|---|---|---|
| [langgenius/dify](https://github.com/langgenius/dify) | 158k | Python (Flask) + Next.js | ⚠️ 修改版 Apache-2.0 | 事实标准。可视化编排 LLM 应用 / Agent / RAG 工作流，自托管友好；**附加条款限制多租户 SaaS 与品牌**，商用读 LICENSE |
| [langflow-ai/langflow](https://github.com/langflow-ai/langflow) | 155k | Python + React | MIT | 拖拽节点拼 AI 流程，DataStax（IBM 系）维护，MIT 许可商用干净 |
| [n8n-io/n8n](https://github.com/n8n-io/n8n) | 207k | TypeScript (Vue) | ⚠️ Fair-code（Sustainable Use） | 工作流自动化王者，400+ 集成节点；**非 OSI 开源**：可自托管可内部用，禁止转售 / 包装成竞品 SaaS |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 92k | Python | Apache-2.0 | 深度文档理解的 RAG 引擎，引用溯源；InfiniFlow 出品 |
| [labring/FastGPT](https://github.com/labring/FastGPT) | 29.8k | TypeScript (Next.js + NestJS) | ⚠️ 修改版 Apache-2.0 | 国产知识库问答平台，Flow 可视化编排；附加条款同 Dify 风格 |
| [coze-dev/coze-studio](https://github.com/coze-dev/coze-studio) | 21.7k | Go + React | Apache-2.0 | 字节扣子开源版：可视化 Agent / 插件 / 工作流编排，背靠 Coze 产品线市场验证 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 55.5k | TypeScript | Apache-2.0 | 拖拽式 LLM 应用构建器；**注意：仓库已归档（2026-08）**，功能并入主产品线，历史代码仍可学习 |
| [activepieces/activepieces](https://github.com/activepieces/activepieces) | 25k | TypeScript | MIT（引擎）| 轻量自动化工作流，MIT 部分商用友好，Zapier / Make 开源替代 |
| [node-red/node-red](https://github.com/node-red/node-red) | 23.7k | Node.js | Apache-2.0 | 老牌拖拽式流程编排（IBM 出品，物联网时代即市场验证），现也用于 AI 管道 |

## 二、低代码应用构建器（拖拽搭内部工具 / CRUD / 管理面板）

| 项目 | Stars | 技术栈 | 许可证 | 点评 |
|---|---|---|---|---|
| [appsmithorg/appsmith](https://github.com/appsmithorg/appsmith) | 41k | Java + React | Apache-2.0 | 开源 Retool：拖拽组件 + SQL/Mongo/API 数据源生成后台应用，企业内部工具首选 |
| [ToolJet/ToolJet](https://github.com/ToolJet/ToolJet) | 41.1k | JavaScript + React | ⚠️ AGPL-3.0 | 同赛道竞品，界面现代；AGPL 需注意 SaaS 传染 |
| [Budibase/budibase](https://github.com/Budibase/budibase) | 28.3k | Svelte + Node | GPL-3.0（部分）| 自动从数据库生成 CRUD 应用，含表单 / 权限 |
| [illacloud/illa-builder](https://github.com/illacloud/illa-builder) | 12.3k | React + Go | Apache-2.0 | 国产开源 Retool，AI 加持的内部工具搭建 |
| [windmill-labs/windmill](https://github.com/windmill-labs/windmill) | 18.2k | Rust + Svelte | AGPL-3.0 | 脚本转工作流 / UI 的开发者自动化平台，性能强 |
| [refinedev/refine](https://github.com/refinedev/refine) | 35.8k | React | MIT | 偏代码生成而非拖拽：React 元框架，CRUD 后台开发效率极高，可与拖拽库组合 |

## 三、Airtable 类多维表格（半代码数据库应用）

| 项目 | Stars | 技术栈 | 许可证 | 点评 |
|---|---|---|---|---|
| [nocodb/nocodb](https://github.com/nocodb/nocodb) | 65.2k | Node + Vue | ⚠️ AGPL-3.0 | 把 MySQL/Postgres 变成 Airtable，应用场景极广 |
| [teableio/teable](https://github.com/teableio/teable) | 21.9k | TypeScript | ⚠️ AGPL-3.0 | 新一代多维表格，性能与视图更现代 |
| [baserow/baserow](https://github.com/baserow/baserow) | 6.1k | Python + Vue | MIT（核心） | MIT 核心的多维表格，商用条款相对宽松 |

## 四、国内低代码引擎 / 表单与页面设计器

| 项目 | Stars | 技术栈 | 许可证 | 点评 |
|---|---|---|---|---|
| [baidu/amis](https://github.com/baidu/amis) | 18.9k | React | Apache-2.0 | 百度低代码前端框架：**JSON 配置生成页面**，配套 amis-editor 可视化编辑器，政企市场大量落地 |
| [alibaba/formily](https://github.com/alibaba/formily) | 12.6k | React/Vue 双生态 | MIT | 阿里表单解决方案，复杂表单的事实标准（电商中后台锤炼） |
| [xaboy/form-create](https://github.com/xaboy/form-create) | 7.1k | Vue | MIT | Vue 生态 JSON 生成表单 + 拖拽设计器，国内中小项目常用 |
| [GavinZhuLei/vue-form-making](https://github.com/GavinZhuLei/vue-form-making) | 5.6k | Vue | MIT | 可视化表单设计器，老牌（2023 后更新放缓） |
| [opentiny/tiny-engine](https://github.com/opentiny/tiny-engine) | 2.8k | Vue | MIT | 华为 OpenTiny 低代码引擎：拖拽搭建页面 / 区块 / 物料，可嵌入自有平台 |

## 五、AI 快速原型界面

| 项目 | Stars | 技术栈 | 许可证 | 点评 |
|---|---|---|---|---|
| [streamlit/streamlit](https://github.com/streamlit/streamlit) | 46k | Python | Apache-2.0 | 数据 / AI 应用原型王者，几行 Python 出可交互页面 |
| [gradio-app/gradio](https://github.com/gradio-app/gradio) | 43.7k | Python | Apache-2.0 | Hugging Face 系 ML 演示界面标准，几乎每个开源模型 Demo 都用它 |

## 六、AI 编程代理（自然语言直接生成代码 / 应用）

| 项目 | Stars | 技术证可 | 许可证 | 点评 |
|---|---|---|---|---|
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 90.6k | Python | MIT | 开源 AI 软件工程师（原 All-Hands-AI），自主改代码 / 跑命令 / 浏览网页，MIT 商用干净 |
| [stackblitz-labs/bolt.diy](https://github.com/stackblitz-labs/bolt.diy) | 19.9k | TypeScript | MIT | bolt.new 开源版：自然语言生成全栈 Web 应用，社区驱动 |
| [flipped-aurora/gin-vue-admin](https://github.com/flipped-aurora/gin-vue-admin) | 25.1k | Go + Vue3 | Apache-2.0 | 内置 AI 辅助（MCP 服务 / Skills 管理）的后台开发平台，国内 Go 生态脚手架标杆 |

## 怎么选

- **搭 AI 应用 / 知识库问答**：Dify（生态最大）或 Coze Studio（字节出品 Apache-2.0）；介意许可条款选 Langflow（MIT）
- **搭内部管理工具**：Appsmith（Apache-2.0，最稳）；
- **搭自动化流**：n8n 功能最强但注意 Fair-code；Activepieces（MIT）做干净替代
- **表单 / 页面可视化设计器嵌进自己的产品**：amis（JSON 驱动）+ formily（复杂表单）
- **AI Demo 原型**：Streamlit / Gradio 二选一
- **自然语言生成应用**：bolt.diy（Web 全栈）、OpenHands（通用工程）

> 商用前必读：[开源许可证商用速查](07-license-guide.md)。本分类是"特殊许可"重灾区：Dify / FastGPT 的修改版 Apache、n8n 的 Fair-code、ToolJet / NocoDB / Teable 的 AGPL，都有明确商用约束。
