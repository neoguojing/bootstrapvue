import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate"
export default createStore({
    state: {
      loginStatus: "",
      userName : "",
    },
    mutations: {
      upLoginStatus(state,isLogin){
        state.loginStatus = isLogin
      },
      upUserName(state,name){
        state.userName = name
      }
    },
    actions:{},
    getters:{
      getLoginStatus:state => {
        return state.loginStatus
      },
      getUserName:state => {
        return state.userName
      }
    },
    plugins: [createPersistedState({
      storage:window.sessionStorage,
          reducer(val)  {
              return {
                  // 只储存state中的token
                  loginStatus: val.loginStatus,
                  userName: val.userName
              }
          }
      })]
  })