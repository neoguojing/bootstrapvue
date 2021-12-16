<template>
<div class="row m-3">
  <nav id="profile-scrollspy" class="navbar navbar-light bg-light px-3">
  <a class="navbar-brand" href="#">Profile</a>
  <ul class="nav nav-pills">
    <li class="nav-item">
      <a class="nav-link" href="#basic">Basic</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#companys">Companys</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#designation">Designation</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#colleges">Colleges</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#skills">Skills</a>
    </li>
  </ul>
</nav>
<div data-bs-spy="scroll" data-bs-target="#profile-scrollspy" data-bs-offset="0" class="g-3" tabindex="0">

    <div id="basic" class="card" >
      <img :src="portal" class="img-thumbnail" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ people.name }}</h5>
      </div>
      <ul class="list-group list-group-flush text-start">
        <li class="list-group-item">Experience: {{ people.total_experience }}</li>
        <li class="list-group-item"> Phone: {{ people.mobile_number }}</li>
        <li class="list-group-item">E-mail: {{ people.email }}</li>
      </ul>
      <div class="card-body">
          <a href="#" class="btn btn-primary">Edit</a>
      </div>
    </div>

     <div id="companys" class="card" >
      <h5 class="card-header">
        Companys
      </h5>
      <ul class="list-group list-group-flush">
        <li v-for="(company,i) in people.company_names" v-bind:key="i" class="list-group-item"> {{ company }}</li>
      </ul>
    </div>

    <div id="designation" class="card">
      <h5 class="card-header">
        Designation
      </h5>
      <ul class="list-group list-group-flush">
        <li v-for="(d,i) in people.designation" v-bind:key="i" class="list-group-item">{{ d }}</li>
      </ul>
    </div>

    <div id="colleges" class="card" >
      <h5 class="card-header">
        Colleges
      </h5>
      <ul class="list-group list-group-flush">
        <li v-for="(c,i) in people.college_name" v-bind:key="i" class="list-group-item"> {{ c }}</li>
      </ul>
    </div>
    <div id="skills" class="card" >
      <h5  class="card-header">Skills</h5>
      <div class="card-body">
        <h5 class="card-title text-start">{{ getSkils }}</h5>
      </div>
    </div>
</div>
    
  

   

    

    

    

</div>
</template>

<script>
// @ is an alias to /src
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
export default {
  name: 'ProfileBig',
  components: {
  },
  props:{
    people :{
      type: Object,
      default: function() {
        return {
          'college_name': ['Marathwada Mitra Mandal’s College of Engineering'],
          'company_names': ['Bell','Tencent','YIN'],
          'degree': ['B.E. IN COMPUTER ENGINEERING'],
          'designation': ['Manager',
                          'TECHNICAL CONTENT WRITER',
                          'DATA ENGINEER'],
          'email': 'omkarpathak27@gmail.com',
          'mobile_number': '8087996634',
          'name': 'Omkar Pathak',
          'no_of_pages': 3,
          'skills': ['Linux',
                    'Github',
                    'Testing',
                    'Content',
                    'Automation',
                    'Python',
                    'Css',
                    'Website',
                    'Django',
                    'Opencv',
                    'Programming',
                    'C'],
          'total_experience': 1.83
        }
      }
    }
  },
  mounted() {
    if(!this.loginStatus()) {
      return
    }
  },
  data(){
    return {
      portal:require('@/assets/test.jpg')
    }
  },
  computed:{
    userInfo() {
      return this.$store.getters.getUserInfo
    },
    getSkils() {
      var ret = ""
      for (var i in this.people.skills) {
        ret += this.people.skills[i] + ","
      }
      console.log(ret)
      return ret
    }
  },
  methods:{
     loginStatus() {
          return  this.$store.getters.getLoginStatus != ""
      },
  }
}
</script>
