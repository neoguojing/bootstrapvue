<template>
  <form class="row g-10 needs-validation" novalidate>
  <div class="row g-5">
    <div class="col"></div>
    <div class="input-group has-validation col">
      <input type="text" class="form-control" id="username" aria-describedby="inputGroupPrepend" required>
      <div class="invalid-feedback">
        Please choose a username.
      </div>
    </div>
    <div class="col"></div>
  </div>
  <div class="row g-3">
    <div class="col"></div>
    <div class="input-group has-validation col">
      <input type="passward" class="form-control" id="passward" required>
      <div class="invalid-feedback">
        Please provide passward.
      </div>
    </div>
    <div class="col"></div>
  </div>
  <div class="row g-3 justify-content-md-center ">
    <div class="form-check col-2">
      <input class="form-check-input" type="checkbox" value="" id="remember" required>
      <label class="form-check-label" for="remember">
       Remember passward.
      </label>

    </div>
  </div>
  <div class="row g-1 justify-content-md-center">
    <button class="btn btn-primary col-1" type="submit">Login</button>
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
