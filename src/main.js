// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Flexible from 'lib-flexible'
import '../static/font/iconfont.css'
import '../static/reset.css'
import './assets/scss/index.scss'
import 'mint-ui/lib/style.css'
import './lib/protoExtend'
import utils from '../src/lib/utils.js'

import 'nprogress/nprogress.css'
import NProgress from 'nprogress'
import axios from 'axios'
Vue.prototype.$http= axios

import {Indicator, Toast, Popup} from 'mint-ui'
Vue.prototype.$toast = Toast;
Vue.prototype.$Indicator = Indicator;
Vue.prototype.utils = utils;
Vue.component(Popup.name, Popup);

import store from './store'

import OperateFooter from '@/components/footer/operateFooter.js'

Vue.config.productionTip = false;

Vue.use(OperateFooter);


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    data(){
        return{
            userData:{
                phone:'13211211111',
                password:'123123'
            }
        }
    },
    components: {App},
    template: '<App/>'
});

if ('ontouchstart' in document.documentElement) {
    document.body.addEventListener('touchstart', function(){})
}

if(!utils.getLocalStorage('phone')){
    router.push({name:'Login'})
    window.router=router
}

// 简单配置
NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })
router.beforeEach((to, from, next) => { // 动态设置meta
    NProgress.start()
    next()
});

router.afterEach((transition) => {
    NProgress.done()
    //console.log(transition)
});
