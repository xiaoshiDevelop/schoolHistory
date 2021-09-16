// pages/moreImg/moreImg.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgShowData: [],
    count: 0,
    page: 0,
    isSend: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showNavigationBarLoading()
    wx.request({
      url: `https://shupartybuilding.com/api/img/revolution_img?start=${this.data.page}&count=12`,
      success: ({
        data
      }) => {
        const {
          imgObjArr,
        } = data.result;
        this.setData({
          imgShowData: imgObjArr,
          page: this.data.page + 1
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
    if (!this.data.isSend) {
      this.setData({
        isSend: true
      })
      wx.showNavigationBarLoading()
      wx.request({
        url: `https://shupartybuilding.com/api/img/revolution_img?start=${this.data.page}&count=12`,
        success: ({
          data
        }) => {
          const {
            imgObjArr,
            count
          } = data.result;
          this.setData({
            imgShowData: this.data.imgShowData.concat(imgObjArr),
            page: this.data.page + 1,
            isSend: false
          }, wx.hideNavigationBarLoading)
        }
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})