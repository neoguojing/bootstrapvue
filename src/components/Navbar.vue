<template>
<nav class="navbar navbar-expand-lg" :class="colorObj">
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
      <form class="d-flex">
        <input v-model="searchText" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      <ul class="navbar-nav navbar-nav-scroll gx-3" >
        <li class="nav-item">
          <a v-if="loginStatus==false" class="nav-link" aria-current="page" href="/login">Sigin in</a>
        </li>
        <li v-if="loginStatus==false" class="nav-item">
          <a class="nav-link" aria-current="page" href="/register">Sign up</a>
        </li>
        <li v-if="loginStatus" class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {{ username }}
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" @click="onLogout" href="/">Log out</a></li>
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
        loginStatus:{
          type: Boolean,
          default: false,
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
    emits:['loginStatus'],
    methods:{
      onLogout(){
        this.$emit('loginStatus',false)
      }
    }

}
</script>
