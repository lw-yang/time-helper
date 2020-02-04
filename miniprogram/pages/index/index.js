// miniprogram/pages/index/index.js
const app = getApp()

Component({

  data: {
    onePlanList: '',
    twoPlanList: '',
    threePlanList: '',
    fourPlanList: '',
    showToast: false
  },

  methods: {
    bindTextAreaBlurOne(e) {
      this.setData({
        onePlanList: e.detail.value,
      })
      wx.setStorage({
        key: "TextAreaOne",
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
      db.collection('quadrant').where({
        _openid: app.globalData.openid
      }).get({
        success: res => {

          if (res.data.length === 0) {
            db.collection('quadrant').add({
              data: {
                "onePlanList": e.detail.value,
              },
              success: res => {
                if (e.detail.value !== '') {
                  // wx.showToast({
                  //   icon: 'none',
                  //   title: '数据已保存',
                  // })
                }

                console.log('[数据库-quadrant] [新增记录one-quadrant] 成功，记录 _id: ', res._id)
              },
              fail: err => {
                wx.showToast({
                  icon: 'none',
                  title: '数据保存失败'
                })
                console.error('[数据库-quadrant] [新增记录one-quadrant] 失败：', err)
              }
            })
          } else {
            db.collection('quadrant').where({
              _openid: app.globalData.openid
            }).update({
              data: {
                "onePlanList": e.detail.value,
              },
              success: res => {
                if (e.detail.value !== '') {
                  // wx.showToast({
                  //   icon: 'none',
                  //   title: '数据已更新',
                  // })
                }
                console.log('[数据库-quadrant] [更新记录one-quadrant] 成功，记录 _id: ', res._id)
              },
              fail: err => {
                wx.showToast({
                  icon: 'none',
                  title: '数据更新失败'
                })
                console.error('[数据库-quadrant] [更新记录one-quadrant] 失败：', err)
              }
            })
          }
        },
        fail: err => {
          console.error('[数据库-quadrant] [查询记录one-quadrant] 失败：', err)
        }
      })
    },
    bindTextAreaBlurTwo(e) {
      this.setData({
        twoPlanList: e.detail.value,
      })
      wx.setStorage({
        key: "TextAreaTwo",
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
      db.collection('quadrant').where({
        _openid: app.globalData.openid
      }).get({
        success: res => {

          if (res.data.length === 0) {
            db.collection('quadrant').add({
              data: {
                "twoPlanList": e.detail.value,
              },
              success: res => {
                if (e.detail.value !== '') {
                  // wx.showToast({
                  //   icon: 'none',
                  //   title: '数据已保存',
                  // })
                }
                console.log('[数据库-quadrant] [新增记录two-quadrant] 成功，记录 _id: ', res._id)
              },
              fail: err => {
                wx.showToast({
                  icon: 'none',
                  title: '数据保存失败'
                })
                console.error('[数据库-quadrant] [新增记录two-quadrant] 失败：', err)
              }
            })
          } else {
            db.collection('quadrant').where({
              _openid: app.globalData.openid
            }).update({
              data: {
                "twoPlanList": e.detail.value,
              },
              success: res => {
                if (e.detail.value !== '') {
                  // wx.showToast({
                  //   icon: 'none',
                  //   title: '数据已更新',
                  // })
                }
                console.log('[数据库-quadrant] [更新记录two-quadrant] 成功，记录 _id: ', res._id)
              },
              fail: err => {
                wx.showToast({
                  icon: 'none',
                  title: '数据更新失败'
                })
                console.error('[数据库-quadrant] [更新记录two-quadrant] 失败：', err)
              }
            })
          }
        },
        fail: err => {
          console.error('[数据库-quadrant] [查询记录two-quadrant] 失败：', err)
        }
      })
    },
    bindTextAreaBlurThree(e) {
      this.setData({
        threePlanList: e.detail.value,
      })
      wx.setStorage({
        key: "TextAreaThree",
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
      db.collection('quadrant').where({
        _openid: app.globalData.openid
      }).get({
        success: res => {

          if (res.data.length === 0) {
            db.collection('quadrant').add({
              data: {
                "threePlanList": e.detail.value,
              },
              success: res => {
                if (e.detail.value !== '') {
                  // wx.showToast({
                  //   icon: 'none',
                  //   title: '数据已保存',
                  // })
                }
                console.log('[数据库-quadrant] [新增记录three-quadrant] 成功，记录 _id: ', res._id)
              },
              fail: err => {
                wx.showToast({
                  icon: 'none',
                  title: '数据保存失败'
                })
                console.error('[数据库-quadrant] [新增记录three-quadrant] 失败：', err)
              }
            })
          } else {
            db.collection('quadrant').where({
              _openid: app.globalData.openid
            }).update({
              data: {
                "threePlanList": e.detail.value,
              },
              success: res => {
                if (e.detail.value !== '') {
                  // wx.showToast({
                  //   icon: 'none',
                  //   title: '数据已更新',
                  // })
                }
                console.log('[数据库-quadrant] [更新记录three-quadrant] 成功，记录 _id: ', res._id)
              },
              fail: err => {
                wx.showToast({
                  icon: 'none',
                  title: '数据更新失败'
                })
                console.error('[数据库-quadrant] [更新记录three-quadrant] 失败：', err)
              }
            })
          }
        },
        fail: err => {
          console.error('[数据库-quadrant] [查询记录three-quadrant] 失败：', err)
        }
      })
    },
    bindTextAreaBlurFour(e) {
      this.setData({
        fourPlanList: e.detail.value,
      })
      wx.setStorage({
        key: "TextAreaFour",
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
      db.collection('quadrant').where({
        _openid: app.globalData.openid
      }).get({
        success: res => {

          if (res.data.length === 0) {
            db.collection('quadrant').add({
              data: {
                "fourPlanList": e.detail.value
              },
              success: res => {
                if (e.detail.value !== '') {
                  // wx.showToast({
                  //   icon: 'none',
                  //   title: '数据已保存',
                  // })
                }
                console.log('[数据库-quadrant] [新增记录four-quadrant] 成功，记录 _id: ', res._id)
              },
              fail: err => {
                wx.showToast({
                  icon: 'none',
                  title: '数据保存失败'
                })
                console.error('[数据库-quadrant] [新增记录four-quadrant] 失败：', err)
              }
            })
          } else {
            db.collection('quadrant').where({
              _openid: app.globalData.openid
            }).update({
              data: {
                "fourPlanList": e.detail.value
              },
              success: res => {
                if (e.detail.value !== '') {
                  // wx.showToast({
                  //   icon: 'none',
                  //   title: '数据已更新',
                  // })
                }
                console.log('[数据库-quadrant] [更新记录four-quadrant] 成功，记录 _id: ', res._id)
              },
              fail: err => {
                wx.showToast({
                  icon: 'none',
                  title: '数据更新失败'
                })
                console.error('[数据库-quadrant] [更新记录four-quadrant] 失败：', err)
              }
            })
          }
        },
        fail: err => {
          console.error('[数据库-quadrant] [查询记录four-quadrant] 失败：', err)
        }
      })
    },
  },

  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 0
        })
      }
      wx.showShareMenu({
        withShareTicket: true
      })

      if (this.data.onePlanList === undefined || this.data.onePlanList === '') {
        if (typeof wx.getStorageSync('TextAreaOne') === 'string') {
          this.setData({
            onePlanList: wx.getStorageSync('TextAreaOne')
          })
          console.log("[TextAreaOne Storage]: " + wx.getStorageSync('TextAreaOne'))
        } else {
          //  当缓存中没有时，从数据中获取
          // console.log("===one get database")
          // const db = wx.cloud.database()
          // if (app.globalData.openid === undefined) {
          //   wx.showToast({
          //     title: '请登录...',
          //     icon: 'none',
          //     duration: 1500
          //   })
          //   this.setData({
          //     showToast: true
          //   })
          // }
          // db.collection('quadrant').where({
          //   _openid: app.globalData.openid
          // }).get({
          //   success: res => {
          //     this.setData({
          //       onePlanList: res.data[0].onePlanList
          //     })
          //     console.log('[数据库] [查询记录] 成功: ', res)
          //   },
          //   fail: err => {
          //     wx.showToast({
          //       icon: 'none',
          //       title: '第一象限查询记录失败'
          //     })
          //     console.error('[数据库] [查询记录] 失败：', err)
          //   }
          // })
        }
      }
      if (this.data.twoPlanList === undefined || this.data.twoPlanList === '') {
        if (typeof wx.getStorageSync('TextAreaTwo') === 'string') {
          this.setData({
            twoPlanList: wx.getStorageSync('TextAreaTwo')
          })
          console.log("[TextAreaTwo Storage]: " + wx.getStorageSync('TextAreaTwo'))
        } else {
          //  当缓存中没有时，从数据中获取
          // console.log("===2 get database")
          // const db = wx.cloud.database()
          // if (app.globalData.openid === undefined) {
          //   if (this.data.showToast === false) {
          //     wx.showToast({
          //       title: '请登录...',
          //       icon: 'none',
          //       duration: 1500
          //     })
          //     this.setData({
          //       showToast: true
          //     })
          //   }
          // }
          // db.collection('quadrant').where({
          //   _openid: app.globalData.openid
          // }).get({
          //   success: res => {
          //     this.setData({
          //       twoPlanList: res.data[0].twoPlanList
          //     })
          //     console.log('[数据库] [查询记录] 成功: ', res)
          //   },
          //   fail: err => {
          //     wx.showToast({
          //       icon: 'none',
          //       title: '第二象限查询记录失败'
          //     })
          //     console.error('[数据库] [查询记录] 失败：', err)
          //   }
          // })
        }
      }
      if (this.data.threePlanList === undefined || this.data.threePlanList === '') {
        if (typeof wx.getStorageSync('TextAreaThree') === 'string') {
          this.setData({
            threePlanList: wx.getStorageSync('TextAreaThree')
          })
          console.log("[TextAreaThree Storage]: " + wx.getStorageSync('TextAreaThree'))
        } else {
          //  当缓存中没有时，从数据中获取
          // console.log("===three database")
          // const db = wx.cloud.database()
          // if (app.globalData.openid === undefined) {
          //   if (this.data.showToast === false) {
          //     wx.showToast({
          //       title: '请登录...',
          //       icon: 'none',
          //       duration: 1500
          //     })
          //     this.setData({
          //       showToast: true
          //     })
          //   }
          // }
          // db.collection('quadrant').where({
          //   _openid: app.globalData.openid
          // }).get({
          //   success: res => {
          //     this.setData({
          //       threePlanList: res.data[0].threePlanList
          //     })
          //     console.log('[数据库] [查询记录] 成功: ', res)
          //   },
          //   fail: err => {
          //     wx.showToast({
          //       icon: 'none',
          //       title: '第三象限查询记录失败'
          //     })
          //     console.error('[数据库] [查询记录] 失败：', err)
          //   }
          // })
        }
      }
      if (this.data.fourPlanList === undefined || this.data.fourPlanList === '') {
        if (typeof wx.getStorageSync('TextAreaFour') === 'string') {
          this.setData({
            fourPlanList: wx.getStorageSync('TextAreaFour')
          })
          console.log("[TextAreaFour Storage]:" + wx.getStorageSync('TextAreaFour'))
        } else {
          //  当缓存中没有时，从数据中获取
          // console.log("=== 4 get database")
          // const db = wx.cloud.database()
          // if (app.globalData.openid === undefined) {
          //   if (this.data.showToast === false) {
          //     wx.showToast({
          //       title: '请登录...',
          //       icon: 'none',
          //       duration: 1500
          //     })
          //     this.setData({
          //       showToast: true
          //     })
          //   }
          // }
          // db.collection('quadrant').where({
          //   _openid: app.globalData.openid
          // }).get({
          //   success: res => {
          //     this.setData({
          //       fourPlanList: res.data[0].fourPlanList
          //     })
          //     console.log('[数据库] [查询记录] 成功: ', res)
          //   },
          //   fail: err => {
          //     wx.showToast({
          //       icon: 'none',
          //       title: '第四象限查询记录失败'
          //     })
          //     console.error('[数据库] [查询记录] 失败：', err)
          //   }
          // })
        }
      }

      if (wx.getStorageSync('Date') !== new Date().toLocaleDateString()) {
        app.globalData.date = new Date().toLocaleDateString()
        app.globalData.days = app.globalData.days + 1
        wx.setStorageSync('Date', app.globalData.date)
        wx.setStorageSync('Days', app.globalData.days)

        const db = wx.cloud.database()
        db.collection('info').where({
          _openid: app.globalData.openid
        }).get({
          success: res => {
            if (res.data.length === 0) {
              db.collection('info').add({
                data: {
                  "days": app.globalData.days,
                  "date": app.globalData.date
                },
                success: res => {
                  console.log('[数据库info] [新增记录days-date] 成功，记录 _id: ', res._id)
                },
                fail: err => {
                  console.error('[数据库info] [新增记录days-date] 失败：', err)
                }
              })
            } else {
              db.collection('info').where({
                _openid: app.globalData.openid
              }).update({
                data: {
                  "days": app.globalData.days,
                  "date": app.globalData.date
                },
                success: res => {
                  console.log('[数据库info] [更新记录days-date] 成功，记录 _id: ', res._id)
                },
                fail: err => {
                  console.error('[数据库info] [更新记录days-date] 失败：', err)
                }
              })
            }
          },
          fail: err => {
            console.error('[数据库info] [查询记录days-date] 失败：', err)
          }
        })
      }
    },
    hide() {

    }
  }
})