<template>
    <div style="margin-top:10px;">
    <BNavbar toggleable="lg" type="dark" v-bind:variant="theme">
        <BNavbarBrand href="#">
            <img v-bind:src="brandImage" class="d-inline-block align-top">
        </BNavbarBrand>

        <BNavbarToggle target="nav-collapse"></BNavbarToggle>

        <BCollapse id="nav-collapse" is-nav>
        <BNavbarNav>
            <BNavItem v-for="(menu,index) in menuList" v-bind:key="index" v-bind:to="menu.to">
                {{ menu.text }}
            </BNavItem>
        </BNavbarNav>

        <!-- Right aligned nav items -->
        <BNavbarNav class="ml-auto">
            <BNavForm v-if="isSearchShow == 'yes'">
                <BFormInput size="sm" class="mr-sm-2" placeholder="Search" v-model="searchValue"></BFormInput>
                <BButton size="sm" class="my-2 my-sm-0" type="submit">Search</BButton>
            </BNavForm>

            <BNavItemDropdown text="Lang" right>
            <BDropdownItem href="#">CN</BDropdownItem>
            <BDropdownItem href="#">ES</BDropdownItem>
            <BDropdownItem href="#">RU</BDropdownItem>
            <BDropdownItem href="#">FA</BDropdownItem>
            </BNavItemDropdown>

            <BNavItem v-if="isLogin == 'no'" to="/login" right>
                Sign in
            </BNavItem>

            <BNavItem v-if="isLogin == 'no'"  to="/register2" right>
                Sign up
            </BNavItem>

            <BNavItemDropdown v-if="isLogin == 'yes'" :text="userInfo" right>
                <BDropdownItem href="#">Profile</BDropdownItem>
                <BDropdownItem href="#" @click="onResetPassword">Reset password</BDropdownItem>
                <BDropdownItem href="#" @click="onLogOut">Sign Out</BDropdownItem>
            </BNavItemDropdown>

        </BNavbarNav>
        </BCollapse>
    </BNavbar>
    </div>
</template>

<script lang="ts">



import store from '@/store';
import Login from '@/store/modules/Login';
import { Options,Vue } from 'vue-class-component';

/*
props:
    theme:控制主题背景
    brandImage：控制商标图片
    menuList：控制菜单项
    isSearchShow:控制是否显示搜索框
event：
    search：监听搜索框输入事件，参数：输入框的值
*/
@Options({
    components: {

    },
    props:{
        theme: String,
        brandImage: String,
        menuList: undefined,
        isSearchShow: String,
    },
    watch:{
        onSearchChanged(newVal: string, oldVal: string) {
            console.log('onSearchChanged is : ' ,newVal,oldVal)
            this.searchValue = newVal;
            this.emitSearchValue(this.searchValue);
        },
        onRouteChange(newVal: object, oldVal: object) {
            console.log("onRouteChange:",newVal,oldVal)
            this.reload()
        }
    },
    emits:['search','logout','resetPassword'],
    injects:{
        reload: undefined,
    }
})
export default class NavBar extends Vue {   
    theme!: string;
    brandImage!: string;

    //菜单列表
    menuList?: any[];
    
    //搜索组件
    isSearchShow?: string;
    searchValue = "search";
   
    emitSearchValue(val: string){
        console.log('emitSearchValue emit',val);
    }

    onLogOut() {
        this.emitLogOut();
    }

    emitLogOut(){
        return
    }

    onResetPassword() {
        this.emitResetPassword();
    }

    emitResetPassword(){
        return
    }

    reload: any;
    


    get isLogin(): string {
      if (localStorage.getItem("token") != null) {
        return "yes";
      }
      return "no";
    }

    get userInfo(): string {
    //   return this.$store.getters['Login/getUserInfo']
        return ""
    }

    mounted() {
        console.log("NNavBar mounted!!")
        console.log("isLogin:",this.isLogin,this.userInfo)
    }
}
</script>