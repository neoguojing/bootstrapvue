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

import { Component, Prop, Vue,Emit,Inject,Provide,Watch,Model } from 'vue-property-decorator';
import { BNavbar,BNavbarNav,BNavbarBrand,BNavbarToggle,BCollapse,BButton,
         BNavItem,BNavText,BNavForm,BNavItemDropdown,BFormInput,BDropdownItem
} from 'bootstrap-vue';

import store from '@/store';
import { getModule } from 'vuex-module-decorators';
import Login from '@/store/modules/Login';
const loginStore = getModule(Login, store);

/*
props:
    theme:控制主题背景
    brandImage：控制商标图片
    menuList：控制菜单项
    isSearchShow:控制是否显示搜索框
event：
    search：监听搜索框输入事件，参数：输入框的值
*/
@Component({
    components: {
        BNavbar,
        BNavbarNav,
        BNavbarBrand,
        BNavbarToggle,
        BCollapse,
        BButton,
        BNavItem,
        BNavText,
        BNavForm,
        BNavItemDropdown,
        BFormInput,
        BDropdownItem
    }
})
export default class NNavBar extends Vue {   
    @Prop(String) theme!: string;
    @Prop(String) brandImage!: string;

    //菜单列表
    @Prop(Array) menuList?: any[];
    
    //搜索组件
    @Prop(String) isSearchShow?: string;
    searchValue = "search";
    @Watch('searchValue')
    onSearchChanged(newVal: string, oldVal: string) {
        console.log('onSearchChanged is : ' ,newVal,oldVal)
        this.searchValue = newVal;
        this.emitSearchValue(this.searchValue);
    }
    @Emit("search")
    emitSearchValue(val: string){
        console.log('emitSearchValue emit',val);
    }

    onLogOut() {
        this.emitLogOut();
    }
    @Emit("logout")
    emitLogOut(){
        return
    }

    onResetPassword() {
        this.emitResetPassword();
    }
    @Emit("resetPassword")
    emitResetPassword(){
        return
    }

    @Inject('reload') reload: any;
    
    @Watch("$route")
    onRouteChange(newVal: object, oldVal: object) {
        console.log("onRouteChange:",newVal,oldVal)
        this.reload()
    }

    get isLogin(): string {
      if (localStorage.getItem("token") != null) {
        return "yes";
      }
      return "no";
    }

    get userInfo(): string {
      return this.$store.getters['Login/getUserInfo']
    }

    mounted() {
        console.log("NNavBar mounted!!")
        console.log("isLogin:",this.isLogin,this.userInfo)
    }
}
</script>