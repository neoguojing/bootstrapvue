<template>
    <div class="alert alert-dismissible floating" :class="[{'visually-hidden':isHide} ,classObj]" role="alert">
    {{ message }}
    </div>
</template>

<script>

export default{
    name:"Alert",
    props:{
        message:{
            type : String,
            defaut:""
        },
        type :{
            type: String,
            defaut:"success"
        },
        isHide:{
            type: Boolean,
            defaut: true
        }

    },
    computed:{
        classObj(){
            return 'alert-'+ this.type
        },
    }
}


</script>
