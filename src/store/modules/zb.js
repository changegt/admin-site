//中币获取数据皆苦 
import zbzpi from '@/api/zbzpi.js';
const zb = {
	state: {
		
	},

	mutations: {
	},

	actions: {
		getTrade ({commit}) {
			return new Promise((resolve, reject) => {
				zbapi.tradeAjax().then((json) => {
					console.log(json);
				});
			});
		}
	}
};

export default zb;

