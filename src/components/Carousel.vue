<template>
    <div :id="id" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button v-for="(item,i) in list" :key="item.id" type="button" :data-bs-target="selectId(id)" :data-bs-slide-to="i" :class="isActive(i)" :aria-current="i==0" :aria-label="item.id"></button>
 </div>
  <div class="carousel-inner">
    <div  v-for="(item,i) in list" :key="item.id" class="carousel-item" :class="isActive(i)" :data-bs-interval="interval">
      <img :src="item.image" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>{{ item.title }}</h5>
        <p>{{ item.content }}</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" :data-bs-target="selectId(id)" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" :data-bs-target="selectId(id)" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

export default{
    name:"Carousel",
    props:{
        id:{
            type: String,
            default:"carouselExampleCaptions"
        },
        list: {
            type :Array,
            default: function(){
                return [
                    {
                        id:"Slide 1",
                        image:"../../assets/logo.png",
                        title:"First slide label",
                        content:"Some representative placeholder content for the first slide."
                    },
                    {
                        id:"Slide 2",
                        image:"../assets/logo.png",
                        title:"Sencod slide label",
                        content:"Some representative placeholder content for the sencod slide."
                    },
                    {
                        id:"Slide 3",
                        image:"../assets/logo.png",
                        title:"Third slide label",
                        content:"Some representative placeholder content for the Third slide."
                    },
                ]
            }
        },
        interval:{
            type :String,
            default: "10000"
        }

    },
    computed:{
    },
    methods:{
        selectId(name){
            return "#"+name
        },
        isActive(idx){
            return {
                active:idx==0
            }
        }
    }

}
</script>