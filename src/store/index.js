import { createStore } from 'vuex'

export default createStore({
    state: {
      loginStatus: false,
    },
    mutations: {
      upLoginStatus(state,isLogin){
        state.loginStatus = isLogin
      }
    },
    actions:{},
    getters:{}
  })