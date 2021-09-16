// pages/studyPlace/studyPlace.js
// pages/birthplace/birthplace.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 2,
    showDialog_1:false,
    showDialog_2:false,
    swiperUrl: [],
    processImgList: [],
    count: 0
  },

  changeNavTab(evt) {
    //切换tab栏的点击事件，通过修改data中的currentTab实现
    const currentIdx = evt.target.dataset.id;
    if(this.data.currentTab !== currentIdx) {
      this.setData({
        currentTab: +currentIdx
      })
    }
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
    wx.showNavigationBarLoading()

    wx.request({
      url: 'https://shupartybuilding.com/api/img/study_process_img',
      success: ({ data }) => {
        const { result: {img, title} } = data;
        let processImgList = [];
        for(let i = 0; i < img.length; ++i) {
          processImgList.push({
            title: title[i],
            url: img[i]
          })
        }
        this.setData({
          processImgList
        }, this.hideToast)
      }
    })

    wx.request({
      url: 'https://shupartybuilding.com/api/img/studyPlace_img',
      success: ({ data }) => {
        const { result } = data;
        this.setData({
          swiperUrl: result.imgObjArr
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

  },
  

  study_sub1() {
    wx.navigateTo({
      url: "../studyPlace_subPages/study_place1/studyPlace_sub1",
    })
  },
  study_sub2() {
    wx.navigateTo({
      url: '../studyPlace_subPages/study_place2/studyPlace_sub2',
    })
  },
  study_sub3() {
    wx.navigateTo({
      url: '../studyPlace_subPages/study_place3/study_place3',
    })
  },
  study_sub4() {
    wx.navigateTo({
      url: '../studyPlace_subPages/study_place4/study_place4',
    })
  },
  study_sub5() {
    wx.navigateTo({
      url: '../studyPlace_subPages/study_place5/study_place5',
    })
  },
  study_sub6() {
    wx.navigateTo({
      url: '../studyPlace_subPages/study_place6/study_place6',
    })
  },
  study_sub7() {
    wx.navigateTo({
      url: '../studyPlace_subPages/study_place7/study_place7',
    })
  },
  study_sub8() {
    wx.navigateTo({
      url: '../studyPlace_subPages/study_place8/study_place8',
    })
  }
})