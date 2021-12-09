<template>
  
   <div :id="id" class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" :class="offcanvasClass" style="width: 280px;">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <i class="bi-bootstrap"  style="font-size: 2rem;"></i>
      <span class="fs-4">{{ title }}</span>
    </a>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item ">
        <a href="#" class="nav-link active justify-content-start" aria-current="page">
        <i class="bi-house" width="16" height="16"></i>
          Home
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <i class="bi-speedometer2" width="16" height="16"></i>
          Dashboard
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
           <i class="bi-table" width="16" height="16"></i>
          Orders
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <i class="bi-grid" width="16" height="16"></i>
          Products
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <i class="bi-people-circle" width="16" height="16"></i>
          Customers
        </a>
      </li>
    </ul>
    <hr>
    <div class="dropdown">
      <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img :src="portal" alt="" width="32" height="32" class="rounded-circle me-2">
        <strong>mdo</strong>
      </a>
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
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
        default:""
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
