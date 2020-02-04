// miniprogram/pages/mine/mine.js
const app = getApp()

Component({

  data: {
    avatarUrl: '../../images/user-unlogin.png',
    nickName: '点击登录',
    userInfo: {},
    logged: false,
    days: -1,
    remindChecked: true,
    dialogShow: false,
    halfScreenDialogShow: false,
    buttons: [{
      text: '取消'
    }, {
      text: '确定'
    }]
  },

  methods: {
    onGetUserInfo(e) {
      if (!this.data.logged && e.detail.userInfo) {
        this.setData({
          logged: true,
          avatarUrl: e.detail.userInfo.avatarUrl,
          nickName: e.detail.userInfo.nickName,
          userInfo: e.detail.userInfo
        });
        app.globalData.nickName = e.detail.userInfo.nickName
        console.log("[globalData.nickName]: "+app.globalData.nickName)
      }
      if (app.globalData.openid === undefined) {
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
      }
    },

    remindChange(e) {
      if (e.detail.value === true) {
        this.setData({
          dialogShow: true,
        })
      }else{

        this.setData({
          remindChecked: false
        })
        wx.setStorageSync('Remind', false)

        const db = wx.cloud.database()
        db.collection('info').where({
          _openid: app.globalData.openid
        }).get({
          success: res => {
            if (res.data.length === 0) {
              db.collection('info').add({
                data: {
                  remind: false
                },
                success: res => {
                  console.log('[数据库info] [新增记录remind] 成功，记录 _id: ', res._id)
                },
                fail: err => {
                  console.error('[数据库info] [新增记录remind] 失败：', err)
                }
              })
            } else {
              db.collection('info').where({
                _openid: app.globalData.openid
              }).update({
                data: {
                  remind: false
                },
                success: res => {
                  console.log('[数据库info] [新增记录remind] 成功，记录 _id: ', res._id)
                },
                fail: err => {
                  console.error('[数据库info] [新增记录remind] 失败：', err)
                }
              })
            }
          },
          fail: err => {
            console.error('[数据库info] [新增记录remind] 失败：', err)
          }
        })
      }
    },

    help(){
      wx.navigateTo({
        url: '../help/help',
      })
    },

    about() {
      this.setData({
        halfScreenDialogShow: true
      })
    },
    tapDialogButton(e) {
      if (e.detail.index === 1) {
        this.setData({
          remindChecked: true
        })

        wx.setStorageSync('Remind', true)

        const db = wx.cloud.database()
        db.collection('info').where({
          _openid: app.globalData.openid
        }).get({
          success: res => {
            if (res.data.length === 0) {
              db.collection('info').add({
                data: {
                  remind: true
                },
                success: res => {
                  console.log('[数据库info] [新增记录remind] 成功，记录 _id: ', res._id)
                },
                fail: err => {
                  console.error('[数据库info] [新增记录remind] 失败：', err)
                }
              })
            } else {
              db.collection('info').where({
                _openid: app.globalData.openid
              }).update({
                data: {
                  remind: true
                },
                success: res => {
                  console.log('[数据库info] [新增记录remind] 成功，记录 _id: ', res._id)
                },
                fail: err => {
                  console.error('[数据库info] [新增记录remind] 失败：', err)
                }
              })
            }
          },
          fail: err => {
            console.error('[数据库info] [新增记录remind] 失败：', err)
          }
        })
      } else {
        this.setData({
          remindChecked: false
        })
      }
      this.setData({
        dialogShow: false
      })
    }
  },

  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 3
        })
      }
      wx.showShareMenu({
        withShareTicket: true
      })

      if(typeof wx.getStorageSync('Remind') === 'boolean'){
        this.setData({
          remindChecked: wx.getStorageSync('Remind')
        })
      }

      this.setData({
        days: app.globalData.days
      })
    }
  },

  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () {
      if (!wx.cloud) {
        console.error("不支持wx.cloud")
        return
      }

      if (app.globalData.nickName === undefined) {
        wx.cloud.downloadFile({
          fileID: 'cloud://timehelper.7469-timehelper-1301188962/user-unlogin.png',
          success: res => {
            console.log("[avatarUrl tempFilePath]: "+res.tempFilePath)
            this.setData({
              avatarUrl: res.tempFilePath
            })
          },
          fail: res => {
            console.error("获取用户头像失败")
          }
        })
      } else {
        this.setData({
          nickName: app.globalData.nickName,
          avatarUrl: app.globalData.avatarUrl
        })
      }

    }
  }
})