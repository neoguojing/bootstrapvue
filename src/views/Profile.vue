<template>
  
  <Modal id="profileModalId" :dialogClass=profileClass :dialogStyle=dialogStyle>
    <div class="container-fluid">
      <div class="row">
        <div class="col align-self-center">
            <img :src="userInfo.portal" class="img-thumbnail rounded-circle" alt="...">
            
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
        var userInfo = {
          userName: res.data.data.UserName,
          email: res.data.data.Email,
          portal: res.data.data.Pic,
          gender:res.data.data.Gender,
          birthDay:res.data.data.BirthDay,
          tel:res.data.data.Tel

        }
        if(userInfo.portal==""){
          userInfo.portal = require('@/assets/test.jpg')
        }
        this.$store.commit('upUserInfo',userInfo)
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
    }
  },
  computed:{
    userInfo() {
      return this.$store.getters.getUserInfo
    }
  },
  methods:{
  }
}
</script>
