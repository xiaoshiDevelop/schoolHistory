// components/indexBtn/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    text: String,
    url: String,
    src: String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onDirectTo(evt) {
      const {
        url
      } = evt.currentTarget.dataset;
      wx.switchTab({
        url
      })
      console.log(evt);
    }
  }
})