<template>
    <div class="card" :style="{ width: width }">
    <img :src="image" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">{{ content }}</p>
        <a :href="goTo" class="btn btn-primary">{{ btnName }}</a>
    </div>
    </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

export default{
    name:"Card",
    props:{
        width:{
            type: String,
            default:"18rem"
        },
        image: {
            type :String,
            default: "../../assets/logo.png"
        },
        title:{
            type :String,
            default: "Card title"
        },
        content:{
            type :String,
            default: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        btnName:{
            type :String,
            default: "Go somewhere"
        },
        goTo:{
            type :String,
            default: "#"
        },

    },
    computed:{
    }

}
</script>
