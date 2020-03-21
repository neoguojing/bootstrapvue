import Vue from 'vue'
import Vuex from 'vuex'
import LoginModule  from './modules/Login'
import RegisterModule  from './modules/Register'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    login: LoginModule,
    register: RegisterModule
  }
})
