<template>
    <!-- 微信页面 -->
    <page-tpl :breadcrumbs="[{label:'系统管理'},{label:'公众号管理'}]">
        <h1>微信管理</h1>
    </page-tpl>
</template>

<script>
    import PageTpl from '../../components/PageTpl.vue';
    export default {
        name:'page-wx',
        components:{
            'page-tpl':PageTpl
        }
        
    }
</script>

<style lang="less">

</style>