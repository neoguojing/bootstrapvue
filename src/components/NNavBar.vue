<template>
    <div>
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
            <BNavForm v-if="isSearchShow == 'true'">
                <BFormInput size="sm" class="mr-sm-2" placeholder="Search" v-model="searchValue"></BFormInput>
                <BButton size="sm" class="my-2 my-sm-0" type="submit">Search</BButton>
            </BNavForm>

            <BNavItemDropdown text="Lang" right>
            <BDropdownItem href="#">CN</BDropdownItem>
            <BDropdownItem href="#">ES</BDropdownItem>
            <BDropdownItem href="#">RU</BDropdownItem>
            <BDropdownItem href="#">FA</BDropdownItem>
            </BNavItemDropdown>

            <BNavItemDropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
                <em>User</em>
            </template>
            <BDropdownItem href="#">Profile</BDropdownItem>
            <BDropdownItem href="#">Sign Out</BDropdownItem>
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
        BNavbar,BNavbarNav,BNavbarBrand,BNavbarToggle,BCollapse,BButton,
BNavItem,BNavText,BNavForm,BNavItemDropdown,BFormInput,BDropdownItem
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

    //@Prop(Boolean) isCollapsed: boolean = false;
    /*@Watch('show')
    onShowChanged(newValue: string, oldValue: string) {
        console.log('Alert is now ' + (newValue ? 'visible' : 'hidden'))
    }*/

    //计算属性
    /*get ValA(){
            return 1;
        }*/

    //methods
    /*dismissed() {
        console.log('Alert dismissed')
    }*/
}
</script>