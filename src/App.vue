<template>
  <BContainer fluid>
    <BRow>
      <BCol>
        <NNavBar v-if="isRouterAlive"
          :brandImage="logo"
          theme="primary" 
          :menuList="menus" 
          isSearchShow="yes"
          @search="handleSearch"
          @logout="logout"
          @resetPassword="resetPassword"
        />
      </BCol>
    </BRow>
    <BRow >
      <BCol>
        <router-view class="full-height"/>
      </BCol>
    </BRow>
  </BContainer>
  
</template>

<script>
// @ is an alias to /src
import NNavBar from '@/components/NNavBar.vue'
import { BContainer,BRow,BCol } from 'bootstrap-vue';
import client from '@/conf/client'
import config from '@/conf/config'

export default { //导出模块
  name: 'Index',
  components: {
    NNavBar
  },
  data: function(){
    return {
      logo: require('@/assets/favicon.png'),
      menus:[
        {text:"Home",to:"/"},
        {text:"Demo",to:"/admin/resetPassword"},
        {text:"About",to:"/forgetPassword/1223"}
      ],
      isRouterAlive: true
    }
  },
  provide() {
    return {
      reload: this.reload
    }
  },
  computed:{
    
  },
  methods:{
    handleSearch(val){
      console.log("handleSearch:",val)
    },
    reload() {
      this.isRouterAlive = false
      this.$nextTick(function(){
        this.isRouterAlive = true
      })
    },
    logout() {
      client.get(config.urlLogout)
      .then(response => {
            console.log(response)
            if (response.statusText =="OK"){
              localStorage.removeItem("token")
              localStorage.removeItem("userName")
              this.$router.replace("/login");
            }
      })
      .catch(error => {
          console.log(error)
      });        
    },
    resetPassword() {
        this.$router.push("/admin/resetPassword");
    },
    
  },

  watch:{
      '$route':function(newVal,oldVal){
          console.log(newVal,oldVal)
          this.reload()
      }
  },
  mounted() {
    //this.reload();
  }
}
</script>
<style scoped>
html, body {
  height: 100%;
  margin: 0;
}

.full-height {
  height: 100%;
}
</style>