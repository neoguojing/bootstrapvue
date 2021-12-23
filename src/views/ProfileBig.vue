<template>
<div class="row">
  <nav id="profile-scrollspy" class="navbar navbar-light bg-light px-3">
  <a class="navbar-brand" href="#">Profile</a>
   <input id="fileUpload"  @change="onUpload" ref="file" type="file" class="nav" aria-label="file upload" required>
  <ul class="nav nav-pills">
    <li class="nav-item">
      <a class="nav-link" href="#skills">Skills</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#experience">Experience</a>
    </li>
  </ul>
  </nav>
</div>
  <div class="row gy-3">
    <div class="col-3 col-sm-4">

      <div class="card my-3 shadow-sm rounded text-start" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img :src="portal" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{ profile.name }}</h5>
              <p class="card-text"><i class="bi bi-phone"></i> {{ profile.mobile_number }}</p>
              <p class="card-text"><i class="bi bi-envelope"></i> {{ profile.email }}</p>
              <p class="card-text"><small class="text-muted"><span class="badge bg-secondary">{{ profile.total_experience }}</span> years</small></p>
            </div>
          </div>
        </div>
      </div>

      <div class="card my-3 shadow-sm rounded" style="max-width: 540px;">
        <div class="card-header">
         <i class="bi bi-building"></i> Companys
        </div>
        <ul class="list-group list-group-flush">
            <li v-for="(company,i) in profile.company_names" v-bind:key="i" class="list-group-item"> {{ company }}</li>
        </ul>
      </div>

      <div class="card my-3 shadow-sm rounded" style="max-width: 540px;">
        <div class="card-header">
          <i class="bi bi-person-badge"></i> Designation
        </div>
        <ul class="list-group list-group-flush">
           <li v-for="(d,i) in profile.designation" v-bind:key="i" class="list-group-item">{{ d }}</li>
        </ul>
      </div>

      <div class="card my-3 shadow-sm rounded" style="max-width: 540px;">
        <div class="card-header">
         <i class="bi bi-house-door"></i> Colleges
        </div>
        <ul class="list-group list-group-flush">
          <li v-for="(c,i) in profile.college_name" v-bind:key="i" class="list-group-item"> {{ c }}</li>
        </ul>
      </div>

      <div class="card my-3 shadow-sm rounded" style="max-width: 540px;">
        <div class="card-header">
         <i class="bi bi-card-heading"></i> Degree
        </div>
        <ul class="list-group list-group-flush">
          <li v-for="(c,i) in profile.degree" v-bind:key="i" class="list-group-item"> {{ c }}</li>
        </ul>
      </div>

    </div>
    <div class="col-7">
        <div data-bs-spy="scroll" data-bs-target="#profile-scrollspy" data-bs-offset="0" class="g-3" tabindex="0">
    
          <div id="skills" class="card my-3 shadow-sm rounded">
            <h5 class="card-header"><i class="bi bi-terminal"></i> Skills</h5>
            <div class="card-body">
              <p class="card-text">{{ getSkils }}</p>
            </div>
          </div>
          
          <div id="experience" class="card my-3 shadow-sm rounded" >
            <h5 class="card-header">
              <i class="bi bi-list-check"></i> Experience
            </h5>
            <ul class="list-group list-group-flush">
              <li v-for="(c,i) in profile.experience" v-bind:key="i" class="list-group-item border-0"> {{ c }}</li>
            </ul>
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
      portal:require('@/assets/logo.png'),
      profile : this.people
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
        this.profile = profile
      })
    },
  }
}
</script>
