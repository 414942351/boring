<template>
	<div>
		<button v-on:click="increment">{{ counter }}</button>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				counter: 0
			}
		},
		methods: {
			increment() {
				this.counter += 1;
				this.$emit('increment');
			}
		}
	}
</script>