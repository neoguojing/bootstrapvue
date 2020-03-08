<template>
  <div class="register" style="margin-top:10px;">
    <BRow>
      <BCol>
        <NRegister2
          @submit="submit"
        ></NRegister2>
      </BCol>
    </BRow>
  </div>
</template>

<script>
// @ is an alias to /src
import { BRow,BCol  } from 'bootstrap-vue';
import NRegister2 from '@/components/NRegister2.vue'

export default { //导出模块
    name: 'Register2',
  
    components: {
        BRow,
        BCol,
        NRegister2
    },
    methods:{
      submit(val){
        console.log("submit:",val)
      }
    }
}

</script>

