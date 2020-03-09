<template>
  <div class="login" style="margin-top:100px;">
    <BRow>
      <BCol>
        <NForgetPassword
            :account='getAccount'
            @submit="submit"
        ></NForgetPassword>
      </BCol>
    </BRow>
  </div>
</template>

<script>
// @ is an alias to /src
import { BRow,BCol  } from 'bootstrap-vue';
import NForgetPassword from '@/components/NForgetPassword.vue'

export default { //导出模块
    name: 'ForgetPassword',
    components: {
        BRow,
        BCol,
        NForgetPassword
    },
    computed:{
        getAccount() {
            return this.$route.params.account
        }
    },
    methods:{
      submit(val){
        console.log("submit:",val)
      }
    }
}
</script>

