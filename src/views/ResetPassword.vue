<template>
  <div class="reset-password">
    <nav class="navbar navbar-light bg-light px-3">
        <a class="navbar-brand" href="#">Password Reset</a>
    </nav>

    <div class="container mt-5">
      <div class="row justify-content-start gy-3">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <form @submit="resetPassword">
                <div class="mb-3">
                  <label for="password" class="form-label">New Password</label>
                  <input type="password" class="form-control" id="password" v-model="password" placeholder="Enter your new password">
                </div>
                <div class="mb-3">
                  <label for="confirm-password" class="form-label">Confirm Password</label>
                  <input type="password" class="form-control" id="confirm-password" v-model="confirmPassword" placeholder="Confirm your new password">
                  <div v-if="password !== confirmPassword" class="alert alert-danger mt-2" role="alert">
                    Passwords do not match!
                  </div>
                </div>
                <button type="submit" class="btn btn-primary">Reset Password</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import config from '@/conf'
export default {
  data() {
    return {
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    resetPassword() {
      if (this.password !== this.confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      // Add code here to handle password reset
      var req = {
        old_password: this.password,
        new_password: this.confirmPassword,
      };

      this.$http.post(config.urlResetPassword, req)
        .then(res => {
          console.log(res.data);
          if (res.data.code != 0) {
            alert('重置密码失败');
            this.confirmPassword = '';
            return;
          }
          alert('重置密码成功');
        });

        // Reset input fields
        this.password = '';
        this.confirmPassword = '';
    }
  }
}

</script>

<style scoped>
.reset-password {
  /* Add styles here */
}
</style>

