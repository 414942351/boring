import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
// import getters from './getters'
import mutations from './mutations'
// import broadcast from './modules/broadcast'
Vue.use(Vuex)
// const state
const state = {
	count: 0,
	todos: [{
		id: 1,
		text: '...',
		done: true
	}, {
		id: 2,
		text: '...',
		done: false
	}]
}
const getters = {
	doneTodos: state => {
		return state.todos.filter(todo => todo.done)
	}
}
export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations
});
// export default store;

