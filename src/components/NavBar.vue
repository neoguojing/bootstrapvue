<template>
    <div>
    <BNavbar toggleable="lg" type="dark" variant="info">
        <BNavbarBrand href="#">NavBar</BNavbarBrand>

        <BNavbarToggle target="nav-collapse"></BNavbarToggle>

        <BCollapse id="nav-collapse" is-nav>
        <BNavbarNav>
            <BNavItem href="#">Link</BNavItem>
            <BNavItem href="#">Disabled</BNavItem>
        </BNavbarNav>

        <!-- Right aligned nav items -->
        <BNavbarNav class="ml-auto">
            <BNavForm>
            <BFormInput size="sm" class="mr-sm-2" placeholder="Search"></BFormInput>
            <BButton size="sm" class="my-2 my-sm-0" type="submit">Search</BButton>
            </BNavForm>

            <BNavItemDropdown text="Lang" right>
            <BDropdownItem href="#">EN</BDropdownItem>
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

@Component({
    components: {
        BNavbar,BNavbarNav,BNavbarBrand,BNavbarToggle,BCollapse,BButton,
BNavItem,BNavText,BNavForm,BNavItemDropdown,BFormInput,BDropdownItem
    }
})

export default class NavBar extends Vue {
    name = "BootstrapVue";
    show = true;

    //@Prop() private msg!: string;
    @Watch('show')
    onShowChanged(newValue: string, oldValue: string) {
        console.log('Alert is now ' + (newValue ? 'visible' : 'hidden'))
    }

    //计算属性
    /*get ValA(){
            return 1;
        }*/

    //methods
    toggle() {
        console.log('Toggle button clicked')
        this.show = !this.show
    }

    dismissed() {
        console.log('Alert dismissed')
    }
}
</script>