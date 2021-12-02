<template>
  <div  class="mx-auto" style="width:50%;">
     <form class="row gy-5 p-5 needs-validation" :class="validateClass" novalidate>
      <div class="col-md-4 form-floating">
        <input type="text" class="form-control" id="firstName" v-model="firstName" placeholder="First name"  required minlength="3" maxlength="16">
        <label for="firstName" class="form-label">First name</label>
        <div class="invalid-feedback">
           Please provide a valid first name.
        </div>
      </div>
      <div class="col-md-4 form-floating">
        <input type="text" class="form-control" id="lastName" v-model="lastName" placeholder="Last name"  required minlength="3" maxlength="16">
        <label for="lastName" class="form-label">Last name</label>
        <div class="invalid-feedback">
          Please provide a valid last name.
        </div>
      </div>
      <div class="col-md-3">
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" v-model="gender" name="gender" id="male" value=1>
          <label class="form-check-label" for="male">
            Male
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" v-model="gender" name="gender" id="female" value=0 checked>
          <label class="form-check-label" for="female">
            Female
          </label>
        </div>
      </div>

      <div class="col-md-6 form-floating">
        <input type="email" class="form-control" v-model="email" id="email" placeholder="Email" required>
        <label for="email" class="form-label">Email</label>
        <div class="invalid-feedback">
          Please provide a valid email.
        </div>
      </div>
      <div class="col-md-4">
        <div class="has-validation form-floating">
          <input type="text" class="form-control" id="userName" v-model="userName" placeholder="Username" aria-describedby="inputGroupPrepend" required minlength="3" maxlength="32">
          <label for="userName" class="form-label">Username</label>
          <div class="invalid-feedback">
            Please choose a username.
          </div>
        </div>
      </div>
      <div class="col-md-5 form-floating">
        <input type="text" class="form-control" id="city" v-model="city" placeholder="City" required minlength="2" maxlength="32">
        <label for="city" class="form-label">City</label>
        <div class="invalid-feedback">
          Please provide a valid city.
        </div>
      </div>
      <div class="col-md-5 form-floating">
        <input type="text" class="form-control" v-model="state" id="state" placeholder="State" required minlength="2" maxlength="32">
        <label for="state" class="form-label">State</label>
        <div class="invalid-feedback">
          Please provide a valid state.
        </div>
      </div>
      <div class="col-md-5 form-floating">
        <input type="password" class="form-control" v-model="password" id="password" placeholder="Password" required minlength="8" maxlength="128">
        <label for="password" class="form-label">Password</label>
        <div class="invalid-feedback">
          Please provide a valid password.
        </div>
      </div>
      <div class="col-md-5 form-floating">
        <input type="password" class="form-control" v-model="password1" id="password1" placeholder="Password again" required>
        <label for="password1" class="form-label">Password again</label>
        <div class="invalid-feedback">
          Please confirm the password.
        </div>
      </div>
      <div class="col-5">
        <div class="form-check">
          <input class="form-check-input" v-model="wasAgreeChecked" type="checkbox" value="true"  id="agree" required>
          <a class="form-check-label" for="agree" data-bs-toggle="modal" data-bs-target="#terms">
            Agree to terms and conditions
          </a>
          <div class="invalid-feedback">
            You must agree before submitting.
          </div>
          <Modal id="terms" showSaveBtn=false showBtn=false title="Terms and conditions">
                 This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.
          </Modal>
        </div>
      </div>
      <div class="col-9"></div>
      <div class="col-3">
        <button class="btn btn-primary" type="submit" @click.stop.prevent="onSubmit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Modal from '../components/Modal.vue'
import _ from 'lodash'
export default {
  
  name: 'Register',
  components: {
    Modal,
  },
   data(){
    return {
      wasValidated: false,
      wasAgreeChecked: false,
      firstName:"",
      lastName:"",
      userName:"",
      gender:0,
      city:"",
      state:"",
      email:"",
      password:"",
      password1:""
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
