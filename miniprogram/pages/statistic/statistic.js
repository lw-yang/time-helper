// miniprogram/pages/statistic/statistic.js
Component({

  data: {

  },

  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 2
        })
      }
      wx.showShareMenu({
        withShareTicket: true
      })
    }
  }
})
