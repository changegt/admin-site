import cookie from 'js-cookie'

const cookieKey = 'loginUser';

export function getToken() {
	return cookie.get(cookieKey);
}

export function setToken(argument) {
	return cookie.set(cookieKey, argument);
}