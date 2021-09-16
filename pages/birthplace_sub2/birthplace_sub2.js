// pages/birthplace_sub/birthplace_sub2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    interview: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showNavigationBarLoading()

    wx.request({
      url: 'https://shupartybuilding.com/api/text/birth_interview',
      success: ({data}) => {
        const { result } = data;
        let interview = [], number = 1;
        for(let i = 0; i < result.length; i = i + 2) {
          interview.push({
            number,
            question: result[i],
            answer: result[i + 1]
          })
          ++number;
        }
        this.setData({
          interview
        }, wx.hideNavigationBarLoading)
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