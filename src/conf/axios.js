import axios from "axios";
import config from "./config";

axios.defaults.baseURL = config.baseURL
axios.defaults.headers.common['Authorization'] = "";
axios.defaults.headers.post['Content-Type'] = "application/json;charset=UTF-8";
axios.defaults.timeout = 10*1000;
axios.defaults.withCredentials=false;

axios.interceptors.request.use(
    config => {
      const token = localStorage.getItem('token')
      if (token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
        console.log(token)
        config.headers.authorization = token  //请求头加上token
      }
      return config
    },
    err => {
      return Promise.reject(err)
    }
);
axios.interceptors.response.use(
    response => {
        //拦截响应，做统一处理 
        if (response.data.code) {
        }
        return response
    },
    //接口错误状态处理，也就是说无响应时的处理
    error => {
        return Promise.reject(error.response.status) // 返回接口返回的错误信息
    }
);

export default axios;