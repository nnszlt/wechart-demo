// pages/demo/url/url.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  redirectTo: function() {
    //不能跳转 tabbar的页面  关闭当前页
    wx.redirectTo({
      url: '../../view/view?link= wx.redirectTo',
    })
  },
  reLaunch: function() {
    //关闭所有页面  没有返回键头
    wx.reLaunch({
      url: '../../view/view?link= wx.reLaunch'
    })
  },
  navigateTo: function() {
      //不能跳转 tabbar的页面
    wx.navigateTo({
      url: '../../view/view?link= wx.navigateTo'
    })
  },
  switchTab: function() {
    //只能跳转 Tab 不能传值
    wx.switchTab({
      url: '../../index/index',
    })
  },
  navigateBack: function() {
    wx.navigateTo({
      url: './urls/urls',
    })
  }
})