import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import index from '@/pages/index'
import login from '@/pages/login'
import inou2 from '@/pages/trpgs/inou2'
import ga1 from '@/pages/trpgs/ga1'
import numa1 from '@/pages/trpgs/numa1'
import yoi1 from '@/pages/trpgs/yoi1'
import void1 from '@/pages/trpgs/void1'


Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: "/login",
            name: "login",
            component: login
        },
        {
            path: "/inou2",
            name: "inou2",
            component: inou2
        },
        {
            path: "/ga1",
            name: "ga1",
            component: ga1
        },
        {
            path: "/numa1",
            name: "numa1",
            component: numa1
        },
        {
            path: "/yoi1",
            name: "yoi1",
            component: yoi1
        },
        {
            path: "/void1",
            name: "void1",
            component: void1
        }
    ],
    scrollBehavior() {
        return {x: 0,y: 0}
    }
})