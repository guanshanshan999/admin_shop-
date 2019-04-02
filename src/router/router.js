/* eslint-disable */

//注意点:模块化工程中,记得使用Vue 安装一下路由功能
import Vue from 'vue'

// 2引入
import VueRouter from 'vue-router'

//3移入组件
import login from '../components/login/Login.vue'
import Home from '../components/home/Home.vue'

//安装一下
Vue.use(VueRouter)

//实例化
const router = new VueRouter({
  //2匹配规则,路由匹配组件
  routes:[
    {path:'/',redirect:'/login'},
    {path:'/login',component:login},
    {path:'/home',component:Home}
  ]
})

//导出 路由
export default router
