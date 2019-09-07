var app = getApp();
var server = require('../../utils/server');
Page({
	data: {
    img_url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
		filterId: 1,
		searchWords: '',
		placeholder: '输入商家、分类或商圈',
		shops: app.globalData.shops
	},
	onLoad: function () {
		
	},
	onShow: function () {
		this.setData({
			showResult: false
		});
	},
	inputSearch: function (e) {
		this.setData({
			searchWords: e.detail.value
		});
	},
	doSearch: function() {
		this.setData({
			showResult: true
		});
	},
	tapFilter: function (e) {
		
	}
});

