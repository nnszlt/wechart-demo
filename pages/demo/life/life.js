// pages/demo/life/life.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onLoad: function(options) {
    console.group("生命周期函数--监听页面加载");
    console.log(options);
    console.groupEnd();
  },

  onReady: function() {
    console.group("生命周期函数--监听页面初次渲染完成");
    console.groupEnd();
  },
  onShow: function() {
    console.group("生命周期函数--监听页面显示");
    console.groupEnd();
  },

  onHide: function() {
    console.group("生命周期函数--监听页面隐藏");
    console.groupEnd();
  },
  onUnload: function() {
    console.group("生命周期函数--监听页面卸载");
    console.groupEnd();
  }
})