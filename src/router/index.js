import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import index from '@/pages/index'
import inou2 from '@/pages/trpgs/inou2'

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
        }
    ],
    scrollBehavior() {
        return {x: 0,y: 0}
    }
})