<template>
<div  class="dropdown">
  <button class="btn dropdown-toggle" :class="classObj" type="button" :id="id" data-bs-toggle="dropdown" aria-expanded="false">
    {{ text }}
  </button>
  <ul class="dropdown-menu" :aria-labelledby="id">
    <li v-for="item in list" :key="item"><a class="dropdown-item" :href="item.href">{{ item.content }}</a></li>
  </ul>
</div>
</template>


<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

export default{
    name:"Dropdown",
    props:{
        id: {
            type :String,
            default: "dropdownMenuButton"
        },
        text: {
            type :String,
            default: "Dropdown"
        },
        size:{
            type :String,
            default: "lg"
        },
        color:{
            type :String,
            default: "primary"
        },
        list:{
            type :Array,
            default: function(){
                return [
                    {
                        href:"#",
                        content:"Action"
                    },
                    {
                        href:"#",
                        content:"Another action"
                    },
                    {
                        href:"#",
                        content:"Something else here"
                    },
                ]
            }
        }
    },
    computed:{
        classObj() {
           return [
               'btn-'+this.size,
               'btn-'+this.color
           ]
        }
    }

}
</script>
