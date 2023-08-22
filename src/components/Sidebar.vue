<template>
  
   <div :id="id" class="d-flex flex-column flex-shrink-0 p-3 bg-light text-dark" :class="offcanvasClass" style="width: 280px; height: 100%;">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <i class="bi-bootstrap px-3"  style="font-size: 2rem;"></i>
      <span class="fs-4">{{ title }}</span>
    </a>
    <hr>
      <slot @click="onMenuClick"></slot>
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
    },
    methods: {
      onMenuClick(){
          let path = this.$route.path;
          let links = document.querySelectorAll('.nav-link');
          links.forEach(link => {
            if (link.getAttribute('href') === path) {
              link.classList.add('active');
              link.setAttribute('aria-current', 'page');
            } else {
              link.classList.remove('active');
              link.removeAttribute('aria-current');
            }
          });
      },
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
