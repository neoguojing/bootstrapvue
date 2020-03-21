import LoginData from '../../protocol/Login'
import { Module } from "vuex"
import axios, { AxiosRequestConfig } from "axios";

const LoginModule: Module<any,any> = {
  state: {
      loginData: LoginData,
  },

  getters: {
      getLoginData(state): LoginData{
          return state.loginData;
      }
  },
  mutations: {
    setLoginData(state: any, payload?: any) {
          state.loginData = payload;
          console.log(state.loginData);
    }
  },
  actions: {
      async login({ commit }, payload: any) {
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
}

export default LoginModule;