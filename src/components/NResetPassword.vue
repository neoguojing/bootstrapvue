<template>
    <div>
        <b-row>
            <b-col cols="4">
            </b-col>
            <b-col cols="4">
                <b-form-group
                    id="old-password-group"
                    label-for="old-password"
                    :invalid-feedback="oldPasswordFeedback"
                    :state="oldPasswordGroupState"
                >
                <b-form-input 
                    id="old-password" 
                    type="password" 
                    placeholder="Enter your old password"
                    v-model="resetPassword.oldPassword" 
                    :state="oldPasswordState" 
                    trim
                    @input="oldPasswordGroupState=false"
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
                    v-model="resetPassword.password" 
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
            <b-col>
                <b-form-group
                    id="confirm-password-group"
                    label-for="confirm-password"
                    :invalid-feedback="confirmPasswordFeedback"
                    :state="confirmPasswordGroupState"
                >
                <b-form-input 
                    id="confirm-password" 
                    type="password" 
                    placeholder="Confirm your password"
                    v-model="confirmPassword" 
                    :state="confirmPasswordState" 
                    trim
                    @input="confirmPasswordGroupState=false"
                /></b-form-group>
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
                >Submit</b-button>
            </b-col>
            <b-col cols="4">
            </b-col>
        </b-row>
  </div>
</template>

<script lang="ts">
import ResetPasswordData from '../protocol/ResetPassword'
import { Component, Prop, Vue,Emit,Inject,Provide,Watch,Model } from 'vue-property-decorator';
import { BFormGroup,BButton,BFormInput,BRow,BCol } from 'bootstrap-vue';

import store from '@/store';
import { getModule } from 'vuex-module-decorators';
import ResetPassword from '@/store/modules/ResetPassword';
const resetPasswordStore = getModule(ResetPassword, store);
@Component({
    components: {
        BFormGroup,
        BButton,
        BFormInput,
        BRow,BCol
    }
})
export default class NResetPassword extends Vue {
    constructor(){
        super();
        this.confirmPassword = "";
        this.passwordGroupState = null;
        this.oldPasswordGroupState = null;
        this.confirmPasswordGroupState = null;

        this.resetPassword = new ResetPasswordData();
    }
    //////////////////////////////////////

    /////////////////////////////////////////////
    resetPassword: ResetPasswordData;

    confirmPassword: string;

    passwordGroupState: boolean|null
    oldPasswordGroupState: boolean|null
    confirmPasswordGroupState: boolean|null
    ///////////////////////////////////////////    
    get oldPasswordState(): boolean|null{
        if (this.resetPassword.password == "") {
            return null;
        }
        return true;
    }

    get passwordState(): boolean|null{
        if (this.resetPassword.password == "") {
            return null;
        }
        const patten = /^[A-Za-z][A-Za-z0-9]{7,99}(?<=[^A-Z].*)(?<=[^a-z].*)(?<=[^0-9].*)$/;
        return patten.test(this.resetPassword.password) &&
            (this.resetPassword.oldPassword != this.resetPassword.password);
    }

    get confirmPasswordState(): boolean|null{
        if (this.confirmPassword == "") {
            return null;
        }
        if (this.confirmPassword != this.resetPassword.password) {
            return false;
        }
        return true;
    }

    get btnState(): boolean{
        if (this.resetPassword.password == "" || 
            this.resetPassword.oldPassword == "" ||
            this.confirmPassword == "" ) {
            return false;
        }

        if (this.passwordState && 
            this.confirmPasswordState && 
            this.oldPasswordState) {
            return true;
        }

        return false
    }

    get passwordFeedback(): string  {
        if (this.resetPassword.password == '') {
            return 'Please enter password';
        } else if(!this.passwordState) {
            return '8-100 length & must include number and letter low and upper & first letter must not be number';
        } else if (this.resetPassword.oldPassword == this.resetPassword.password) {
            return 'new password was equal to old one'
        }else {
            return "";
        }
    }

    get confirmPasswordFeedback(): string  {
        if (this.confirmPassword == '') {
            return 'Please confirm password';
        } else if(!this.confirmPasswordState) {
            return 'password mismatch';
        } else {
            return "";
        }
    }

    get oldPasswordFeedback(): string  {
        if (this.resetPassword.oldPassword == '') {
            return 'Please enter old password';
        } else {
            return '';
        }
    }

    onSubmit(){
        resetPasswordStore.setResetPasswordData(this.resetPassword);
        this.emitSubmit();
    }

    /////////////////////////////////////////////
    @Emit("submit")
    emitSubmit(): object{
        return this.resetPassword;
    }
}
</script>
