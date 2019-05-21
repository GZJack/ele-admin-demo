import Vue from 'vue'
import App from './App.vue'
// 引入router 配置
import router from './route/router.js'
// 引入 store 配置
import store from './store/store.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
