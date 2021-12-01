<template>
    <button class="btn" :class="classObj" type="button" data-bs-toggle="collapse" :data-bs-target="selectId(id)" :aria-expanded="expanded" :aria-controls="id">
        {{ text }}
    </button>
    <div class="collapse" :id="id">
    <div class="card card-body">
        <slot></slot>
    </div>
    </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

export default{
    name:"Collapse",
    props:{
        id:{
            type: String,
            default:"collapseExample"
        },
        text: {
            type :String,
            default: "Button with data-bs-target"
        },
        size:{
            type :String,
            default: "lg"
        },
        color:{
            type :String,
            default: "success"
        },
        expanded:{
            type :Boolean,
            default: false
        }

    },
    computed:{
        classObj() {
           return [
               'btn-'+this.size,
               'btn-'+this.color
           ]
        }
    },
    methods:{
        selectId(name){
            return "#"+name
        },
    }

}
</script>
