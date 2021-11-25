import RegisterData from '@/protocol/Register'
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import axios, { AxiosRequestConfig } from "axios";

@Module({name: 'Register', namespaced: true, stateFactory: true})
export default class Register extends VuexModule{

  public registerData = new RegisterData();
 
  get getRegisterData(): RegisterData{
      return this.registerData;
  }

  @Mutation
  setRegisterData(payload: RegisterData) {
        this.registerData = payload;
        console.log(this.registerData);
  }

}
