//mine.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    zhuangtai: app.globalData.zhuangtai
  },
  //事件处理函数

  onShow: function () {
    this.onLoad()
    console.log(app.globalData.userInfo)
  },

 



 
  onLoad: function () {
    wx.getUserInfo({
      success: res => {


        app.globalData.userInfo = res.userInfo

        this.setData({
          userInfo: res.userInfo,
          zhuangtai: false
        })
      }
    })
  },

  bindGetUserInfo(res) {
    console.log(res);
    if (res.detail.userInfo) {
      this.onLoad()
      app.globalData.zhuangtai = false
      console.log("点击了同意授权");
    } else {
      console.log("点击了拒绝授权");
    }
  },
  xinxi(res) {
    console.log(res);
    if (res.detail.userInfo) {
      this.onLoad()
      app.globalData.zhuangtai = false
      console.log("点击了同意授权");

wx.navigateTo({
  url: '/pages/xinxi/xinxi',
})


    } else {
      console.log("点击了拒绝授权");
    }
  },
  join(res) {
    console.log(res);
    if (res.detail.userInfo) {
      this.onLoad()
      app.globalData.zhuangtai = false
      console.log("点击了同意授权");

      wx.navigateTo({
        url: '/pages/zhuce/zhuce',
      })


    } else {
      console.log("点击了拒绝授权");
    }
  },
})
