<template>
  <!-- Button trigger modal -->
<button type="button" class="btn" :class="classObj" data-bs-toggle="modal" :data-bs-target="selectId(id)">
  {{ text }}
</button>

<!-- Modal -->
<div class="modal fade" :id="id" tabindex="-1" :aria-labelledby="selectId(labelId)" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" :id="labelId">{{ title }}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <slot></slot>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn" :class="colorObj" >Save changes</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

export default{
    name:"Modal",
    props:{
        id: {
            type :String,
            default: "exampleModal"
        },
        text: {
            type :String,
            default: "Button"
        },
        size:{
            type :String,
            default: "lg"
        },
        color:{
            type :String,
            default: "primary"
        },
        title:{
            type :String,
            default: "Modal title"
        },
        labelId:{
            type :String,
            default: "exampleModalLabel"
        },

    },
    computed:{
        classObj() {
           return [
               'btn-'+this.size,
               'btn-'+this.color
           ]
        },
        colorObj() {
           return [
               'btn-'+this.color
           ]
        },

    },
    methods:{
        selectId(name){
            return "#"+name
        },
    }

}
</script>
