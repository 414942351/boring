<template>
	<div class="movie-wrapper">
	</div>
</template>
<script>
	// import '../validation'
	export default {
		data() {
			return {
				comment: '',
				// validation: ''
			}
		},
		created() {
			console.log(this.$validation)
			// this.validation = this.$validation
		}
	}
</script>
<style lang="stylus">
	
</style>