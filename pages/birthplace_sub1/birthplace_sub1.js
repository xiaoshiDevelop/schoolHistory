// pages/birthplace/birthplace_sub1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    revImgList: [],
    formerIntroduce: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    function hideToast() {
      ++count;
      if(count >= 2) {
        wx.hideNavigationBarLoading();
      }
    }

    wx.showNavigationBarLoading()
    let count = 0
    wx.request({
      url: 'https://shupartybuilding.com/api/img/birth_img',
      success: ({
        data
      }) => {
        const {result} = data;
        this.setData({
          revImgList: result.img
        }, hideToast)
      }
    })
    wx.request({
      url: 'https://shupartybuilding.com/api/text/birth_introduce?type=former',
      success: ({
        data
      }) => {
        const {result: formerIntroduce} = data;
        this.setData({
          formerIntroduce
        }, hideToast)
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