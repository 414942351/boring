<template>
	<div class="home-wrapper">
		<Swipe :itemList="itemList"></Swipe>
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
			this.getInitData();
		},
		methods: {
			getInitData() {
				this.$axios('/api/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&start=0&count=100&client=somemessage&udid=dddddddddddddddddddddd')
				.then((res) => {
					console.log(res);
				})
			}
		},
		components: {
			Swipe
		}
	}
</script>
<style>
	
</style>