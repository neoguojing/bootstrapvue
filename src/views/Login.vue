<template>
  <div class="login" style="margin-top:100px;">
    <BRow>
      <BCol>
        <NLogin
            @submit="submit"
        ></NLogin>
      </BCol>
    </BRow>
  </div>
</template>

<script>
// @ is an alias to /src
import { BRow,BCol  } from 'bootstrap-vue';
import NLogin from '@/components/NLogin.vue'

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
      }
    }
}
</script>

