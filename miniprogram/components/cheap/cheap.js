// components/cheap/cheap.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        cheapWare:{
            type:Array,
            value:[]
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
        handleBuy(){
            wx.navigateToMiniProgram({
                appId: 'wx4b6d31e8acb91b07',
                path: '',
                extraData: {
                  foo: 'bar'
                },
                envVersion: 'develop',
                success(res) {
                  // 打开成功
                }
              })
        }
    }
})
