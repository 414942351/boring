// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import Mock from './mock'
import VueLazyload from 'vue-lazyload'
Vue.use(Vuex)
Vue.use(MintUI)
Vue.use(VueLazyload)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
