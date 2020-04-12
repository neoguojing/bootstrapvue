import axios from "axios";
import config from "./config";
import router from '@/router'
import store from '@/store'

const client = axios.create({
    baseURL: config.baseURL,
});

//client.defaults.headers.common['Authorization'] = "";
client.defaults.headers.post['Content-Type'] = "application/json";
client.defaults.timeout = 10*1000;
client.defaults.withCredentials=false;

client.interceptors.request.use(
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
client.interceptors.response.use(
    response => {
        //拦截响应，做统一处理 
        if (response.data.code) {
            /*
            switch (response.data.code) {
                case 1002:
                    store.state.isLogin = false
                    router.replace({
                        path: '/login',
                        query: {
                            redirect: router.currentRoute.fullPath
                        }
                    })
            }*/
        }
        return response
    },
    //接口错误状态处理，也就是说无响应时的处理
    error => {
        return Promise.reject(error.response.status) // 返回接口返回的错误信息
    }
);

export default client;