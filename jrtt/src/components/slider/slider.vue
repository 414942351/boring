<template>
	<div class="slider-wrapper">
		<div class="slider-item-wrapper" :style="{left:styleLeft+'px' }">
			<img class="slider-item" v-for="item in imgList" :src="item.imgUrl" alt="">
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				styleLeft: 0
			}
		},
		props: {
			imgList: {
				type: Array,
				required: true
			}
		},
		created() {
			setTimeout(()=>{
				this.slide();
			})
		},
		methods: {
			slide: function() {
				let _this = this;
				let slideItem = document.getElementsByClassName('slider-item')[0];
				let slideItemWrapper = document.getElementsByClassName('slider-item-wrapper')[0];

				console.log(slideItemWrapper.offsetWidth)
				let timer = setInterval(() => {
					move();
				}, 2000);
				function move() {
					var speed = 1;
					let timerInside = setInterval(()=> {
						_this.styleLeft -= speed
						if(_this.styleLeft % slideItemWrapper.offsetWidth == 0) {
							console.log('fuck')
							// clearInterval(timer);
							clearInterval(timerInside);
							_this.styleLeft = 0;
							speed = 1
						}
					}, 50)
				}
			},
		}
		
		
	}
</script>

<style lang="less">
	.slider-item-wrapper {
		position: absolute;
		width: 100%;
		height: 200px;
		overflow: hidden;
		.slider-item {
			display: inline-block;
			float: left;
			height: 200px;
			width:  100%;
		}
	}
</style>