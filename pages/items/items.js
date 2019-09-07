// pages/items/items.js
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
      "https://wx.qlogo.cn/mmhead/RMCO0pDV4UZ5AJGALYibMxJgILSibMuenMDxBVE8nzjiaM/0",
      "https://wx.qlogo.cn/mmhead/SCug0ESSOHibUnYhCbgrkPvJXbUNf8KdcODEzGDFamIjHQ8Qw0l1sLQ/0",
    ],
    phone: '88888888',
    job: [],

    jobList: [],

    id: '',

    isClick: false,

    jobStorage: [],

    jobId: '',
    showView: false,
    zhifu:true
  },
  payment : function () {

    var that = this;

    that.setData({

      showView: (!that.data.showView),
      zhifu: (!that.data.zhifu)
    });
    wx.showToast({

      title: '支付成功',

    });

  },
  haveSave(e) {

    if (!this.data.isClick == true) {

      let jobData = this.data.jobStorage;

      jobData.push({

        jobid: jobData.length,

        id: this.data.job.id

      })

      wx.setStorageSync('jobData', jobData);//设置缓存

      wx.showToast({

        title: '已收藏',

      });

    } else {

      wx.showToast({

        title: '已取消收藏',

      });

    }

    this.setData({

      isClick: !this.data.isClick
      

    })

  },
  
  onLoad: function (options) {



  },
  previewItem: function (e) {
    console.log(e.currentTarget.src)
    var src = e.currentTarget.dataset.src
    wx.previewImage({
      current: src,
      urls: this.data.items
    })
  },
  onCall: function () {
    wx.makePhoneCall({
      phoneNumber: this.data.phone
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    tabbar.tabbar("tabBar", 0, this)//0表示第一个tabbar
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // wx.startPullDownRefresh(1000)

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

  },
  onPullDownRefresh: function () {
    console.log('下拉')
    // wx.startPullDownRefresh()
    setTimeout(() => {
      wx.stopPullDownRefresh()
    }, 500)

  },
})