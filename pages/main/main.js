// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperImgList: ["../../img/IMG20210806152030.jpg", "../../img/IMG20210806152116.jpg", "../../img/IMG20210806152039.jpg", "../../img/IMG20210806152701.jpg"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  onDirectTo(evt) {
    const {
      url
    } = evt.target.dataset;
    wx.switchTab({
      url
    })
  }
})