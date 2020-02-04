// plan/plan.js
const app = getApp()

Component({

  data: {
    background: ['../../images/swiper01.jpg', '../../images/swiper02.jpg',
      '../../images/swiper03.jpg'
    ],
    shortText: '',
    longText: '',
    showToast: false
  },

  methods: {
    bindTextAreaBlurShort(e) {
      this.setData({
        shortText: e.detail.value
      })

      wx.setStorage({
        key: "TextShort",
        data: e.detail.value
      })
      const db = wx.cloud.database()
      if (app.globalData.nickName === undefined) {
        if (this.data.showToast === false) {
          wx.showToast({
            title: '请登录...',
            icon: 'none',
            duration: 1500
          })
          this.setData({
            showToast: true
          })
        }
        // return
      }
      db.collection('plan').where({
        _openid: app.globalData.openid
      }).get({
        success: res => {

          if (res.data.length === 0) {
            db.collection('plan').add({
              data: {
                "shortText": e.detail.value,
              },
              success: res => {
                if (e.detail.value !== '') {
                  // wx.showToast({
                  //   icon: 'none',
                  //   title: '数据已保存',
                  // })
                }
                console.log('[数据库plan] [新增记录shortText] 成功，记录 _id: ', res._id)
              },
              fail: err => {
                wx.showToast({
                  icon: 'none',
                  title: '数据保存失败'
                })
                console.error('[数据库plan] [新增记录shortText] 失败：', err)
              }
            })
          } else {
            db.collection('plan').where({
              _openid: app.globalData.openid
            }).update({
              data: {
                "shortText": e.detail.value,
              },
              success: res => {
                if (e.detail.value !== '') {
                  // wx.showToast({
                  //   icon: 'none',
                  //   title: '数据已更新',
                  // })
                }
                console.log('[数据库plan] [更新记录shortText] 成功，记录 _id: ', res._id)
              },
              fail: err => {
                wx.showToast({
                  icon: 'none',
                  title: '数据更新失败'
                })
                console.error('[数据库plan] [更新记录shortText] 失败：', err)
              }
            })
          }
        },
        fail: err => {
          console.error('[数据库plan] [查询记录shortText] 失败：', err)
        }
      })
    },
    bindTextAreaBlurLong(e) {
      this.setData({
        longText: e.detail.value
      })

      wx.setStorage({
        key: "TextLong",
        data: e.detail.value
      })
      const db = wx.cloud.database()
      if (app.globalData.nickName === undefined) {
        if (this.data.showToast === false) {
          wx.showToast({
            title: '请登录...',
            icon: 'none',
            duration: 1500
          })
          this.setData({
            showToast: true
          })
        }
        // return
      }
      db.collection('plan').where({
        _openid: app.globalData.openid
      }).get({
        success: res => {

          if (res.data.length === 0) {
            db.collection('plan').add({
              data: {
                "longText": e.detail.value,
              },
              success: res => {
                if (e.detail.value !== '') {
                  // wx.showToast({
                  //   icon: 'none',
                  //   title: '数据已保存',
                  // })
                }
                console.log('[数据库plan] [新增记录longText] 成功，记录 _id: ', res._id)
              },
              fail: err => {
                wx.showToast({
                  icon: 'none',
                  title: '数据保存失败'
                })
                console.error('[数据库plan] [新增记录longText] 失败：', err)
              }
            })
          } else {
            db.collection('plan').where({
              _openid: app.globalData.openid
            }).update({
              data: {
                "longText": e.detail.value,
              },
              success: res => {
                if (e.detail.value !== '') {
                  // wx.showToast({
                  //   icon: 'none',
                  //   title: '数据已更新',
                  // })
                }
                console.log('[数据库plan] [更新记录longText] 成功，记录 _id: ', res._id)
              },
              fail: err => {
                wx.showToast({
                  icon: 'none',
                  title: '数据更新失败'
                })
                console.error('[数据库plan] [更新记录longText] 失败：', err)
              }
            })
          }
        },
        fail: err => {
          console.error('[数据库plan] [查询记录longText] 失败：', err)
        }
      })
    }
  },

  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 1
        })
      }
      wx.showShareMenu({
        withShareTicket: true
      })

      if (this.data.shortText === undefined || this.data.shortText === '') {
        if (typeof wx.getStorageSync('TextShort') === 'string') {
          this.setData({
            shortText: wx.getStorageSync('TextShort')
          })
          console.log("[TextShort Storage]: " + wx.getStorageSync('TextShort'))
        } else {

          //  当缓存中没有时，从数据中获取
          //   console.log("===short get database")
          //   const db = wx.cloud.database()
          //   if (app.globalData.openid === undefined) {
          //     wx.showToast({
          //       title: '请登录...',
          //       icon: 'none',
          //       duration: 1500
          //     })
          //     this.setData({
          //       showToast: true
          //     })
          //   }
          //   db.collection('plan').where({
          //     _openid: app.globalData.openid
          //   }).get({
          //     success: res => {
          //       this.setData({
          //         shortText: res.data[0].shortText
          //       })
          //       console.log('[数据库] [查询记录] 成功: ', res)
          //     },
          //     fail: err => {
          //       wx.showToast({
          //         icon: 'none',
          //         title: '短期目标查询记录失败'
          //       })
          //       console.error('[数据库] [查询记录] 失败：', err)
          //     }
          //   })
        }
      }

      if (this.data.longText === undefined || this.data.longText === '') {
        if (typeof wx.getStorageSync('TextLong') === 'string') {
          this.setData({
            longText: wx.getStorageSync('TextLong')
          })
          console.log("[TextLong Storage]: " + wx.getStorageSync('TextLong'))
        } else {
          //  当缓存中没有时，从数据中获取
          //   console.log("===long get database")
          //   const db = wx.cloud.database()
          //   if (app.globalData.openid === undefined) {
          //     wx.showToast({
          //       title: '请登录...',
          //       icon: 'none',
          //       duration: 1500
          //     })
          //     this.setData({
          //       showToast: true
          //     })
          //   }
          //   db.collection('plan').where({
          //     _openid: app.globalData.openid
          //   }).get({
          //     success: res => {
          //       this.setData({
          //         longText: res.data[0].longText
          //       })
          //       console.log('[数据库] [查询记录] 成功: ', res)
          //     },
          //     fail: err => {
          //       wx.showToast({
          //         icon: 'none',
          //         title: '短期目标查询记录失败'
          //       })
          //       console.error('[数据库] [查询记录] 失败：', err)
          //     }
          //   })
          // }
        }
      }
    }
  }
})