// pages/peopleInfo/peopleInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgList: [],
    introduce: "",
    count: 0
  },

  hideToast(isTest=false) {
    this.setData({
      count: isTest? this.data.count : this.data.count + 1
    }, () => {
      if (this.data.count >= 2) {
        wx.hideNavigationBarLoading();
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // prople_img
    wx.showNavigationBarLoading()
    wx.request({
      url: 'https://shupartybuilding.com/api/text/prople_introduce',
      success: ({ data }) => {
        const { result: introduce } = data;
        this.setData({
          introduce
        }, this.hideToast)
      }
    })
    wx.request({
      url: 'https://shupartybuilding.com/api/img/prople_img',
      success: ({ data }) => {
        const { result } = data;
        this.setData({
          imgList: result.imgObjArr
        }, this.hideToast)
      }
    })
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
    if (this.data.count < 2) {
      wx.showNavigationBarLoading();
    }
    this.hideToast(true);
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

  }
})