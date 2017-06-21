<template>
	<div>
		<p>{{showMsg}}</p>
		<button v-on:click="fuck">{{btnContent}}</button>
	</div>
</template>
<script>
	export default {
		props: {
			showMsg: {
				type: String,
				required: false,
			},
			btnContent: {
				type: String,
				required: true
			}
		},
		methods: {
			fuck() {
				// console.log('hehe')
				
			}
		}
		// created() {
		// 	console.log('amazing')
		// }
	}
</script>