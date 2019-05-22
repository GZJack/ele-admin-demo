import Vue from 'vue'
// 引入路由插件
import Router from 'vue-router'
// 引入 主页
import Home from '../views/Home.vue'


// 使用注册插件
Vue.use(Router)

export default new Router({
  // mode: 'history',
  mode:'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
      path:'/system/wx',
      name:'system_wx',
      component:() => import('../views/system/Wx.vue')
    }
  ]
})
