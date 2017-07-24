<template>
	<div class="home-wrapper">
	<Calendar></Calendar>
		<!-- <ArcProgress :config="config"></ArcProgress> -->
	</div>
</template>
<script>
	import Calendar from '../components/Calendar'
	// import ArcProgress from '../components/ArcProgress'
	import Api from '../api'
	export default {
		data() {
			return {
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
			console.log()
			// console.log(~~2)
			this.getInitData();
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
<style>
	
</style>