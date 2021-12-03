<template>
<div class="container-fluid">
  <div class="row">
    <div class="col">
      <Navbar :loginStatus="loginStatus" signUpModalId="modalSignin" >
        <NavDropdown/>
         <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/vue">Vue</a>
        </li>
         <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/about">About</a>
        </li>
      </Navbar>
      <SignUpModal/>
   </div>
  </div>
  <div class="row">
    <div class="col">
      <router-view @loginStatus="updateLoginStatus" class="full-height"/>
   </div>
  </div>
</div>
<Footer/>
</template>

<script type="module">
import Navbar from '@/components/Navbar.vue'
import NavDropdown from '@/components/NavDropdown.vue'
import SignUpModal from '@/components/SignUpModal.vue'
import Footer from '@/views/Footer.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    NavDropdown,
    SignUpModal,
    Footer
  },
  data(){
    return {
      loginStatus: false
    }
  },
  methods:{
    updateLoginStatus(status){
      this.loginStatus = status
    },
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
