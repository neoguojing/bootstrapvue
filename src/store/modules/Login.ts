import LoginData from '@/protocol/Login'
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import client from '@/conf/client'
import config from '@/conf/config'
import {AxiosInstance, AxiosRequestConfig,AxiosResponse  } from "axios";

@Module({name: 'Login', namespaced: true, stateFactory: true})
export default class Login extends VuexModule {

  public loginData = new LoginData();
  public loginState = false; 

  get getLoginData(): LoginData{
      return this.loginData;
  }

  get getLoginState(): boolean{
    return this.loginState;
  }
 
  @Mutation
  public setLoginData(payload: LoginData) {
        this.loginData = payload;
        console.log("setLoginData",this.loginData);
  }

  @Mutation
  public setLoginState(payload: boolean) {
        this.loginState = payload;
  }

  @Mutation
  public doLogin(){
    console.log("doLogin:",this.loginData)
    client.post(config.urlLogin,this.loginData)
    .then(response => {
          console.log(response)
          if (response.data.code >=0){
            this.setLoginState(true);
          }
    })
    .catch(error => {
        console.log(error)
    });
  }
  
  @Action
  public async login(data: LoginData) {
      this.context.commit('setLoginData',data)
      await this.context.commit('doLogin')
  }
}