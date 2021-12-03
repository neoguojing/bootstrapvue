import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate"
export default createStore({
    state: {
      loginStatus: false,
    },
    mutations: {
      upLoginStatus(state,isLogin){
        state.loginStatus = isLogin
        console.log("loginStatus",state.loginStatus)
      }
    },
    actions:{},
    getters:{
      getLoginStatus:state => {
        console.log("getLoginStatus",state.loginStatus)
        return state.loginStatus
      }
    },
    plugins: [createPersistedState({
      storage:window.sessionStorage,
          reducer(val)  {
              return {
                  // 只储存state中的token
                  loginStatus: val.loginStatus
              }
          }
      })]
  })