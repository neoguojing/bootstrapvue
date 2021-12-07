<template>
  
  <Modal id="profileModalId" modalClass="top-0 end-0" :dialogClass=profileClass :dialogStyle=dialogStyle>
    <div class="container-fluid">
      <div class="row">
        <div class="col align-self-center">
            <img :src="portal" class="img-thumbnail rounded-circle" alt="...">
            
            <div class="card-body">
                <h5 class="card-title">{{ userName }}</h5>
                <p class="card-text">{{ email }}</p>
                <hr/>
                <a href="/userForm" class="btn btn-primary">Edit</a>
            </div>
        </div>
      </div>
    </div>
  </Modal>

</template>

<script>
// @ is an alias to /src
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Modal from '../components/Modal.vue'
import config from '@/conf'
export default {
  
  name: 'Profile',
  components: {
    Modal,
  },
  mounted() {
     this.$http.get(config.urlGetUserInfo)
      .then(res => {
        if(res.data.code!=0){
            console.log("获取信息失败")
            return
        }
        console.log(res.data)
        this.userName = res.data.data.UserName
        this.email = res.data.data.Email
        this.portal = res.data.data.Pic
        if(this.portal==""){
          this.portal = require('@/assets/test.jpg')
        }
      })
  },
  data(){
    return {
      profileClass : ['modal-sm'],
      dialogStyle:{
        position: 'fixed',
        top: '20px',
        right: '30px',
      },
      userName:"",
      email:"",
      portal:"",
    }
  },
  computed:{

  },
  methods:{
  }
}
</script>
