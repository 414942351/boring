import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import Recommend from '../pages/Recommend'
import Video from '../pages/Video'
import Hot from '../pages/hot'

Vue.use(Router)
export const routes = [
	  {
	  	path: '/',
	  	// name: Home,
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
	  }
  ]
export default new Router({
  routes,
})
