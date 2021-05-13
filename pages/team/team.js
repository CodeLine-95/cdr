// pages/team/team.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    teamClass: 'active',
    storeClass: '',
    teamSmClass: 'active',
    storeSmClass: '',
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
    if(act == 'store'){
      _this.setData({ 
        storeClass: 'active', teamClass: '',
        storeSmClass: '', teamSmClass: 'active'
      })
    }
    if(act == 'team'){
      _this.setData({ 
        storeClass: '', teamClass: 'active',
        storeSmClass: '', teamSmClass: 'active'
       })
    }
  },

  /**
   * tabSm切换
   */
  tabSmChange: function(e){
    let _this = this;
    let act = e.currentTarget.dataset.act;
    if(act == 'storeSm'){
      _this.setData({ storeSmClass: 'active', teamSmClass: '' })
    }
    if(act == 'teamSm'){
      _this.setData({ storeSmClass: '', teamSmClass: 'active' })
    }
  },
})