<template>
	<div class="arc-progress-wrapper">
		<canvas class="canvas-bg" ref="canvasBg" :width="400" :height="400"></canvas>
		<canvas class="canvas" ref="canvas" :width="400" :height="400"></canvas>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				canvasBgCtx: null,
				canvasCtx: null,
				timer: null,
			}
		},
		props: {
			config: {
				type: Object,
				default() {
					return {
						start: 0,//起始弧度
						to: Math.PI,//结束弧度
						scale: Math.PI/180,//速度
						end: null,//每次结束弧度
						total: 2 * Math.PI, //总弧度
						wdith: 400,
						height: 400,
					}
				}
			}
		},
		created() {
			setTimeout(()=> {
				this.init();
			})
		},
		methods: {
			init() {
				this.canvasBgCtx = this.$refs.canvasBg.getContext('2d');
				this.canvasCtx = this.$refs.canvas.getContext('2d');
				this.drawBg(0, this.config.total);
			},
			drawBg(start, total) {
				let ctx = this.canvasBgCtx;
				ctx.beginPath();
				ctx.arc(200, 200, 50, start, total, false)
				ctx.strokeStyle = '#ccc';
				ctx.lineWidth = 10;
				ctx.stroke();
				this.drawAnimation();
			},
			drawProgress() {
				let ctx = this.canvasCtx;
				ctx.arc(200, 200, 50, this.config.start, this.config.end, false);
				ctx.strokeStyle = '#000';
				ctx.lineCap = 'round';
				ctx.lineWidth = 10;
				ctx.stroke();
				this.config.end += this.config.scale;
				if(this.config.end >= this.config.to) {
					this.config.end = this.config.to;
				}
				this.config.start = this.config.end;
				console.log(this.config.end, this.config.to)
			},
			drawAnimation() {
				// this.end = this.scale;
				this.timer = setInterval(() => {
					if(this.config.end >= this.config.to) {
						// this.end = this.to;
						clearInterval(this.timer);
					}
					this.drawProgress()
				}, 50)
			}
		}
	}
</script>
<style lang="stylus">
	.arc-progress-wrapper
		position relative
	.canvas-bg
		position absolute
		top 0
		left 0
	.canvas
		position absolute
		top 0
		left 0
		z-index 400
</style>














