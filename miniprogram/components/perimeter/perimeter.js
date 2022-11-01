// components/perimeter/perimeter.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        perimeterList:{
            type:Object,
            value:null,
        },
        perimeterTabs:{
            type:Array,
            value:[]
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        perimeterList:[],
        perimeterTabs:[]
    },

    /**
     * 组件的方法列表
     */
    methods: {
        handleItemTabs(e) {
            const {
              index
            } = e.currentTarget.dataset;
            let {
              perimeterTabs
            } = this.data;
            perimeterTabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);
            this.setData({
              perimeterTabs
            });
          },
    }
})
