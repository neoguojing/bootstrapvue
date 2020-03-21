import ResetPasswordData from '../../protocol/ResetPassword'
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import axios, { AxiosRequestConfig } from "axios";
import { Md5 } from 'ts-md5';

@Module({name: 'ResetPassword', namespaced: true, stateFactory: true})
export default class ResetPassword extends VuexModule{

    public resetPasswordData = new ResetPasswordData();

    md5(val: string): string|Int32Array{
        return Md5.hashStr(val,false);
    }
    
    get getResetPasswordData(): ResetPasswordData{
        return this.resetPasswordData;
    }
  
    @Mutation
    setResetPasswordData(payload: ResetPasswordData) {
          this.resetPasswordData = payload;
          console.log(this.resetPasswordData);
    }

}