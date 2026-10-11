# 07 · 配套能力（微信生态 / 支付 / IM / 消息推送）

> 覆盖场景：做点单、商城、校园 App 时绕不开的横向能力——微信生态对接、支付聚合、即时通讯、消息通知。
>
> 数据统计于 **2026-10-12**。

## 一、微信生态开发

| 项目 | Stars | 技术栈 | 许可证 | 点评 |
|---|---|---|---|---|
| [binarywang/WxJava](https://github.com/binarywang/WxJava) | 33.2k | Java | Apache-2.0 | 微信开发 Java SDK 事实标准：小程序 / 公众号 / 微信支付 / 企业微信 / 开放平台 / 视频号全覆盖，做任何含微信端的系统几乎必装 |

## 二、支付

| 项目 | Stars | 技术栈 | 许可证 | 点评 |
|---|---|---|---|---|
| [jeequan/jeepay](https://github.com/jeequan/jeepay) | 6.4k | Java + Vue | LGPL-3.0 | 开源聚合支付系统：微信 / 支付宝 / 云闪付官方接口，多服务商 + 普通商户模式，聚合码支付；LGPL 以库形式引用即可，改源码需回馈 |

## 三、即时通讯（IM）

| 项目 | Stars | 技术栈 | 许可证 | 点评 |
|---|---|---|---|---|
| [openimsdk/open-im-server](https://github.com/openimsdk/open-im-server) | 16.7k | Go | Apache-2.0 | 开源 IM 服务端：私有化部署、消息可靠投递，适合给商城 / 校园 App 内嵌聊天与客服 |
| [turms-im/turms](https://github.com/turms-im/turms) | 1.9k | Java + Rust | Apache-2.0 | 面向 10 万~千万级并发的开源 IM 引擎，架构先进，适合深挖性能的场景 |

## 四、消息推送 / 通知基础设施

| 项目 | Stars | 技术栈 | 许可证 | 点评 |
|---|---|---|---|---|
| [novuhq/novu](https://github.com/novuhq/novu) | 40.1k | TypeScript | ⚠️ 见仓库（自定义条款） | 开源通知基础设施：邮件 / 短信 / App Push / 站内信统一编排，In-App 组件可直接嵌入；许可证为自定义文件，商用前读原文 |

## 怎么选

- **含微信端的任何项目**：后端 Java 直接上 WxJava，少造轮子
- **要自己掌握支付流**：jeepay 起步（注意 LGPL 边界）；简单场景直接用 WxJava 的支付模块
- **App 内聊天 / 客服**：OpenIM 私有化最省心；超大规模再研究 Turms
- **多渠道通知**：novu（注意许可条款）；国内短信 / 微信模板消息用 WxJava + 云厂商 SDK 组合

> 商用前必读：[开源许可证商用速查](08-license-guide.md)。
