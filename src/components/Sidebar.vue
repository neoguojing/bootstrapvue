<template>
  
   <div :id="id" class="d-flex flex-column flex-shrink-0 p-3 bg-light text-dark vh-100" :class="offcanvasClass" style="width: 280px;">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <i class="bi-bootstrap px-3"  style="font-size: 2rem;"></i>
      <span class="fs-4">{{ title }}</span>
    </a>
    <hr>
      <slot></slot>
  </div>
</template>


<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
export default {
    name:"Sidebar",
    props:{
      id:{
        type: String,
        default:"sidebar"
      },
      title:{
        type : String,
        default:"Sidebar"
      },
      userName:{
        type : String,
        default:"NEO"
      },
      offcanvasClass:{
        type : Array,
        default: () => ['offcanvas' ,'offcanvas-start']
      },
      portal:{
        type : String,
        default:require('@/assets/logo.png'),
      }
    }
}
</script>

<style scoped>

.bi {
  vertical-align: -.125em;
  pointer-events: none;
  fill: currentColor;
}

.dropdown-toggle { outline: 0; }

.nav-flush .nav-link {
  border-radius: 0;
}


</style>
