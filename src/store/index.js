/*store主文件*/
import Vue from 'vue';
import Vuex from 'vuex';

import user from './modules/user';
import zb from './modules/zb';
import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		user,
		zb
	},
	getters
});
