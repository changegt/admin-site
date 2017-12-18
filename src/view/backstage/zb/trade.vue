<template>
	<el-container>
		<el-container>
			<el-aside>
			    <left :activeindex="'/zb/index/'"></left>
			</el-aside>
			<el-main>
				<div class="trade-wrap">
					{{content}}
				</div>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
	import left from '@/components/backstage/left.vue'
	export default {
		name: 'zbTrade',
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
					_self.operateData(json);
					_self.content = json;
				});
			},

			operateData (data) {
				data = eval('('+data+')');
				
			}
		},
		components: {
			left
		}
	}
</script>

<style>
	
</style>