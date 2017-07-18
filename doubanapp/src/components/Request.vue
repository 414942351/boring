<template></template>
<script>
	export default {
		created() {
			let url = '/api/v2/movie/subject/26865690?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&client=&udid='
			this.$axios.get(url)
			.then(function(response) {
				console.log(response);
			})
		}
	}
</script>