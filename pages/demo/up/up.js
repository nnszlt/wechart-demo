// pages/demo/up/up.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fors: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  scrolltolower: function() {
    console.log(8)
  },
  onLoad() {
    wx.getSystemInfo({
      success: (res) => { // 用这种方法调用，this指向Page
      console.log(res)
        this.setData({
          winH: res.windowHeight
        });
      }
    })
  }


})