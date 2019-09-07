// pages/join/join.js
var that;
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgs: [],
    fuwu: [],
    jineng:[],
    //imageWidth: getApp().screenWidth / 4 - 10
    dataBtal:'6',
    head:'',
    select: false,
    grade_name: '--请选择--',
    grades: ['男', '女',],
    userInfo: {}
  },
  bindShowMsg() {
    this.setData({
      select: !this.data.select
    })
  
  },
  mySelect(e) {
    console.log(e.currentTarget.dataset)

    var name = e.currentTarget.dataset.name
    this.setData({
      grade_name: name,
      select: false
    })
  },
  add(){

    var aaa = JSON.stringify(this.data.fuwu)
    // // console.log(333)
    wx.navigateTo({
      url: "leibie2?fuwu="+aaa
    })

  },
  addji() {
    // console.log(this.data.jineng)
  
    var model = JSON.stringify(this.data.jineng)
    // console.log(model)
    wx.navigateTo({
      url: "leibie?jineng=" + model
    })

  },
  chooseImg: function (e) {
    var that = this;
    var imgs = this.data.imgs;
    if (imgs.length >= 9) {
      this.setData({
        lenMore: 1
      });
      setTimeout(function () {
        that.setData({
          lenMore: 0
        });
      }, 2500);
      return false;
    }
    wx.chooseImage({
      // count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        var imgs = that.data.imgs;
        // console.log(tempFilePaths + '----');
        for (var i = 0; i < tempFilePaths.length; i++) {
          if (imgs.length >= 9) {
            that.setData({
              imgs: imgs
            });
            return false;
          } else {
            imgs.push(tempFilePaths[i]);
          }
        }
        // console.log(imgs);
        that.setData({
          imgs: imgs
        });
      }
    });
  },
  // 删除图片
  deleteImg: function (e) {
    console.log(e)
    var imgs = this.data.imgs;
    var index = e.currentTarget.dataset.index;
    imgs.splice(index, 1);
    this.setData({
      imgs: imgs
    });
  },
  // 预览图片
  previewImg: function (e) {
    //获取当前图片的下标
    var index = e.currentTarget.dataset.index;
    //所有图片
    var imgs = this.data.imgs;
    wx.previewImage({
      //当前显示图片
      current: imgs[index],
      //所有图片
      urls: imgs
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

console.log(this.data.jineng)
    var objectId = options.objectId; console.log(objectId);



    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
        head: app.globalData.userInfo.avatarUrl

      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
          head: res.userInfo.avatarUrl
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true,
            head: res.userInfo.avatarUrl
          })
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (options) {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function (options) {

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
  del: function (e) {
    var that = this;
    wx.showModal({
      title: '提示',
      content: '确定要删除吗？',
      success: function (sm) {
        if (sm.confirm) {
          var jineng = that.data.jineng;
          var index = e.currentTarget.dataset.index;

          jineng.splice(index, 1);

          that.setData({
            jineng: jineng
          });

          // 用户点击了确定 可以调用删除方法了
        } else if (sm.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  del2: function (e) {
var that=this;
    wx.showModal({
      title: '提示',
      content: '确定要删除吗？',
      success: function (sm) {
        if (sm.confirm) {
          var fuwu = that.data.fuwu;
          var index = e.currentTarget.dataset.index;
          
          fuwu.splice(index, 1);
     
         that.setData({
            fuwu: fuwu
          });

          // 用户点击了确定 可以调用删除方法了
        } else if (sm.cancel) {
          console.log('用户点击取消')
        }
      }
    })
    // var fuwu = this.data.fuwu;
    // var index = e.currentTarget.dataset.index;
    // fuwu.splice(index, 1);
    // this.setData({
    //   fuwu: fuwu
    // });
  },
  bindFormSubmit(e) {
   
    if (this.data.grade_name == '--请选择--') {
      wx: wx.showToast({
        title: '请选择性别',
        image: '../../image/tianxie.png',
      })
      return false
    }
    else if (this.data.jineng == '') {
      wx: wx.showToast({
        title: '请选择技能',
        image: '../../image/tianxie.png',
      })
      return false
    } 
    else if (this.data.fuwu == '') {
      wx: wx.showToast({
        title: '请选择服务',
        image: '../../image/tianxie.png',
      })
      return false
    }
    else if (e.detail.value.quyu == '') {
      wx: wx.showToast({
        image: '../../image/tianxie.png',
        title: '请填写服务区域'
      })
      return false
    }
    else if (e.detail.value.neirong == '') {
      wx: wx.showToast({
        image: '../../image/tianxie.png',
        title: '请填写服务内容'
      })
      return false
    }
    else if (e.detail.value.jieshao == '') {
      wx: wx.showToast({
        image: '../../image/tianxie.png',
        title: '请填写详细介绍'
      })
      return false
    }
    else if (this.data.imgs == '') {
      wx: wx.showToast({
        image: '../../image/tianxie.png',
        title: '请选择图片'
      })
      return false
    }
    else if (e.detail.value.danwei == '') {
      wx: wx.showToast({
        image: '../../image/tianxie.png',
        title: '请填写所属单位'
      })
      return false
    }
    else if (e.detail.value.dizhi == '') {
      wx: wx.showToast({
        image: '../../image/tianxie.png',
        title: '请填写单位地址'
      })
      return false
    }
    else if (e.detail.value.dianhua == '') {
      wx: wx.showToast({
        image: '../../image/tianxie.png',
        title: '请填写单位电话'
      })
      return false
    }
    else {

      // wx.request({

      //   url: 'http://localhost/api/writeChangeShip', //  数据传到的地址

      // data: {
      //   applet_id: app.globalData.applet_id
      // },
          // data: ['col1', 'col2', 'col3'],
      //   method: 'POST',

      //   header: {// 设置请求的 header

      //     'content-type': 'application/x-www-form-urlencoded'   //这是传输方式为post的写法 ； 如果是get 则是'Content-Type': 'application/json'

      //   },

      //   success: function (res) {

      //     console.log(JSON.stringify(res.data))

      //     wx.showModal({      //提交成功 ，弹框

      //       content: '提交成功',

      //       success: function (res) {

      //         if (res.confirm) {   //如果点击弹框的确认则进行下面的操作

      //           // wx.navigateTo({

      //           //   url: '../orderlist/orderlist',

      //           // })

      //         }

      //       }

      //     })

      //   }



      // })
      console.log(this.data.userInfo.avatarUrl)
      console.log(this.data.userInfo.nickName)
      console.log(this.data.grade_name)
      console.log(this.data.jineng)
      console.log(this.data.fuwu)
      console.log(e.detail.value.quyu)
      console.log(e.detail.value.neirong)
      console.log(e.detail.value.jieshao)
      console.log(this.data.imgs)
      console.log(e.detail.value.danwei)
      console.log(e.detail.value.dizhi)
      // console.log(e.detail.value.daohang)
      console.log(e.detail.value.dianhua)

      wx.switchTab({
        url: '../index/index',

      })   


  }
  },
// 更换头像
  headimage: function () {
    var _this = this;
    wx.chooseImage({
      count: 1, // 默认9      
      sizeType: ['original', 'compressed'],
      // 指定是原图还是压缩图，默认两个都有      
      sourceType: ['album', 'camera'],
      // 指定来源是相册还是相机，默认两个都有    
      success: function (res) {
        // 返回选定照片的本地文件路径tempFilePath可以作为img标签的src属性显示图片        
        _this.setData({
          head: res.tempFilePaths
        })
      }
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})