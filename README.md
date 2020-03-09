# TimeHelper

**你的时间助手** 微信小程序

著名管理学家史蒂芬·柯维提出了一个时间管理的理论，他把工作按照重要和紧急两个不同程度进行了划分，基本上可以分为四个象限：既紧急又重要，重要但不紧急，紧急但不重要，既不紧急也不重要。这就是关于时间管理的*四象限法则*，此微信小程序正式基于“四象限法则”理论开发。

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

