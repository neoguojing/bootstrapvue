<template>
    <div class="row" >
        <Sidebar id="settingsSidebar" title="Settings" :offcanvasClass="[]">
            <ul class="nav nav-pills flex-column mb-auto ">
                <li class="nav-item ">
                    <a href="#" class="nav-link active d-flex justify-content-start" aria-current="page">
                    <i class="bi bi-person-circle px-3" width="16" height="16"></i>
                    Profile
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link text-dark  d-flex justify-content-start">
                    <i class="bi bi-gear px-3" width="16" height="16"></i>
                    Reset password
                    </a>
                </li>    
            </ul>
        </Sidebar>
        <div class="col" >
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'

export default {
    name:"Settings",
    components:{
        Sidebar,
    },
    setup() {
        
    },
}
</script>

<style scoped>

</style>
