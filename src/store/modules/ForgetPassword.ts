import ForgetPasswordData from '../../protocol/ForgetPassword'
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import axios, { AxiosRequestConfig } from "axios";

@Module({name: 'ForgetPassword', namespaced: true, stateFactory: true})
export default class ForgetPassword extends VuexModule{

    public forgetPasswordData = new ForgetPasswordData();

    
    get getForgetPasswordData(): ForgetPasswordData{
        return this.forgetPasswordData;
    }
 
    @Mutation
    setForgetPasswordData(payload: ForgetPasswordData) {
          this.forgetPasswordData = payload;
          console.log(this.forgetPasswordData);
    }
}
