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
                    v-model="forgetPasswordData.email" 
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
import { Component, Prop, Vue,Emit,Inject,Provide,Watch,Model } from 'vue-property-decorator';
        
import { BFormGroup,BButton,BFormInput,BRow,BCol } from 'bootstrap-vue';

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
        this.account = ""
    }
    //////////////////////////////////////

    @Prop(String) account: string;
    /////////////////////////////////////////////
    forgetPasswordData = {
        email : ""
    }

    emailGroupState: boolean|null
    ///////////////////////////////////////////

     get emailState(): boolean|null {
        if (this.forgetPasswordData.email == "") {
            return null;
        }
        const patten = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        return patten.test(this.forgetPasswordData.email);
    }

    get emailFeedback(): string {
        if (this.forgetPasswordData.email == '') {
            return 'Please enter email';
        } else if(!this.emailState) {
            return 'invalid email';
        } else {
            return "";
        }
    }

    get btnState(): boolean{
        if (this.forgetPasswordData.email == "" || this.account == "") {
            return false;
        }

        if (this.emailState && this.account != "") {
            return true;
        }

        return false
    }

    /////////////////////////////////////////////
    
    onSubmit(){
        this.emitSubmit();
    }

    /////////////////////////////////////////////
    @Emit("submit")
    emitSubmit(): object{
        return this.forgetPasswordData;
    }
}
</script>
