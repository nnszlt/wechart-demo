// pages/demo/app/apps/apps.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  change: function() {
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1]; //当前页面
    var prevPage = pages[pages.length - 2]; //上一个页面
    console.log(prevPage.data.zhi)
    prevPage.setData({
      zhi: "我改变了"
    })
    wx.navigateBack({})
  }




})