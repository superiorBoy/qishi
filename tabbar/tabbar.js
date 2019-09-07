function tabbarinit() {
  return [
    {
      "current": 0,
      "pagePath": "/pages/index/index",
      "iconPath": "/image/home.png",
      "selectedIconPath": "/image/onhome.png",
      "text": "首页"
    },
    {
      "current": 0,
      "pagePath": "/pages/collect/collect",
      "iconPath": "/image/shoucang.png",
      "selectedIconPath": "/image/onshoucang.png",
      "text": "收藏"
    },
    // {
    //   "current": 0,
    //   "pagePath": "/pages/logs/logs",
    //   "iconPath": "/image/xiaoxi.png",
    //   "selectedIconPath": "/image/onxiaoxi.png",
    //   "text": "消息"
    // },
    {
      "current": 0,
      "pagePath": "/pages/mine/mine",
      "iconPath": "/image/wode.png",
      "selectedIconPath": "/image/wode.png",
      "text": "我的"
    }
   
  ]

}
//tabbar 主入口
function tabbarmain(bindName = "tabdata", id, target) {
  var that = target;
  var bindData = {};
  var otabbar = tabbarinit();
  otabbar[id]['iconPath'] = otabbar[id]['selectedIconPath']//换当前的icon
  otabbar[id]['current'] = 1;
  bindData[bindName] = otabbar
  that.setData({ bindData });
}

module.exports = {
  tabbar: tabbarmain
}