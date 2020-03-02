<template>
  <div>
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
import { Component, Prop, Vue,Emit,Inject,Provide,Watch,Model } from 'vue-property-decorator';
import { BCarousel,BCarouselSlide } from 'bootstrap-vue';

@Component({
    components: {
        BCarousel,
        BCarouselSlide
    }
})
export default class NCarousel extends Vue {
    @Prop(String) id?: string;
    @Prop(Number) interval?: number;
    @Prop({default: '#ababab'}) background!: string; //表头
    @Prop(Number) imgWidth?: number;
    @Prop(Number) imgHeight?: number;
    /**
     demo:
     [
         {
            caption:"First slide",
            text:"Nulla vitae elit libero, a pharetra augue mollis interdum.",
            src:"https://picsum.photos/1024/480/?image=52"
         },
         {
            caption:"",
            text:"",
            src:"https://picsum.photos/1024/480/?image=54"
         },
         {
            caption:"",
            text:"",
            src:"https://picsum.photos/1024/480/?image=55"
         }
     ]
     */
    @Prop(Array) imgList?: any[];

    //event
    slide = 0
    @Watch("slide")
    onSlideChange(newVal: number,oldVal: number){
        console.log("onSlideChange",newVal,oldVal)
        this.slide = newVal;
        this.emitSlideChange(this.slide);
    }
    @Emit("curSlide")
    emitSlideChange(val: number){
        console.log("emitSlideChange",val)
    }
}
</script>
