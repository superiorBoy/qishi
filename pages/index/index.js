//index.js
//获取应用实例
const app = getApp()
const appInstance = getApp();
Page({

  data: {

    location: appInstance.globalData.defaultCity,
    county: appInstance.globalData.defaultCounty,

    location: '',
    county: '',
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    _num: 1,
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    Circular: true,
    curNav: 1,
    duration: 1000,

    yusuan: [
      { name: '装修咨询', txt: '提交' },
      { name: '家装设计' },
      { name: '工程预算' },
      { name: '工装设计' },

      { name: '上门安装' }
    ],
    daili: [
      { name: '视频开标', txt: '提交' },
      { name: '工装招标' },
      { name: '家装招标' }
    ],
    zhiliang: [
      { name: '公司监理', txt: '提交' },
      { name: '工装监理' },
      { name: '个人监理' },
      { name: '家装监理' }
    ],
    gongjiang: [
      { name: '特种技工', txt: '提交' },
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
  /* 把点击到的某一项 设为当前curNav   */
  switchRightTab: function (e) {
    let id = e.target.dataset.id;
    console.log(id);
    this.setData({
      curNav: id
    })
  },

  onLoad: function (options) {






    if (app.globalData.defaultCity && app.globalData.defaultCity != '') {
      console.log(app.globalData.defaultCity)

      this.setData({
        location: app.globalData.defaultCity,

      });
    } else {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.employIdCallback = location => {
        if (location != '') {
          this.setData({
            location: app.globalData.defaultCity,
            county: app.globalData.defaultCounty
          });
        }
      }
    }


  },

  //事件处理函数
  bindViewTap: function () {

  },
  suo() {


  },
  onReady() {
    if (app.globalData.userInfo) {
      console.log('已登录')
    } else {

      wx.navigateTo({
        url: '/pages/welcome/welcome'

      })
    }
  },
  dianji(e) {

    console.log(e.currentTarget.dataset.name);
  },

  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onShow: function () {

    this.setData({
      location: appInstance.globalData.defaultCity,
      county: appInstance.globalData.defaultCounty
    })
  },
  clickNum: function (e) {
    console.log(e.target.dataset.num)
    this.setData({
      _num: e.target.dataset.num
    })
  },
  bindGetUserInfo(res) {

    if (res.detail.userInfo) {

      wx.navigateTo({
        url: '/pages/zhuce/zhuce',
      })




      console.log("点击了同意授权");
    } else {
      console.log("点击了拒绝授权");
    }
  }

})
