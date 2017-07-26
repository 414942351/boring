<template>
	<div class="home-wrapper">
		<div class="toast-wrapper" v-show="bShowToast"></div>
		<div class="turn-table"></div>
	<!-- <Calendar></Calendar> -->
		<!-- <ArcProgress :config="config"></ArcProgress> -->
	</div>
</template>
<script>
	import Calendar from '../components/Calendar'
	import * as util from '../utils'
	import Api from '../api'
	export default {
		data() {
			return {
				bShowToast: false,
				itemList: [],
				// config: {
				// 	start: 0,//起始弧度
				// 	to: Math.PI,//结束弧度
				// 	scale: Math.PI/90,//速度
				// 	end: 0,//每次结束弧度
				// 	total: 2 * Math.PI, 
				// 	wdith: 400,
				// 	height: 400,
				// }
			}
		},
		// beforeRouteEnter(to, from, next) {
			
		// },
		created() {
			// setTimeout(()=> {
			// 	this.bShowToast = false;
			// }, 1500);
			// console.log(util.formatDate(423453245235))
			// console.log(~~2)
			// this.getInitData();

		},
		methods: {
			getInitData() {
				let _this = this;
				_this.$axios.get('/imageList')
				.then((response) => {
					// console.log(response.data);
					_this.itemList = response.data;
				})
			}
		},
		components: {
			Calendar
		}
	}
</script>
<style lang="stylus">
	// @import ''
	.toast-wrapper
		position fixed 
		height 100%
		width 100%
		background url(../assets/resource/index_toast.jpg)
		background-repeat no-repeat
		background-size cover
	.turn-table 
		height 200px
		width 200px
		background red	
		margin 0 auto
		margin-top 200px
</style>