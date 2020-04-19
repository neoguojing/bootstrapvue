import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Register2 from '@/views/Register2.vue'
import ForgetPassword from '@/views/ForgetPassword.vue'
import Demo from '@/views/Demo.vue'
import ResetPassword from '@/views/admin/ResetPassword.vue'
import AdminHome from '@/views/admin/AdminHome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/register2',
    name: 'Register2',
    component: Register2
  },
  {
    path: '/forgetPassword/:account',
    name: 'ForgetPassword',
    component: ForgetPassword
  },
  {
    path: '/demo',
    name: 'Demo',
    component: Demo
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/admin',
    name: 'AdminHome',
    component: AdminHome,
    meta: {
      needLogin: true
    }
  },
  {
    path: '/admin/resetPassword',
    name: 'ResetPassword',
    component: ResetPassword,
    meta: {
      needLogin: true
    }
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
