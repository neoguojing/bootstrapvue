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
import Button  from './Button.vue';

import { Options,Vue } from 'vue-class-component';

@Options({
    components: {
        Button
    },
    emits:['submit'],
})
export default class ForgetPassword extends Vue {
    constructor(){
        super();
        this.emailGroupState=null;
        this.forgetPasswordData = new ForgetPasswordData();
    }

    forgetPasswordData: ForgetPasswordData;
    emailGroupState: boolean|null

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
        // return this.$route.params.account
        return ""
    }

    /////////////////////////////////////////////
    
    onSubmit(){
        // forgetPasswordStore.setForgetPasswordData(this.forgetPasswordData);
        this.emitSubmit();
    }

    /////////////////////////////////////////////
    emitSubmit(): object{
        return this.forgetPasswordData;
    }
}
</script>
