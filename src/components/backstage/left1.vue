<template>
    <el-container>
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
            <template v-if="(list, i) in barArr">
                <el-submenu :index="i+'1'">
                    <template slot="title">
                        <i :class="list.icons"></i>
                        <span slot="title">{{list.level}}</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </template>
            <template v-else>
                <el-menu-item index="2">
                </el-menu-item>
            </template>
        </el-menu>
    </el-container>
</template>

<script>

    var arr = [
                {
                    id:'level1-1',
                    level: '学习',
                    icons: 'el-icon-location',
                    levelLists: [
                        {
                            id: 'level2-1',
                            level: 'vue',
                            icons: 'el-icon-location'
                        },
                        {
                            id: 'level2-2',
                            level: 'nodejs',
                            icons: 'el-icon-menu'
                        },
                        {
                            id: 'level2-3',
                            level: '其他',
                            icons: 'el-icon-setting'
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
        data() {
            return {
                isCollapse: true,
                barArr: arr
            };
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>