
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import client from '@/conf/client'
import config from '@/conf/config'
import router from '@/router'
import {AxiosInstance, AxiosRequestConfig,AxiosResponse  } from "axios";

@Module({name: 'Login', namespaced: true, stateFactory: true})
export default class Login extends VuexModule {

  get getLoginState(): boolean{
    if (localStorage.getItem("token") == null){
      return false
    }
    return true;
  }

  get getUserInfo(): string|null{
    return localStorage.getItem("userName");
  }


  @Mutation
  public setUserInfo(username: string){
    localStorage.setItem("userName",username);
  }

  @Mutation
  public doLogin(loginData: object){
    console.log("doLogin:",loginData)

    return new Promise<boolean>((resolve, reject) => {
      client.post(config.urlLogin,loginData)
      .then(response => {
          console.log(response)
          if (response.data.code >=0){
            localStorage.setItem("token",'Bearer '+response.data.data.token);
            console.log("finish doLogin")
            
          }
          resolve(response.data);
      })
      .catch(error => {
          console.log(error)
          reject(error);
      })
    })
  }

  @Mutation
  public queryUserInfo(){
    client.get(config.urlGetLoginInfo)
    .then(response => {
          console.log(response)
          if (response.data.code >=0){
            this.setUserInfo(response.data.data.UserName);
          }
    })
    .catch(error => {
        console.log(error)
    });
  }


  @Mutation
  public doLogout(){
    client.get(config.urlLogout)
    .then(response => {
          console.log(response)
          if (response.statusText =="OK"){
            localStorage.removeItem("token")
          }
    })
    .catch(error => {
        console.log(error)
    });
  }

  @Action
  public async logout() {
      await this.context.commit('doLogout')
  }
}