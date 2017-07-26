import { SOME_MUTATION } from './mutation-types'
export default {
	[SOME_MUTATION](state) {
		console.log('some mutation')
		state.count--
	},
	increment: (state, payload) => {
		state.count += payload.amount
		console.log('increment')
	},
	someMutation: ()=> {
		console.log('someMutation')
	}
	// decrement: state => {
	// 	state.count--
	// }
}