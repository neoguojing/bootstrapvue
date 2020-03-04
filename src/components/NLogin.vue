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
                    :state="false"
                >
                <b-form-input 
                    id="account" 
                    type="text" 
                    placeholder="Enter your account"
                    v-model="loginData.account" 
                    :state="accountState" trim/>
                </b-form-group>
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
                    :state="false"
                >
                <b-form-input 
                    id="password" 
                    type="password" 
                    placeholder="Enter your password"
                    v-model="loginData.password" 
                    :state="passwordState" trim/>
                </b-form-group>
            </b-col>
            <b-col cols="4">
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="4">
            </b-col>
            <b-col cols="3">
                <b-form-checkbox
                    id="mem"
                    v-model="loginData.isRemember"
                    name="mempasswd"
                    value="1"
                    unchecked-value="0"
                >rememer password</b-form-checkbox>
            </b-col>
            <b-col cols="1">
                <b-button 
                    variant="primary" 
                    @click="onSubmit" 
                    :disabled="!btnState"
                >submit</b-button>
            </b-col>
            <b-col cols="4">
            </b-col>
        </b-row>
        
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue,Emit,Inject,Provide,Watch,Model } from 'vue-property-decorator';
        
import { BFormGroup,BButton,BFormInput,BFormCheckbox,BRow,BCol } from 'bootstrap-vue';

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
    /////////////////////////////////////////////
    loginData = {
        account : "",
        password : "",
        isRemember : 0
    }
    
    ///////////////////////////////////////////
    get accountState(): boolean|null {
        if (this.loginData.account == "") {
            return null;
        }
       return this.loginData.account.length >= this.nameLength? true:false
    }
    
    get passwordState(): boolean{
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
    ////////////////////////////////////////////
    @Prop({default: 4}) nameLength?: number;
    /////////////////////////////////////////////
    checkPassword(): boolean{
        const patten=new RegExp("/^[A-Za-z][A-Za-z0-9]{7,99}(?<=[^A-Z].*)(?<=[^a-z].*)(?<=[^0-9].*)$/");
        return patten.test(this.loginData.password);
    }
    onSubmit(){
        this.emitSubmit();
    }

    /////////////////////////////////////////////
    @Emit("submit")
    emitSubmit(): object{
        return this.loginData;
    }
}
</script>
