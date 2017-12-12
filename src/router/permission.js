import cookie from 'js-cookie'
//https://github.com/js-cookie/js-cookie/blob/master/src/js.cookie.js

import router from '@/router'
import store from '@/store'

import { getInfo } from '@/api/user'
import { getToken } from '@/utils/token'

//https://router.vuejs.org/zh-cn/advanced/navigation-guards.html
//vue-router 导航守卫
//router.beforeEach((to, from , next) => {})
//to 即将要进入的路由对象
//from 当前要离开的路由对象
//
//

/*
	if cookie存在
		//登陆过
		if 当前store中存在token
			next()
		else
			发送请求验证token ? to backstage || to login
	else 
		//没有登录过
		to login.vue

 */

router.beforeEach((to, from, next) => {
	if(!! getToken()){
		if(!!store.state.user.token){
			//当前回话store已经缓存token
			if(to.path == '/login'){
				next('/backstage');
			}else{
				next();
			}
		}else{
			//验证token
			getInfo().then(data => {
				if(data.errorCode === 0){
					store.commit('SET_USERINFO', data.result);
					store.commit('SET_Token', data.result.token);
					next('/backstage');
				}
			});
		}
	}else{
		if(to.path == '/login'){
			next();
		}else{
			next('/login');
		}
	}
})

