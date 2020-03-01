<template>
  <BContainer fluid>
    <BRow>
      <BCol>
        <NNavBar 
          theme="primary" 
          :menuList="menus"
          isSearchShow=false
        />
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BCard no-body>
          <router-view/>
        </BCard>
      </BCol>
    </BRow>
  </BContainer>
  
</template>

<script>
// @ is an alias to /src
import NNavBar from '@/components/NNavBar.vue'
import { BContainer,BRow,BCol } from 'bootstrap-vue';
import { BCard  } from 'bootstrap-vue';

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
        {text:"About",to:"/about"}
      ]
    }
  }
}
</script>
