<template>
	<div class="swipe-wrapper" 
			:style="{'height': height + 'px'}">
		<img v-for="item in itemList" :src="item.src" alt="" 
				:style="{'height': height + 'px', 'width': width}">
	</div>
</template>
<script>
	export default {
		props: {
			itemList: {
				type: Array,
				required: true
			},
			height: {
				type: Number,
				required: false,
			},
			width: {
				type: String,
				required: false,
			}
		}
	}
</script>
<style lang="stylus">
	swipe-wrapper
		width 100%
		overflow hidden
		display block
	img 
		position absolute
		float left
		display inline-block
</style>