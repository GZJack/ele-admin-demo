<template>
    <div class="aside-menus">
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#EEEEEE"
            text-color="#000000"
            active-text-color="#ff6600"
            :router="false">
            <el-submenu index="1">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
                </template>
                <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item :route="{path:'/about'}" index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item :route="{path:'/wx'}" index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
            </el-menu-item>
        </el-menu>
        <div style="height:50px"></div>
    </div>
</template>

<script>
    export default {
        name:"aside-menus",
        props: {
            bgColor: {
                type: String,
                default: '#ffffff'
            },
            textColor:{
                type:String,
                default:""
            }
        },

    }
</script>

<style lang="less">
// 引入less的变量文件
@import url('../assets/less/var.less');

// 左侧按钮
.aside-menus{
    min-width: 190px;
    background-color: @theme-color;
}

// 将左侧菜单栏的最小值进行限制为190px,否则就会多出一些边框
.el-submenu .el-menu-item{
  box-sizing: border-box;
  min-width: 190px;
}
</style>