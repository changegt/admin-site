<template>
	<el-container>
		<el-container>
			<el-aside>
			    <left :activeindex="'/zb/index/'"></left>
			</el-aside>
			<el-main style="text-align: left;">
				<template v-for="item in zbPage">
					<el-button @click="jumpTo(item.path)">{{item.name}}页面</el-button>
				</template>
<!-- 				<li class="zb-main-item" @click="jumpTo('trade')"><a href="javascript:void(0);">trade ==></a></li>
				<li class="zb-main-item" @click="jumpTo('market')"><a href="javascript:void(0);">market ==></a></li> -->
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
	import left from '@/components/backstage/left.vue'

	const zbPage = [
		{
			pageid: 1,
			name: 'trade',
			path: 'trade'
		},
		{
			pageid: 2,
			name: 'market',
			path: 'market'
		}
	];

	export default {
		name: 'tradeComponent',
		data () {
			return {
				zbPage: zbPage
			};
		},
		mounted () {
		},
		methods : {
			jumpTo (url) {
				this.$router.push('/zb/'+url+'/');
			}
		},
		components: {
			left
		}
	}
</script>

<style>
	.zb-main-wrap{
		list-style: decimal;
	}
	.zb-main-item{
		padding: 10px 8px;
		line-height: 18px;
		cursor: pointer;
		text-align: left;
	}
	.zb-main-item a{
		text-decoration: none;
		color: #444;
	}
</style>