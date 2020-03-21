import RegisterData from '../../protocol/Register'
import { Module } from "vuex"
import axios, { AxiosRequestConfig } from "axios";

const RegisterModule: Module<any,any> = {
  state: {
      registerData: RegisterData,
  },

  getters: {
      getRegisterData(state): RegisterData{
          return state.registerData;
      }
  },
  mutations: {
    setRegisterData(state: any, payload?: any) {
          state.registerData = payload;
          console.log(state.registerData);
    }
  },
  actions: {

  }
}

export default RegisterModule;