<template>
  
  <Modal id="profileModalId" :dialogClass=profileClass :dialogStyle=dialogStyle>
    <div class="container">
      <div class="row">
        <div class="col align-self-center">
            <img :src="portal" width="128" height="128" class="rounded-circle me-2" alt="...">
            
            <div class="card-body">
                <h5 class="card-title">{{ userInfo.userName }}</h5>
                <p class="card-text">{{ userInfo.email }}</p>                
            </div>
        </div>
      </div>
         
      <div class="row">
        <div class="col ">
          <i class="bi bi-twitter px-1" style="font-size: 1rem;"></i>
          <i class="bi bi-instagram px-1" style="font-size: 1rem;"></i>
          <i class="bi bi-facebook px-1" style="font-size: 1rem;"></i>
        </div>
      </div>
      <hr/>
      <div class="row">
         <div class="col align-self-center">
         <!-- <i class="bi-gear" width="32"></i>     -->
             <a href="/userForm" class="w-100 py-0 mb-0 btn btn-outline-secondary btn-sm rounded-4"  role="button">Edit</a>
          </div>
      </div>  
    </div>
  </Modal>

</template>

<script>
// @ is an alias to /src
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import apis from '@/utils/apis.js'
import Modal from '../components/Modal.vue'
export default {
  
  name: 'Profile',
  components: {
    Modal,
  },
  mounted() {
    if(!this.loginStatus()) {
      return
    }
    this.getPortal(this.userInfo.portal)
  },
  data(){
    return {
      profileClass : ['modal-sm'],
      dialogStyle:{
        position: 'fixed',
        top: '20px',
        right: '30px',
      },
      portal:"",
      logo:require('@/assets/logo.png')
    }
  },
  computed:{
    userInfo() {
      return this.$store.getters.getUserInfo
    }
  },
  methods:{
     loginStatus() {
          return  this.$store.getters.getLoginStatus != ""
      },
      getPortal(fileUrl){
        apis.FileDownload(fileUrl).then(data => {
          this.portal = data
        }).catch(err => {
          if (err == "404"){
            this.portal = this.logo
          }
        })
      },
  }
}
</script>
