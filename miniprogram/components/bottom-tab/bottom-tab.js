// components/bottom-tab/bottom-tab.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        bottomTabs:{
            type:Array,
            value:[],
        },
        isWriteComment:{
            type:Boolean,
            value:false,
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        bottomTabs:[],
    },

    /**
     * 组件的方法列表
     */
    methods: {
        writeComment(){
            
            this.setData({
                isWriteComment:true
            })
            console.log()
        },
        backIndex(){
            this.setData({
                isWriteComment:false
            })
        },

    }
})
