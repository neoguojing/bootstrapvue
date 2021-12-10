<template>
    <div class="row" >
        <Sidebar id="dashboardSidebar" title="Dashboard" :offcanvasClass="[]">
            <ul class="nav nav-pills flex-column mb-auto ">
                <li class="nav-item ">
                    <a href="#" class="nav-link active d-flex justify-content-start" aria-current="page">
                    <i class="bi bi-person-circle px-3" width="16" height="16"></i>
                    Upload
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link text-dark  d-flex justify-content-start">
                    <i class="bi bi-gear px-3" width="16" height="16"></i>
                    Manager
                    </a>
                </li>    
            </ul>
        </Sidebar>
        <div class="col" >
            <PageTable @pageChange="onPageChange" :items="rows"/>
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import PageTable from '@/components/PageTable.vue'

export default {
    name:"Dashboard",
    data(){
        return {
            test:  [
                ['1','Mark','Otto','@mdo'],
                ['2','Mark','Otto','@mdo'],
                ['3','Mark','Otto','@mdo'],
            ],
            rows: [
                ['1','Mark','Otto','@mdo'],
                ['2','Mark','Otto','@mdo'],
            ]
        }
    },
    components:{
        Sidebar,
        PageTable
    },
    setup() {
        
    },
    computed:{
 
    },
    methods:{
        onPageChange(offset,limit) {
            // 网络请求该页数据
            this.rows = this.test.slice(offset*limit,offset*limit+limit)
        }
    }
}
</script>

<style scoped>

</style>
