<template>
    <div style="margin-top:50px;">
       <b-row>
            <b-col cols="4">
            </b-col>
            <b-col cols="4">
                <b-form-group
                    id="email-group"
                    label-for="email"
                    :invalid-feedback="emailFeedback"
                    :state="emailGroupState"
                >
                <b-form-input 
                    id="email" 
                    type="email" 
                    placeholder="Enter your email"
                    v-model="forgetPasswordData.Email" 
                    :state="emailState" 
                    @input="emailGroupState=false"
                    trim/>
                </b-form-group>
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
import ForgetPasswordData from '@/protocol/ForgetPassword'
import { Component, Prop, Vue,Emit,Inject,Provide,Watch,Model } from 'vue-property-decorator';
import { BFormGroup,BButton,BFormInput,BRow,BCol } from 'bootstrap-vue';

import store from '@/store';
import { getModule } from 'vuex-module-decorators';
import ForgetPassword from '@/store/modules/ForgetPassword';
const forgetPasswordStore = getModule(ForgetPassword, store);

@Component({
    components: {
        BFormGroup,
        BButton,
        BFormInput,
        BRow,BCol
    }
})
export default class NForgetPassword extends Vue {
    constructor(){
        super();
        this.emailGroupState=null;
        this.forgetPasswordData = new ForgetPasswordData();
    }
    //////////////////////////////////////

    /////////////////////////////////////////////
    forgetPasswordData: ForgetPasswordData;

    emailGroupState: boolean|null
    ///////////////////////////////////////////

    get emailState(): boolean|null {
        if (this.forgetPasswordData.Email == "") {
            return null;
        }
        const patten = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        return patten.test(this.forgetPasswordData.Email);
    }

    get emailFeedback(): string {
        if (this.forgetPasswordData.Email == '') {
            return 'Please enter email';
        } else if(!this.emailState) {
            return 'invalid email';
        } else {
            return "";
        }
    }

    get btnState(): boolean{
        if (this.forgetPasswordData.Email == "") {
            return false;
        }

        if (this.emailState) {
            return true;
        }

        return false
    }

    get accountInfo(): string{
        return this.$route.params.account
    }

    /////////////////////////////////////////////
    
    onSubmit(){
        forgetPasswordStore.setForgetPasswordData(this.forgetPasswordData);
        this.emitSubmit();
    }

    /////////////////////////////////////////////
    @Emit("submit")
    emitSubmit(): object{
        return this.forgetPasswordData;
    }
}
</script>
