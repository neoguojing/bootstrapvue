<template>
  <nav id="profile-scrollspy" class="navbar navbar-light bg-light px-3">
  <a class="navbar-brand" href="#">Profile</a>
   <input id="fileUpload"  @change="onUpload" ref="file" type="file" class="nav" aria-label="file upload" required>
  <ul class="nav nav-pills">
    <li class="nav-item">
      <a class="nav-link" href="#basic">Basic</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#companys">More</a>
    </li>
  </ul>
  </nav>
<div data-bs-spy="scroll" data-bs-target="#profile-scrollspy" data-bs-offset="0" class="g-3" tabindex="0">
    <div id="basic" class="row">
      <div class="col-3">
         <img :src="portal" class="img-thumbnail" alt="..." style="width:200px;height:250px;">
      </div>

      <div class="col-6 g-2">
        <div class="row row-cols-1 row-cols-md-1 g-2">
          <div  class="card text-white bg-primary" >
            <div class="card-body">
              <h5 class="card-title">{{ people.name }}</h5>
              <p class="card-text">{{ people.total_experience }} year</p>
            </div>
          </div>

          <div  class="card text-white bg-success" >
            <div class="card-body">
              <p class="card-text">Phone: {{ people.mobile_number }}</p>
              <p class="card-text">E-mail: {{ people.email }}</p>
            </div>
          </div>

          <div  class="card text-dark bg-info" >
            <h5 class="card-title">Skills</h5>
            <p class="card-text">{{ getSkils }}</p>
          </div>
        </div>
      </div>
    </div>

    <div id="more" class="row row-cols-1 row-cols-md-3 g-3">
      
     <div id="companys" class="card text-dark bg-light" >
      <h5 class="card-header">
        Companys
      </h5>
      <ul class="list-group list-group-flush">
        <li v-for="(company,i) in people.company_names" v-bind:key="i" class="list-group-item text-dark bg-light"> {{ company }}</li>
      </ul>
    </div>

    <div id="designation" class="card text-dark bg-light">
      <h5 class="card-header">
        Designation
      </h5>
      <ul class="list-group list-group-flush">
        <li v-for="(d,i) in people.designation" v-bind:key="i" class="list-group-item text-dark bg-light">{{ d }}</li>
      </ul>
    </div>

    <div id="colleges" class="card text-dark bg-light" >
      <h5 class="card-header">
        Colleges
      </h5>
      <ul class="list-group list-group-flush">
        <li v-for="(c,i) in people.college_name" v-bind:key="i" class="list-group-item text-dark bg-light"> {{ c }}</li>
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
import apis from '@/utils/apis.js'
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
    onUpload(e) {
      apis.UploadFiles("resume",e.target.files[0])
      .then(profile =>{
        console.log(profile)
      })
    },
  }
}
</script>
