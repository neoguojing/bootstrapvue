
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import client from '@/conf/client'
import config from '@/conf/config'
import router from '@/router'
import {AxiosInstance, AxiosRequestConfig,AxiosResponse  } from "axios";

@Module({name: 'Login', namespaced: true, stateFactory: true})
export default class Login extends VuexModule {

  public userInfo = {
      UserName:""
  }; 

  get getLoginState(): boolean{
    if (localStorage.getItem("token") == null){
      return false
    }
    return true;
  }

  get getUserInfo(): object{
    return this.userInfo;
  }


  @Mutation
  public setUserInfo(username: string){
    this.userInfo.UserName = username;
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
            this.userInfo.UserName = response.data.data.username;
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
            console.log("queryUserInfo:",this.userInfo.UserName);
            this.userInfo.UserName = response.data.data.UserName;
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