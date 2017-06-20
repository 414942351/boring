<template>
	<div class="reg-box">
		<mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
		<mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
		<mt-button class="login-btn" size="large" type="primary" @click="regUser">注册</mt-button>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				username: '',
				password: ''
			}
		},
		methods: {
			regUser() {
				// sessionStorage.setItem()
			}
		}
	}
</script>
<style lang="less">
	.reg-box {
		padding: 10px;
	}
</style>