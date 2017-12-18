<template>
	<el-menu
		:default-active="activeindex"
		class="el-menu-vertical-demo"
		@open="handleOpen"
		@close="handleClose"
		router
		background-color="#545c64"
		text-color="#fff"
		active-text-color="#ffd04b">
		<template v-for="(list, i) in bar">
			<el-submenu :index="i+1+''">
				<template slot="title">
					<i :class="list.icons"></i>
					<span>{{list.level}}</span>
				</template>
				<el-menu-item-group v-for="(item, j) in list.levelLists">
					<el-menu-item :index="item.href">{{item.level}}</el-menu-item>
				</el-menu-item-group>
			</el-submenu>
		</template>
	</el-menu>
</template>

<script type="text/javascript">
	import router from 'vue-router';

	function side () {
		this.init();
	};
	side.prototype = {
		init () {
			this.json = {};
		},
		setLevel1 (data, num) {
			this.json[num] = data;
			this.json[num].id = 'level1-'+num;
			this.json[num].levelLists = [];
		},
		setLevel2 (data, toLastLevel, num) {
			var $lastLevel = this.json[toLastLevel];
			if(!!$lastLevel){
				$lastLevel.levelLists[num] = data;
				$lastLevel.levelLists[num]['id'] = 'level2-'+num;
			}
		},
		get () {
			return this.json;
		}
	};

	// var sideObj = new side();
	// sideObj.setLevel1({'level':'学习','icons':'el-icon-location'},0);
	// sideObj.setLevel1({'level':'工作','icons':'el-icon-menu'},1);
	// sideObj.setLevel1({'level':'设置','icons':'el-icon-setting'},2);
	
	// sideObj.setLevel2({'level':'vue','icons':'el-icon-location'},0,0);
	// sideObj.setLevel2({'level':'nodejs','icons':'el-icon-menu'},0,1);
	// sideObj.setLevel2({'level':'其他','icons':'el-icon-setting'},0,2);
	
	var arr = [
				{
					id:'level1-1',
					level: '学习',
					icons: 'el-icon-location',
					levelLists: [
						// {
						// 	id: 'level2-1',
						// 	level: 'vue',
						// 	icons: 'el-icon-location',
						// 	href : ''
						// },
						// {
						// 	id: 'level2-2',
						// 	level: 'nodejs',
						// 	icons: 'el-icon-menu',
						// 	href : ''
						// },
						{
							id: 'level2-3',
							level: 'zb',
							icons: 'el-icon-setting',
							href : '/zb/index/'
						}
					]
				},
				{
					id:'level2-1',
					level: '工作',
					icons: 'el-icon-menu',
				},
				{
					id:'level3-1',
					level: '设置',
					icons: 'el-icon-setting',
				}
			];
	export default {
		name: 'left',
		props: ['activeindex'],
		data () {
			console.log(this.activeindex);
			return {
				bar: arr
			};
		},
		mounted () {
			console.log(this.activeindex);
		},
		methods: {
	      	handleOpen(key, keyPath) {
	      	},
	      	handleClose(key, keyPath) {
	      	},
	    }
	}
</script>

<style>
	.el-menu{
		min-height: 100%;
		overflow: hidden;
	}
</style>