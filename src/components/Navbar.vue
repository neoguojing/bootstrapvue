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
        searchText :"search",
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
        }

    },
    computed:{
        colorObj() {
           return [
               'navbar-'+this.color,
               'bg-'+this.bgColor,
           ]
        },
    }

}
</script>
