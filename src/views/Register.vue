<template>
  <div  class="mx-auto" style="width:50%;">
     <form class="row gy-5 p-5 needs-validation" :class="validateClass" novalidate>
      <div class="col-md-4 form-floating">
        <input type="text" class="form-control" id="firstName" v-model="firstName" placeholder="First name"  required>
        <label for="firstName" class="form-label">First name</label>
        <div class="invalid-feedback">
           Please provide a valid first name.
        </div>
      </div>
      <div class="col-md-4 form-floating">
        <input type="text" class="form-control" id="lastName" v-model="lastName" placeholder="Last name"  required>
        <label for="lastName" class="form-label">Last name</label>
        <div class="invalid-feedback">
          Please provide a valid last name.
        </div>
      </div>
      <div class="col-md-3">
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" v-model="gender" name="gender" id="1" value="Male">
          <label class="form-check-label" for="man">
            Man
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" v-model="gender" name="gender" id="woman" value="0" checked>
          <label class="form-check-label" for="woman">
            Woman
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
          <input type="text" class="form-control" id="userName" v-model="userName" placeholder="Username" aria-describedby="inputGroupPrepend" required>
          <label for="userName" class="form-label">Username</label>
          <div class="invalid-feedback">
            Please choose a username.
          </div>
        </div>
      </div>
      <div class="col-md-5 form-floating">
        <input type="text" class="form-control" id="city" v-model="city" placeholder="City" required>
        <label for="city" class="form-label">City</label>
        <div class="invalid-feedback">
          Please provide a valid city.
        </div>
      </div>
      <div class="col-md-5 form-floating">
        <input type="text" class="form-control" v-model="state" id="state" placeholder="State" required>
        <label for="state" class="form-label">State</label>
        <div class="invalid-feedback">
          Please provide a valid state.
        </div>
      </div>
      <div class="col-md-5 form-floating">
        <input type="password" class="form-control" v-model="password" id="password" placeholder="Password" required>
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
      <div class="col-4">
        <div class="form-check">
          <input class="form-check-input" v-model="wasAgreeChecked" type="checkbox" value="true"  id="agree" required>
          <a class="form-check-label" for="agree" data-bs-toggle="modal" data-bs-target="#terms">
            Agree to terms and conditions
          </a>
          <div class="invalid-feedback">
            You must agree before submitting.
          </div>
          <div class="modal fade" id="terms" tabindex="-1" aria-labelledby="#content" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="content">Terms and conditions</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  This is some placeholder content to show a vertically centered modal. We've added some extra copy here to show how vertically centering the modal works when combined with scrollable modals. We also use some repeated line breaks to quickly extend the height of the content, thereby triggering the scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
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
import _ from 'lodash'
export default {
  
  name: 'Register',
  components: {
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
           return 
        }
        console.log("注册成功")
         this.router.push("/login")
      },1000),

    validate(){
      return true
    }
  }
}
</script>
