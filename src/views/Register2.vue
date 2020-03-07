<template>
  <div class="register" style="margin-top:10px;">
    <BRow>
      <BCol>
        <NJumbotron
            :items="items"
        ></NJumbotron>
      </BCol>
    </BRow>
  </div>
</template>

<script>
// @ is an alias to /src
import { BRow,BCol  } from 'bootstrap-vue';
import NJumbotron from '@/components/NJumbotron.vue'

export default { //导出模块
    name: 'Register2',
    data() {
        return {
            items:[
                {
                    lead:"first",
                    content:'<p>For more information visit website</p>'
                },
                {
                    lead:"second",
                    content:'<p>#####################################</p>'
                },
                {
                    lead:"third",
                    content:'<p>************************************</p>'
                }
            ]
        }
    },
    components: {
        BRow,
        BCol,
        NJumbotron
    },
    methods:{
      submit(val){
        console.log("submit:",val)
      }
    }
}
</script>

