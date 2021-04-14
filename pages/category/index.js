// pages/category/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 当前一级分类id
    currentLevel1Id: 101,
    // 一级分类
    cateLevel1List: [
      { id: 101, name: '推荐分类' },
      { id: 102, name: 'Hi超市' },
      { id: 103, name: '男装' },
      { id: 104, name: '奢侈品' },
      { id: 105, name: '女装' },
      { id: 106, name: '鞋靴' },
      { id: 107, name: '内衣配饰' },
      { id: 108, name: '箱包' },
      { id: 109, name: '美妆护肤' },
      { id: 110, name: '个护清洁' },
      { id: 111, name: '钟表珠宝' },
      { id: 112, name: '手机' },
      { id: 113, name: '数码' },
      { id: 114, name: '电脑办公' },
      { id: 115, name: '家电' },
      { id: 116, name: '生鲜' },
      { id: 117, name: '视频酒饮' },
      { id: 118, name: '母婴童装' },
      { id: 119, name: '玩具乐器' },
      { id: 120, name: '医药保健' },
      { id: 121, name: '计生情趣' },
      { id: 122, name: '运动户外' },
      { id: 123, name: '汽摩生活' },
      { id: 124, name: '图书文娱' },
    ],
    // 二级分类
    cateLevel2List: [
      { id: 1001, pid: 101, name: '常用分类' },
      { id: 1002, pid: 101, name: '专场推荐' },
      { id: 1003, pid: 101, name: '热门分类' },
      { id: 1004, pid: 102, name: '休闲零食' },
      { id: 1005, pid: 102, name: '中外名酒' },
      { id: 1006, pid: 102, name: 'Hi生鲜' },
      { id: 1007, pid: 102, name: '粮油调味' },
    ],
    // 三级分类
    cateLevel3List: [
      { id: 10001, pid: 1001, name: '空调', icon: '/assets/images/cates/10001.jpg'},
      { id: 10002, pid: 1001, name: '冰箱', icon: '/assets/images/cates/10002.jpg'},
      { id: 10003, pid: 1001, name: '电脑', icon: '/assets/images/cates/10003.png'},
      { id: 10004, pid: 1001, name: '手机', icon: '/assets/images/cates/10004.png'},
    ],
    catesList: [
      {
        cate_id: 101,
        cat_name: '大家电',
        cat_pid: 0,
        cat_level: 1,
        cat_delete: false,
        children: [
          {
            cate_id: '1010',
            cat_name: '电视',
            cat_pid: 101,
            cat_level: 2,
            cat_delete: false,
            children: [
              {
                cate_id: '10101',
                cat_name: '小米电视',
                cat_pid: 1010,
                cat_level: 3,
                cat_delete: false,
              },
              {
                cate_id: '10102',
                cat_name: '华为电视',
                cat_pid: 1010,
                cat_level: 3,
                cat_delete: false,
              },
            ]
          },
          {
            cate_id: '202',
            cat_name: '洗衣机',
            cat_pid: 101,
            cat_level: 2,
            cat_delete: false,
            children: [
              {
                cate_id: '2020',
                cat_name: '直筒洗衣机',
                cat_pid: 202,
                cat_level: 3,
                cat_delete: false,
              },
              {
                cate_id: '2021',
                cat_name: '滚筒洗衣机',
                cat_pid: 202,
                cat_level: 3,
                cat_delete: false,
              },
            ]
          }
        ]
      },
      

      {
        cate_id: 102,
        cat_name: '热门推荐',
        cat_pid: 0,
        cat_level: 1,
        cat_delete: false,
        children: [
          {
            cate_id: '1020',
            cat_name: '常用分类',
            cat_pid: 101,
            cat_level: 2,
            cat_delete: false,
            children: [
              {
                cate_id: '10200',
                cat_name: '休闲零食',
                cat_pid: 1020,
                cat_level: 3,
                cat_delete: false,
              },
              {
                cate_id: '10201',
                cat_name: '望远镜',
                cat_pid: 1020,
                cat_level: 3,
                cat_delete: false,
              },
            ]
          },
          {
            cate_id: '1021',
            cat_name: '专场推荐',
            cat_pid: 1020,
            cat_level: 2,
            cat_delete: false,
            children: [
              {
                cate_id: '10210',
                cat_name: '朝店换新季',
                cat_pid: 1021,
                cat_level: 3,
                cat_delete: false,
              },
              {
                cate_id: '10211',
                cat_name: '装修补贴季',
                cat_pid: 1021,
                cat_level: 3,
                cat_delete: false,
              },
            ]
          }
        ]
      },


    ],
    // 当前二级分类
    currentLevel2: []
  },
  /**
   * 点击1级分类
   * @param {*} e 
   */
  hadleTap(e) {
    // 设置当前索引
    this.setData({
      currentLevel1Id: e.target.dataset.id
    });
    // 设置二级分类数据
    this.setLevel2Data()
  },
  /**
   * 设置二级分类数据
   */
  setLevel2Data() {
    const currentLevel2 = this.data.cateLevel2List.filter(item => item.pid === this.data.currentLevel1Id)
    this.setData({
      currentLevel2,
    })
  },
    /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 设置二级分类数据
    this.setLevel2Data()
    
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