// pages/studyPlace/studyPlace.js
// pages/birthplace/birthplace.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    revImgList: ["../../img/study_place/top/杭州高级中学-1.jpg",
                 "../../img/study_place/top/杭州高级中学-2.jpg",
                 "../../img/study_place/top/杭州高级中学-3.jpg",
                 "../../img/study_place/top/杭州高级中学-4.jpg",
                 "../../img/study_place/top/杭州高级中学-5.jpg",
                 "../../img/study_place/top/杭州高级中学-6.jpg",
                 "../../img/study_place/top/杭州高级中学-7.jpg",
                 "../../img/study_place/top/杭州高级中学-8.jpg",
                 "../../img/study_place/top/杭州高级中学-9.jpg"],
    currentTab: 2,
    showDialog_1:false,
    showDialog_2:false,
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