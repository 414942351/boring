import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login'
import Reg from '../pages/Reg'
import Home from '../pages/home'
import Recommend from '../pages/Recommend'
import Video from '../pages/Video'
import Hot from '../pages/hot'
Vue.use(Router)
export const routes = [
	  {
	  	path: '/',
	  	component: Home,
	  	children: [
	  		{
	  			path: '/',
	  			component: Recommend,
	  			name: 'page1',
	  			hidden: true
	  		},{
	  			path: '/video',
	  			component: Video,
	  			name: 'page2',
	  			hidden: true
	  		},{
	  			path: '/hot',
	  			component: Hot,
	  			name: 'page3',
	  			hidden: true
	  		}
	  	]
	  },
	  {
			path: '/login',
			component: Login,
			name: 'login'
		},
		{
			path: '/reg',
			component: Reg,
			name: 'reg'
		},
  ]
export default new Router({
  routes,
})
