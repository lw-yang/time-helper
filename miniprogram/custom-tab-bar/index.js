Component({
  data: {
    // selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      "text": "首页",
      "iconPath": "/images/tabbar/m_common(1).png",
      "selectedIconPath": "/images/tabbar/m_common.png",
      "pagePath": "/pages/index/index"
    },
    {
      "text": "计划",
      "iconPath": "/images/tabbar/m_dfm(1).png",
      "selectedIconPath": "/images/tabbar/m_dfm.png",
      "pagePath": "/pages/plan/plan"
    },
    {
      "text": "统计",
      "iconPath": "/images/tabbar/m_aps(1).png",
      "selectedIconPath": "/images/tabbar/m_aps.png",
      "pagePath": "/pages/statistic/statistic"
    },
    {
      "text": "我的",
      "iconPath": "/images/tabbar/m_whms(1).png",
      "selectedIconPath": "/images/tabbar/m_whms.png",
      "pagePath": "/pages/mine/mine"
    }
  ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      // this.setData({
      //   selected: data.index
      // })
    }
  },
})