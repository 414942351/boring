<template>
<slider :items="imgList" :width="750" :height="350" :pagination="true" :auto-play="true" :speed="2000" :sync="true"></slider>
</template>
<script>
	// import {getUserList, addUser} from '../api/api'
	import slider from '../components/slider/slider'
	// import count from '../components/count/count'
	export default {
		data() {
			return {
				imgList: [
					{
						src: 'http://img.mp.itc.cn/upload/20160811/d4d58e59d45440bba4810ed2d726b203_th.jpg'
					},{
						src: 'http://img4q.duitang.com/uploads/blog/201408/28/20140828212148_yzCZF.thumb.700_0.jpeg'
					},{
						src:'http://mvimg1.meitudata.com/557ea665e24cd7193.jpg'
					}
				]
			}
		},
		created() {

		},
		components: {
			slider
		},
		methods: {
		}
	}
</script>
<style>
	ul {
		list-style: none;
		width: 100%;
		padding: 0;
	}
	img {
		display: block;
		width: 100%;
	  /*width: 40px;*/
	  /*height: 300px;*/
	  /*margin: auto;*/
	}
</style>