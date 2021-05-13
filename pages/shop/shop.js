// pages/shop/shop.js
Page({

  data: {
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,
    scrollTop: 0,
  },
  onLoad: function() {

      var that = this;

      /**
       * 获取当前设备的宽高
       */
      wx.getSystemInfo( {

          success: function( res ) {
              that.setData( {
                  winWidth: res.windowWidth,
                  winHeight: res.windowHeight
              });
          }

      });
  },

  goTop: function(t) {
    this.setData({
      scrollTop: 0
    });
  },

  scroll: function(t) {
    console.log(t.detail.scrollTop)
    this.setData({
      indexSearch: t.detail.scrollTop
    }), t.detail.scrollTop > 300 ? this.setData({
      floorstatus: !0
    }) : this.setData({
      floorstatus: !1
    });
  },
    
  //  tab切换逻辑
  swichNav: function( e ) {

      var that = this;

      if( this.data.currentTab === e.target.dataset.current ) {
          return false;
      } else {
          that.setData( {
              currentTab: e.target.dataset.current
          })
      }
  },

  bindChange: function( e ) {

      var that = this;
      that.setData( { currentTab: e.detail.current });

  },
  
  shopDetail: function(e){
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/detail/index?goods_id='+id,
    })
  },
})