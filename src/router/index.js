import Vue from 'vue'
import Router from 'vue-router'

//注：引入的组件名用大写，name 字段也用大写
//登录模块
const Login = () => import('@/pages/login')


const Info = resolve => require(['@/pages/pe/info'], resolve)
const Detail = resolve => require(['@/pages/pe/detail'], resolve)
const Fill = resolve => require(['@/pages/pe/fill'], resolve)
const Date = resolve => require(['@/pages/pe/date'], resolve)

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            component: Login,
            name: 'Login'
        },
        {
            path: '/pe/info',
            component: Info,
            name: 'Info'
        },
        {
            path: '/pe/detail',
            component: Detail,
            name: 'Detail'
        },
        {
            path: '/pe/fill',
            component: Fill,
            name: 'Fill'
        },
        {
            path: '/pe/date',
            component: Date,
            name: 'Date'
        },

    ],
    scrollBehavior(to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }

})
