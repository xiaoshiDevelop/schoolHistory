// pages/revolution/revolution.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    revImgList: [],
    currentTab: 1,
    imgShowData: [],
    isBigImgShow: false,
    bigImgSrc: "",
    introduce: "",
    count: 0
  },

  changeNavTab(evt) {
    //切换tab栏的点击事件，通过修改data中的currentTab实现
    const currentIdx = evt.target.dataset.id;
    if (this.data.currentTab !== currentIdx) {
      this.setData({
        currentTab: +currentIdx
      })
    }
  },

  toMorePage() {
    wx.navigateTo({
      url: '../moreImg/moreImg',
    })
  },

  hideToast(isTest=false) {
    this.setData({
      count: isTest? this.data.count : this.data.count + 1
    }, () => {
      if (this.data.count >= 3) {
        wx.hideNavigationBarLoading();
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    wx.showNavigationBarLoading();

    wx.request({
      url: 'https://shupartybuilding.com/api/img/revolution_main_img',
      success: ({
        data
      }) => {
        const {
          result
        } = data;
        this.setData({
          revImgList: result.imgObjArr
        }, this.hideToast)
      }
    })
    wx.request({
      url: 'https://shupartybuilding.com/api/img/revolution_img?start=0&count=6',
      success: ({
        data
      }) => {
        const {
          imgObjArr,
          count
        } = data.result;
        this.setData({
          imgShowData: imgObjArr
        }, this.hideToast)
      }
    })
    wx.request({
      url: 'https://shupartybuilding.com/api/text/revolution_text',
      success: ({
        data
      }) => {
        const {
          result: introduce
        } = data;
        this.setData({
          introduce
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
    if (this.data.count < 3) {
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
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})