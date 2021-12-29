<template>
<div class="row justify-content-start">
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
  <div class="row justify-content-start gy-3">
    <div class="col-4">

      <div class="card my-3 shadow-sm rounded text-start" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img :src="portal" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{ userName }}</h5>
              <p class="card-text"><i class="bi bi-phone"></i> {{ tel }}</p>
              <p class="card-text"><i class="bi bi-envelope"></i> {{ email }}</p>
              <p class="card-text"><small class="text-muted"><span class="badge bg-secondary">{{ totalExp }}</span> years</small></p>
            </div>
          </div>
        </div>
      </div>

      <div class="card my-3 shadow-sm rounded" style="max-width: 540px;">
        <div class="card-header">
         <i class="bi bi-building"></i> Companys
        </div>
        <ul class="list-group list-group-flush">
            <li v-for="(company,i) in companys" v-bind:key="i" class="list-group-item"> {{ company }}</li>
        </ul>
      </div>

      <div class="card my-3 shadow-sm rounded" style="max-width: 540px;">
        <div class="card-header">
          <i class="bi bi-person-badge"></i> Designation
        </div>
        <ul class="list-group list-group-flush">
           <li v-for="(d,i) in designations" v-bind:key="i" class="list-group-item">{{ d }}</li>
        </ul>
      </div>

      <div class="card my-3 shadow-sm rounded" style="max-width: 540px;">
        <div class="card-header">
         <i class="bi bi-house-door"></i> Colleges
        </div>
        <ul class="list-group list-group-flush">
          <li v-for="(c,i) in colleges" v-bind:key="i" class="list-group-item"> {{ c }}</li>
        </ul>
      </div>

      <div class="card my-3 shadow-sm rounded" style="max-width: 540px;">
        <div class="card-header">
         <i class="bi bi-card-heading"></i> Degree
        </div>
        <ul class="list-group list-group-flush">
          <li v-for="(c,i) in degrees" v-bind:key="i" class="list-group-item"> {{ c }}</li>
        </ul>
      </div>

    </div>
    <div class="col-8">
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
              <li v-for="(c,i) in experiences" v-bind:key="i" class="list-group-item border-0"> {{ c }}</li>
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
import config from '@/conf'
export default {
  name: 'ProfileBig',
  components: {
  },
  props:{

  },
  mounted() {
    if(!this.loginStatus()) {
      return
    }
    if (this.$route.query.resume) {
      this.getResume(this.$route.query.resume)
    } else if (this.userInfo){

      this.userName = this.userInfo.userName
      this.birthday = this.userInfo.birthDay
      this.email = this.userInfo.email
      this.gender = this.userInfo.gender
      this.portal = this.getPortal(this.userInfo.portal)
      this.tel = this.userInfo.tel
    }
    
  },
  data(){
    return {

      firstName:"",
      lastName:"",
      userName: "",
      gender: 0,
      email: "",
      tel: "",
      birthday:"",
      portal:require('@/assets/logo.png'),

      colleges :[],
      degrees :[],

      companys :[],
      designations :[],
      experiences :[],
      skills :[],
      totalExp: 0,
      
      country:"",
      state:"",
      city:"",
      address:"",
      zip:"",
      
      nameOnCard:"",
      cardNum:"",
      expiration:"",
      securityCode:"",
    }
  },
  computed:{
    userInfo() {
      return this.$store.getters.getUserInfo
    },
    getSkils() {
      var ret = ""
      for (var i in this.skills) {
        ret += this.skills[i] + ","
      }
      console.log(ret)
      return ret
    }
  },
  methods:{
    loginStatus() {
        return  this.$store.getters.getLoginStatus != ""
    },
    getPortal(fileUrl){
        apis.FileDownload(fileUrl).then(data => {
          this.portal = data
        }).catch(err => {
          if (err == "404"){
            this.portal = this.logo
          }
        })
      },
    onUpload(e) {
      apis.UploadFiles("resume",e.target.files[0])
      .then(profile =>{
        
        this.profile = profile
        this.cv2Data(profile)
        console.log(this.profile)
      })
    },
    getResume(id){
          var req = {
              ID:parseInt(id)
          }
          this.$http.post(config.urlGetResume,req)
          .then(res => {
              console.log(res.data)
              if(res.data.code!=0){
                  console.log("获取resume失败")
                  return
              }
              
              this.cv2Data(res.data.data)
              
          })
      },
      cv2Data(cv){
              this.userName = cv.Name
              this.firstName=""
              this.lastName = ""
              this.gender=  0
              this.email = cv.Email
              this.tel= cv.MobileNumber
              this.birthday=""
              this.portal=require('@/assets/logo.png')

              this.colleges =cv.CollegeName
              this.degrees =cv.Degree

              this.companys =cv.CompanyNames
              this.designations =cv.Designation
              this.experiences =cv.Experience
              this.skills =cv.Skills
              this.totalExp =cv.TotalExperience
              
              this.country=""
              this.state=""
              this.city=""
              this.address=""
              this.zip=""
              
              this.nameOnCard=""
              this.cardNum=""
              this.expiration=""
              this.securityCode=""
      }
  }
}
</script>
