// pages/setting/index.js
const App = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 菜单列表导航跳转
   */
  onTargetMenusChild(e) {
    // let _this = this;
    wx.navigateTo({
      url: '/' + e.currentTarget.dataset.url
    })
  },

})