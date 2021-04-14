import { request } from '../../request/index.js'
// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageList: [
      {
        id: 1001,
        good_name: '夏季鞋子',
        url: '',
        path: '../../assets/images/good/item1.jpg'
      },
      {
        id: 1002,
        good_name: '夏季鞋子',
        url: '',
        path: '../../assets/images/good/item2.jpg'
      },
      {
        id: 1003,
        good_name: '夏季鞋子',
        url: '',
        path: '/assets/images/good/item3.jpg'
      },
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取轮播图数据
    const url = 'https://api.zbztb.cn/api/public/v1/home/swiperdata';
    request({url}).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
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