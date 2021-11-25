<template>
  <div class="login" style="margin-top:100px;">
    <BRow>
      <BCol>
        <NResetPassword
            @submit="submit"
        ></NResetPassword>
      </BCol>
    </BRow>
  </div>
</template>

<script>
// @ is an alias to /src
import { BRow,BCol  } from 'bootstrap-vue';
import NResetPassword from '@/components/ResetPassword.vue'

export default { //导出模块
    name: 'ResetPassword',
    components: {
        BRow,
        BCol,
        NResetPassword
    },
    methods:{
      submit(val){
        console.log("submit:",val)
      }
    }
}
</script>

