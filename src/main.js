// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

/* eslint-disable */
import Vue from 'vue'
import App from './App'


//引入 element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//安装一下 element-ui
Vue.use(ElementUI);


//移入 路由
import router from './router/router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
