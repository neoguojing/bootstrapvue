import axios from "axios";
import config from "./index.js";
import store  from '../store'
import router  from '../router'
const client = axios.create({
    baseURL: config.baseURL,
});

//client.defaults.headers.common['Authorization'] = "";
client.defaults.headers.post['Content-Type'] = "application/json";
client.defaults.timeout = 10*1000;
client.defaults.withCredentials=false;

client.interceptors.request.use(
    config => {
      console.log("请求拦截器")
      const token = store.getters.getLoginStatus
      if (token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
        config.headers.authorization = token  //请求头加上token
      }
      return config
    },
    err => {
      return Promise.reject(err)
    }
);
client.interceptors.response.use(
    response => {
        //拦截响应，做统一处理 
        if (response.data.code != 0) {
            console.log("请求异常",response.data.code)
            return 
        }
        return response
    },
    //接口错误状态处理，也就是说无响应时的处理
    error => {
        if (error.response.data.code) {
            switch (error.response.data.code) {
                case 401:
                    console.log("鉴权失败")
                    store.commit('upLoginStatus',"")
                    store.commit('upUserInfo',{})
                    router.push("/login")
                    return 
            }
        }
        return Promise.reject(error.response.status) // 返回接口返回的错误信息
    }
);

export default client;