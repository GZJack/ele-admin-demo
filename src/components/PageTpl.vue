<template>
    <div class="main-page">
        <!-- 面包屑 -->
        <div class="main-breadcrumb">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><a href="/">首页</a></el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">系统管理</a></el-breadcrumb-item>
                <el-breadcrumb-item>公共号管理</el-breadcrumb-item>
                <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
            <div>
                <span class="page-refresh"><i class="el-icon-refresh" @click.stop="reload"></i></span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'page-tpl',
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