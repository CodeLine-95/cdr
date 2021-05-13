let App = getApp();

Page({
  data: {
    // banner轮播组件属性
    indicatorDots: true, // 是否显示面板指示点	
    autoplay: true, // 是否自动切换
    interval: 3000, // 自动切换时间间隔
    duration: 800, // 滑动动画时长
    imgHeights: {}, // 图片的高度
    imgCurrent: {}, // 当前banne所在滑块指针

    // 页面元素
    items: {},
    newest: {},
    best: {},

    scrollTop: 0,
  },

  onLoad: function() {

  },

  bindChange: function(e) {
    let itemKey = e.target.dataset.itemKey;
  },

  noticeShow: function(){
    wx.navigateTo({
      url: '/pages/noticeShow/index',
    })
  },

  jumpTools: function(e){
    let url = e.currentTarget.dataset.url;
    wx.navigateTo({
      url: '/' + url,
    })
  },

  goTop: function(t) {
    this.setData({
      scrollTop: 0
    });
  },

  scroll: function(t) {
    this.setData({
      indexSearch: t.detail.scrollTop
    }), t.detail.scrollTop > 300 ? this.setData({
      floorstatus: !0
    }) : this.setData({
      floorstatus: !1
    });
  },

  onShareAppMessage: function() {
    return {
      title: "小程序首页",
      desc: "",
      path: "/pages/index/index"
    };
  }
});