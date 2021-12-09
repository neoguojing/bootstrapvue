<template>
    <div class="alert alert-dismissible position-absolute start-50 translate-middle" :class="[{'visually-hidden':isHide} ,classObj]" role="alert" >
        {{ message }}
        <button @click.stop.prevent="onClose" type="button" class="btn-close btn-sm" aria-label="Close"></button>
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
    },
    methods:{
        onClose() {
            this.$emit('alertClose')
        }
    }
}


</script>
