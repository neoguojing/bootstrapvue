import { createRouter, createWebHistory } from 'vue-router'
import store  from '@/store'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import ForgetPassword from '../views/ForgetPassword.vue'
import Album from '../views/Album.vue'
import Blog from '../views/Blog.vue'
import Product from '../views/Product.vue'
import UserForm from '../views/UserForm.vue'
import Profile from '../views/Profile.vue'
import ProfileBig from '../views/ProfileBig.vue'
import Settings from '../views/Settings.vue'
import Dashboard from '../views/Dashboard.vue'

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
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/forgetPassword',
    name: 'ForgetPassword',
    component: ForgetPassword
  },
  {
    path: '/album',
    name: 'Album',
    component: Album
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/userForm',
    name: 'UserForm',
    component: UserForm
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/profilebig',
    name: 'ProfileBig',
    component: ProfileBig
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  }
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if ((to.name !== 'Login' && to.name !== 'Home' 
  && to.name !== 'SignUp' && to.name !== 'ForgetPassword')
   && store.getters.getLoginStatus == "") 
    next({ name: 'Login' })
  else 
    next()
})

export default router
