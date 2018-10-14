/**
 * Created by zhengxinshuo on 2018/8/17.
 * 一个页面底部的简易封装
 */
import Vue from 'vue'
import ComOperateFooter from './operateFooter.vue'
import ComOperateItem from './operateItem.vue'

export{
    ComOperateFooter,
    ComOperateItem
}
export default {
    install(){
        Vue.component('ComOperateFooter',ComOperateFooter);
        Vue.component('ComOperateItem',ComOperateItem);
    }
}