<template>
    <div class="row" >
        <Sidebar id="dashboardSidebar" title="Dashboard" :offcanvasClass="[]"/>
        <div class="col" >
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'

export default {
    name:"Dashboard",
    components:{
        Sidebar,
    },
    setup() {
        
    },
}
</script>

<style scoped>

</style>
