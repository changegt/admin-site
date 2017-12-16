<template>
	<ul class="zb-main-wrap">
		<li class="zb-main-item" @click="jumpTo('trade')"><a href="javascript:void(0);">trade ==></a></li>
		<li class="zb-main-item" @click="jumpTo('market')"><a href="javascript:void(0);">market ==></a></li>
	</ul>
</template>

<script>
	import zbapi from '@/api/zbapi'
	export default {
		name: 'tradeComponent',
		data () {
			return {};
		},
		mounted () {
		},
		methods : {
			jumpTo (url) {
				this.$router.push('/zb/'+url+'/');
			}
		}
	}
</script>

<style>
	
</style>