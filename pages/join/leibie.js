// pages/join/leibie.js
var app = getApp();
// app.dataB2A = 222;
Page({

  /**
   * 页面的初始数据
   */
  data: {

    name: [],
    _num: 1,
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    Circular: true,
    curNav: 1,
    duration: 1000,
    yusuan: [
      { name: '装修咨询'},
      { name: '家装设计' },
      { name: '工程预算' },
      { name: '工装设计' },

      { name: '上门安装' }
    ],
    daili: [
      { name: '视频开标'},
      { name: '工装招标' },
      { name: '家装招标' }
    ],
    zhiliang: [
      { name: '公司监理'},
      { name: '工装监理' },
      { name: '个人监理' },
      { name: '家装监理' }
    ],
    gongjiang: [
      { name: '特种技工'},
      { name: '油漆工' },
      { name: '木工' },
      { name: '泥工' },

      { name: '水电工' }
    ],
    jiazheng: [
      { name: '搬家快送' },
      { name: '绿化陪枝' },
      { name: '保洁清洗' },
      { name: '电器维修' },

      { name: '专业安装' }
    ],
    zhineng: [
      { name: '电器控制' },
      { name: '安防监控' },
      { name: '照明系统' },
      { name: '家庭网络' }
    ],
    zuhuan: [
      { name: '物品拍卖' },
      { name: '办公租赁' },
      { name: '回收置换' },
      { name: '家电租赁' },
      { name: '机械租赁' }
    ],
    tongcheng: [
      { name: '专车接送' },
      { name: '跑腿服务' },
      { name: '物流快运' },
      { name: '顺风60分' }
    ],
    zhuangxiu: [
      { name: '软装装饰' },
      { name: '整装定制' },
      { name: '橱柜门窗' },
      { name: '油漆板材' },
      { name: '水管电线' }
    ],
    dianqi: [
      { name: '五金洁具' },
      { name: '灯具卫浴' },
      { name: '陶瓷' },
      { name: '家用电器' }
    ],
    bangong: [
      { name: '共享办公' },
      { name: '笔墨纸张' },
      { name: '打印机' },
      { name: '电脑' },
      { name: '家具' }
    ],
    nongfu: [
      { name: '农家渔夫' },
      { name: '家禽家畜' },
      { name: '有机食品' },
      { name: '土特产' }
    ],
    shangwu: [
      { name: '庆典服务' },
      { name: '资源共享平台' },
      { name: '保险上门' },
      { name: '商企定制' },
      { name: '工商服务' }
    ],
    jiaoyu: [
      { name: '技能培训' },
      { name: '成人学历' },
      { name: '艺术培训' },
      { name: '教学辅导' }
    ],
    xiuxian: [
      { name: '公益活动' },
      { name: '农家特色' },
      { name: '餐饮住宿' },
      { name: '休闲养生' },
      { name: '保健美容' }
    ],
    qiche: [
      { name: '汽车租赁' },
      { name: '代办服务' },
      { name: '应急拖车' },
      { name: '保养维修' }
    ],

  },
  switchRightTab: function (e) {
    let id = e.target.dataset.id;
    console.log(id);
    this.setData({
      curNav: id
    })
  },
  dianji(e) {
    console.log(e.currentTarget.dataset.name);
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];   //当前页面
    var prevPage = pages[pages.length - 2];  //上一个页面
    this.setData({
      name: this.data.name.concat(e.currentTarget.dataset.name)
    });
    prevPage.setData({
      jineng: this.data.name
 
    });
     wx.navigateBack();
  },

  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  clickNum: function (e) {
    console.log(e.target.dataset.num)
    this.setData({
      _num: e.target.dataset.num
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var bean = JSON.parse(options.jineng);
    // var bean2 = JSON.parse(options.fuwu);
    // console.log(bean2)
    console.log(bean)
    console.log(options.aaa)
    this.setData({

      name: this.data.name.concat(bean)

    });
    console.log(this.data.name)
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