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
import { Options,Vue } from 'vue-class-component';

@Options({
    components: {

    },
    props:{
        value: Number,
         max: Number,
        backgroud: String,
        height: Number,
    }
})
export default class Progress extends Vue {
    value?: number;
    max?: number;
    backgroud?: string; //表头
    height?: number;
}
</script>
