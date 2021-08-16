// components/bigImg/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imgShowData: Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    isBigImgShow: false,
    bigImgSrc: ""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showBigImg(evt) {
      //点击展示大图
      const {
        src
      } = evt.currentTarget.dataset;
      this.setData({
        isBigImgShow: true,
        bigImgSrc: src
      })
    },

    preventClose() {
      //阻止大图点击时关闭大图，本身无意义
    },

    closeBigImg() {
      // 关闭大图
      this.setData({
        isBigImgShow: false,
        bigImgSrc: ""
      })
    }
  }
})