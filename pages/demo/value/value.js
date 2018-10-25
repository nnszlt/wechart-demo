// pages/demo/value/value.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    form_id: "",
    form_val: "",
    form_btn: "",
    tapval: ""
  },
  formid: function(e) {
    this.setData({
      form_id: e.detail.formId

    })
  },
  formval: function(e) {
    this.setData({
      form_val: e.currentTarget.dataset.value

    })
  },
  formbtn: function(e) {
    this.setData({
      form_btn: e.detail.target.dataset.btn
    })
  },
  formall: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  tap: function(e) {
    this.setData({
      tapval: e.currentTarget.dataset.tap
    })
  },
  link: function(e) {
    console.log(e.currentTarget.dataset)
    wx.navigateTo({
      url: "../../view/view?link=" + e.currentTarget.dataset.tap,
    })
  }

})