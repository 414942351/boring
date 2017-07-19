<template>
	<div class="home-wrapper">
		<Swipe v-if="itemList.length" :itemList="itemList"></Swipe>
		<div class="heiheihei" ref="testNode"></div>
	</div>
</template>
<script>
	import Swipe from '../components/swipe'
	export default {
		data() {
			return {
				itemList: []
			}
		},
		created() {
			setTimeout(()=> {
				console.log(this.$refs.testNode);
			});
			this.getInitData();
		},
		methods: {
			getInitData() {
				let _this = this;
				_this.$axios('/api/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&start=0&count=100&client=&udid=')
				.then((res) => {
					_this.imgList = res.data.subjects;
				});
			}
		},
		components: {
			Swipe
		}
	}
</script>
<style>
	
</style>