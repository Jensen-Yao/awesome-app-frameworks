# 01 · 点单 / 外卖 / 商城

> 覆盖场景：瑞幸式点单小程序、餐饮扫码点单、外卖平台（用户端 / 商家端 / 骑手端）、完整电商商城、商城可视化搭建。
>
> 数据统计于 **2026-10-12**。

## 先拆解：瑞幸式点单 App 由什么构成

瑞幸、喜茶、Manner 这类点单产品的 UI 范式高度一致。自研时可以按下面的拼图去找开源零件，而不用从零画：

| 产品模块 | 典型交互 | 可复用的开源实现 |
|---|---|---|
| 首页 | Banner 轮播 + 优惠券 + 推荐商品流 | litemall / CRMEB 首页模块；mall-cook 可视化搭建 |
| 点单页 | 左侧分类 + 右侧商品列表 + 规格/加料选择弹层 | yshop-drink、bee（餐饮点单）、wechat-app-mall |
| 下单支付 | 购物车 + 微信支付 + 优惠券核销 | 各完整商城项目均内置 |
| 门店与配送 | 门店自取 / 外卖切换、门店选择、骑手状态 | flash-waimai、siam-cloud（暹罗外卖） |
| 会员与营销 | 积分、储值、拼团 / 秒杀 / 砍价 | CRMEB（营销玩法最全）、mall4j |
| 管理后台 | 商品 / 订单 / 会员 / 营销管理 | 各商城自带，或用分类 06 脚手架自建 |

> ⚠️ 瑞幸 App 本身并不开源。这里的思路是：**用多个经过市场验证的开源项目，拼出同款能力**。

## 一、完整开源商城（后端 + 管理端 + 小程序端全套）

| 项目 | Stars | 技术栈 | 端覆盖 | 许可证 | 点评 |
|---|---|---|---|---|---|
| [macrozheng/mall](https://github.com/macrozheng/mall) | 84.9k | Spring Boot + Vue + uni-app | H5 / 小程序 / App / 管理端 | Apache-2.0 | 国内最流行的开源电商，配套 [教程](https://github.com/macrozheng/mall-tutorial) 极其完善，首选学习与二开对象 |
| [macrozheng/mall-swarm](https://github.com/macrozheng/mall-swarm) | 13.2k | Spring Cloud Alibaba 微服务 | 同上 | Apache-2.0 | mall 的微服务版，想练分布式电商选它 |
| [linlinjava/litemall](https://github.com/linlinjava/litemall) | 20.4k | Spring Boot + Vue + 微信小程序 | 小程序 / H5 / 管理端 | MIT | "小而全"典范：四个模块边界清晰，代码量适中，毕业设计与小型商用友好 |
| [EastWorld/wechat-app-mall](https://github.com/EastWorld/wechat-app-mall) | 21.8k | 原生微信小程序 | 小程序 | Apache-2.0 | 纯小程序端实现，适合只想要"点单界面"参考前端 |
| [crmeb/CRMEB](https://github.com/crmeb/CRMEB) | 9.4k | PHP (ThinkPHP6) + Vue | 小程序 / H5 / 公众号 / PC / App | Apache-2.0 | 营销玩法最全（分销、拼团、砍价、秒杀、直播），有页面 DIY，商用案例极多 |
| [crmeb/crmeb_java](https://github.com/crmeb/crmeb_java) | 3.1k | Spring Boot + Vue | 同上 | Apache-2.0 | CRMEB 的 Java 版，技术栈更主流 |
| [gz-yami/mall4j](https://github.com/gz-yami/mall4j) | 5.3k | Spring Boot + Vue3 + uni-app | 小程序 / H5 / App / 管理端 | ⚠️ AGPL-3.0 | B2C 商城，界面现代；AGPL 对商用 SaaS 有传染性 |
| [gz-yami/mall4cloud](https://github.com/gz-yami/mall4cloud) | 6.2k | Spring Cloud 微服务 + Vue3 | 同上 | ⚠️ AGPL-3.0 | mall4j 的微服务版 |
| [lilishop/lilishop](https://github.com/lilishop/lilishop) | 4.3k | Spring Boot/Cloud + Vue + uni-app | B2B2C 多商户 | ⚠️ AGPL-3.0 | 多商户入驻模式（类似天猫），含商家端 |
| [newbee-ltd/newbee-mall](https://github.com/newbee-ltd/newbee-mall) | 11.6k | Spring Boot + Thymeleaf / Vue | H5 / 管理端 | ⚠️ GPL-3.0 | 教学向经典；**注意许可证已为 GPL-3.0**，闭源商用需谨慎 |
| [youlaitech/youlai-mall](https://github.com/youlaitech/youlai-mall) | 2.4k | Spring Boot 3 + Vue3 + uni-app | 小程序 / H5 / 管理端 | Apache-2.0 | 技术栈新，适合学习 Spring Boot 3 电商写法 |
| [gongfuxiang/shopxo](https://github.com/gongfuxiang/shopxo) | 3.3k | PHP (ThinkPHP8) | PC / H5 / 多家小程序 / App | MIT | 多端覆盖惊人（微信/支付宝/百度/抖音/QQ/快手小程序），可视化拖拽装修，MIT 商用友好 |
| [fecshop/yii2_fecshop](https://github.com/fecshop/yii2_fecshop) | 5.3k | PHP (Yii2) | 多语言多货币多入口 | BSD-3-Clause | 面向跨境 / 多语言电商的老牌方案 |

## 二、餐饮点单（瑞幸式扫码点单 / 咖啡茶饮）

| 项目 | Stars | 技术栈 | 许可证 | 点评 |
|---|---|---|---|---|
| [woniudiancang/bee](https://github.com/woniudiancang/bee) | 4.6k | 微信小程序（云开发） | 见仓库 | 餐饮点餐外卖小程序，开箱即用，奶茶店实战案例多 |
| [guchengwuyue/yshop-drink](https://github.com/guchengwuyue/yshop-drink) | 1.6k | Java17 + Spring Boot 3 + Vue + 小程序 | MIT | **最接近瑞幸模式**：扫码点单、在线点餐（外卖 + 自取）、多门店、SaaS 多租户 |
| [fushengqian/fuintCatering](https://github.com/fushengqian/fuintCatering) | 428 | Java + 小程序 | 见仓库 | 餐饮点餐营销系统：扫码点餐、收银、厨显 KDS、云打印小票、多租户 SaaS |
| [zwStar/vue-meituan](https://github.com/zwStar/vue-meituan) | 1.6k | Vue + Node + MongoDB | 无许可证 ⚠️ | 仿美团外卖点餐（含支付），学习参考 |

## 三、外卖平台（用户端 / 商家端 / 骑手端多端齐活）

| 项目 | Stars | 技术栈 | 许可证 | 点评 |
|---|---|---|---|---|
| [siam1026/siam-cloud](https://github.com/siam1026/siam-cloud) | 343 | Java + Spring Cloud | Apache-2.0 | 暹罗外卖：多商户入驻，用户端 + 商家端 + 配送端 + 总管理后台，对标美团外卖，四端齐全 |
| [microapp-store/flash-waimai](https://github.com/microapp-store/flash-waimai) | 486 | Java + Spring Boot + MongoDB | MIT | 仿饿了么：手机端 + 后台管理 + API 服务，结构清晰适合改造 |
| [csdeshang/DSPlatform-open](https://github.com/csdeshang/DSPlatform-open) | 1.1k | ThinkPHP8 + Vue3 + Element Plus + uni-app | Apache-2.0 | 多商业模式平台（O2O 外卖 / 电商 / 零售），uni-app 多端输出 |

## 四、商城低代码 / 可视化搭建

| 项目 | Stars | 技术栈 | 许可证 | 点评 |
|---|---|---|---|---|
| [wangyuan389/mall-cook](https://github.com/wangyuan389/mall-cook) | 5.6k | Vue3 + Vite | MIT | 商城低代码平台：可视化拖拽搭建 H5 / 小程序多端商城页面，电商装修页的标杆实现 |

## 五、小程序商城前端参考

| 项目 | Stars | 技术栈 | 许可证 | 点评 |
|---|---|---|---|---|
| [EastWorld/wechat-app-mall](https://github.com/EastWorld/wechat-app-mall) | 21.8k | 原生小程序 | Apache-2.0 | 见上表 |
| [tumobi/nideshop-mini-program](https://github.com/tumobi/nideshop-mini-program) | 8.4k | 原生小程序 + ThinkJS 后端 | ⚠️ 无 LICENSE | 老牌小程序商城实现，**未附许可证 = 默认版权保留**，只可学习参考不宜直接商用抄码 |

## 怎么选

- **快速开一家"店"（单商户）**：litemall（MIT，干净）或 CRMEB（营销玩法全）
- **做多商户平台 / B2B2C**：lilishop、mall4cloud（注意 AGPL）
- **做瑞幸式点单小程序**：yshop-drink（自取 + 外卖 + 多门店）+ 分类 05 的 UI 库换皮
- **做外卖平台四端**：siam-cloud 或 flash-waimai 起步，配送调度 / 地图轨迹需自研或接商业 SDK
- **只想抄点单 UI**：wechat-app-mall + bee，配 Vant Weapp / TDesign 组件库

> 商用前必读：[开源许可证商用速查](07-license-guide.md)。AGPL / GPL 系项目做闭源商用或 SaaS 前请务必确认义务。
