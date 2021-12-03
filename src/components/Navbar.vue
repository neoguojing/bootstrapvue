<template>
<nav  class="navbar navbar-expand-lg" :class="colorObj">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img :src="brandImage" alt="" width="30" height="24" class="d-inline-block align-text-top">
      {{ brandName }}
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <slot></slot>
      </ul>
      <form class="col-12 col-lg-auto mb-12 mb-lg-0 me-lg-3">
        <input v-model="searchText" class="fform-control form-control-dark w-100" type="search" placeholder="Search..." aria-label="Search">
      </form>
      <ul class="navbar-nav navbar-nav-scroll gx-3" >
        <li class="nav-item text-end">
          <a v-if="loginStatus()==false" class="btn btn-outline-light me-2" aria-current="page" href="/login">Sigin in</a>
          <a v-if="loginStatus()==false" class="btn btn-warning" aria-current="page" href="/signup" data-bs-toggle="modal" :data-bs-target="selectId(signUpModalId)">Sign up</a>
        </li>
        <li v-if="loginStatus()" class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {{ username }}
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/profile">Profile</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" @click="onLogout" href="/login">Log out</a></li>
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

export default{
    name:"Navbar",
    data(){
      return {
        searchText :"",
      }
    },
    props:{
        signUpModalId:{
          type: String,
          default: "modalSignin",
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
        username:{
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
    },
    methods:{
      onLogout(){
        this.$store.commit('upLoginStatus',false)
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
          return  this.$store.state.loginStatus
      }
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
