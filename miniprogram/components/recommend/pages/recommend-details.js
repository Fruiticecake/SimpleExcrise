const db = wx.cloud.database()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        recommendTabs: [{
                _id: 0,
                title: "推荐菜",
                isActive: true,
            },
            {
                _id: 1,
                title: "菜单",
                isActive: false,
            }
        ],
        wareRecommendNum: 0,
        signatureDish: [{
                _id: 0,
                sName: "牛肉火锅",
                sSrc: "https://tse3-mm.cn.bing.net/th/id/OIP-C.f8CxgtKadliXH5ItHqye8gHaFf?w=242&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
            },
            {
                _id: 1,
                sName: "火锅",
                sSrc: "https://tse3-mm.cn.bing.net/th/id/OIP-C.f8CxgtKadliXH5ItHqye8gHaFf?w=242&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
            },
            {
                _id: 2,
                sName: "牛肉火锅",
                sSrc: "https://tse3-mm.cn.bing.net/th/id/OIP-C.f8CxgtKadliXH5ItHqye8gHaFf?w=242&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
            },
            {
                _id: 3,
                sName: "牛肉火锅",
                sSrc: "https://tse3-mm.cn.bing.net/th/id/OIP-C.f8CxgtKadliXH5ItHqye8gHaFf?w=242&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
            },
            {
                _id: 4,
                sName: "牛肉火锅",
                sSrc: "https://tse3-mm.cn.bing.net/th/id/OIP-C.f8CxgtKadliXH5ItHqye8gHaFf?w=242&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
            }
        ],
        recommendP: [{
                _id: 0,
                src: "https://tse3-mm.cn.bing.net/th/id/OIP-C.f8CxgtKadliXH5ItHqye8gHaFf?w=242&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
                name: "手抓饼",
                spent: 34,
                likeNum: 36,
            },
            {
                _id: 1,
                src: "https://tse3-mm.cn.bing.net/th/id/OIP-C.f8CxgtKadliXH5ItHqye8gHaFf?w=242&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
                name: "手抓饼",
                spent: 4,
                likeNum: 6,
            },
            {
                _id: 2,
                src: "https://tse3-mm.cn.bing.net/th/id/OIP-C.f8CxgtKadliXH5ItHqye8gHaFf?w=242&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
                name: "手抓饼",
                spent: 34,
                likeNum: 36,
            },
            {
                _id: 3,
                src: "https://tse3-mm.cn.bing.net/th/id/OIP-C.f8CxgtKadliXH5ItHqye8gHaFf?w=242&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
                name: "手抓饼",
                spent: 44,
                likeNum: 36,
            },
            {
                _id: 4,
                src: "https://tse3-mm.cn.bing.net/th/id/OIP-C.f8CxgtKadliXH5ItHqye8gHaFf?w=242&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
                name: "手抓饼",
                spent: 34,
                likeNum: 156,
            },
            {
                _id: 5,
                src: "https://tse3-mm.cn.bing.net/th/id/OIP-C.f8CxgtKadliXH5ItHqye8gHaFf?w=242&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
                name: "手抓饼",
                spent: 34,
                likeNum: 36,
            },
            {
                _id: 6,
                src: "https://tse3-mm.cn.bing.net/th/id/OIP-C.f8CxgtKadliXH5ItHqye8gHaFf?w=242&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
                name: "手抓饼",
                spent: 36,
                likeNum: 36,
            },
            {
                _id: 7,
                src: "https://tse3-mm.cn.bing.net/th/id/OIP-C.f8CxgtKadliXH5ItHqye8gHaFf?w=242&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
                name: "手抓饼",
                spent: 74,
                likeNum: 36,
            },
            {
                _id: 8,
                src: "https://tse3-mm.cn.bing.net/th/id/OIP-C.f8CxgtKadliXH5ItHqye8gHaFf?w=242&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
                name: "手抓饼",
                spent: 84,
                likeNum: 36,
            }
        ],
        recommendFood:[],
        recommendFoodNum:0,
    },
    onLoad:function(){
        var value=wx.getStorageSync("ware");
        this.setData({
            signatureDish:value.signatureDish,
            wareRecommendNum:value.wareRecommendNum,
            recommendFood:value.recommend,
            recommendFoodNum:value.recommendFoodNum,
        })
    },
    onClickLeft(){
        wx.navigateBack({
          delta: 1,
        })
    }
})