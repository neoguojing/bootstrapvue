<template>
  
  <Modal id="profileModalId" :dialogClass=profileClass :dialogStyle=dialogStyle>
    <div class="container-fluid">
      <div class="row">
        <div class="col align-self-center">
            <img :src="userInfo.portal" width="128" height="128" class="rounded-circle me-2" alt="...">
            
            <div class="card-body">
                <h5 class="card-title">{{ userInfo.userName }}</h5>
                <p class="card-text">{{ userInfo.email }}</p>                
            </div>
        </div>
         <hr/>
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
  },
  data(){
    return {
      profileClass : ['modal-sm'],
      dialogStyle:{
        position: 'fixed',
        top: '20px',
        right: '30px',
      },
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
  }
}
</script>
