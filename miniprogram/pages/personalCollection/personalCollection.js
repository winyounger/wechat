// miniprogram/pages/personalCollection.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showType: 0,
    collectionList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUserCollection();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.searchResult = this.selectComponent('#searchResult')
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

  /**
   * 父页面中  点击 “司机行程” 事件
   */
  _getDriverCourse: function () {
    this.setData({
      showType: 1
    })
    this.getUserCollection();
  },

  _getPassengerCourse: function () {
    this.setData({
      showType: 0
    })
    this.getUserCollection();
  },

  getUserCollection: function () {
    wx.showLoading({
      title: '加载中...',
    })
    // 获取收藏数据，默认为乘客行程 type = 0
    wx.cloud.callFunction({
      name: 'getUserCollection',
      data: {
        type: this.data.showType,
      },
    }).then((res) => {
      console.log(res)
      this.setData({
        collectionList: typeof (res.result.data) != 'undefined' && res.result.data.length > 0 ? res.result.data : []
      });
      setTimeout(function () {
        wx.hideLoading()
      }, 500);
    })
  }
})