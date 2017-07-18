<template>
<div class="navbar-wrapper">
	<div class="routes-wrapper">
		<router-link class="navbar-item" 
								 v-for="item in routes" 
								:key="item.id"
								:to="item.path" 
								 tag="li"
								 exact>
								 {{item.name}}
		</router-link>
	</div>
</div>
</template>
<script>
	//传入router array
	export default {
		props: {
			routes: {
				type: Array,
				required: true
			}
		}
	}
</script>
<style lang="less">
	.navbar-wrapper {
		display: flex;
		height: 47px;
		width: 100%;
		align-items: center;
		list-style: none;
		border-bottom: 1px solid #f3f3f3;
		justify-content: flex-end;
		.routes-wrapper {
			// width: 100%;
			float: right;
			// flex-direction: right;
			overflow: hidden;

		}
		.navbar-item {
			// float: left;
			display: inline-block;
			color: #E4A813;
			margin-right: 10px;
		}
		.router-link-active {
			color: #2384E8;
		}
	}
</style>