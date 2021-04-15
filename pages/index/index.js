import { request } from '../../request/index.js'
// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图数据
    swiperList: [
      {
        id: 1001,
        good_name: '夏季鞋子',
        url: '',
        path: '../../assets/images/good/item1.jpg'
      },
      {
        id: 1002,
        good_name: 'xxx',
        url: '',
        path: '../../assets/images/good/item2.jpg'
      },
      {
        id: 1003,
        good_name: 'xxx',
        url: '',
        path: '/assets/images/good/item3.jpg'
      },
    ],
    // 分类数据
    catesList: [
      {
        id: 1001,
        name: '分类',
        url: '',
        icon_path: '../../assets/images/cates/item1.png'
      },
      {
        id: 1002,
        name: '新品',
        url: '',
        icon_path: '../../assets/images/cates/item2.png'
      },
      {
        id: 1003,
        name: '超市',
        url: '',
        icon_path: '../../assets/images/cates/item3.png'
      },
      {
        id: 1004,
        name: '全球Go',
        url: '',
        icon_path: '../../assets/images/cates/item4.png'
      },
    ],
    // 楼层数据
    floorList: [
      {
        title: {
          name: '夏季新品',
          img_src: '/assets/images/floor/t1.jpg'
        },
        productList: [
          {
            name: '优质男装',
            img_src: '/assets/images/floor/list1-1.jpg',
            open_type: 'navigate',
            url: '/pages/goods_list/index?query="服饰"',
          },
          {
            name: '夏季热门',
            img_src: '/assets/images/floor/list1-2.jpg',
            open_type: 'navigate',
            url: '/pages/goods_list/index?query="服饰"',
          },
          {
            name: '夏季热门',
            img_src: '/assets/images/floor/list1-3.jpg',
            open_type: 'navigate',
            url: '/pages/goods_list/index?query="服饰"',
          },
        ]
      },
      {
        title: {
          name: '国产好鞋',
          img_src: '/assets/images/floor/t2.jpg'
        },
        productList: [
          {
            name: '优质男装',
            img_src: '/assets/images/floor/list2-1.jpg',
            open_type: 'navigate',
            url: '/pages/goods_list/index?query="服饰"',
          },
          {
            name: '夏季热门',
            img_src: '/assets/images/floor/list2-2.jpg',
            open_type: 'navigate',
            url: '/pages/goods_list/index?query="服饰"',
          },
          {
            name: '夏季热门',
            img_src: '/assets/images/floor/list2-3.jpg',
            open_type: 'navigate',
            url: '/pages/goods_list/index?query="服饰"',
          },
        ]
      },
      {
        title: {
          name: '读书节',
          img_src: '/assets/images/floor/t3.jpg'
        },
        productList: [
          {
            name: '优质男装',
            img_src: '/assets/images/floor/list3-1.jpg',
            open_type: 'navigate',
            url: '/pages/goods_list/index?query="服饰"',
          },
          {
            name: '夏季热门',
            img_src: '/assets/images/floor/list3-2.jpg',
            open_type: 'navigate',
            url: '/pages/goods_list/index?query="服饰"',
          },
          {
            name: '夏季热门',
            img_src: '/assets/images/floor/list3-3.jpg',
            open_type: 'navigate',
            url: '/pages/goods_list/index?query="服饰"',
          },
        ]
      },
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //1. 获取轮播图
    // this.getSwipeList()
    //2. 获取分类
    // this.getCatesList()
  },
  /**
   * 获取轮播图数据
   */
  getSwipeList() {
    const url = 'https://api.zbztb.cn/api/public/v1/home/swiperdata';
    request({url}).then(res => {
      console.log(res);
      this.setData({
        imageList: res.data.msg
      })
    }).catch(err => {
      // console.log(err);
    })
  },
  /**
   * 获取分类数据
   */
  getCatesList() {
    // const mockUrl = 'http://127.0.0.1/getCatesList';
    const url = 'https://api.zbztb.cn/api/public/v1/home/catitems'
    request({url}).then(res => {
      this.setData({
        catesList: res.data
      })
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