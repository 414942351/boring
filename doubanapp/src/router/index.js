import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Movie from '@/pages/Movie'
import Book from '@/pages/Book'
import Broadcast from '@/pages/Broadcast'


Vue.use(Router)
export const routes = [
 	{
	  path: '/',
	  name: '首页',
	  component: Home
	},
	{
	  path: '/movie',
	  name: '电影',
	  component: Movie
	},
	{
	  path: '/book',
	  name: '图书',
	  component: Book
	},
	{
	  path: '/broadcast',
	  name: '广播',
	  component: Broadcast
	}
];
export default new Router({
  routes
})
