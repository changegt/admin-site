<template>
	<el-container>
		<!-- <el-header class="com_bg"></el-header> -->
		<el-container>
			<el-aside>
			    <left></left>
			</el-aside>
			<el-main>main</el-main>
		</el-container>
	</el-container>
</template>

<script type="text/javascript">
	import { mapGetters } from 'vuex'
	import left from '@/components/backstage/left.vue'
	
	export default {
		name: 'backstage',
		computed: {
			...mapGetters([
				'username',
				'avatar'
			])
		},
		methods: {
	      	handleOpen(key, keyPath) {
	      	},
	      	handleClose(key, keyPath) {
	      	}
	    },
	    components: {
	    	left
	    }
	}
</script>

<style>
	.com_bg{
		background: rgb(84, 92, 100);
	}
	.el-container{
		height: 100vh;
	}
	.el-aside{
		width: 200px!important;
	}
	.el-main{
		position: relative;
		z-index: 1;
		padding-left: 65px;
	}
</style>

