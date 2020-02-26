<!--<template>
<div>
  <b-button size="sm" @click="toggle">
    {{ show ? 'Hide' : 'Show' }} Alert
  </b-button>
  <b-alert
    v-model="show"
    class="mt-3"
    dismissible
    @dismissed="dismissed"
  >
    Hello {{ name }}!
  </b-alert>
</div>
</template>

<script>
import Vue from 'vue'
import { BButton } from 'bootstrap-vue'
import { BAlert } from 'bootstrap-vue'
Vue.component('b-button', BButton)
Vue.component('b-alert', BAlert)

export default {
    name:"Demo",
    components: {
      BButton,
      BAlert
    },
    data() {
        return {
            name: 'BootstrapVue',
            show: true
        }
    },
    watch: {
        show(newVal) {
            console.log('Alert is now ' + (newVal ? 'visible' : 'hidden'))
        }
    },
    methods: {
        toggle() {
            console.log('Toggle button clicked')
            this.show = !this.show
        },
        dismissed() {
            console.log('Alert dismissed')
        }
    }
}
</script>-->

<template>
  <div class="demo">
    <img alt="Vue logo" src="../assets/logo.png">
    <Button/>
  </div>
</template>

<script>
// @ is an alias to /src
import Button from '@/components/Button.vue'

export default { //导出模块
  name: 'Demo',
  components: {
    Button
  }
}
</script>

