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

import { Options,Vue } from 'vue-class-component';

@Options({
    components: {
        
    },
    props:{
        id: String,
    items: undefined,
    fields: undefined,
    perPage: Number,
     currentPage: Number,
    }
})
export default class Table extends Vue {
    id?: string;
    items?: any[];
    fields?: any[]; //表头
    perPage?: number;
    currentPage?: number;
}
</script>
