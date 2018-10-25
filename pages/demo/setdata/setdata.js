// pages/demo/setdata/setdata.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    btn: [{
      load: false
    }],
    list: [{
      name: "zlt",
      age: "21",
      like: {
        eat: "apple",
        play: "bick"
      }
    }, {
      name: "zlt",
      age: "21",
      like: {
        eat: "apple",
        play: "bick"
      }
    }, {
      name: "zcc",
      age: "20",
      like: {
        eat: "pangxie",
        play: "game"
      }
    }],
    type: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  click: function(e) {
    var _this = this;
    var load = `btn[${0}].load`  //es6模板换名字

    if (this.data.type) {
      this.data.list[0] = this.data.list[1]
    } else {
      this.data.list[0] = this.data.list[2]
    }
    this.setData({
      type: !this.data.type,
      [load]:!this.data.btn[0].load
    })
    setTimeout(
      function() {
        _this.setData({
          list: _this.data.list,
          [load]: !_this.data.btn[0].load
        })
      }, 1000)


  }

})