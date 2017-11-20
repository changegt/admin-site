/*
	user方法
	实现
		login 	登录方法
		getUserInfo 获取用户信息
 */

import { login } from '@/api/user.js'

const user = {
	state: {
		username: '',
		avatar: ''
	},

	mutations: {
		SET_USERNAME (state, username) {
			state.username = username;
		},

		SET_AVATAR (state, avatar) {
			state.avatar = avatar;
		}
	},

	actions: {
		Login ({commit}, userinfo) {
			return new Promise((resolve, reject) => {
				login(userinfo).then(data => {
					if(data.errorCode === 0){
						commit('SET_USERNAME', userinfo.username);
					}
					resolve(data);
				});
			});
		}
	}
};

export default user ;
