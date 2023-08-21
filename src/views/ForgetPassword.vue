<template>
  <div>
    <form class="row form-forgetpass needs-validation" :class="validateClass" novalidate>
      <div class="row">
        <div class="col">
          <div class="form-floating has-validation">
            <input type="email" class="form-control" v-model="email" id="email" placeholder="Email" aria-describedby="inputGroupPrepend" required>
            <label for="email" class="form-label">Email</label>
            <div class="invalid-feedback">
              Please input a valid email.
            </div>
          </div>
        </div>
      </div>
      <div class="row g-2">
        <div class="col">
          <button class="w-50 btn btn-lg btn-primary" @click.stop.prevent="onSubmit" type="submit">Submit</button>
        </div>
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
  name: 'ForgetPassword',
  components: {},
  data() {
    return {
      wasValidated: false,
      email: "",
    }
  },
  computed: {
    validateClass() {
      return {
        'was-validated': this.wasValidated,
      }
    },
  },
  methods: {
    onSubmit: _.debounce(function() {
      this.wasValidated = true
      if (!this.validate()) {
        return 
      }
      console.log("忘记密码触发成功")
      this.$router.push("/login");
    }, 1000),
    validate() {
      var email = document.getElementById("email");
      if (!email.checkValidity()) {
        console.log(this.email)
        return false
      }
      return true
    },
  },
}
</script>

<style scoped>
.form-forgetpass {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>