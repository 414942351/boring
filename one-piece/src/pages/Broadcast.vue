<template>
	<div>
		<p>{{ count }}</p>
	  <p>
	    <button @click="increment">+</button>
	    <button @click="decrement">-</button>
	    <button @click="actionA">actionA</button>
	  </p>
	</div>
</template>

<script>
	import store from '../store'
	// console.log(store.state)
	// const store = new Vuex.Store({
	// 	state: {
	// 		count: 0
	// 	},
	// 	mutations: {
	// 		increment: state => state.count++,
	// 		decrement: state => state.count--
	// 	}
	// })
	export default {
		computed: {
			count() {
				return store.state.count
			}
		},
		methods: {
			increment() {
				store.commit({
					type: 'increment',
					amount: 10
				})
				// store.dispatch('increment')
			},
			decrement() {
				store.commit('SOME_MUTATION')
			},
			actionA() {
				store.dispatch('actionA').then(() => {
					console.log('actionA is commited')
				}) 
			}
		}
	}
</script>

<style lang="stylus">
	
</style>