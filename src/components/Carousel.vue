<template>
  <div style="margin-top:10px;">
    <b-carousel
      :id="id"
      v-model="slide"
      :interval="interval"
      controls
      indicators
      :background="background"
      :img-width="imgWidth"
      :img-height="imgHeight"
      style="text-shadow: 1px 1px 2px #333;"
    >
        <b-carousel-slide 
            v-for="(imgInfo,index) in imgList" 
            v-bind:key="index" 
            v-bind:caption="imgInfo.caption"
            v-bind:text="imgInfo.text"
            v-bind:img-src="imgInfo.src"
        ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script lang="ts">
import { Options,Vue } from 'vue-class-component';

@Options({
    components: {
    },

    props: {
        id : String,
        interval: Number,
        background!: String,
        imgWidth: Number,
        imgHeight: Number,
        imgList: undefined,
    },

    watch: {
         onSlideChange(newVal: number,oldVal: number){
            console.log("onSlideChange",newVal,oldVal)
            this.slide = newVal;
            this.emitSlideChange(this.slide);
        }
    },
    emits: ['curSlide'],

    
})
export default class Carousel extends Vue {
    id?: string;
    interval?: number;
    background!: string; 
    imgWidth?: number;
    imgHeight?: number;
    imgList?: any[];

    //event
    slide = 0
    emitSlideChange(val: number){
        console.log("emitSlideChange",val)
    }
}
</script>
