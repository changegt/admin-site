/*
	api 	关于user的接口
 */
import Vue from 'vue'
import $ from 'jquery'

export function login (params) {
	return $.ajax({
		url: 'http://localhost:3000/user/login',
		type: 'get',
		data: {
			username:params.username,
			password:params.password
		},
		dataType: 'jsonp'
	});
}

export function valiCookie() {
	return Vue.jsonp('http://localhost:3000/valiCookies');
}

export function getInfo() {
	return Vue.jsonp('http://localhost:3000/user/getinfo');
}