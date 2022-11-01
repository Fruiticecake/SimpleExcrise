// components/comment/pages/commentAll.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        commentTabs:[
            {
                _id:0,
               title:"精选",
               isActive:true,
            },
            {
                _id:1,
                title:"全部",
                isActive:false,
            }
        ],
        comment: [{
            _id: 0,
            name: '吴彦祖',
            time: '2019年2月22日',
            scores: 4.9,
            content: '干净又卫生兄弟们！',
            src: "https://tse3-mm.cn.bing.net/th/id/OIP-C.uw18ocpMWuA6CQqh-9ZzOgAAAA?w=202&h=202&c=7&r=0&o=5&dpr=1.25&pid=1.7"
          },
          {
            _id: 1,
            name: '吴彦祖',
            time: '2019年2月22日',
            scores: 4.9,
            content: '干净又卫生兄弟们干净又卫生兄弟们！干净又卫生兄弟们！干净又卫生兄弟们！干净又卫生兄弟们！！',
            src: "https://tse2-mm.cn.bing.net/th/id/OIP-C.8iy_FBNEl-s5exK8PdtpYgAAAA?w=210&h=210&c=7&r=0&o=5&dpr=1.25&pid=1.7"
          },
          {
            _id: 2,
            name: '吴祖',
            time: '2019年2月22日',
            scores: 4.9,
            content: '干净又卫生兄弟们！干净又卫生兄弟们！干净又卫生兄弟们！',
            src: "https://tse3-mm.cn.bing.net/th/id/OIP-C.8l6Gw9JjePLOkB9FLnlGigAAAA?w=210&h=210&c=7&r=0&o=5&dpr=1.25&pid=1.7"
          },
          {
            _id: 3,
            name: '吴彦祖',
            time: '2019年2月22日',
            scores: 4.9,
            content: '干净又卫生兄弟们！干净又卫生兄弟们！干净又卫生兄弟们！干净又卫生兄弟们！干净又卫生兄弟们！干净又卫生兄弟们！干净又卫生兄弟们！干净又卫生兄弟们！干净又卫生兄弟们！干净又卫生兄弟们！干净又卫生兄弟们！',
            src: "https://tse1-mm.cn.bing.net/th/id/OIP-C.lkVEVqsYENzhY0fgfQ-rmgAAAA?w=210&h=210&c=7&r=0&o=5&dpr=1.25&pid=1.7"
          },
          {
            _id: 4,
            name: '吴彦祖',
            time: '2019年2月22日',
            scores: 4.9,
            content: '干净又卫生兄弟们！',
            src: "https://tse1-mm.cn.bing.net/th/id/OIP-C.VP0E8Yo33976Q5TUwCptyQAAAA?w=210&h=210&c=7&r=0&o=5&dpr=1.25&pid=1.7"
          }
        ],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onClickLeft(){
      wx.navigateBack({
        delta: 1,
      })
    },
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

    }
})