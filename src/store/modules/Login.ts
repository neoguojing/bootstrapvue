import LoginData from '../../protocol/Login'
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import axios, { AxiosRequestConfig } from "axios";

@Module({name: 'Login', namespaced: true, stateFactory: true})
export default class Login extends VuexModule {

  public loginData = new LoginData();

  get getLoginData(): LoginData{
      return this.loginData;
  }
 
  @Mutation
  setLoginData(payload: LoginData) {
        this.loginData = payload;
        console.log(this.loginData);
  }
  
  @Action({ commit: 'login' })
  async login() {
    /*commit("changeAppLoadingState", true);

    var formData = new FormData();
    formData.append("username", payload.name);
    formData.append("password", payload.pwd);

    axios({
      method: "post",
      url: "/auth/login",
      data: formData
    })
      .then(response => {
        commit("loggedIn", { username: response.data.name });
        commit("changeAppLoadingState", false);
      })
      .catch(error => {
        commit("loginError", error.response.data || "GENERAL_ERROR");
        commit("changeAppLoadingState", false);
      });*/
  }
}