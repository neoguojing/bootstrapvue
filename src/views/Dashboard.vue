<template>
    <div class="row" >
        <Sidebar id="dashboardSidebar" title="Dashboard" :offcanvasClass="[]">
            <ul class="nav nav-pills flex-column mb-auto ">
                <li class="nav-item ">
                    <a href="#" class="nav-link active d-flex justify-content-start" aria-current="page">
                    <i class="bi bi-person-circle px-3" width="16" height="16"></i>
                    Main
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
                            <td > {{ item.name }}</td>
                            <td > {{ item.mobilenumber }}</td>
                            <td > {{ item.email }}</td>
                            <td > {{ item.totalexperience }}</td>
                            <td > {{ item.skills }}</td>
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
                    resume:data
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
                this.totalRows = cacheResume.total
                this.items = cacheResume.elems
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
                
                this.totalRows = res.data.total
                this.items = res.data.elems
                this.$store.commit('upDataCache',{key:this.cacheKey(offset)+offset,value:res.data})
            })
        }
    }
}
</script>

<style scoped>

</style>
