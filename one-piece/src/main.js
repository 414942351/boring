// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
import store from './store'
import Validator from 'vue-validator'
import App from './App'
Vue.use(ElementUI)
Vue.use(Vuex);
Vue.use(Validator);
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
