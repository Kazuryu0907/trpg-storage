import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import index from '@/pages/index'
import inou2 from '@/pages/trpgs/inou2'
import ga1 from '@/pages/trpgs/ga1'
import numa1 from '@/pages/trpgs/numa1'

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: index
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
        }
    ],
    scrollBehavior() {
        return {x: 0,y: 0}
    }
})