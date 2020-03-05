<template>
  <div class="register" style="margin-top:50px;">
    <BRow>
      <BCol>
        <NRegister
            @submit="submit"
        ></NRegister>
      </BCol>
    </BRow>
  </div>
</template>

<script>
// @ is an alias to /src
import { BRow,BCol  } from 'bootstrap-vue';
import NRegister from '@/components/NRegister.vue'

export default { //导出模块
    name: 'Register',
    components: {
        BRow,
        BCol,
        NRegister
    },
    methods:{
      submit(val){
        console.log("submit:",val)
      }
    }
}
</script>

