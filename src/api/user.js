/*
	api 	关于user的接口
 */
import Vue from 'vue'

export function login (params) {
	return Vue.jsonp('http://localhost:3000/login?username='+params.username+'&password='+params.password);
}