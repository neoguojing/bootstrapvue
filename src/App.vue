<template>
  <BContainer fluid>
    <BRow>
      <BCol>
        <NNavBar 
          :brandImage="Logo"
          theme="primary" 
          :menuList="menus" 
          isSearchShow=false
          @search="handleSearch"
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
import Logo from '@/assets/logo.png'
import { BContainer,BRow,BCol } from 'bootstrap-vue';

export default { //导出模块
  name: 'Index',
  components: {
    NNavBar
  },
  data: function(){
    return {
      menus:[
        {text:"Vue",to:"/"},
        {text:"Demo",to:"/demo"},
        {text:"About",to:"/register2"}
      ]
    }
  },
  methods:{
    handleSearch(val){
      console.log("handleSearch:",val)
    }
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