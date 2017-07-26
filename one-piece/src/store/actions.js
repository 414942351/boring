export default {
	actionA({commit}) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				commit('someMutation')
				resolve()
			}, 1000)
		})
	},
	actionB({dispatch, commit}) {
		return dispatch('actionA').then(() => {
			commit('someOtherMutation')
		})
	}
}