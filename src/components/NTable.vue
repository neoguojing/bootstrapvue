<template>
    <b-table
        :id="id"
        :items="items"
        :fields="fields"
        :per-page="perPage"
        :current-page="currentPage"
        hover
        responsive 
    ></b-table>
</template>

<script lang="ts">
import { Component, Prop, Vue,Emit,Inject,Provide,Watch,Model } from 'vue-property-decorator';
import { BTable } from 'bootstrap-vue';

@Component({
    components: {
        BTable
    }
})
export default class NTable extends Vue {
    @Prop(String) id?: string;
    @Prop(Array) items?: any[];
    @Prop(Array) fields?: any[]; //表头
    @Prop(Number) perPage?: number;
    @Prop(Number) currentPage?: number;
}
</script>
