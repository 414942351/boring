import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
// import getters from './getters'
import mutations from './mutations'
import broadcast from './modules/broadcast'
Vue.use(Vuex)
// const state
const state = {
	count: 0
}
export default new Vuex.Store({
	state,
	actions,
	mutations
});
// export default store;

