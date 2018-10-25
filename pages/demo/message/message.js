// pages/mb/mb.js
const app = getApp()
Page({
  data: {
    appid: "wx7351e07170e8dcc7",
    secret: "797b8ec8d884ce8470305fd5a19f8dfa",
    tokens: "",
    js_code: "",
    openid: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  token: function () {
    //获取 token
    var _this = this;
    app.trsRequest({
      method: 'POST',
      contentType: 'application/x-www-form-urlencoded',
      url: app.globalData.domain + '/vipCode/test/getWeiXinToken',
      data: {
        appid: _this.data.appid,
        secret: _this.data.secret
      },
      success: function (res) {
        _this.setData({
          tokens: JSON.parse(res.data.resultMsg).access_token
        })
      },
      complete: function () { }
    })
  },
  getOpened: function () {
    var _this = this;
    wx.login({
      success: function (d) {
        console.log(d.code)
        _this.setData({
          js_code: d.code
        })
        app.trsRequest({
          method: 'POST',
          contentType: 'application/x-www-form-urlencoded',
          url: app.globalData.domain + '/vipCode/test/getOpenId',
          data: {
            appid: _this.data.appid,
            secret: _this.data.secret,
            js_code: _this.data.js_code
          },
          success: function (res) {
            _this.setData({
              openid: JSON.parse(res.data.resultMsg).openid
            })
          },
          complete: function () { }
        })

      }
    })

  },
  send: function (e) {
    var _this = this;
    console.log(e.detail.formId)
    var kw = {
      "keyword1": {
        "value": "339208499"
      }
    }
    var data = {
      access_token: _this.data.tokens,
      "touser": _this.data.openid,
      "template_id": "ORbE0GpoyuuAgmH76AZqKtt10NtQpVsDcae_1wDmJG8",
      "page": "index",
      "form_id": e.detail.formId,
      "data": {
        "keyword1": {
          "value": "339208499"
        }
      },
      "emphasis_keyword": "keyword1.DATA"
    }


    console.log(JSON.stringify(data))

    app.trsRequest({
      method: 'POST',
      contentType: 'application/x-www-form-urlencoded',
      url: app.globalData.domain + '/vipCode/test/sendTemplateMsg',
      data: data,
      success: function (res) {

      },
      complete: function () { }
    })

  }


})