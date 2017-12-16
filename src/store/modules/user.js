/*
	user方法
	实现
		login 	登录方法
		getUserInfo 获取用户信息
 */

import { login,valiCookie } from '@/api/user.js'
import { setToken } from '@/utils/token'

const user = {
	state: {
		username: '',
		avatar: '',
		token: ''
	},

	mutations: {
		SET_USERINFO (state, userinfo) {
			state.username = userinfo.username;
			state.avatar = userinfo.avatar;
			state.token = userinfo.token;
		},

		SET_Token (state, token){
			setToken(token);
		}
	},

	actions: {
		valiCookies ({commit}) {
			return new Promise((resolve, reject) => {
				valiCookie().then(data => {
					if(!data.errorCode){
						//说明当前的cookie是正确的
						commit('SET_COOKIES', data.result.username);
					}
				});
			});
		},
		Login ({commit}, userinfo) {
			return new Promise((resolve, reject) => {
				login(userinfo).then(data => {
					if(data.errorCode === 0){
						commit('SET_USERINFO', data.result);
						commit('SET_Token', data.result.token);
					}
					resolve(data);
				});
			});
		}
	}
};

export default user ;
