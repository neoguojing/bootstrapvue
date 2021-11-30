<template>
<div class="accordion" :id="id">
  <div v-for="(item,i) in list" :key="item.headName" class="accordion-item">
    <h2 class="accordion-header" :id="item.headName">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" 
        :data-bs-target="selectId(item.bodyName)" :aria-expanded="i==0" :aria-controls="item.bodyName">
        {{ item.title }}
      </button>
    </h2>
    <div :id="item.bodyName" class="accordion-collapse collapse" :class="isShow(i)" :aria-labelledby="item.headName" 
        :data-bs-parent="selectId(id)">
      <div class="accordion-body">
           {{ item.content }}
     </div>
    </div>
  </div>
</div>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
export default{
    name:"Accordion",
    props:{
        id:{
            type: String,
            default:"accordionExample"
        },
        list:{
           type: Array,
           default:function(){
               return [
               {
                   headName:"headingOne",
                   title:"Accordion Item #1",
                   bodyName:"collapseOne",
                   content:"Accordion Item #1",
               },
               {
                   headName:"headingTwo",
                   title:"Accordion Item #2",
                   bodyName:"collapseTwo",
                   content:"Accordion Item #2",
               },
               {
                   headName:"headingThree",
                   title:"Accordion Item #3",
                   bodyName:"collapseThree",
                   content:"Accordion Item #3",
               }
            ]
           }
        }
    },
    computed:{
        selectId(){
            return function(name) {
                return "#"+name
            }
        },
        
    },
    
    methods:{
        isShow(idx){
            return {
                show:idx==0
            }
        }
    }
}
</script>