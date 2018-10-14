/**
 * Created by zhengxinshuo on 2018/8/18.
 * 一个下划线滑动的tab选项卡
 */
import Vue from 'vue'
import ComTabItem from './tabItem.vue'
import ComAnimateTab from './animateTab.vue'

export{
    ComAnimateTab,
    ComTabItem
}
export default {
    install(){
        Vue.component('ComAnimateTab', ComAnimateTab);
        Vue.component('ComTabItem', ComTabItem);
    }
}