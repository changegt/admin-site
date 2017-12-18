//中币获取数据皆苦 
import zbapi from '@/api/zbapi.js'
const zb = {
	state: {
		
	},

	mutations: {
	},

	actions: {
		getTrade ({commit}) {
			// return new Promise((resolve, reject) => {
			// 	zbapi.tradeAjax().then(data => {
			// 		const returnData = eval('('+data+')');
			// 		resolve(returnData);
			// 	})
			// });
			return zbapi.tradeAjax();
		}
	}
};

export default zb;


