import LoginData from '@/protocol/Login'
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import client from '@/conf/client'
import config from '@/conf/config'
import {AxiosInstance, AxiosRequestConfig,AxiosResponse  } from "axios";

@Module({name: 'Login', namespaced: true, stateFactory: true})
export default class Login extends VuexModule {

  public loginData = new LoginData();
  public userInfo = {
      ID:0,
      UserName:""
  }; 

  get getLoginData(): LoginData{
      return this.loginData;
  }

  get getLoginState(): boolean{
    if (localStorage.getItem("token") == null) {
        return false;
    } 
    return true;
  }

  get getUserInfo(): object{
    return this.userInfo;
  }

 
  @Mutation
  public setLoginData(payload: LoginData) {
        this.loginData = payload;
        console.log("setLoginData",this.loginData);
  }


  @Mutation
  public doLogin(){
    console.log("doLogin:",this.loginData)
    client.post(config.urlLogin,this.loginData)
    .then(response => {
          console.log(response)
          if (response.data.code >=0){
            localStorage.setItem("token",'Bearer '+response.data.data.token);
            this.queryUserInfo();
          }
          
    })
    .catch(error => {
        console.log(error)
    });
  }

  //@Mutation
  public queryUserInfo(){
    client.get(config.urlGetLoginInfo)
    .then(response => {
          console.log(response)
          if (response.data.code >=0){
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
  public login(data: LoginData) {
      this.context.commit('setLoginData',data)
      console.log("do login")
      this.context.commit('doLogin')
      //console.log("queryUserInfo")
      //this.context.commit("queryUserInfo")
  }

  @Action
  public async logout() {
      await this.context.commit('doLogout')
  }
}