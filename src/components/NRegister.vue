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
                    v-model="registerData.userName" 
                    :state="userNameState" trim/>
                </b-form-group>
            </b-col>
            <b-col cols="4">
            </b-col>
        </b-row>

        <b-row>
            <b-col cols="4">
            </b-col>
            <b-col cols="4">
                <b-form-group
                    id="pic-group"
                    label-for="pic"
                    :invalid-feedback="picFeedback"
                    :state="false"
                >
                <b-form-file
                    id="pic" 
                    drop-placeholder="Drop file here..."
                    placeholder="upload your pic"
                    v-model="registerData.pic" 
                    :state="picState"/>
                </b-form-group>
            </b-col>
            <b-col cols="4">
            </b-col>
        </b-row>

        <b-row>
            <b-col cols="4">
            </b-col>
            <b-col cols="4">
                <b-form-group label="gender">
                    <b-form-radio-group
                        v-model="selectedGender"
                        :options="genders"
                        name="gender"
                    ></b-form-radio-group>
                </b-form-group>
            </b-col>
            <b-col cols="4">
            </b-col>
        </b-row>

        <b-row>
            <b-col cols="4">
            </b-col>
            <b-col cols="4">
                <b-form-group
                    id="email-group"
                    label-for="email"
                    :invalid-feedback="emailFeedback"
                    :state="false"
                >
                <b-form-input 
                    id="email" 
                    type="email" 
                    placeholder="Enter your email"
                    v-model="registerData.email" 
                    :state="emailState" trim/>
                </b-form-group>
            </b-col>
            <b-col cols="4">
            </b-col>
        </b-row>

        <b-row>
            <b-col cols="4">
            </b-col>
            <b-col cols="4">
                <b-form-group
                    id="tel-group"
                    label-for="tel"
                    :invalid-feedback="telFeedback"
                    :state="false"
                >
                <b-form-input 
                    id="tel" 
                    type="tel" 
                    placeholder="Enter your tel"
                    v-model="registerData.tel" 
                    :state="telState" trim/>
                </b-form-group>
            </b-col>
            <b-col cols="4">
            </b-col>
        </b-row>
        
        <b-row>
            <b-col cols="4">
            </b-col>
            <b-col cols="4">
                <b-form-group
                    id="birthday-group"
                    label-for="birthday"
                    :invalid-feedback="birthdayFeedback"
                    :state="false"
                >
                <b-form-input 
                    id="birthday" 
                    type="date" 
                    placeholder="select your birthday"
                    v-model="registerData.birthday" 
                    :state="birthdayState"/>
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
                    v-model="registerData.password" 
                    :state="passwordState" trim/>
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
                    id="confirm-password-group"
                    label-for="confirm-password"
                    :invalid-feedback="confirmPasswordFeedback"
                    :state="false"
                >
                <b-form-input 
                    id="confirm-password" 
                    type="password" 
                    placeholder="confirm your password"
                    v-model="confirmPassword" 
                    :state="confirmPasswordState" trim/>
                </b-form-group>
            </b-col>
            <b-col cols="4">
            </b-col>
        </b-row>

        <b-row>
            <b-col cols="4">
            </b-col>
            <b-col cols="4">
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
import { Component,Prop,Vue,Emit,Inject,Provide,Watch,Model } from 'vue-property-decorator';
        
import { BFormGroup,BButton,BFormInput,BFormCheckbox,BRow,BCol,BFormRadioGroup,BFormFile } from 'bootstrap-vue';

@Component({
    components: {
        BFormGroup,
        BButton,
        BFormInput,
        BRow,BCol,
        BFormCheckbox,
        BFormRadioGroup,
        BFormFile
    }
})
export default class NRegister extends Vue {
    /////////////////////////////////////////////
    registerData = {
        userName : "",
        password : "",
        gender : 0,
        pic: null,
        email:"",
        tel:"",
        birthday:""
    }
    
    confirmPassword = "";
    ///////////////////////////////////////////
    get userNameState(): boolean|null {
        if (this.registerData.userName == "") {
            return null;
        }
       return this.registerData.userName.length >= this.nameLength? true:false
    }

    get emailNameState(): boolean|null {
        if (this.registerData.email == "") {
            return null;
        }
       const patten=new RegExp("/^[A-Za-z][A-Za-z0-9]{7,99}(?<=[^A-Z].*)(?<=[^a-z].*)(?<=[^0-9].*)$/");
        return patten.test(this.registerData.email);
    }

    get telState(): boolean|null {
        if (this.registerData.tel == "") {
            return null;
        }
       const patten=new RegExp("/^[A-Za-z][A-Za-z0-9]{7,99}(?<=[^A-Z].*)(?<=[^a-z].*)(?<=[^0-9].*)$/");
        return patten.test(this.registerData.tel);
    }

    get picState(): boolean|null {
        if (this.registerData.pic == null) {
            return false;
        }

        return true;
    }

    get birthdayState(): boolean|null {
        if (this.registerData.birthday == "") {
            return false;
        }

        return true;
    }
    
    get passwordState(): boolean|null{
        if (this.registerData.password == "") {
            return null;
        }
        const patten=new RegExp("/^[A-Za-z][A-Za-z0-9]{7,99}(?<=[^A-Z].*)(?<=[^a-z].*)(?<=[^0-9].*)$/");
        return patten.test(this.registerData.password);
    }

    get confirmPasswordState(): boolean|null{
        if (this.confirmPassword == "") {
            return null;
        }
        if (this.confirmPassword != this.registerData.password) {
            return false;
        }
        return true;
    }

    get btnState(): boolean{
        if (this.registerData.userName == "" || this.registerData.password == "") {
            return false;
        }

        if (this.passwordState && this.userNameState) {
            return true;
        }

        return false
    }

    get userNameFeedback(): string {
        if (this.registerData.userName.length >= this.nameLength) {
            return ''
        } else if (this.registerData.userName.length > 0) {
            return 'Enter at least '+ this.nameLength +' characters';
        } else {
            return 'Please enter userName'
        }
    }
    get passwordFeedback(): string  {
        if (this.registerData.password == '') {
            return 'Please enter password';
        } else if(!this.passwordState) {
            return '8-100 length & must include number and letter low and upper & first letter must not be number';
        } else {
            return "";
        }
    }

    get confirmPaaswordFeedback(): string {
        if (this.confirmPassword == '') {
            return 'Please confirm password';
        } else if(!this.confirmPasswordState) {
            return 'password mismatch';
        } else {
            return "";
        }
    }

    get emailFeedback(): string {
        if (this.registerData.email == '') {
            return 'Please enter email';
        } else if(!this.registerData.email) {
            return 'invalid email';
        } else {
            return "";
        }
    }

    get telFeedback(): string {
        if (this.registerData.tel == '') {
            return 'Please enter tel';
        } else if(!this.registerData.tel) {
            return 'invalid tel';
        } else {
            return "";
        }
    }

    get picFeedback(): string {
        if (this.registerData.pic == null) {
            return 'Please upload your pic';
        } else if(!this.registerData.pic) {
            return 'invalid tel';
        } else {
            return "";
        }
    }

    get birthdayFeedback(): string {
        if (this.registerData.birthday == "") {
            return 'Please select your birthday';
        } else if(!this.registerData.birthday) {
            return 'invalid tel';
        } else {
            return "";
        }
    }
    ////////////////////////////////////////////
    constructor(){
        super()
        this.nameLength = 4;
    }
    @Prop({default: 4}) nameLength: number;
    /////////////////////////////////////////////
    onSubmit(){
        this.emitSubmit();
    }

    /////////////////////////////////////////////
    @Emit("submit")
    emitSubmit(): object{
        return this.registerData;
    }
}
</script>
