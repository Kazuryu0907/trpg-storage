import Vue from 'vue'
import App from './App.vue'

import {BootstrapVue,IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './plugins/vuetify'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false


router.beforeEach((to,from,next) => {
  if(to.matched.some(record => !record.meta.isPublic) && !store.getters.isAuth){
    next({path:'/login',query: {redirect: to.fullPath}});
  } else {
    next();
  }
})

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
