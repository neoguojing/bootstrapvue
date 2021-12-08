<template>
    <div class="alert alert-dismissible" :class="classObj" role="alert" stype="width:100px" tabindex="100" >
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
        }

    },
    computed:{
        classObj(){
            return [ 
                'alert-'+ this.type
            ]
        }
    }
}


</script>
