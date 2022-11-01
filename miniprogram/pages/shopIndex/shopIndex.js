// pages/shopIndex/shopIndex.js
const db = wx.cloud.database()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        ware: [{
                _id: 0,
                wareSrc: "https://tse3-mm.cn.bing.net/th/id/OIP-C.f8CxgtKadliXH5ItHqye8gHaFf?w=242&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
                wareName: "八合里牛肉火锅",
                wareScore: "4.6",
                warePrice: 96,
                wareAppraiseNum: 4542
            },
            {
                _id: 1,
                wareSrc: "https://tse2-mm.cn.bing.net/th/id/OIP-C.-bbHIyeBpdpg0GeGt2UyyAHaGK?w=209&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
                wareName: "牛肉火锅",
                wareScore: "4.6",
                warePrice: 96,
                wareAppraiseNum: 4542
            },
            {
                _id: 2,
                wareSrc: "https://tse2-mm.cn.bing.net/th/id/OIP-C.A9afVNn0ZAmsMil0L4UZOwHaE8?w=268&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
                wareName: "八合里火锅",
                wareScore: "4.6",
                warePrice: 96,
                wareAppraiseNum: 4542
            },
            {
                _id: 3,
                wareSrc: "https://tse3-mm.cn.bing.net/th/id/OIP-C.f8CxgtKadliXH5ItHqye8gHaFf?w=242&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
                wareName: "八合里牛肉火锅",
                wareScore: "4.6",
                warePrice: 96,
                wareAppraiseNum: 4542
            },
            {
                _id: 4,
                wareSrc: "https://tse3-mm.cn.bing.net/th/id/OIP-C.f8CxgtKadliXH5ItHqye8gHaFf?w=242&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
                wareName: "八合里牛肉火锅",
                wareScore: "4.6",
                warePrice: 96,
                wareAppraiseNum: 4542
            },
            {
                _id: 5,
                wareSrc: "https://tse2-mm.cn.bing.net/th/id/OIP-C.PKNH2-Yrpdvou8trIAEpcgHaEo?w=284&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
                wareName: "八合里牛肉火锅",
                wareScore: "4.6",
                warePrice: 96,
                wareAppraiseNum: 4542
            }
        ]
    },
    handleItem(e) {
        console.log(e)
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function () {
        let that = this;
        db.collection('ware').get({
            success: function (res) {
                console.log('商家信息获取成功', res)
                that.setData({
                    ware: res.data
                })

            },
            fail: function (res) {
                console.log('商家信息获取失败', res)
            },

        })

    },
    onClickLeft() {
        wx.navigateBack({
            delta: 1,
        })
    }

})