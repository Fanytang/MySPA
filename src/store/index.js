import Vue from 'vue'
import Vuex from 'vuex'
// 引入modules
import common from './modules/common.js'
import home from './modules/home.js'
import friend from './modules/friend.js'
import personal from './modules/personal.js'


Vue.use(Vuex)

const store = new Vuex.Store({
	modules:[
		common,
		home,
		friend,
		personal,
	]
})
export default store;
