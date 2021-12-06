import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store  from './store'
import client from './conf/axios.js'
import VueAxios from 'vue-axios'

createApp(App).use(router).use(store).use(VueAxios,client).mount('#app')
