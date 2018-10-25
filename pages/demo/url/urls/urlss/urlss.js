// pages/demo/url/urls/urlss/urlss.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onShow() {
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1]; //当前页面
    var prevPage = pages[pages.length - 2]; //
    console.log(pages.length)
    console.log("当前页面" + [pages.length - 1])
    console.log(currPage)
  },
  navigateBack: function() {
    var page = getCurrentPages()
    console.log(page)
    wx.navigateBack({
      delta: 0
    })
  }
})