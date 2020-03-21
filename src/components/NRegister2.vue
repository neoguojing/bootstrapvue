<template>
    <div style="margin-top:10px;">
        <b-row>
            <b-col>
                <b-jumbotron v-show="0==currentPage" style="height:400px">
                    <b-row>
                        <b-col cols="4">
                        </b-col>
                        <b-col cols="4">
                            <b-form-group
                                id="userName-group"
                                label-for="userName"
                                :invalid-feedback="userNameFeedback"
                                :state="userNameGroupState"
                            >
                            <b-form-input 
                                id="userName" 
                                type="text" 
                                placeholder="Enter your userName"
                                v-model="registerData.userName" 
                                :state="userNameState" 
                                @input="userNameGroupState=false"
                                trim/>
                            </b-form-group>
                        </b-col>
                        <b-col cols="4">
                        </b-col>
                    </b-row>

                    <b-row>
                        <b-col cols="4">
                        </b-col>
                        <b-col cols="4">
                            <b-form-group>
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
                                :state="emailGroupState"
                            >
                            <b-form-input 
                                id="email" 
                                type="email" 
                                placeholder="Enter your email"
                                v-model="registerData.email" 
                                :state="emailState" 
                                @input="emailGroupState=false"
                                trim/>
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
                                :state="telGroupState"
                            >
                            <b-form-input 
                                id="tel" 
                                type="tel" 
                                placeholder="Enter your telephone"
                                v-model="registerData.tel" 
                                :state="telState" 
                                @input="telGroupState=false"
                                trim/>
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
                                :state="birthdayGroupState"
                            >
                            <b-form-input 
                                id="birthday" 
                                type="date" 
                                placeholder="Select your birthday"
                                v-model="registerData.birthday" 
                                :state="birthdayState"
                                @input="birthdayGroupState=false"
                                />
                            </b-form-group>
                        </b-col>
                        <b-col cols="4">
                        </b-col>
                    </b-row>
                </b-jumbotron>
            </b-col>
        </b-row>

        <b-row>
            <b-col>
                <b-jumbotron v-show="1==currentPage" style="height:400px">
                    <b-row>
                        <b-col>  
                            <b-img 
                                center 
                                thumbnail 
                                fluid
                                src="https://picsum.photos/125/125/?image=58"
                            ></b-img>
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
                                :state="picGroupState"
                            >
                            <b-form-file
                                id="pic" 
                                drop-placeholder="Drop file here..."
                                placeholder="Upload your pic"
                                v-model="registerData.pic" 
                                :state="picState"
                                accept="image/jpeg, image/png, image/gif"
                                @input="picGroupState=false"
                            /></b-form-group>
                        </b-col>
                        <b-col cols="4">
                        </b-col>
                    </b-row>
                </b-jumbotron>
            </b-col>
        </b-row>

        <b-row>
            <b-col>
                <b-jumbotron v-show="2==currentPage" style="height:400px">
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
                                v-model="registerData.password" 
                                :state="passwordState" 
                                @input="passwordGroupState=false"
                                trim/>
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
                                :state="confirmGroupState"
                            >
                            <b-form-input 
                                id="confirm-password" 
                                type="password" 
                                placeholder="Confirm your password"
                                v-model="confirmPassword" 
                                :state="confirmPasswordState" 
                                @input="confirmGroupState=false"
                                trim/>
                            </b-form-group>
                        </b-col>
                        <b-col cols="4">
                        </b-col>
                    </b-row>
                </b-jumbotron>
            </b-col>
        </b-row>

        <b-row>
            <b-col cols="5">
            </b-col>
            <b-col cols="2">
                <b-button-group block>
                <b-button pill variant="primary" 
                    @click="onPrev" 
                    :disabled="isPrevActive!=true"
                >Prev</b-button>
                <b-button pill variant="primary" 
                    @click="onNext" 
                >{{ submitBtnName }}</b-button>
                </b-button-group>
            </b-col>
            <b-col cols="5">
            </b-col>
        </b-row>
            
    </div>
</template>

<script lang="ts">
import RegisterData from '../protocol/Register'
import { Component, Prop, Vue,Emit,Inject,Provide,Watch,Model } from 'vue-property-decorator';
import { 
    BJumbotron,
    BButton,
    BRow,BCol,
    BFormGroup,
    BFormInput,
    BFormCheckbox,
    BFormRadioGroup,
    BFormFile
} from 'bootstrap-vue';

import store from '@/store';
import { getModule } from 'vuex-module-decorators';
import Register from '@/store/modules/Register';
const registerStore = getModule(Register, store);

@Component({
    components: {
        BJumbotron,
        BButton,
        BRow,BCol,
        BFormGroup,
        BFormInput,
        BFormCheckbox,
        BFormRadioGroup,
        BFormFile
    }
})
export default class NRegister2 extends Vue {
    constructor(){
        super()
        this.currentPage = 0;
        this.isPrevActive = false;
        this.submitBtnName = "Next";
        this.pageNum = 3;

        this.nameLength = 4;

        this.userNameGroupState=null;
        this.passwordGroupState=null;
        this.picGroupState=null;
        this.telGroupState=null;
        this.emailGroupState=null;
        this.birthdayGroupState=null;
        this.confirmGroupState=null;

        this.registerData = new RegisterData();
    }
    /////////////////////////////////////////////
    @Prop({default: 4}) nameLength: number;
    /////////////////////////////////////////////
    currentPage: number;
    isPrevActive: boolean;
    submitBtnName: string;
    pageNum: number;

    registerData: RegisterData;

    selectedGender = 0;
    genders = [
        { text: 'Male', value: 1 },
        { text: 'Female', value: 0 }
    ]
    
    confirmPassword = "";

    userNameGroupState: boolean|null
    passwordGroupState: boolean|null
    picGroupState: boolean|null
    telGroupState: boolean|null
    emailGroupState: boolean|null
    birthdayGroupState: boolean|null
    confirmGroupState: boolean|null
    //////////////////////////////////////////////
     get userNameState(): boolean|null {
        if (this.registerData.userName == "") {
            return null;
        }
       return this.registerData.userName.length >= this.nameLength? true:false
    }

    get emailState(): boolean|null {
        if (this.registerData.email == "") {
            return null;
        }
        const patten = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        return patten.test(this.registerData.email);
    }

    get telState(): boolean|null {
        if (this.registerData.tel == "") {
            return null;
        }
        const patten =/^[1][3,4,5,7,8][0-9]{9}$/;
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
        const patten = /^[A-Za-z][A-Za-z0-9]{7,99}(?<=[^A-Z].*)(?<=[^a-z].*)(?<=[^0-9].*)$/;
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
  
        if (this.passwordState && this.userNameState && 
            this.picState && this.telState && this.emailState &&
            this.birthdayState && this.confirmPasswordState) {
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

    get confirmPasswordFeedback(): string {
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
        } else if(!this.emailState) {
            return 'invalid email';
        } else {
            return "";
        }
    }

    get telFeedback(): string {
        if (this.registerData.tel == '') {
            return 'Please enter tel';
        } else if(!this.telState) {
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


    /////////////////////////////////////////////////////
    onPrev(){
        if (this.currentPage > 0) {
            this.isPrevActive = true;
            this.currentPage--;
        }
        if (this.currentPage == 0) {
            this.isPrevActive = false;
        }

        this.submitBtnName = "Next"
    }

    onNext(){
        if (this.currentPage < (this.pageNum-1)) {
            this.currentPage++;
        } 

        if (this.submitBtnName == "Submit") {
            this.emitSubmit()
        }

        if (this.currentPage == (this.pageNum-1)) {
            this.submitBtnName = "Submit"
            
        }
        this.isPrevActive = true;
    }

    onSubmit(){
        registerStore.setRegisterData(this.registerData);
        this.emitSubmit();
    }

    ////////////////////////////////////////////////////////
    @Emit("submit")
    emitSubmit(): object{
        return this.registerData;
    }
}
</script>
