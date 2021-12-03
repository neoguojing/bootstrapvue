<template>
    <div class="modal fade modal-signin bg-secondary py-5" tabindex="-1" :id="id" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content rounded-5">
            <div class="modal-header p-5 pb-4 border-bottom-0">
                <!-- <h5 class="modal-title">Modal title</h5> -->
                <h2 class="fw-bold mb-0">Sign up for free</h2>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body p-5 pt-0">
                <form class="needs-validation" :class="validateClass" novalidate>
                <div class="form-floating mb-3">
                    <input v-model="email" type="email" class="form-control rounded-4" id="emailSignUp" placeholder="name@example.com" required>
                    <label for="emailSignUp">Email address</label>
                    <div class="invalid-feedback">
                        Please provide a valid email.
                    </div>
                </div>
                <div class="form-floating mb-3">
                    <input v-model="password" type="password" class="form-control rounded-4" id="passwordSignUp" placeholder="Password" required minlength="8" maxlength="128">
                    <label for="passwordSignUp">Password</label>
                    <div class="invalid-feedback">
                        Please provide a valid password : 8-128 letter.
                    </div>
                </div>
                <button class="w-100 mb-2 btn btn-lg rounded-4 btn-primary" @click.stop="onSignUp" type="submit">Sign up</button>
                <small class="text-muted">By clicking Sign up, you agree to the terms of use.</small>
                <hr class="my-4">
                <h2 class="fs-5 fw-bold mb-3">Or use a third-party</h2>
                <button @click.stop="onThirdPartySignUp" class="w-100 py-2 mb-2 btn btn-outline-dark rounded-4" type="submit">
                    <svg class="bi me-1" width="16" height="16"><use xlink:href="#twitter"/></svg>
                    Sign up with Twitter
                </button>
                <button @click.stop="onThirdPartySignUp"  class="w-100 py-2 mb-2 btn btn-outline-primary rounded-4" type="submit">
                    <svg class="bi me-1" width="16" height="16"><use xlink:href="#facebook"/></svg>
                    Sign up with Facebook
                </button>
                <button @click.stop="onThirdPartySignUp" class="w-100 py-2 mb-2 btn btn-outline-secondary rounded-4" type="submit">
                    <svg class="bi me-1" width="16" height="16"><use xlink:href="#github"/></svg>
                    Sign up with GitHub
                </button>
                </form>
            </div>
        </div>
    </div>
    </div>
</template>

<script >
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import bootstrap from 'bootstrap/dist/js/bootstrap.min.js'
import _ from 'lodash'

export default{
    name:"SignUpModal",
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

            //TODO 关不掉
            var myModal = new bootstrap.Modal(document.getElementById(this.id), {
                keyboard: false
            })
            myModal.hide()
            console.log(myModal)

            console.log("注册成功")
            this.$router.push("/login")

        },1000),

        onThirdPartySignUp: _.debounce(function(){
            console.log("注册成功")
            this.$router.push("/login")
        },1000),

        validate(){
            var email = document.getElementById("emailSignUp");
            var password = document.getElementById("passwordSignUp");
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
.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, .1);
  border: solid rgba(0, 0, 0, .15);
  border-width: 1px 0;
  box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
}

.bi {
  vertical-align: -.125em;
  fill: currentColor;
}

.rounded-4 { border-radius: .5rem; }
.rounded-5 { border-radius: .75rem; }
.rounded-6 { border-radius: 1rem; }

.modal-sheet .modal-dialog {
  width: 380px;
  transition: bottom .75s ease-in-out;
}
.modal-sheet .modal-footer {
  padding-bottom: 2rem;
}

.modal-alert .modal-dialog {
  width: 380px;
}

.border-right { border-right: 1px solid #eee; }

.modal-tour .modal-dialog {
  width: 380px;
}

</style>