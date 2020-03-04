<template>
    <div>
        <b-row>
            <b-col cols="4">
            </b-col>
            <b-col cols="4">
                <b-form-group
                    id="userName-group"
                    label-for="userName"
                    :invalid-feedback="userNameFeedback"
                    :state="false"
                >
                <b-form-input 
                    id="userName" 
                    type="text" 
                    placeholder="Enter your userName"
                    v-model="loginData.userName" 
                    :state="userNameState" trim/>
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
export default class NRegister extends Vue {
    /////////////////////////////////////////////
    loginData = {
        userName : "",
        password : "",
        isRemember : 0
    }
    
    ///////////////////////////////////////////
    get userNameState(): boolean|null {
        if (this.loginData.userName == "") {
            return null;
        }
       return this.loginData.userName.length >= this.nameLength? true:false
    }
    
    get passwordState(): boolean|null{
        if (this.loginData.password == "") {
            return null;
        }
        return true;
    }

    get btnState(): boolean{
        if (this.loginData.userName == "" || this.loginData.password == "") {
            return false;
        }

        if (this.passwordState && this.userNameState) {
            return true;
        }

        return false
    }

    get userNameFeedback(): string {
        if (this.loginData.userName.length >= this.nameLength) {
            return ''
        } else if (this.loginData.userName.length > 0) {
            return 'Enter at least '+ this.nameLength +' characters';
        } else {
            return 'Please enter userName'
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
    constructor(){
        super()
        this.nameLength = 4;
    }
    @Prop({default: 4}) nameLength: number;
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
