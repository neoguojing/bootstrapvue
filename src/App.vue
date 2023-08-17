<template>
<div class="container-fluid">
  <div class="row">
    <div class="col">
      <Navbar signUpModalId="modalSignin" profileModalId="profileModalId" >
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
      <Profile/>
   </div>
  </div>
  <div class="row main" >
    <Sidebar />
    <div class="col" >
      <div class="mx-auto" style="width:500px" z-index="1">
            <Alert @alertClose="onAlertClose"  :message="alertStatus.message" :type="alertStatus.type" :isHide="alertStatus.isHide"/>
      </div>
      <router-view class="full-height"/>
    </div>
  </div>
  <div class="row ">
    <Footer/>
  </div>
</div>

</template>

<script type="module">
import Navbar from '@/views/Navbar.vue'
import NavDropdown from '@/components/NavDropdown.vue'
// import SignUpModal from '@/components/SignUpModal.vue'
import Footer from '@/views/Footer.vue'
import Profile from '@/views/Profile.vue'
import Sidebar from '@/components/Sidebar.vue'
import Alert from '@/components/Alert.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    NavDropdown,
    // SignUpModal,
    Footer,
    Sidebar,
    Profile,
    Alert
  },
  data(){
    return {
    }
  },
  computed:{
    alertStatus(){
      return this.$store.getters.getAlertStatus
    }
  },
  methods:{
    onAlertClose() {
      this.$store.commit('upAlertStatus',{isHide:true})
    }
  
  }
}
</script>

<style lang="scss">
html, body {
  height: 100%;
  margin: 0;
  min-height: 980px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
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
.container-fluid {

  height: 100%;
  display: flex;
  flex-direction: column;
}

.main {

  flex: 1;
}
.full-height {
  height: 100%;
}


</style>
