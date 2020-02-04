//app.js
App({
  onLaunch: function () {

    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        env: 'timehelper',
        traceUser: true,
      })
    }

    this.globalData = {}

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // this.setData({
              //   avatarUrl: res.userInfo.avatarUrl,
              //   nickName: res.userInfo.nickName,
              //   userInfo: res.userInfo
              // });
              this.globalData.nickName = res.userInfo.nickName
              this.globalData.avatarUrl = res.userInfo.avatarUrl
            }
          })
        }
      }
    })
  },

  onShow: function () {

    // 调用云函数
    if (this.globalData.openid === undefined) {
      wx.cloud.callFunction({
        name: 'login',
        data: {},
        success: res => {
          console.log('[云函数] [login] user openid: ', res.result.openid)
          this.globalData.openid = res.result.openid
        },
        fail: err => {
          console.error('[云函数] [login] 调用失败', err)
        }
      })
    }

    if (this.globalData.nickName === undefined) {
      wx.showToast({
        title: '请登录...',
        icon: 'none',
        duration: 1500
      })
    }
    if (typeof wx.getStorageSync('Date') === 'string') {
      this.globalData.date = wx.getStorageSync('Date')
    } else {
      this.globalData.date = new Date().toLocaleDateString()
      wx.setStorageSync('Date', this.globalData.date)
    }

    if (typeof wx.getStorageSync('Days') === 'number') {
      this.globalData.days = wx.getStorageSync('Days')
    } else {
      this.globalData.days = 0
      wx.setStorageSync('Days', this.globalData.days)
    }
  }
})