<template>
	<div>
		<!-- <alert :showMsg="alertData.showMsg" :btnContent="alertData.btnContent"></alert> -->
		<p>{{ total }}</p>
	  <count v-on:increment="incrementTotal"></count>
	  <count v-on:increment="incrementTotal"></count>
	</div>
</template>
<script>
	import {getUserList, addUser} from '../api/api'
	import alert from '../components/alert/alert'
	import count from '../components/count/count'
	export default {
		data() {
			return {
				total: 0,
				alertData: {
					showMsg: '孤舟蓑笠翁',
					btnContent: '确定'
				}
			}
		},
		created() {
			getUserList({
				user: 'Yan'
			});
			// getUserList();
			addUser({
				username: 'yan',
				password: 'ice'
			})
		},
		components: {
			alert,
			count
		},
		methods: {
			incrementTotal() {
				this.total+=1
			}
		}
	}
</script>
<style>
	ul {
		list-style: none;
		width: 100%;
		padding: 0;
	}
	img {
		display: block;
		width: 100%;
	  /*width: 40px;*/
	  /*height: 300px;*/
	  /*margin: auto;*/
	}
</style>