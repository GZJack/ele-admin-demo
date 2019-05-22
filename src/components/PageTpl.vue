<template>
    <div class="main-page">
        <!-- 面包屑 -->
        <div class="main-breadcrumb">
            <!-- 整个面包屑  separator = 分隔符 -->
            <el-breadcrumb separator="/">
                <!-- 首页是固定的 -->
                <el-breadcrumb-item>
                    <a :href="indexUrl">首页</a>
                </el-breadcrumb-item>
                <!-- 第一级菜单 -->
                <el-breadcrumb-item v-for="(breadcrumb,index) in breadcrumbs" :key="index">
                    <!-- 需要带链接的 -->
                    <a v-if="breadcrumb.url" :href="breadcrumb.url">{{breadcrumb.label}}</a>
                    <!-- 不需要带链接的 -->
                    <a v-else>{{breadcrumb.label}}</a>
                </el-breadcrumb-item>
            </el-breadcrumb>

            <!-- 右侧的刷新按钮,可以刷新本页的后台请求 -->
            <div>
                <span class="page-refresh"><i class="el-icon-refresh" @click.stop="reload"></i></span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'page-tpl',
        props: {
            // 首页的链接
            indexUrl:{
                type:String,
                default:'/'
            },
            breadcrumbs: {
                type: Array,
                default: []
            },
        },
        methods: {
            reload() {
                console.log('重新加载');
            }
        },
        
    }
</script>

<style lang="less">
.main-page{
    width: 100%;
    height: 100%;
    background-color: #f2f2f2;
}
.main-breadcrumb{
    height: 20px;
    display: flex;
    flex-direction: row;
    line-height: 20px;
    font-size: 14px;
    justify-content: space-between;
    align-items: center;
    padding: 5px 30px;
    background-color: #ffffff;
}

.page-refresh i{
    background-color: #67c23a;
    color: #ffffff;
    border-radius: 50%;
    font-size: 18px;
    cursor: pointer;
    transition: all .3s cubic-bezier(.55,0,.1,1);
}
.page-refresh i:hover{
    transform: rotate(-360deg);
}

// .main-breadcrumb a{
//     color: #999999!important;
// }

// .main-breadcrumb  a:hover{
//     color: #0bf866;
// }
</style>