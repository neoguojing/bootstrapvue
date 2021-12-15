<template>
<div class="container">
  <main>
    <div class="py-5 text-center">
      <img class="d-block mx-auto mb-4" :src="logo" alt="" width="72" height="57">
      <h2>Checkout form</h2>
      <p class="lead">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
    </div>

    <div class="row g-5">
      <div class="col-8">
        <h4 class="mb-3">Profile</h4>
        <form class="needs-validation" :class="validateClass" novalidate>
          <div class="row g-3">
            <div class="col-sm-6 form-floating">
              <input v-model="firstName" type="text" class="form-control" id="firstName" placeholder="firstName"    minlength="3" maxlength="16">
              <label for="firstName">First name</label>
              <div class="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div class="col-sm-6  form-floating">
              <input v-model="lastName" type="text" class="form-control" id="lastName" placeholder="lastName"   minlength="3" maxlength="16">
              <label for="lastName" class="form-label">Last name</label>
              <div class="invalid-feedback">
                Valid last name is required.
              </div>
            </div>

            <div class="col-8 form-floating">
                <input v-model="userName" type="text" class="form-control" id="userName" placeholder="Username" required minlength="3" maxlength="128">
                <label for="userName" class="form-label">Username</label>
                <div class="invalid-feedback">
                    Your username is required.
                </div>
            </div>
            <div class="col-4">
                <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" v-model="gender" name="gender" id="male" value="1" required>
                <label class="form-check-label" for="male">
                  Male
                </label>
              </div>
              <div class="form-check form-check-inline mb-3">
                <input class="form-check-input" type="radio" v-model="gender" name="gender" id="female" value="2" checked required> 
                <label class="form-check-label" for="female">
                  Female
                </label>
                <div class="invalid-feedback">
                  Please make a choice.
                </div>
              </div>
              
            </div>

            <div class="col-8 form-floating">
              <input v-model="email" type="email" class="form-control" id="email" placeholder="you@example.com" required>
              <label for="email" class="form-label">Email</label>
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>
            <div class="col-6 form-floating">
              <input v-model="tel" type="text" class="form-control" id="tel" placeholder="Tel">
              <label for="tel" class="form-label">Tel</label>
              <div class="invalid-feedback">
                Please enter your phone number.
              </div>
            </div>

            <div class="col-12  form-floating">
              <input v-model="address" type="text" class="form-control" id="address" placeholder="Apartment or suite">
              <label for="address" class="form-label">Address</label>
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div class="col-md-5  form-floating">
              <select v-model="country" class="form-select" id="country">
                <option value="">Choose...</option>
                <option>United States</option>
                <option>China</option>
              </select>
              <label for="country" class="form-label">Country</label>

              <div class="invalid-feedback">
                Please select a valid country.
              </div>
            </div>

            <div class="col-md-4  form-floating">
              <select v-model="state" class="form-select" id="state">
                <option value="">Choose...</option>
                <option>California</option>
              </select>
              <label for="state" class="form-label">State</label>

              <div class="invalid-feedback">
                Please provide a valid state.
              </div>
            </div>

            <div class="col-md-3  form-floating">
              <input v-model="zip" type="text" class="form-control" id="zip" placeholder="">
              <label for="zip" class="form-label">Zip</label>
              <div class="invalid-feedback">
                Zip code required.
              </div>
            </div>
          </div>

          <hr class="my-4">

          <h4 class="mb-3">Payment</h4>

          <div class="row gy-3">
            <div class="col-md-6  form-floating">
              
              <input v-model="nameOnCard" type="text" class="form-control" id="cc-name" placeholder="Name on card">
              <label for="cc-name" class="form-label">Name on card</label>
              <small class="text-muted">Full name as displayed on card</small>
              <div class="invalid-feedback">
                Name on card is required
              </div>
            </div>

            <div class="col-md-6  form-floating">
              <input v-model="cardNum" type="text" class="form-control" id="cc-number" placeholder="redit card number">
              <label for="cc-number" class="form-label">Credit card number</label>
              <div class="invalid-feedback">
                Credit card number is required
              </div>
            </div>

            <div class="col-md-3  form-floating">
              <input v-model="expiration" type="text" class="form-control" id="cc-expiration" placeholder="Expiration">
              <label for="cc-expiration" class="form-label">Expiration</label>
              <div class="invalid-feedback">
                Expiration date required
              </div>
            </div>

            <div class="col-md-3 form-floating">
              <input v-model="securityCode" type="text" class="form-control" id="cc-cvv" placeholder="">
              <label for="cc-cvv" class="form-label">CVV</label>
              <div class="invalid-feedback">
                Security code required
              </div>
            </div>
          </div>

          <hr class="my-4">

          <button @click.prevent="onSubmit" class="w-100 btn btn-primary btn-lg" type="submit">Submit</button>
        </form>
      </div>
       <div class="col-4 g-3">
              <img :src="portal" class="img-thumbnail rounded mx-auto" alt="...">
              <input id="fileUpload"  @change="onUpload" ref="file" type="file" class="form-control" aria-label="file upload" required>
              <div class="invalid-feedback">
                Please upload a portal.
              </div>
       </div>
    </div>
  </main>
</div>
</template>

<script>
// @ is an alias to /src
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import apis from '@/utils/apis.js'
import _ from 'lodash'
import config from '@/conf'

export default{
  
  name: 'UserForm',
  components: {

  },
   data(){
    return {
      wasValidated: false,
      wasAgreeChecked: false,
      firstName:"",
      lastName:"",
      userName: "",
      gender: 0,
      portal: "",
      email: "",
      tel: "",
      birthday:"",
      
      country:"",
      state:"",
      city:"",
      address:"",
      zip:"",
      
      nameOnCard:"",
      cardNum:"",
      expiration:"",
      securityCode:"",
      
    }
  },
  mounted() {
    var userInfo = this.$store.getters.getUserInfo
    console.log("UserForm.mounted",userInfo)
    this.userName =userInfo.userName
    this.gender = userInfo.gender
    this.email = userInfo.email
    this.tel = userInfo.tel
    this.getPortal(userInfo.portal)
  },
  props:{
    logo: {
          type :String,
          default: require('@/assets/logo.png')
    },
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
              this.firstName,
              this.lastName,
              this.userName,
              this.gender,
              this.city,
              this.state,
              this.email,
          )
           return 
        }

         var req = {
            UserName: this.userName,
            Gender  : parseInt(this.gender),
            Pic    : this.portal,
            Email    :this.email,
            Tel     :this.tel,
            Birthday :this.birthday,
        }

        this.$http.post(config.urlUpdateUserInfo,req)
        .then(res => {
          console.log("跟新个人信息成功",res)
          this.$router.push("/");
        })

      },1000),

    onUpload(e) {
      apis.UploadFiles("portal",e.target.files[0])
      .then(filePath =>{
          apis.FileDownload(filePath).then(data => {
            this.portal = data
          })
      })
    },
    getPortal(fileUrl) {
      apis.FileDownload(fileUrl).then(data => {
        this.portal = data
      })
    },

    validate(){
        var email = document.getElementById("email");
        var firstName = document.getElementById("firstName");
        var lastName = document.getElementById("lastName");
        var userName = document.getElementById("userName");
        var gender= document.getElementById("female");
        var upload= document.getElementById("fileUpload");
        if (!email.checkValidity() || !firstName.checkValidity() || !lastName.checkValidity() ||
        !userName.checkValidity() || !gender.checkValidity()|| !upload.checkValidity()){
            console.log(this.email)
            return false
        }
        return true
    },
    
  }
}
</script>

<style scoped>
.container {
  max-width: 960px;
}
.bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }
</style>