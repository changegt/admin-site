//关于中币的相关接口

import Vue from 'vue';
import $ from 'jquery';

const tradeUrl = 'http://api.zb.com/data/v1/trades?market=btc_usdt';
const tradeArr = ['btc_usdt','bcc_usdt','ubtc_usdt','ltc_usdt','eth_usdt','etc_usdt','bts_usdt','eos_usdt','qtum_usdt','hsr_usdt','xrp_usdt','bcd_usdt','dash_usdt','btc_qc','bcc_qc','ubtc_qc','ltc_qc','eth_qc','etc_qc','bts_qc','eos_qc','qtum_qc','hsr_qc','xrp_qc','bcd_qc','dash_qc','bcc_btc','ubtc_btc','ltc_btc','eth_btc','etc_btc','bts_btc','eos_btc','qtum_btc','hsr_btc','xrp_btc','bcd_btc','dash_btc','sbtc_usdt','sbtc_qc','sbtc_btc','ink_usdt','ink_qc','ink_btc','tv_usdt','tv_qc','tv_btc','bcx_usdt','bcx_qc','bcx_btc','bth_usdt','bth_qc','bth_btc','lbtc_usdt','lbtc_qc','lbtc_btc'];

module.export = {
	tradeAjax () {
		$.ajax({
			url: tradeUrl,
			type: 'get',
			dataType: 'jsonp',
			data: {market: 'btc_usdt'}
		});
	}
};

