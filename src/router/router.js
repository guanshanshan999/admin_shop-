/* eslint-disable */

//注意点:模块化工程中,记得使用Vue 安装一下路由功能
import Vue from 'vue'

// 2引入
import VueRouter from 'vue-router'

//3移入组件
import login from '../components/login/Login.vue'
import Home from '../components/home/Home.vue'
import Users from '../components/users/Users.vue'
import Roles from '../components/roles/Roles.vue'
import Rights from '../components/rights/Rights.vue'

//安装一下
Vue.use(VueRouter)

//实例化
const router = new VueRouter({
  //2匹配规则,路由匹配组件
  routes:[
    {path:'/',redirect:'/login'},
    {path:'/login',component:login},
    {path:'/home',component:Home,
    children:[
    {path:'/users',component:Users},
    {path:'/roles',component:Roles},
    {path:'/rights',component:Rights}
  ]}
  ]
})

//导航 守卫
router.beforeEach((to,from,next) =>{
  //判断访问的是不是登录页面
  if(to.path === '/login'){
    next()
  } else {
    //其他页面,获取token,看有没有值
  let token = localStorage.getItem('token')

  token? next():next('/login')

  }
})

//导出 路由
export default router
