<template>
    <div class="row" >
        <div class="col-3" >
        <Sidebar id="settingsSidebar" title="Settings" :offcanvasClass="[]">
            <ul class="nav nav-pills flex-column mb-auto ">
                <li class="nav-item ">
                    <a href="#" class="nav-link active d-flex justify-content-start" 
                     id="profile-tab" data-bs-toggle="pill" data-bs-target="#profile" role="tab" aria-controls="profile" aria-selected="true">
                    <i class="bi bi-person-circle px-3" width="16" height="16"></i>
                    Profile
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link text-dark  d-flex justify-content-start" 
                     id="reset-tab" data-bs-toggle="pill" data-bs-target="#reset" role="tab" aria-controls="reset">
                    <i class="bi bi-gear px-3" width="16" height="16"></i>
                    Reset password
                    </a>
                </li>    
            </ul>
        </Sidebar>
        </div>
        <div class="col-9 tab-content" id="tabContent" >
            <div class="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <ProfileBig/>
            </div>
            <div class="tab-pane fade" id="reset" role="tabpanel" aria-labelledby="reset-tab">
                <ResetPassword/>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import ProfileBig from '@/views/ProfileBig.vue'
import ResetPassword from '@/views/ResetPassword.vue'
export default {
    name:"Settings",
    components:{
        Sidebar,
        ProfileBig,
        ResetPassword
    },
    setup() {
        
    },
}
</script>

<style scoped>

</style>
