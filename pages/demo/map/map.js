// pages/demo/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: "",
    longitude: "",
    markers: [{
      id: 1,
      latitude: 36.07515,
      longitude: 120.41283

    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  location: function() {
    var that = this;
    wx.getLocation({
      altitude: true,
      success(e) {
        if (e.errMsg == "getLocation:ok") {
          that.setData({
            latitude: e.latitude,
            longitude: e.longitude
          })
        }
      }
    })
  },
  map(e) {
    console.log(e)
  },
  icon(e) {
    console.log(e)
  }
})