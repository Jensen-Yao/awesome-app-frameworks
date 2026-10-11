# 03 · 校园应用

> 覆盖场景："交我办"式校园一站式办事大厅、校园二手交易平台、表白墙 / 树洞 / 论坛社区、跑腿代取、在线考试、校园综合服务 App。
>
> 数据统计于 **2026-10-12**。

## 先看清现实：校园赛道的开源格局

与电商 / 低代码不同，**校园细分领域没有"瑞幸级"大厂开源项目**。真正经过市场验证的开源底座有两条路：

1. **通用底座路线**（推荐做"交我办"式办事大厅 / 校务系统）：用成熟的工作流 + 低代码平台做底座（若依 / 芋道 / JeecgBoot / o2oa），校园业务自己长。
2. **校园原生项目路线**：真实高校团队开源的校园 App / 小程序（如复旦 DanXi、We川大），产品思路直接可抄，但工程化程度参差。

> 上海交大"交我办"本身不开源；与其找"同款"，不如拆解它 = 统一身份认证 + 服务大厅（流程引擎）+ 校园支付 + 消息中心，前两者都有开源实现。

## 一、校园办事大厅底座（工作流 + 低代码）

| 项目 | Stars | 技术栈 | 许可证 | 点评 |
|---|---|---|---|---|
| [YunaiV/ruoyi-vue-pro](https://github.com/YunaiV/ruoyi-vue-pro) | 39.7k | Spring Boot + Vue | MIT | 芋道：RBAC / 工作流（Flowable）/ 支付 / 商城 / IM 全家桶，国内校务 / 政企二开的事实底座之一，文档极全 |
| [jeecgboot/JeecgBoot](https://github.com/jeecgboot/JeecgBoot) | 48.2k | Spring Boot + Vue3 | Apache-2.0 | 低代码平台 + Online 表单 + 报表 + 工作流，"表单配出来"正是办事大厅要的能力 |
| [yangzongzhuan/RuoYi-Vue](https://github.com/yangzongzhuan/RuoYi-Vue) | 3.2k | Spring Boot + Vue | MIT | 若依主仓库已迁移至 yangzongzhuan；国内无数校务系统二开自若依，生态庞大 |
| [dromara/RuoYi-Vue-Plus](https://github.com/dromara/RuoYi-Vue-Plus) | 2.8k | Spring Boot 3 + Sa-Token | MIT | 若依社区重制版，技术栈现代化（dromara 社区出品） |
| [o2oa/o2OA](https://github.com/o2oa/o2OA) | 4.7k | Java | ⚠️ AGPL-3.0 | 开源 OA 平台：流程设计器 + 信息管理 + 数据库表设计器，天生就是"办事大厅"形态 |

## 二、校园二手交易

| 项目 | Stars | 技术栈 | 许可证 | 点评 |
|---|---|---|---|---|
| [xuhuai66/used-book-pro](https://github.com/xuhuai66/used-book-pro) | 1.8k | 微信小程序云开发 | ⚠️ 无 LICENSE | 校园二手书商城，支持在线支付与提现，**源码全开源**；无 LICENSE 文件，商用需联系作者 |
| [wsk1103/Used-Trading-Platform](https://github.com/wsk1103/Used-Trading-Platform) | 1.8k | Java SSM + Vue | MIT | 校园二手交易平台（含后端 + 前端），MIT 商用友好；另有 [Spring Boot 版](https://github.com/wsk1103/Used-Trading-Platform2)（523⭐） |
| [Xin-Felix/Mango](https://github.com/Xin-Felix/Mango) | 847 | 微信小程序云开发 | GPL-2.0 | 校园小程序全家桶：表白墙 + 失物招领 + 二手交易 + 论坛 + 兼职 + 拼车 + 活动 |
| [zhuyuzhu/Secondhand-goods-on-campus](https://github.com/zhuyuzhu/Secondhand-goods-on-campus) | 544 | 微信小程序 | ⚠️ 无 LICENSE | 校园二手交易小程序（书 + 物品） |

## 三、表白墙 / 树洞 / 校园社区

| 项目 | Stars | 技术栈 | 许可证 | 点评 |
|---|---|---|---|---|
| [oubingbing/school_wechat](https://github.com/oubingbing/school_wechat) | 1.1k | 微信小程序 + 后台 | MIT | "校园小情书"前端：表白墙 / 树洞 / 校园论坛，可独立部署；配套[后台源码](https://github.com/oubingbing/wechatAlliance)（790⭐，MIT） |
| [stick-i/scblogs](https://github.com/stick-i/scblogs) | 548 | SpringCloud 微服务 + Vue | 见仓库 | 校园博客社区，微服务架构，毕设 / 学习参考佳 |
| [discourse/discourse](https://github.com/discourse/discourse) | 48k | Ruby | GPL-2.0 | 全球最流行的开源论坛，校园社区"重"方案 |
| [flarum/flarum](https://github.com/flarum/flarum) | 16.4k | PHP | MIT | 轻快现代的论坛框架，MIT 干净 |
| [NodeBB/NodeBB](https://github.com/NodeBB/NodeBB) | 15.2k | Node.js | GPL-3.0 | 实时论坛，Socket 实时交互体验好 |
| [apache/answer](https://github.com/apache/answer) | 15.7k | Go | Apache-2.0 | Apache 基金会问答社区（SegmentFault 团队捐献），问答制校园社区首选 |

## 四、校园综合服务 App / 小程序（真实校园验证）

| 项目 | Stars | 技术栈 | 许可证 | 点评 |
|---|---|---|---|---|
| [DanXi-Dev/DanXi](https://github.com/DanXi-Dev/DanXi) | 428 | Flutter | GPL-3.0 | **复旦学生团队开源的一站式校园服务 App**（饭卡 / 空教室 / 校车 / 充电桩 / 洗浴 / 报修等），全平台（Win/Mac/Linux/Android/iOS），离"交我办"最近的开源同类，产品需求库极佳 |
| [mohuishou/scuplus-wechat](https://github.com/mohuishou/scuplus-wechat) | 691 | 微信小程序（wepy）+ 前后端开源 | ⚠️ 无 LICENSE | We川大：40+ 页面综合校园小程序（成绩 / 课表 / 失物招领 / 图书馆 / 资讯） |
| [214140846/TOGO_School_Miniprograme](https://github.com/214140846/TOGO_School_Miniprograme) | 424 | 微信小程序云开发 | ⚠️ 无 LICENSE | 校园生态小程序：教务查询 + 二手 + 论坛 + 跑腿代取 + 兼职，云开发免运维 |

## 五、在线考试 / 教务

| 项目 | Stars | 技术栈 | 许可证 | 点评 |
|---|---|---|---|---|
| [mindskip/xzs](https://github.com/mindskip/xzs) | 3.9k | Java + Vue | ⚠️ AGPL-3.0 | 学之思在线考试系统：学/管/小程序三端，部署简单界面友好；**注意 AGPL + 商用需授权**（已迁至 mindskip 组织，另见 [xzs-mysql](https://github.com/mindskip/xzs-mysql) 3.6k⭐） |
| [YXJ2018/SpringBoot-Vue-OnlineExam](https://github.com/YXJ2018/SpringBoot-Vue-OnlineExam) | 2.3k | Spring Boot + Vue | ⚠️ 无 LICENSE | 在线考试系统前后端分离实现 |
| [javahuang/SurveyKing](https://github.com/javahuang/SurveyKing) | 4k | Java | MIT | 问卷 / 考试 / 投票一体化（问卷星式），MIT 商用友好 |

## 六、跑腿代取（多依附于校园综合项目）

- [Mango](https://github.com/Xin-Felix/Mango)（847⭐，见上）含跑腿发布模块
- [TOGO_School_Miniprograme](https://github.com/214140846/TOGO_School_Miniprograme)（424⭐，见上）含跑腿代取
- 独立高星"校园跑腿"开源项目目前缺失——需求常由表白墙 / 二手社区附带实现，或直接用分类 01 的外卖项目（siam-cloud 四端）改配送品类

## 怎么选

- **做"交我办"式办事大厅**：芋道 ruoyi-vue-pro（功能全家桶 + MIT）或 JeecgBoot（低代码表单）；重流程审批选 o2OA
- **做校园二手**：Used-Trading-Platform（MIT、前后端全）起步；纯小程序端参考 used-book-pro 与 Mango
- **做表白墙 / 社区**：校园小情书（小程序形态）；正式社区用 Flarum（MIT）或 Apache Answer（问答制）
- **做校园 App**：抄 DanXi 的产品需求（Flutter + 全平台），用分类 04 / 05 的框架与组件库实现
- **做考试系统**：学之思（注意授权）；或 SurveyKing（MIT）

> 商用前必读：[开源许可证商用速查](08-license-guide.md)。本分类大量校园项目**没有 LICENSE 文件**——默认版权保留，仅适合学习参考，直接商用有法律风险。
