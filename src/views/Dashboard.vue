<template>
    <div class="row" >
        <Sidebar id="dashboardSidebar" title="Dashboard" :offcanvasClass="[]">
            <ul class="nav nav-pills flex-column mb-auto ">
                <li class="nav-item ">
                    <a href="#" class="nav-link active d-flex justify-content-start" 
                    id="main-tab" data-bs-toggle="pill" data-bs-target="#main" role="tab" aria-controls="main" aria-selected="true">
                    <i class="bi bi-person-circle px-3" width="16" height="16"></i>
                    Main
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link text-dark  d-flex justify-content-start"  
                    id="manager-tab" data-bs-toggle="pill" data-bs-target="#manager" role="tab" aria-controls="manager" aria-selected="false">
                    <i class="bi bi-gear px-3" width="16" height="16"></i>
                    Manager
                    </a>
                </li>    
            </ul>
        </Sidebar>
        <div class="col tab-content" id="tabContent">
            <div class="tab-pane fade show active" id="main" role="tabpanel" aria-labelledby="main-tab">
                <PageTable @pageChange="onPageChange" :numOfPerPage="rowsPerPage" :total="totalRows" >
                    <table class="table caption-top">
                        <caption>List of resumes</caption>
                        <thead>
                            <tr>
                                <th  scope="col"> Name </th>
                                <th  scope="col"> Phone</th>
                                <th  scope="col"> Email</th>
                                <th  scope="col"> Experience(years)</th>
                                <th  scope="col"> Summary</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr @click="onRowClick(item)" v-for="item in items" v-bind:key="item">
                                <td > {{ item.Name }}</td>
                                <td > {{ item.MobileNumber }}</td>
                                <td > {{ item.Email }}</td>
                                <td > {{ item.TotalExperience }}</td>
                                <td > {{ item.Designation }}</td>
                                <td > <div class="btn-group">
                                    <button class="btn btn-primary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Operation
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" onRowClick(item)>View</a></li>
                                        <li><a class="dropdown-item" onEditClick(item)>Edit</a></li>
                                        <li><a class="dropdown-item" onDelClick(item.id)>Delete</a></li>
                                    </ul>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </PageTable>
            </div>
            <div class="tab-pane fade" id="manager" role="tabpanel" aria-labelledby="manager-tab">
                hahah
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import PageTable from '@/components/PageTable.vue'
import config from '@/conf'
export default {
    name:"Dashboard",
    data(){
        return {
            items: [
                {name:'1',mobilenumber:'Mark',email:'Otto',totalexperience:'@mdo',skills:[]},
                {name:'1',mobilenumber:'Mark',email:'Otto',totalexperience:'@mdo',skills:[]},
                {name:'1',mobilenumber:'Mark',email:'Otto',totalexperience:'@mdo',skills:[]},
            ],
            rowsPerPage: 10,
            totalRows : 0,

        }
    },
    components:{
        Sidebar,
        PageTable
    },
    mounted(){
        this.getResumes(0,this.rowsPerPage)
    },
    setup() {
        
    },
    computed:{
        
    },
    methods:{
        cacheKey(offset){
            return "resumes"+offset.toString()
        },
        onPageChange(offset,limit) {
            this.getResumes(offset,limit)
        },
        onRowClick(data){
            this.$router.push({
                path :"/profilebig",
                query:{
                    resume:JSON.stringify(data)
                }
            });
        },
        onEditClick(data) {
            this.$router.push("/userForm?data="+data);
        },
        onDelClick(id) {
            this.$router.push("/userForm?data="+id);
        },
        getResumes(offset,limit){
            console.log(this.$store.getters.getDataCache)
            var cacheResume = this.$store.getters.getDataCache[this.cacheKey(offset)]
           
            if (cacheResume) {
                this.totalRows = cacheResume.Total
                this.items = cacheResume.Elems
                return 
            }

            var req = {
                Offset:offset,
                Limit:limit,
            }
            this.$http.post(config.urlGetResumes,req)
            .then(res => {
                console.log(res.data)
                if(res.data.code!=0){
                    console.log("获取resume列表失败")
                    return
                }
               
                this.totalRows = res.data.data.Total
                this.items = res.data.data.Elems
                this.$store.commit('upDataCache',{key:this.cacheKey(offset)+offset,value:res.data})
                console.log(this.totalRows,this.items)
            })
        }
    }
}
</script>

<style scoped>

</style>
