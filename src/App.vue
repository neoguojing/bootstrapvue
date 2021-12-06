<template>
<div class="container-fluid">
  <div class="row">
    <div class="col">
      <Navbar signUpModalId="modalSignin" >
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/album">Album</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/blog">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/product">Product</a>
        </li>
        <NavDropdown text="Compontent"/>
      </Navbar>
      <!-- <SignUpModal/> -->
   </div>
  </div>
  <div class="row">
    <Sidebar/>
    <div class="col">
      <router-view  class="full-height"/>
    </div>
  </div>
</div>
<div class="row">
  <Footer/>
</div>
</template>

<script type="module">
import Navbar from '@/components/Navbar.vue'
import NavDropdown from '@/components/NavDropdown.vue'
// import SignUpModal from '@/components/SignUpModal.vue'
import Footer from '@/views/Footer.vue'
import Sidebar from './components/Sidebar.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    NavDropdown,
    // SignUpModal,
    Footer,
    Sidebar
  },
  data(){
    return {
    }
  },
  computed:{
    
  },
  methods:{
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}


</style>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
}
.full-height {
  height: 100%;
}
</style>
