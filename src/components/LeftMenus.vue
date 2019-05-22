<template>
    <div class="aside-menus">
        <!--    default-active="2" -->
        <el-menu
            class="el-menu-vertical"
            :background-color="bgColor"
            :text-color="textColor"
            :active-text-color="activeTextColor"
            :router="true">
            <!-- 循环遍历出所有的 菜单项目 -->
            <block v-for="(menu,index) in menus" :key="index">
                    <!-- 第一级 如果存在 url 就说明没有子级菜单 -->
                    <block v-if="menu.url">
                        <!-- 一级 待路由跳转的 -->
                        <el-menu-item :route="{path: menu.url}" :index="index">
                            <!-- 一级路由是带 图标的 -->
                            <i :class="menu.icoClass"></i>
                            <!-- 名称 -->
                            <span slot="title">{{menu.label}}</span>
                        </el-menu-item>
                    </block>
                    <!-- 如果有子级菜单的,就不能有  route 跳转,只能是子路由跳转-->
                    <block v-else>
                        <!-- 带子级的 路由循环 -->
                        <el-submenu :index="index">
                            <!-- 带 子级路由 的第一级标题 -->
                            <template slot="title">
                                <!-- 图标 -->
                                <i :class="menu.icoClass"></i>
                                <!-- 名称 -->
                                <span>{{menu.label}}</span>
                            </template>
                            <!-- 子级路由循环 -->
                            <el-menu-item v-for="(item,index2) in menu.children" 
                            :key="index2" 
                            :index="index+'-'+index2"
                            :route="{path:item.url}">{{item.label}}</el-menu-item>
                        </el-submenu>
                    </block>
            </block>
            <!-- <el-submenu index="1">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span>系统管理</span>
                </template>
                <el-menu-item-group>
                <el-menu-item index="1-1">网站管理</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
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
            </el-menu-item> -->
        </el-menu>
    </div>
</template>

<script>
    export default {
        name:"aside-menus",
        props: {
            // 菜单列表
            menus:{
                type:Array,
                default:[]
            },
            // 左侧菜单栏的背景颜色
            bgColor: {
                type: String,
                default: '#EEEEEE'
            },
            // 左侧菜单的字体颜色
            textColor:{
                type:String,
                default:"#000000"
            },
            // 左侧选中状态的字体颜色
            activeTextColor:{
                type:String,
                default:"#ff6600"
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
}

// 将左侧菜单栏的最小值进行限制为190px,否则就会多出一些边框
.el-submenu .el-menu-item{
  box-sizing: border-box;
  min-width: 190px;
}
</style>