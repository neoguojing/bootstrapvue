import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

router.beforeEach((to,from,next)=>{
	if (to.meta.needLogin) {
    //页面是否登录
    if (localStorage.getItem("token")) {
      //本地存储中是否有token(uid)数据
      next(); //表示已经登录
    } else {
      //next可以传递一个路由对象作为参数 表示需要跳转到的页面
      next({
        name: "Login"
      });
    }
  } else {
    //表示不需要登录
    next(); 
  }
})

//解决router.push无法刷新页面的问题
//const win: any = window;
//win.router = router;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app') //用于挂载dom元素
