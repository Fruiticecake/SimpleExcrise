// components/bottom-comment/bottom-comment.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        isWriteComment: {
            type: Boolean,
            value: false,
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
        backIndex(){
            this.setData({
                isWriteComment:false,
            })
        }
    }
})