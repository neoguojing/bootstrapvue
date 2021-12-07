import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import ForgetPassword from '../views/ForgetPassword.vue'
import Album from '../views/Album.vue'
import Blog from '../views/Blog.vue'
import Product from '../views/Product.vue'
import UserForm from '../views/UserForm.vue'
import Profile from '../views/Profile.vue'

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
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
