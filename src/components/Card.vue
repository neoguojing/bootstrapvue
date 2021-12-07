<template>
    <div class="card" :class="myClass" :style="{ width: width }">
    <slot></slot>
    </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

export default{
    name:"Card",
    data(){
       return {
           
       }
    },
    props:{
        width:{
            type: String,
            default:"18rem"
        },
        myClass:{
            type: Array,
            default:() => []
        }
    },
    computed:{
    }

}
</script>
