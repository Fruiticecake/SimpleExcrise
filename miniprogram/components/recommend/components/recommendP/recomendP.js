// components/recommend/components/recommendP/recomendP.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        recommendFoodNum:{
            type:Int32Array,
            value:1
        },
        recommendFood:{
            type:Array,
            value:[],
        },
        recommendTips:{
            type:String,
            value:"近三月人气推荐"
        }
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
        handleItemLike(e){
            console.log(e)
        }
    }
})
