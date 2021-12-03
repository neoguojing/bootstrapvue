<template>
    <div class="container col-xl-10 col-xxl-8 px-4 py-5">
    <div class="row align-items-center g-lg-5 py-5">
      <div class="col-lg-7 text-center text-lg-start">
        <h1 class="display-4 fw-bold lh-1 mb-3">{{ title }}</h1>
        <p class="col-lg-10 fs-4">{{  content }}</p>
      </div>
      <div class="col-md-10 mx-auto col-lg-5">
        <form class="p-4 p-md-5 border rounded-3 bg-light needs-validation" :class="validateClass" novalidate>
          <div class="form-floating mb-3">
            <input v-model="email" type="email" class="form-control" id="signUpEmail" placeholder="name@example.com" required>
            <label for="signUpEmail">Email address</label>
            <div class="invalid-feedback">
                Please provide a valid email.
            </div>
          </div>
          <div class="form-floating mb-3">
            <input v-model="password"  type="password" class="form-control" id="signUpPassword" placeholder="Password" required minlength="8" maxlength="128">
            <label for="signUpPassword">Password</label>
            <div class="invalid-feedback">
              Please provide a valid password : 8-128 letter.
          </div>
          </div>
          <button @click.stop.prevent="onSignUp" class="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
          <hr class="my-4">
          <small class="text-muted">By clicking Sign up, you agree to the terms of use.</small>
        </form>
      </div>
    </div>
  </div>
</template>

<script >
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import _ from 'lodash'

export default{
    name:"SignUp",
    data(){
        return {
            wasValidated: false,
            email:"",
            password:"",
            passwordPatten:"^(?![0-9]+$)(?![a-zA-Z]+$)(?![0-9a-zA-Z]+$)(?![0-9\\W]+$)(?![a-zA-Z\\W]+$)[0-9A-Za-z\\W]{8,128}$"
        }
    },
    props:{
        id: {
            type :String,
            default: "modalSignin"
        },
        title: {
            type :String,
            default: "Vertically centered hero sign-up form"
        },
        content: {
            type :String,
            default: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it."
        },
        

    },
    computed:{
        validateClass(){
            return {
                'was-validated':this.wasValidated,
            }
        },
    },
    emits:[''],
    methods:{
        selectId(name){
            return "#"+name
        },

        onSignUp: _.debounce(function(){
            this.wasValidated = true
            if (!this.validate()){
                return 
            }

            console.log("注册成功")
            this.$router.push("/login")

        },1000),

        onThirdPartySignUp: _.debounce(function(){
            console.log("注册成功")
            this.$router.push("/login")
        },1000),

        validate(){
            var email = document.getElementById("signUpEmail");
            var password = document.getElementById("signUpPassword");
            if (!email.checkValidity() || !password.checkValidity()){
                console.log(this.email,this.password)
                return false
            }
            return true
        }
    }

}
</script>

<style scoped>


</style>