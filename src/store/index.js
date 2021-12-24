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
      alertStatus: {
        message :"",
        type:"danger",
        isHide:true
      },
      dataCache:{

      }
    },
    mutations: {
      upLoginStatus(state,isLogin){
        state.loginStatus = isLogin
      },
      upUserInfo(state,info){
        state.userInfo = info
      },
      upAlertStatus(state,status){
        state.alertStatus = status
      },
      upDataCache(state,key,value){
        state.dataCache[key] = value
      }
    },
    actions:{},
    getters:{
      getLoginStatus:state => {
        return state.loginStatus
      },
      getUserInfo:state => {
        return state.userInfo
      },
      getAlertStatus:state => {
        return state.alertStatus
      },
      getDataCache:(state,key) => {
        return state.dataCache[key]
      }
    },
    plugins: [createPersistedState({
      storage:window.sessionStorage,
          reducer(val)  {
              return {
                  // 只储存state中的token
                  loginStatus: val.loginStatus,
                  userInfo: val.userInfo
              }
          }
      })]
  })