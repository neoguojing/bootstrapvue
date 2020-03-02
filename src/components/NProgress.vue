<template>
    <b-progress 
        :value="value" 
        :max="max"
        :variant="backgroud"
        :height="height" 
        show-progress
        animated>
    </b-progress>
</template>

<script lang="ts">
import { Component, Prop, Vue,Emit,Inject,Provide,Watch,Model } from 'vue-property-decorator';
import { BProgress } from 'bootstrap-vue';

@Component({
    components: {
        BProgress
    }
})
export default class NProgress extends Vue {
    @Prop(Number) value?: number;
    @Prop(Number) max?: number;
    @Prop(String) backgroud?: string; //表头
    @Prop(Number) height?: number;
}
</script>
