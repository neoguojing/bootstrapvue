<template>

  <button  size="sm" @click="toggle">
    {{ show ? 'Hide' : 'Show' }} Alert
  </button>

</template>

<script lang="ts">

import { Options, Vue} from 'vue-class-component'
import Alert from './Alert.vue'

@Options({
    components: {
      Alert
    },
    watch:{
      onShowChanged(newValue: string, oldValue: string) {
          console.log('Alert is now ' + (newValue ? 'visible' : 'hidden'))
      }
    }
})
export default class Button extends Vue{
    name :string = "BootstrapVue";
    show :boolean= true;

    toggle() {
        console.log('Toggle button clicked')
        this.show = !this.show
    }

    dismissed() {
        console.log('Alert dismissed')
    }
}
</script>
