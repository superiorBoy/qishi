//app.js

App({
  onLaunch: function() {
    var that = this;

    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
     
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
           
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    });
    wx.getLocation({
      // 获取横纵坐标
      success: function(res) {
     
        console.log(res)
        var longitude = res.longitude
        var latitude = res.latitude
        //坐标获取成功后，换取城市位置
        wx.request({
          url: 'https://api.map.baidu.com/geocoder/v2/?ak=GPCxs0BGTWyIpUmkft16DNzH9wUUofzQ&location=' + latitude + ',' + longitude + '&output=json',
          data: {},
          header: {
            'Content-Type': 'application/json'
          },
          success: function(res) {
            // success    
            console.log(res);
   
            var city = res.data.result.addressComponent.city;
            var district = res.data.result.addressComponent.district;

            console.log(city);
            getApp().globalData.defaultCity = city
            getApp().globalData.defaultCounty = district
      
            if (getApp().employIdCallback) {
              getApp().employIdCallback(res.employId);
            }
          },
          fail: function() {

            getApp().globalData.defaultCity = '手动获取'
          },

        })

      },

    });

  },
  getUserInfo: function(cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function() {
          wx.getUserInfo({
            success: function(res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },



  globalData: {
    userInfo: null,
    defaultCity: '',
    defaultCounty: '',
    zhifu:false,
    zhuangtai: true

  }
})