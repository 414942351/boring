<template>
	<div>
		recommend
	</div>
</template>
<script>
	import {getUserList, addUser} from '../api/api'
	export default {
		data() {
			return {
				alertData: {
					msg: '孤舟蓑笠翁'
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