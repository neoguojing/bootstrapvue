import Vue from 'vue'
import Vuex from 'vuex'
import Login  from './modules/Login'
import Register  from './modules/Register'
import ForgetPassword  from './modules/ForgetPassword'
import ResetPassword  from './modules/ResetPassword'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Login,
    Register,
    ForgetPassword,
    ResetPassword,
  }
})
