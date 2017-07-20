<template>
	<div class="swipe-wrapper" 
			:style="`height: ${height}px`" :width="pageW">
		<div class="img-wrapper" :style="`left:${positionLeft}px`">
			<img v-for="item in itemList" :src="item.src" alt=""
				:style="`height:${height}px`" :width="pageW">
		</div>
		<div class="pagination-wrapper">
			<span v-for="item in itemList" class="pagination"></span>
		</div>
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
		},
		data() {
			return {
				pageW: window.innerWidth,
				positionLeft: 0
			}
		},
		created() {
			// this.slide();
			this.init();
		},
		methods: {
			init() {
				// setInterval(()=> {
				// 	this.slide();
				
				// }, 5000);
			},
			slide() {
				let _this = this;
				let speed = 1;
				let timer = setInterval(()=> {
					_this.positionLeft -= speed;
					if(_this.positionLeft == -4 * _this.pageW) {
						_this.positionLeft = 0
					}
					if(_this.positionLeft % _this.pageW == 0 && _this.positionLeft) {
						clearInterval(timer);
						return;
					}
					console.log(_this.positionLeft, _this.pageW)
				}, 10);
			},
		}
	}
</script>
<style lang="stylus">
	.swipe-wrapper
		position relative
		display block
		overflow hidden
	.img-wrapper 
		position absolute
		width: 400%
		&:after
			display block
			content ''
			clear both
	img 
		box-sizing: border-box
		border 1px solid #000
		float left
		display inline-block
	.pagination-wrapper 
		position absolute
		width 30%
		display flex
		justify-content space-between
	.pagination 
		display inline-block
		height 10px
		width 10px
		border-radius 50%
		background red		
		
</style>