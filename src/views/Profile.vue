<template>
  
  <Modal id="profileModalId" modalClass="position-absolute top-0 end-0" :dialogClass=profileClass>
    <div class="container-fluid">
      <div class="row">
        <div class="col align-self-center">
          <Card width="100%" myClass="p-0 g-0"> 
            <img :src="portal" class="img-thumbnail rounded-circle" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ userName }}</h5>
                <p class="card-text">{{ email }}</p>
                <a href="/userForm" class="btn btn-primary">Edit</a>
            </div>
          </Card>
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
import Card from '../components/Card.vue'
import config from '@/conf'
import _ from 'lodash'
export default {
  
  name: 'Profile',
  components: {
    Modal,
    Card
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
      userName:"",
      email:"",
      portal:"",
    }
  },
  computed:{
    validateClass(){
      return {
        'was-validated':this.wasValidated,
      }
    },
  },
  methods:{
    onSubmit: _.debounce(function(){
        this.wasValidated = true
        if (!this.validate()){
          console.log(
              this.wasValidated,
              this.wasAgreeChecked,
              this.firstName,
              this.lastName,
              this.userName,
              this.gender,
              this.city,
              this.state,
              this.email,
              this.password,
              this.password1
          )
           return 
        }
        console.log("注册成功")
         this.$router.push("/login")
      },1000),

    validate(){
        var email = document.getElementById("email");
        var firstName = document.getElementById("firstName");
        var lastName = document.getElementById("lastName");
        var userName = document.getElementById("userName");
        var city = document.getElementById("city");
        var state = document.getElementById("state");
        var agree = document.getElementById("agree");
        var password = document.getElementById("password");
        var password1 = document.getElementById("password1");
        if (!email.checkValidity() || !firstName.checkValidity() || !lastName.checkValidity() ||
        !userName.checkValidity() ||!city.checkValidity() ||!state.checkValidity() ||
        !agree.checkValidity() ||!email.checkValidity() ||
        !password.checkValidity() ||!password1.checkValidity() || 
        this.password != this.password1){
            console.log(this.email)
            return false
        }
        return true
    }
  }
}
</script>
