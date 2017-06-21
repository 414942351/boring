<template>
	<div ref="container" >
		<img v-for="item in imgURL" v-lazy.container ="item.imgUrl"/>
	</div>
</template>
<script>
	import {getImgURL} from '../api/api'
	import App from '../App'
	export default {
		data() {
			return {
				imgURL: []
			}
		},
		created() {
			getImgURL()
			.then(response => {
				this.imgURL = response.data.data;
			})
		},
		components: {
			App
		},
		methods: {
			handler(component) {
				console.log('this component is showing');
			},
			computed: {

			}
		}
	}
</script>
<style>	
	img[lazy=loading] {
    /*your style here*/
    width: 100%;
    /*height: 10px;*/
  }
  img[lazy=error] {
    /*your style here*/
  }
  img[lazy=loaded] {
    /*your style here*/
    width: 100%;

    height: 200px;
  }
  /*
  or background-image
  */
  .yourclass[lazy=loading] {
    /*your style here*/
  }
  .yourclass[lazy=error] {
    /*your style here*/
  }
  .yourclass[lazy=loaded] {
    /*your style here*/

  }
</style>