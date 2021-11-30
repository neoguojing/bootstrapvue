<template>
    <button type="button" class="btn" :class="classObj" :disabled="disabled">{{ text }}</button>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

export default{
    name:"Button",
    props:{
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
        disabled:{
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
    }

}
</script>
<style scoped lang="scss">
    
</style>