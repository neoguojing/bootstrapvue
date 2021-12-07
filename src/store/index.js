import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate"
export default createStore({
    state: {
      loginStatus: "",
      userInfo : {
        userName:"",
        email:"",
        gender:0,
        portal:"",
        firstName:"",
        lastName:"",
        birthDay:"",

      },
    },
    mutations: {
      upLoginStatus(state,isLogin){
        state.loginStatus = isLogin
      },
      upUserInfo(state,info){
        state.userInfo = info
      }
    },
    actions:{},
    getters:{
      getLoginStatus:state => {
        return state.loginStatus
      },
      getUserInfo:state => {
        return state.userInfo
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