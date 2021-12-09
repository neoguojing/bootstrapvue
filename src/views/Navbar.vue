<template>
<nav  class="navbar navbar-expand-lg" :class="colorObj">
  <div class="container">
    <!-- <a class="navbar-brand" data-bs-toggle="offcanvas" :href="selectId(sideBarId)" :aria-controls="sideBarId"> -->
     <a class="navbar-brand" href="#">
      <img :src="brandImage" alt="" width="30" height="24" class="d-inline-block align-text-top">
      {{ brandName }}
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto mb-2 my-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <slot></slot>
      </ul>
      <form class="">
        <input v-model="searchText" class="fform-control" type="search" placeholder="Search..." aria-label="Search">
      </form>
    </div>
    <div class="" style="margin-left: 50px;">
      <ul class="navbar-nav" >
        <li class="nav-item">
          <a v-if="loginStatus()==false" class="btn btn-outline-light me-2" aria-current="page" href="/login">Sigin in</a>
          <!-- <a v-if="loginStatus()==false" class="btn btn-warning" aria-current="page" href="/signup" data-bs-toggle="modal" :data-bs-target="selectId(signUpModalId)">Sign up</a> -->
          <a v-if="loginStatus()==false" class="btn btn-warning" aria-current="page" href="/signup">Sign up</a>

        </li>
        <li v-if="loginStatus()" class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {{ userName }}
          </a>
          <ul class="dropdown-menu list-unstyled mb-0" aria-labelledby="navbarDropdown">
            <li> 
              <a class="dropdown-item d-flex gap-2 py-2 align-items-center" @click.stop.prevent="onProfile" href="/profile" data-bs-toggle="modal" :data-bs-target="selectId(profileModalId)">
                <i class="bi-person px-2"></i>Profile
              </a>
            </li>
            <li>
              <a class="dropdown-item d-flex gap-2 py-2 align-items-center h7" href="#">
               <i class="bi-gear px-2"></i>Settings
              </a>
            </li>
            <li>
              <a class="dropdown-item d-flex gap-2 py-2align-items-center" data-bs-toggle="offcanvas" :href="selectId(sideBarId)" :aria-controls="sideBarId">
                <i class="bi-person-workspace px-2"></i>Console
              </a>
            </li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item d-flex gap-2 py-2align-items-center" @click="onLogout" href="/login">
            <i class="bi bi-box-arrow-right px-2"></i>Log out</a></li>
          </ul>
      </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import _ from 'lodash'
import config from '@/conf'

export default{
    name:"Navbar",
    data(){
      return {
        searchText :"",
      }
    },
    mounted(){
    },
    props:{
        signUpModalId:{
          type: String,
          default: "modalSignin",
        },
        profileModalId:{
          type: String,
          default: "profileModalId",
        },
        sideBarId:{
          type: String,
          default: "sidebar",
        },
        color:{
            type :String,
            default: "dark"
        },
        bgColor:{
            type :String,
            default: "dark"
        },
        brandImage:{
          type: String,
          default: require('@/assets/logo.png'),
        },
        brandName:{
          type: String,
          default: "NEO",
        },

    },
    computed:{
        colorObj() {
           return [
               'navbar-'+this.color,
               'bg-'+this.bgColor,
           ]
        },
        userName() {
          return this.$store.getters.getUserInfo.userName
        }
    },
    methods:{
      onLogout(){
        this.$http.get(config.urlLogout)
        .then(res => {
          console.log(res)
          this.$store.commit('upLoginStatus',"")
        })
        
      },
      selectId(name){
          return "#"+name
      },
      //TODO 页面重载和事件阻塞间的矛盾
      onMenuClick(event){
          console.log(event)
          var activedElem = document.getElementsByClassName("nav-link active");
          console.log(activedElem)
          while (activedElem.length) {
              activedElem[0].classList.remove("active");
          }
          event.target.classList.add("active");
          
      },
      loginStatus() {
          return  this.$store.getters.getLoginStatus != ""
      },
      onProfile:_.debounce(function(){
        this.$http.get(config.urlGetUserInfo)
        .then(res => {
          if(res.data.code!=0){
              console.log("获取信息失败")
              return
          }
          console.log(res.data)
          var userInfo = {
            userName: res.data.data.UserName,
            email: res.data.data.Email,
            portal: res.data.data.Pic,
            gender:res.data.data.Gender,
            birthDay:res.data.data.BirthDay,
            tel:res.data.data.Tel

          }
          if(userInfo.portal==""){
            userInfo.portal = require('@/assets/test.jpg')
          }
          this.$store.commit('upUserInfo',userInfo)
        })
      },500),
      
    }

}
</script>


<style scoped>
.form-control-dark {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: var(--bs-gray);
}
.form-control-dark:focus {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: #fff;
  box-shadow: 0 0 0 .25rem rgba(255, 255, 255, .25);
}
</style>
