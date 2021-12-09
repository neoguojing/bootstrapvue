<template>
    <div class="row" >
        <Sidebar id="settingsSidebar" title="Settings" :offcanvasClass="[]"/>
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
