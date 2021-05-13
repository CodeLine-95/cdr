// pages/top10/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topClass: 'active',
    fansClass: '',
    tabItem: ['厂家名','销售额(万)'],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * tab切换
   */
  tabChange: function(e){
    let _this = this;
    let act = e.currentTarget.dataset.act;
    if(act == 'fans'){
      _this.setData({ 
        fansClass: 'active', topClass: '',
        tabItem: ['厂家名','粉丝数'],
      })
    }
    if(act == 'top'){
      _this.setData({ 
        fansClass: '', topClass: 'active',
        tabItem: ['厂家名','销售额(万)'],
       })
    }
  },
})