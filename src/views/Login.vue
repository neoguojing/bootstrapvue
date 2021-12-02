<template>
<form class="row needs-validation" :class="validateClass" novalidate>
  <div class="row g-5">
    <div class="col"></div>
    <div class="col">
      <div class="form-floating has-validation">
        <input type="email" class="form-control" v-model="email" id="email" placeholder="Email" aria-describedby="inputGroupPrepend" required>
        <label for="email" class="form-label">Email</label>
        <div class="invalid-feedback">
          Please input a valid email.
      </div>
      </div>
      
    </div>
    <div class="col"></div>
  </div>
  <div class="row gy-4 gx-5">
    <div class="col"></div>
    <div class="col">
      <div class="has-validation form-floating">
        <input type="password" class="form-control" v-model="password" id="password"  placeholder="Password" required>
        <label for="password" class="form-label">Password</label>
        <div class="invalid-feedback">
        Please provide a valid Password.
      </div>
      </div>
      
    </div>
    <div class="col"></div>
  </div>
  <div class="row justify-content-md-center gy-2">
    <div class="col-4"></div>
    <div class="form-check form-switch col-1 gx-5">
      <input class="form-check-input" v-model="wasRememberChecked" type="checkbox" role="switch" value="" id="remember">
      <label class="form-check-label fs-6" for="remember">
      Remember
      </label>
    </div>
    <div class="col-1 gx-3">
      <a class="fs-6" href="/forgetPassword">Forget password?</a>
    </div>
    <div class="col-5"></div>
  </div>
  <div class="row g-2">
    <div class="col-6"></div>
    <div class="col-2">
    <button class="btn btn-primary btn-lg"  @click.stop.prevent="onSubmit" type="submit">Login</button>
    </div>
    <div class="col-5"></div>
  </div>
</form>
</template>

<script>
// @ is an alias to /src
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import _ from 'lodash'


export default {
  name: 'Login',
  components: {
   
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
  methods:{
      onSubmit: _.debounce(function(){
        this.wasValidated = true
        var email = document.getElementById("email");
        var password = document.getElementById("password");
        if (!email.checkValidity() || !password.checkValidity()){
            console.log(this.email)
            return
        }
        console.log("登录动作触发成功")
        
      },1000),
  }

}

</script>
