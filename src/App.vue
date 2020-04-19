<template>
  <BContainer fluid>
    <BRow>
      <BCol>
        <NNavBar 
          :brandImage="logo"
          theme="primary" 
          :menuList="menus" 
          isSearchShow=false
          @search="handleSearch"
        />
      </BCol>
    </BRow>
    <BRow >
      <BCol>
        <router-view v-if="isRouterAlive" class="full-height"/>
      </BCol>
    </BRow>
  </BContainer>
  
</template>

<script>
// @ is an alias to /src
import NNavBar from '@/components/NNavBar.vue'
import { BContainer,BRow,BCol } from 'bootstrap-vue';

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
  methods:{
    handleSearch(val){
      console.log("handleSearch:",val)
    },
    reload() {
      this.isRouterAlive = false
      this.$nextTick(function(){
        this.isRouterAlive = true
      })
    }
  },

  mounted() {
    this.reload();
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