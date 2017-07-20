<template>
	<div class="home-wrapper">
		<Swipe v-if="itemList.length"
		 :itemList="itemList"
		 :height="200"
		 :width="'100%'"
		></Swipe>
	</div>
</template>
<script>
	import Swipe from '../components/swipe'
	import Api from '../api'
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
				let _this = this;
				_this.$axios.get('/imageList')
				.then((response)=> {
					console.log(response.data);
					_this.itemList = response.data;
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