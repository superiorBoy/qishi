// pages/zhuce/zhuce.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
showyan:false,
    disabled:false,
    buttonTitle: '获取验证码',             //按钮标题
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  quxiao(){

    wx.navigateBack({
      delta: 1
    })
  },
  queren() {
    wx.navigateTo({
      url: '/pages/join/join',
    })
  },
  changeSearch: function (event) {
    let that = this;
    var phone = event.detail.value;
    console.log(event.detail.value);
    if ((/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/.test(phone))) {
      // wx.showToast({
      //   title: '正确',
      //   icon: 'success',
      //   duration: 2000
      // })
that.setData({

  showyan:true
})

    }
  },
  yanzhengma(){
    var that=this;
    var  count = 10;

    var intervalId = setInterval(function () {
              count -= 1;
              that.setData({
                    buttonTitle: count + 's后重发',
                disabled: true
              })
              if (count == 0) {
                    clearInterval(intervalId);                 //倒计时结束，停止interval
                    that.setData({
                          buttonTitle: '获取验证码',
                      disabled: false
                    })
              }
        }, 1000)

  


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