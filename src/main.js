import Vue from 'vue'
// 引入 饿了么 ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 全局注册 main 页面组件
// import PageTpl from './components/PageTpl.vue';

// Vue.component('page-tpl',PageTpl);

import App from './App.vue'
// 引入router 配置
import router from './route/router.js'
// 引入 store 配置
import store from './store/store.js'

// 注册 element-ui 插件
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
