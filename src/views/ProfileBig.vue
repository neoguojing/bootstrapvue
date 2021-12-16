<template>
<div class="row g-3 m-3">
  <div class="col-3">
    <div class="card">
      <img :src="portal" width="64" height="128" class="card-img-top rounded-circle me-2" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ people.name }}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Experience: {{ people.total_experience }}</li>
        <li class="list-group-item"> Phone: {{ people.mobile_number }}</li>
        <li class="list-group-item">E-mail: {{ people.email }}</li>
      </ul>
      <div class="card-body">
        <p class="card-text"></p>
         <a href="#" class="btn btn-primary">Edit</a>
      </div>
    </div>
  </div>
  
  <div class="col-6">
    <div class="card" style="width: 18rem;">
      <div class="card-header">
        Companys
      </div>
      <ul class="list-group list-group-flush">
        <li v-for="(company,i) in people.company_names" v-bind:key="i" class="list-group-item"> {{ company }}</li>
      </ul>
    </div>

    <div class="card" style="width: 18rem;">
      <div class="card-header">
        Skills
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ getSkils }}</h5>
      </div>
    </div>

    <div class="card" style="width: 18rem;">
      <div class="card-header">
        Designation
      </div>
      <ul class="list-group list-group-flush">
        <li v-for="(d,i) in people.designation" v-bind:key="i" class="list-group-item">{{ d }}</li>
      </ul>
    </div>

    <div class="card" style="width: 18rem;">
      <div class="card-header">
        Colleges
      </div>
      <ul class="list-group list-group-flush">
        <li v-for="(c,i) in people.college_name" v-bind:key="i" class="list-group-item"> {{ c }}</li>
      </ul>
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
          'skills': ['Operating systems','Linux',
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
