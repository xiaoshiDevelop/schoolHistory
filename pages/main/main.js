// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperImgList: [],
    introduce: []
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

    let count = 0;
    wx.showNavigationBarLoading()
    
    wx.request({
      url: 'https://shupartybuilding.com/api/text/main_introduce',
      success: ({ data }) => {
        const { result } = data;
        let introduce = [];
        for(const title in result) {
          introduce.push({
            title,
            text: result[title]
          })
        }
        this.setData({
          introduce
        }, hideToast)
      }
    })
    wx.request({
      url: 'https://shupartybuilding.com/api/img/main_img',
      success: ({ data }) => {
        const { result } = data;
        this.setData({
          swiperImgList: result.imgObjArr
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