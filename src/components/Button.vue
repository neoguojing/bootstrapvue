<template>
<div>
  <BButton size="sm" @click="toggle">
    {{ show ? 'Hide' : 'Show' }} Alert
  </BButton>
  <BAlert
    v-model="show"
    class="mt-3"
    dismissible
    @dismissed="dismissed"
  >
    Hello {{ name }}!
  </BAlert>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue,Emit,Inject,Provide,Watch,Model } from 'vue-property-decorator';
import { BButton,BAlert } from 'bootstrap-vue';

@Component({
    components: {
        BButton,BAlert
    }
})
export default class Button extends Vue {
    name = "BootstrapVue";
    show = true;

    //@Prop() private msg!: string;
    @Watch('show')
    onShowChanged(newValue: string, oldValue: string) {
        console.log('Alert is now ' + (newValue ? 'visible' : 'hidden'))
    }

    //计算属性
    /*get ValA(){
            return 1;
        }*/

    //methods
    toggle() {
        console.log('Toggle button clicked')
        this.show = !this.show
    }

    dismissed() {
        console.log('Alert dismissed')
    }
}
</script>
