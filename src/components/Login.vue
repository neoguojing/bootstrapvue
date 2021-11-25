<template>
    <div>
        <b-row>
            <b-col cols="4">
            </b-col>
            <b-col cols="4">
                <b-form-group
                    id="account-group"
                    label-for="account"
                    :invalid-feedback="accountFeedback"
                    :state="accountGroupState"
                >
                <b-form-input 
                    id="account" 
                    type="text" 
                    placeholder="Enter your account"
                    v-model="loginData.Account" 
                    :state="accountState" 
                    trim
                    @input="accountGroupState=false"
                /></b-form-group>
            </b-col>
            <b-col cols="4">
            </b-col>
        </b-row>
            
        <b-row>
            <b-col cols="4">
            </b-col>
            <b-col>
                <b-form-group
                    id="password-group"
                    label-for="password"
                    :invalid-feedback="passwordFeedback"
                    :state="passwordGroupState"
                >
                <b-form-input 
                    id="password" 
                    type="password" 
                    placeholder="Enter your password"
                    v-model="loginData.Password" 
                    :state="passwordState" 
                    trim
                    @input="passwordGroupState=false"
                /></b-form-group>
            </b-col>
            <b-col cols="4">
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="4">
            </b-col>
            <b-col cols="2">
                <b-form-checkbox
                    id="mem"
                    v-model="loginData.IsRemember"
                    name="mempasswd"
                    value="1"
                    unchecked-value="0"
                >Remeber password</b-form-checkbox>
            </b-col>
            <b-col cols="2">
                <b-link 
                    @click="onForgetPassword"
                    :disabled="forgetPasswordState"
                >Forget password</b-link>
            </b-col>
            
            <b-col cols="4">
            </b-col>
        </b-row>

        <b-row style="margin-top:10px;">
            <b-col cols="6">
            </b-col>
            <b-col cols="2">
                <b-button block
                    variant="primary" 
                    @click="onSubmit" 
                    :disabled="!btnState"
                >Log In</b-button>
            </b-col>
            <b-col cols="4">
            </b-col>
        </b-row>
  </div>
</template>

<script lang="ts">
import LoginData from '@/protocol/Login'
import { Options,Vue } from 'vue-class-component';

//import store from '@/store';
//import { getModule } from 'vuex-module-decorators';
//import Login from '@/store/modules/Login';
//const loginStore = getModule(Login, store);

@Options({
    components: {
    
    },
    props:{
        nameLength: Number,
    },
    emits:['submit','forgetPassword']
})
export default class Login extends Vue {
    constructor(){
        super();
        this.accountGroupState = null;
        this.passwordGroupState = null;
        this.loginData = new LoginData();
        this.nameLength = 4;
    }
    //////////////////////////////////////

    nameLength: number;
    /////////////////////////////////////////////
    private loginData: LoginData;

    accountGroupState: boolean|null
    passwordGroupState: boolean|null
    ///////////////////////////////////////////
    get accountState(): boolean|null {
        if (this.loginData.Account == "") {
            return null;
        }
       return this.loginData.Account.length >= this.nameLength? true:false
    }
    
    get passwordState(): boolean|null{
        if (this.loginData.Password == "") {
            return null;
        }
        return true;
    }

    get btnState(): boolean{
        if (this.loginData.Account == "" || this.loginData.Password == "") {
            return false;
        }

        if (this.passwordState && this.accountState) {
            return true;
        }

        return false
    }

    get forgetPasswordState(): boolean {
        if (this.loginData.Account == "") {
            return true;
        }

        return false;
    }

    get accountFeedback(): string {
        if (this.loginData.Account.length >= this.nameLength) {
            return ''
        } else if (this.loginData.Account.length > 0) {
            return 'Enter at least '+ this.nameLength +' characters';
        } else {
            return 'Please enter account'
        }
    }
    get passwordFeedback(): string  {
        if (this.loginData.Password == '') {
            return 'Please enter password';
        } else {
            return '';
        }
    }

    /////////////////////////////////////////////
    onSubmit(){
        this.emitSubmit();
    }

    onForgetPassword(){
        this.emitForgetPassword();
    }

    /////////////////////////////////////////////
    emitSubmit(): object{
        return this.loginData;
    }

    emitForgetPassword(): string{
        return this.loginData.Account;
    }
}
</script>
