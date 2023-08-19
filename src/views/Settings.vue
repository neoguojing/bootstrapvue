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
                <li>
                    <a href="#" class="nav-link text-dark  d-flex justify-content-start" 
                     id="rbac-tab" data-bs-toggle="pill" data-bs-target="#rbac" role="tab" aria-controls="rbac">
                    <i class="bi bi-gear px-3" width="16" height="16"></i>
                    RBAC
                    </a>
                </li> 
                <li>
                    <a href="#" class="nav-link text-dark  d-flex justify-content-start" 
                     id="users-tab" data-bs-toggle="pill" data-bs-target="#users" role="tab" aria-controls="users">
                    <i class="bi bi-gear px-3" width="16" height="16"></i>
                    Users
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
            <div class="tab-pane fade" id="rbac" role="tabpanel" aria-labelledby="rbac-tab">
                <PageTable @pageChange="onPageChangeForPolicy" :numOfPerPage="rowsPerPageForPolicy" :total="totalRowsForPolicy" >
                    <table class="table caption-top">
                        <caption>List of policy</caption>
                        <thead>
                            <tr>
                                <th  scope="col"> Role </th>
                                <th  scope="col"> Resource</th>
                                <th  scope="col"> Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr  v-for="policy in policies" v-bind:key="policy">
                                <td > 
                                    <select class="form-select form-select-sm" aria-label="Small select example">
                                        <option selected>{{ policy[0] }}</option>
                                        <option v-for="role in roles" v-bind:key="role" value="1" >
                                             {{ role }}
                                             <!-- v-if="role = {{ policy[0] }} ? selected : undefine" -->
                                        </option>
                                    </select>
                                </td>
                                <td > {{ policy[1] }}</td>
                                <td > {{ policy[2] }}</td>
                            </tr>
                        </tbody>
                    </table>
                </PageTable>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import PageTable from '@/components/PageTable.vue'
import ProfileBig from '@/views/ProfileBig.vue'
import ResetPassword from '@/views/ResetPassword.vue'
import config from '@/conf'
export default {
    name:"Settings",
    data(){
        return {
            policies: [],
            roles: [],
            rowsPerPageForPolicy: 10,
            totalRowsForPolicy : 0,
        }
    },
    components:{
        Sidebar,
        ProfileBig,
        ResetPassword,
        PageTable
    },
    mounted(){
        this.getRoles()
        this.getPolicies()
    },
    setup() {
        
    },
    methods:{
        cacheKey(offset){
            return "resumes"+offset.toString()
        },
        onPageChangeForPolicy(offset,limit) {
            let start = offset*limit-1
            let end = start+limit
            if (end >= this.totalRowsForPolicy) {
                this.policies = this.policies.slice(start)
            } else {
                this.policies = this.policies.slice[start,end]
            }
            
        },
        getRoles(){
            this.$http.get(config.urlGetRoles)
            .then(res => {
                console.log(res.data)
                if(res.data.code!=0){
                    console.log("获取roles列表失败")
                    return
                }
                this.roles = res.data.data
                console.log(this.totalRows,this.items)
            })
        },
        getPolicies(){
            this.$http.get(config.urlGetPolicies)
            .then(res => {
                console.log(res.data)
                if(res.data.code!=0){
                    console.log("获取policy列表失败")
                    return
                }
               
                this.totalRowsForPolicy =res.data.data.length
                this.policies = res.data.data
                console.log(this.totalRows,this.items)
            })
        }
    },
}
</script>

<style scoped>

</style>
