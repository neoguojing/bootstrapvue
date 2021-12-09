<template>
 <div class="body">
  <form class="form-signin needs-validation" :class="validateClass" novalidate>
    <img class="mb-4" :src="logo" alt="" width="72" height="57">
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

    <div class="form-floating">
      <input v-model="email" type="email" class="form-control" id="loginEmail" placeholder="name@example.com" required>
      <label for="loginEmail">Email address</label>
      <div class="invalid-feedback">
          Please input a valid email.
      </div>
    </div>
    <div class="form-floating">
      <input v-model="password" type="password" class="form-control" id="loginPassword" placeholder="Password" required minlength="4" maxlength="128">
      <label for="loginPassword">Password</label>
      <div class="invalid-feedback">
        Please provide a valid Password.
      </div>
    </div>

    <div class="checkbox mb-4 gx-2">
      <label>
        <input v-model="wasRememberChecked" type="checkbox" value=true> Remember me
      </label>
    </div>
    <button  @click.stop.prevent="onSubmit" class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    <a class="fs-6" href="/forgetPassword">Forget password?</a>
  </form>
 </div>
</template>

<script>
// @ is an alias to /src
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import _ from 'lodash'
import config from '@/conf'


export default {
  name: 'Login',
  components: {
   
  },
  props:{
      logo: {
          type :String,
          default: require('@/assets/logo.png')
      },
  },
  data(){
    return {
      wasValidated: false,
      wasRememberChecked: false,
      email:"",
      password:""
    }
  },
  computed:{
    validateClass(){
      return {
        'was-validated':this.wasValidated,
      }
    },
  },
  emits:['usernameUpdated'],
  methods:{
      onSubmit: _.debounce(function(){
        this.wasValidated = true
        if (!this.validate()){
           return 
        }
        var req = {
          account:this.email,
          password:this.password,
          type:2,
          isRemember:0
        }

        this.$http.post(config.urlLogin,req)
        .then(res => {
          console.log(res.data)
          if(res.data.code!=0){
              console.log("登录失败")
              return
          }
          console.log("登录动作触发成功")
          var token = 'Bearer '+res.data.data.token
          this.$store.commit('upLoginStatus',token)
          
          this.$store.commit('upUserInfo',{userName:res.data.data.username})
          this.$router.push("/");
        }).catch((err) => {
          console.log(err)
        })
      },1000),
      
      validate(){
        var email = document.getElementById("loginEmail");
        var password = document.getElementById("loginPassword");
        if (!email.checkValidity() || !password.checkValidity()){
             console.log(this.email)
             console.log(this.wasRememberChecked)
             console.log(this.password)
            return false
        }
        return true
      },
  },

}

</script>

<style scoped>
html,
.body {
  height: 100%;
}

.body {
  display: flex;
  align-items: center;
  padding-top: 200px;
  padding-bottom: 180px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

</style>