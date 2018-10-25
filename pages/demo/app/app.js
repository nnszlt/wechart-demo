// pages/demo/app/app.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    zhi: "我现在还没有改变"
  },
  tap1: function() {
wx.navigateTo({
  url: './apps/apps',
})
  }
})