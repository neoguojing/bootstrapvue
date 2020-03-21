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
                    v-model="loginData.account" 
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
                    v-model="loginData.password" 
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
                    v-model="loginData.isRemember"
                    name="mempasswd"
                    value="1"
                    unchecked-value="0"
                >Remeber password</b-form-checkbox>
            </b-col>
            <b-col cols="2">
                <b-link :to="redirectToForgetPassword">Forget password</b-link>
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
import { Component, Prop, Vue,Emit,Inject,Provide,Watch,Model } from 'vue-property-decorator';
import { BFormGroup,BButton,BFormInput,BFormCheckbox,BRow,BCol } from 'bootstrap-vue';
import LoginData from '../protocol/Login'

import store from '@/store';
import { getModule } from 'vuex-module-decorators';
import Login from '@/store/modules/Login';
const loginStore = getModule(Login, store);

@Component({
    components: {
        BFormGroup,
        BButton,
        BFormInput,
        BRow,BCol,
        BFormCheckbox
    }
})
export default class NLogin extends Vue {
    constructor(){
        super();
        this.accountGroupState = null;
        this.passwordGroupState = null;
        this.loginData = new LoginData();
        this.nameLength = 4;
    }
    //////////////////////////////////////

    @Prop({default: 4}) nameLength: number;
    /////////////////////////////////////////////
    private loginData: LoginData;

    accountGroupState: boolean|null
    passwordGroupState: boolean|null
    ///////////////////////////////////////////
    get accountState(): boolean|null {
        if (this.loginData.account == "") {
            return null;
        }
       return this.loginData.account.length >= this.nameLength? true:false
    }
    
    get passwordState(): boolean|null{
        if (this.loginData.password == "") {
            return null;
        }
        return true;
    }

    get btnState(): boolean{
        if (this.loginData.account == "" || this.loginData.password == "") {
            return false;
        }

        if (this.passwordState && this.accountState) {
            return true;
        }

        return false
    }

    get accountFeedback(): string {
        if (this.loginData.account.length >= this.nameLength) {
            return ''
        } else if (this.loginData.account.length > 0) {
            return 'Enter at least '+ this.nameLength +' characters';
        } else {
            return 'Please enter account'
        }
    }
    get passwordFeedback(): string  {
        if (this.loginData.password == '') {
            return 'Please enter password';
        } else {
            return '';
        }
    }

    get redirectToForgetPassword(): string {
        return "/forgetPassword/"+this.loginData.account
    }
    /////////////////////////////////////////////
    onSubmit(){
        loginStore.setLoginData(this.loginData);
        this.emitSubmit();
    }

    /////////////////////////////////////////////
    @Emit("submit")
    emitSubmit(): object{
        return this.loginData;
    }
}
</script>
