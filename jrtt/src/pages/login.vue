<template>
	<div class="login-box">
		<mt-field label="用户名" placeholder="请输入用户名" v-model="userData.username"></mt-field>
		<mt-field label="密码" placeholder="请输入密码" type="password" v-model="userData.password"></mt-field>
		<mt-button class="login-btn" size="large" type="primary" @click="login">确定</mt-button>
		<mt-button class="reg-btn" size="small" type="default" @click="goReg">注册</mt-button>
	</div>
</template>
<script>
	import {login} from '../api/api'
	export default {
		data() {
			return {
				userData: {
					username: '',
					password: ''
				}
			}
		},
		methods: {
			goReg() {
				this.$router.push('./reg')
			},
			login() {
				let _this = this;
				login(_this.userData)
				.then((response) => {
					console.log(response)
				})
			}
		}
	}
</script>
<style lang="less">
	.login-box {
		padding: 10px;
	}
	.reg-btn {
		float: right;
		margin-top: 10px;
	}
</style>