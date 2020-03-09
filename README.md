# TimeHelper

**你的时间助手** 微信小程序

著名管理学家史蒂芬·柯维提出了一个时间管理的理论，他把工作按照重要和紧急两个不同程度进行了划分，基本上可以分为四个象限：既紧急又重要，重要但不紧急，紧急但不重要，既不紧急也不重要。这就是关于时间管理的[四象限法则](#四象限法则使用帮助)，此微信小程序正式基于“四象限法则”理论开发。

# 项目演示

![小程序二维码](./doc/img/time-helper.png)

请微信搜索**你的时间助手**

# 项目介绍

- **首页**: 以“四象限法则”为基础，将首页分为四个部分，分别为第一象限既紧急又重要，第二象限重要但不紧急，第三象限紧急但不重要，第四象限既不紧急也不重要。可以把任务按照以上理论进行划分执行

- **计划**: 以“短期目标”和“长期目标”为基础，指定短期（如6-12个月）和长期（3-5年）需要完成的任务

- **用户**: 统计已管理时间的天数，“四象限法则”使用帮助

# 项目技术

- **微信小程序**: 小程序提供了一个简单、高效的应用开发框架和丰富的组件及API，帮助开发者在微信中开发具有原生 APP 体验的服务。

- **小程序云开发**: 开发者可以使用云开发开发微信小程序、小游戏，无需搭建服务器，即可使用云端能力。

## 云函数

```
// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({env: cloud.DYNAMIC_CURRENT_ENV})

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}
```

使用`login`云函数进行用户登录, 便于后面进行数据持久化存储

> Tips: 目前小程序登录需要使用`Button`组件

```
	<button open-type="getUserInfo" bindgetuserinfo="onGetUserInfo" class="userinfo-avatar" style="background-image: url({{avatarUrl}})" size="default">
	</button>
```

将`Button`的open-type设置为"getUserInfo", 并且bindgetuserinfo设置为自己的处理函数

```
onGetUserInfo(e) { 
  
  avatarUrl: e.detail.userInfo.avatarUrl, // 用户头像
  nickName: e.detail.userInfo.nickName, // 用户昵称
  userInfo: e.detail.userInfo //用户其他信息
}
```

## 数据库

```
// 1. 获取数据库引用
const db = wx.cloud.database()
// 2. 构造查询语句
// collection 方法获取一个集合的引用
// where 方法传入一个对象，数据库返回集合中字段等于指定值的 JSON 文档。API 也支持高级的查询条件（比如大于、小于、in 等），具体见文档查看支持列表
// get 方法会触发网络请求，往数据库取数据
db.collection('books').where({
  publishInfo: {
    country: 'United States'
  }
}).get({
  success: function(res) {
  // 输出 [{ "title": "The Catcher in the Rye", ... }]
  console.log(res)
 }
})
```

## 云调用

云调用是云开发提供的基于云函数使用小程序开放接口的能力，支持在云函数调用服务端开放接口

```
    // 调用云函数
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        app.globalData.openid = res.result.openid
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
      }
    })
```

# 公众号

![小程序我的](./doc/img/mnxz.png)

更多精彩内容请微信搜索**码农小镇**公众号

# 联系作者

Email: 1670906161@qq.com

WeChat: YLW1670906161

# 参考文档

- [小程序文档](https://developers.weixin.qq.com/miniprogram/dev/framework/)

- [云开发文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)

# 四象限法则使用帮助

- **第一象限**：包含的是一些紧急而重要的事情，这一类的事情往往比较紧急，需要尽快完成。此类的事情非常重要，价值很大，或者说意义重大，因此不能回避，也不能拖延，必须在第一时间内优先解决掉。通常情况下，一些重大项目的谈判，一些重要客户的接见或者内部召开的重要会议，都属于第一象限的工作。

- **第二象限**：第二象限不同于第一象限，这一象限的事情非常重要，通常对整个事情的发展或者对工作者的个人状态产生重大影响，但是不具有时间上的紧迫性。这就意味着这些工作可以立即去完成，也可以适当推迟到后面去完成。在面对这类工作时，我们通常会制订各种计划，这些计划中的目标可以在未来的一段时间内去达成。

- **第三象限**：第三象限包含的事情是那些紧急但不重要的事情，这些事情很紧急，通常都需要在第一时间去解决，否则，就会失去这样的机会。但其实这类事情并不重要，根本没有太多值得去做的价值和意义。比如，某个小客户公开寻找合作伙伴，并且规定双方谈判的时间只有一天，对任何一家公司来说，时间都很紧张，不过由于这家公司并没有太多合作的价值，因此我们基本上可以保持一颗平常心。

- **第四象限**：第四象限的事情大多是些琐碎的杂事，没有时间的紧迫性，也根本不重要，从某种程度上来说，这一象限的事情通常只会浪费我们的时间，尤其是当我们忙于做一些更有价值的事情时，当我们缺乏足够的时间时，这种事情与时间的结合会造成严重的浪费。比如，很多人沉迷于网络游戏，这就属于第四象限的事情。

对于我们来说，第一象限内的事情应该最先解决掉，不过第一象限的事情往往具有很大的挑战性，而且不一定能够顺利完成，如果你总是有紧急又重要的事情要做，说明你在时间管理上存在问题，毕竟我们可能浪费了很多时间，这才导致自己的工作变得更加紧张。无论如何，我们还是应该设法减少这一类事情，最好不要连续去面对这种事情，否则，自己的压力会变得更大，工作效率反而也会受到影响。

**所以，我们应该尽可能地把时间花在重要但不紧急（第二象限）的事情上，想办法投资那些第二象限的事情是最重要的。**

至于第三象限的事情，也就是那些紧急但不重要的事情，我们没有必要自己去做，或者说没有必要浪费自己宝贵的时间去做，如果可以的话尽量让别人去做，同时也确保了自己原有的工作不会受到干扰。

而至于第四象限的事情，由于根本没有任何价值，因此尽量不要去做，这样不仅浪费时间，也容易养成自我放纵以及浪费时间的习惯。

