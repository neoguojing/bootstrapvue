<template>
<form class="row needs-validation" novalidate>
  <div class="row g-5">
    <div class="col"></div>
    <div class="col">
      <div class="form-floating has-validation">
        <input type="text" class="form-control" id="username" placeholder="Username" aria-describedby="inputGroupPrepend" required>
        <label for="username">Username</label>
      </div>
      <div class="invalid-feedback">
          Please choose a username.
      </div>
    </div>
    <div class="col"></div>
  </div>
  <div class="row gy-3 gx-5">
    <div class="col"></div>
    <div class="col">
      <div class="has-validation form-floating">
        <input type="password" class="form-control" id="password"  placeholder="Password" required>
        <label for="password">Password</label>
      </div>
      <div class="invalid-feedback">
        Please provide a valid Password.
      </div>
    </div>
    <div class="col"></div>
  </div>
  <div class="row justify-content-md-center gy-2">
    <div class="col-3"></div>
    <div class="form-check form-switch col-1 ">
      <input class="form-check-input" type="checkbox" role="switch" value="" id="remember" required>
      <label class="form-check-label" for="remember">
      Remember
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
    <div class="col-5"></div>
  </div>
  <div class="row g-2">
    <div class="col-6"></div>
    <div class="col-2">
    <button class="btn btn-primary btn-lg" type="submit">Login</button>
    </div>
    <div class="col-5"></div>
  </div>
</form>
</template>

<script>
// @ is an alias to /src
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

export default {
  name: 'Login',
  components: {
   
  }
}

</script>
