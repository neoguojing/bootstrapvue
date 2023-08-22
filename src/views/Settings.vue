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
                    <i class="bi bi-key px-3" width="16" height="16"></i>
                    Reset password
                    </a>
                </li>    
                <li>
                    <a href="#" class="nav-link text-dark  d-flex justify-content-start" 
                     id="rbac-tab" data-bs-toggle="pill" data-bs-target="#rbac" role="tab" aria-controls="rbac">
                    <i class="bi  bi-shield-lock px-3" width="16" height="16"></i>
                    RBAC
                    </a>
                </li> 
                <li>
                    <a href="#" class="nav-link text-dark  d-flex justify-content-start" 
                     id="users-tab" data-bs-toggle="pill" data-bs-target="#users" role="tab" aria-controls="users">
                    <i class="bi bi-person px-3" width="16" height="16"></i>
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
                <nav id="rbac-scrollspy" class="navbar navbar-light bg-light px-3">
                    <a class="navbar-brand" href="#">RBAC</a>
                    <ul class="nav nav-pills">
                        <li class="nav-item">
                        <a class="nav-link" href="#skills" @click="onRbacAdd">Add</a>
                        </li>
                        <li class="nav-item">
                        <a :class="{'disabled': !isRbacNeedTpDelete, 'nav-link' : true}" href="#" @click="onRbacDelete">Delete</a>
                        </li>
                        <li class="nav-item">
                        <a :class="{'disabled': !isRbacChanged, 'nav-link' : true}" href="#" @click="onRbacSave">Save</a>
                        </li>
                    </ul>
                </nav>
                <ol class="list-group mt-3 ">
                    <li class="list-group-item list-unstyled" v-for="(policy,index) in policies" v-bind:key="policy">
                        <div class="row">
                            <div class="col-2">
                                <div class="input-group input-group-sm mb-3">
                                    <input type="text" class="form-control" aria-label="Text input with dropdown button" v-model="policy[0]">
                                    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">roles</button>
                                    <ul class="dropdown-menu dropdown-menu-end" @click="handleRoleSelect($event,index)">
                                        <li v-for="role in roles" v-bind:key="role" :value="role" >
                                            <a :class="{ 'active': isSelected(role,policy[0]), 'dropdown-item': true}"  href="#" :data-value="role">{{ role }}</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="input-group input-group-sm mb-3">
                                    <input type="text" class="form-control" aria-label="Text input with dropdown button" v-model="policy[1]">
                                    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">resources</button>
                                    <ul class="dropdown-menu dropdown-menu-end" @click="handleResourceSelect($event,index)">
                                        <li v-for="rsrc in resources" v-bind:key="rsrc" :value="rsrc" >
                                            <a :class="{ 'active': isSelected(rsrc,policy[1]), 'dropdown-item': true}" href="#" :data-value="rsrc">{{ rsrc }}</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="input-group input-group-sm mb-3">
                                    <input type="text" class="form-control" aria-label="Text input with dropdown button" v-model="policy[2]">
                                    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">actions</button>
                                    <ul class="dropdown-menu dropdown-menu-end" @click="handleActionSelect($event,index)">
                                        <li v-for="act in actions" v-bind:key="act" :value="act" >
                                            <a :class="{ 'active': isSelected(act,policy[2]), 'dropdown-item': true}" href="#" :data-value="act">{{ act }}</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-2">
                                <input class="form-check-input" type="checkbox" :value="index" :id="index" v-model="selectedItems">
                            </div>
                        </div>
                    </li>
                </ol>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
// import PageTable from '@/components/PageTable.vue'
import ProfileBig from '@/views/ProfileBig.vue'
import ResetPassword from '@/views/ResetPassword.vue'
import config from '@/conf'
export default {
    name:"Settings",
    data(){
        return {
            policies: [],
            roles: [],
            resources: [],
            actions: [],
            rowsPerPageForPolicy: 10,
            totalRowsForPolicy : 0,
            isRbacChanged: false,
            changedRbacIndexs: [],
            selectedItems: [],
        }
    },
    components:{
        Sidebar,
        ProfileBig,
        ResetPassword,
        // PageTable
    },
    mounted(){
        this.getRoles()
        this.getPolicies()
        this.getResources()
        this.getActions()
    },
    setup() {
        
    },
    computed: {
        isSelected() {
            return (a, b) => {
                return a === b 
            }
        },
        isRbacNeedTpDelete() {
            return this.selectedItems.length != 0
        }
    },
    watch: {
        selectedItems(newVal) {
            // 选中项发生变化时执行的逻辑
            console.log('选中的值:', newVal);
        },
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
        handleRoleSelect(event,index){
            console.log(event)
            let value = event.target.getAttribute('data-value')
            if (value !=  this.policies[index][0]) {
                this.policies[index][0] = value
                this.isRbacChanged = true
                this.changedRbacIndexs.push(index)
            }
            
        },
        handleResourceSelect(event,index){
            let value = event.target.getAttribute('data-value')
            if (value !=  this.policies[index][1]) {
                this.policies[index][1] = value
                this.isRbacChanged = true
                this.changedRbacIndexs.push(index)
            }
        },
        handleActionSelect(event,index){
            let value = event.target.getAttribute('data-value')
            if (value !=  this.policies[index][2]) {
                this.policies[index][2] = value
                this.isRbacChanged = true
                this.changedRbacIndexs.push(index)
            }
        },

        onRbacSave() {
            let uniqueArray = [...new Set(this.changedRbacIndexs)];
            console.log(uniqueArray)
            // TODO
        },

        onRbacAdd() {
            this.policies.push([]);
            console.log(this.policies)
            this.isRbacChanged = true
            this.changedRbacIndexs.push(this.policies.length -1)
        },

        onRbacDelete() {
            let cloneArr = this.selectedItems.slice()
            cloneArr.sort((a, b) => b - a);
            for (const index of cloneArr) {
                // TODO
                this.policies.splice(index, 1);
            }
            this.selectedItems.length = 0
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
                console.log(this.totalRows,this.roles)
            })
        },
        getResources(){
            this.$http.get(config.urlGetResources)
            .then(res => {
                console.log(res.data)
                if(res.data.code!=0){
                    console.log("获取资源列表失败")
                    return
                }
                this.resources = res.data.data
                console.log(this.totalRows,this.resources)
            })
        },
        getActions(){
            this.$http.get(config.urlGetActions)
            .then(res => {
                console.log(res.data)
                if(res.data.code!=0){
                    console.log("获取action列表失败")
                    return
                }
                this.actions = res.data.data
                console.log(this.totalRows,this.actions)
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
                console.log(this.totalRowsForPolicy,this.policies)
            })
        }
    },
}
</script>

<style scoped>

</style>
