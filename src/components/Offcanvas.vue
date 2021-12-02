<template>
 <button v-if="showBtn==true" class="btn" :class="classObj" type="button" data-bs-toggle="offcanvas" :data-bs-target="selectId(id)" aria-controls="offcanvasTop">{{ text }}</button>

<div class="offcanvas" :class="classDirect" tabindex="1" :id="id" aria-labelledby="offcanvasTopLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasTopLabel">{{ title }}</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <slot></slot>
  </div>
</div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

export default{
    name:"Offcanvas",
    props:{
        id: {
            type :String,
            default: "offcanvasTop"
        },
        text: {
            type :String,
            default: "Toggle top offcanvas"
        },
        title: {
            type :String,
            default: "Toggle top offcanvas"
        },
        size:{
            type :String,
            default: "lg"
        },
        color:{
            type :String,
            default: "primary"
        },
        direction:{
            type :String,
            default: "start"
        },
        showBtn:{
            type :Boolean,
            default: true
        }

    },
    computed:{
        classObj() {
           return [
               'btn-'+this.size,
               'btn-'+this.color
           ]
        },
        classDirect() {
            return 'offcanvas-'+ this.direction
        }
    },
    methods:{
        selectId(name){
            return "#"+name
        },
    }

}
</script>
