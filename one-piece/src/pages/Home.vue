<template>
	<div class="home-wrapper">
		<el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
		  <el-menu-item index="1">处理中心</el-menu-item>
		  <el-submenu index="2">
		    <template slot="title">我的工作台</template>
		    <el-menu-item index="2-1">选项1</el-menu-item>
		    <el-menu-item index="2-2">选项2</el-menu-item>
		    <el-menu-item index="2-3">选项3</el-menu-item>
		  </el-submenu>
		  <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
		</el-menu>
		<div class="line"></div>
	</div>
</template>
<script>
	import * as util from '../utils'
	import Api from '../api'
	export default {
		data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
	}
</script>
<style lang="stylus">
	// // @import ''
	// .toast-wrapper
	// 	position fixed 
	// 	height 100%
	// 	width 100%
	// 	background url(../assets/resource/index_toast.jpg)
	// 	background-repeat no-repeat
	// 	background-size cover
	// .turn-table 
	// 	height 200px
	// 	width 200px
	// 	background red	
	// 	margin 0 auto
	// 	margin-top 200px
</style>