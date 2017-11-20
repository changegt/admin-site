<template>
	<div class="el-container">
		hello, {{username}}
	</div>	
</template>

<script type="text/javascript">
	import { mapGetters } from 'vuex'
	export default {
		name: 'backstage',
		computed: {
			...mapGetters([
				'username',
				'avatar'
			])
		}
	}
</script>

<style>
	
</style>

