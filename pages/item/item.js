// pages/item/item.js
var tabbar = require('../../tabbar/tabbar.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      "https://wx.qlogo.cn/mmhead/SCug0ESSOHibUnYhCbgrkPvJXbUNf8KdcODEzGDFamIjHQ8Qw0l1sLQ/0",
      "https://wx.qlogo.cn/mmhead/SCug0ESSOHibUnYhCbgrkPvJXbUNf8KdcODEzGDFamIjHQ8Qw0l1sLQ/0",
      "https://wx.qlogo.cn/mmhead/SCug0ESSOHibUnYhCbgrkPvJXbUNf8KdcODEzGDFamIjHQ8Qw0l1sLQ/0",
      "https://wx.qlogo.cn/mmhead/SCug0ESSOHibUnYhCbgrkPvJXbUNf8KdcODEzGDFamIjHQ8Qw0l1sLQ/0",
      "https://wx.qlogo.cn/mmhead/SCug0ESSOHibUnYhCbgrkPvJXbUNf8KdcODEzGDFamIjHQ8Qw0l1sLQ/0",
      "https://wx.qlogo.cn/mmhead/SCug0ESSOHibUnYhCbgrkPvJXbUNf8KdcODEzGDFamIjHQ8Qw0l1sLQ/0",
      "https://wx.qlogo.cn/mmhead/SCug0ESSOHibUnYhCbgrkPvJXbUNf8KdcODEzGDFamIjHQ8Qw0l1sLQ/0",
      "https://wx.qlogo.cn/mmhead/SCug0ESSOHibUnYhCbgrkPvJXbUNf8KdcODEzGDFamIjHQ8Qw0l1sLQ/0",
      "https://wx.qlogo.cn/mmhead/SCug0ESSOHibUnYhCbgrkPvJXbUNf8KdcODEzGDFamIjHQ8Qw0l1sLQ/0",
    ],
    logo: "https://wx.qlogo.cn/mmhead/SCug0ESSOHibUnYhCbgrkPvJXbUNf8KdcODEzGDFamIjHQ8Qw0l1sLQ/0",
    phone: '18321140470',
    baoye: {
      latitude: 31.026569, //纬度
      longitude: 121.73533299999997 //经度
    }
  },
  previewItem: function (e) {
    var src = e.currentTarget.dataset.src
    wx.previewImage({
      current: src,
      urls: this.data.items
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    tabbar.tabbar("tabBar", 0, this)//0表示第一个tabbar
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        var windowWidth = res.windowWidth
        var imageBoxWidth = windowWidth * 0.92
        var itemSize = imageBoxWidth * 0.954 / 3
        var itemAway = imageBoxWidth * 0.04 / 2
        that.setData({
          windowWidth: windowWidth,
          itemSize: itemSize,
          itemAway: itemAway
        })
      }
    })
  },
  onCall: function () {
    wx.makePhoneCall({
      phoneNumber: this.data.phone
    })
  },
  onLocation: function () {
    wx.openLocation({
      latitude: this.data.baoye.latitude,
      longitude: this.data.baoye.longitude,
      scale: 28
    })
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

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})