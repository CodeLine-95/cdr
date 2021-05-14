const App = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    agreementCheck: 0,
    userInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let userInfo = JSON.parse(options.userInfo);
    this.setData({ userInfo: userInfo })
  },

  /**
   * 获取手机号
   */
  getPhoneNumber(e) {
    let _this = this;
    let agreementCheck = _this.data.agreementCheck;
    if(agreementCheck == 1){
      e.detail.userInfo = _this.data.userInfo;
      App.getPhoneNumber(e, () => {
        // 跳转回原页面
        _this.onNavigateBack();
      });
    }else{
      App.showError('请勾选用户协议', () => {});
    }
  },

  /**
   * 用户协议勾选
   */
  agreementChange(e) {
    this.setData({
      agreementCheck: e.detail.value
    })
  },

  /**
   * 暂不登录
   */
  onNotLogin() {
    let _this = this;
    // 跳转回原页面
    _this.onNavigateBack();
  },

  /**
   * 授权成功 跳转回原页面
   */
  onNavigateBack() {
    wx.navigateBack();
  },

})