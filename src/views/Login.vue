<template>
<form class="row gy-5 needs-validation" novalidate>
  <div class="row gy-5">
    <div class="col"></div>
    <div class="col">
      <div class="form-floating has-validation">
        <input type="text" class="form-control" id="username" aria-describedby="inputGroupPrepend" required>
        <label for="username">Username</label>
      </div>
      <div class="invalid-feedback">
          Please choose a username.
      </div>
    </div>
    <div class="col"></div>
  </div>
  <div class="row gy-2">
    <div class="col"></div>
    <div class="col">
      <div class="has-validation form-floating">
        <input type="password" class="form-control" id="password" required>
        <label for="password">Password</label>
      </div>
      <div class="invalid-feedback">
        Please provide a valid Password.
      </div>
    </div>
    <div class="col"></div>
  </div>
  <div class="row gx-2">
    <div class="col-4"></div>
    <div class="form-check col-2">
      <input class="form-check-input" type="checkbox" value="" id="remember" required>
      <label class="form-check-label" for="remember">
        Remember
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
    <div class="col-6"></div>
  </div>
  <div class="row gy-1">
    <div class="col-5"></div>
    <div class="col-2">
    <button class="btn btn-primary" type="submit">Login</button>
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
