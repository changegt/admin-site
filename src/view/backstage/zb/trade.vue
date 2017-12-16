<template>
	<div class="trade-wrap">
		
	</div>
</template>

<script>

	export default {
		name: 'tradeComponent',
		data () {
			return {
				content: ''
			};
		},
		mounted () {
			this.getTrade();
		},
		methods : {
			getTrade () {
				const _self = this;
				_self.$store.dispatch('getTrade').then((json) => {
					_self.content = JSON.stringify(json);
				});
			}
		}
	}
</script>

<style>
	
</style>