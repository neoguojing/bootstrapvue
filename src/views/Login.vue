<template>
  <div class="login" style="margin-top:100px;">
    <BRow>
      <BCol>
        <NLogin
            @submit="submit"
            @forgetPassword="forgetPassword"
        ></NLogin>
      </BCol>
    </BRow>
  </div>
</template>

<script>
// @ is an alias to /src
import { BRow,BCol  } from 'bootstrap-vue';
import NLogin from '@/components/Login.vue'
import client from '@/conf/client'
import config from '@/conf/config'

export default { //导出模块
    name: 'Login',
    components: {
        BRow,
        BCol,
        NLogin
    },
    methods:{
      submit(val){
        console.log("submit:",val)
        client.post(config.urlLogin,val)
        .then(response => {
            console.log(response)
            if (response.data.code >=0){
              localStorage.setItem("token",'Bearer '+response.data.data.token);
              this.$store.commit('Login/setUserInfo',response.data.data.username)
              console.log("onSubmit getLoginState:",this.$store.getters['Login/getLoginState'])
              console.log("onSubmit getUserInfo:",this.$store.getters['Login/getUserInfo'])
              
              setTimeout(() => {
                //if(this.$store.getters['Login/getLoginState']) {
                if (localStorage.getItem("token") != null){
                  this.$router.push("/admin");
                  console.log("finish doLogin");
                }
              }, 1000);
            }
        })
        .catch(error => {
            console.log(error)
        })
      },

      forgetPassword(val) {
        console.log("forgetPassword:",val)
        this.$router.push({
          path: `/forgetPassword/${val}`,
        })
      }
    }
}
</script>

