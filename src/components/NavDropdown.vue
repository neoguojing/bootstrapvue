<template>
<li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle"  href="#" role="button" :id="id" data-bs-toggle="dropdown" aria-expanded="false">
    {{ text }}
  </a>
  <ul class="dropdown-menu" :aria-labelledby="id">
    <li v-for="item in list" :key="item" ><a class="dropdown-item" :to="item.href" :href="item.href">{{ item.content }}</a></li>
  </ul>
</li>
</template>


<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

export default{
    name:"NavDropdown",
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
