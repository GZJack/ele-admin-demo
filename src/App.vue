<template>
  <div id="app">
    <!-- 头部 -->
    <header class="admin-header">
      <!-- logo 部分 -->
      <div class="header-logo aside-animation" v-bind:style="{ 'margin-left': isShowAside ? '0px' : '-'+asideWidth}"><h3>公共号后台管理</h3></div>
      <!-- 控制左侧按钮显示与关闭按钮 -->
      <div class="show-hide-aside"><i v-bind:class="isShowAside ? 'el-icon-s-fold' : 'el-icon-s-unfold'" @click="isShowAside=!isShowAside"></i></div>
    </header>
    <!-- 左侧部分 -->
    <aside class="admin-aside aside-animation"  v-bind:style="{ left: isShowAside ? '0px' : '-'+asideWidth}">
      <!-- 使用 element ui tree  menus 可以通过后台api数据请求获得-->
      <!-- <el-tree :data="menus" :props="defaultProps" @node-click="handleNodeClick"></el-tree> -->
      <aside-menus></aside-menus>
    </aside>
    <!-- 右侧部分 -->
    <main class="admin-main aside-animation" v-bind:style="{ left: isShowAside ? asideWidth : '0px'}">
        <keep-alive>
            <router-view/>
        </keep-alive>
    </main>
  </div>
</template>

<script>
// 引入左侧菜单
import LeftMenus from './components/LeftMenus.vue';

import { Loading } from 'element-ui';

import menus from './store/data.js';

export default {
   beforeCreate() {
    //  let loadingInstance1 = Loading.service({ fullscreen: true });
   },
   created() {
    //  let loadingInstance1 = Loading.service({ fullscreen: true });
   },
   components: {
     'aside-menus':LeftMenus,
   },
   data() {
     return {
       // 是否显示左侧菜单栏
       isShowAside:true,
       // 左侧菜单栏的宽度,与本页中less样式的@aside-width相同
       asideWidth:'200px',
       menus:menus,
       defaultProps: {
          children: 'children',
          label: 'label',
          url:'url'
        }
     }
   },
   methods: {
      handleNodeClick(data) {
        // 如果存在url
        if(data.url){
          location.hash = data.url;
        }
        console.log(data);
        console.log(this);
      },
      showAside(e){

        if(isShowAside){

        }
        console.log(e);
      }
    }
}
</script>

<style lang="less">
// 决定顶部的高度
@header-height:45px;
// 左侧的宽度
@aside-width:200px;
// 主题颜色
@theme-color:#ff6600;
// 主题文字颜色
@theme-font-color:#ffffff;

body,html{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
}
.admin-header{
  height: @header-height;
  width: 100%;
  background-color: @theme-color;
  color: @theme-font-color;
  display: flex;
  flex-direction: row;
}
.header-logo,.header-logo h3{
  margin: 0;
  height: @header-height;
  text-align: center;
  line-height: @header-height;
  box-sizing: border-box;
  width: @aside-width;
}
.show-hide-aside{
  height: @header-height;
  box-sizing: border-box;
  width: @header-height;
  line-height: @header-height;
  text-align: center;
  box-sizing: border-box;
}

.show-hide-aside i{
  font-size: 24px;
  line-height: @header-height;
  cursor: pointer;
}
.admin-aside{
  position: absolute;
  // border-right: 1px solid @theme-color;
  width: @aside-width;
  left: 0;
  top: @header-height;
  bottom: 0;
}
.admin-main{
  position: absolute;
  top: @header-height;
  right: 0;
  bottom: 0;
  left: @aside-width;
  background-color: #f2f2f2;
}



.aside-animation{
    transition: all .3s cubic-bezier(.55,0,.1,1);
}


</style>
