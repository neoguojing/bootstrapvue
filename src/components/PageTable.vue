<template>
  <div style="margin-top:10px;">
    <BRow>
      <BCol>
        <b-table
        :id="id"
        :items="items"
        :per-page="perPage"
        :current-page="currentPage" 
        hover 
        responsive 
        ></b-table>
      </BCol>
    </BRow>

    <BRow>
      <BCol>
        <b-pagination
        v-model="currentPage"
        :total-rows="totalRows"
        :per-page="perPage"
        :aria-controls="id"
        align="center"
        ></b-pagination>
      </BCol>
    </BRow>

  </div>
</template>

<script lang="ts">
import { Options,Vue } from 'vue-class-component';

/*
Props:
    id:总数据量
    items：每页的数据个数
    perPage：目标表的id

data:
    currentPage:当前页数
*/
@Options({
    components: {
       
    },
    props:{
        id: String,
        items: undefined,
        perPage: Number,
    }
})
export default class PageTable extends Vue {
    constructor(){
      super();
      this.currentPage = 1;
    }

    id?: string;
    items?: any[];
    perPage?: number;

    /////////////////////////////////////////////
    currentPage: number;

    ///////////////////////////////////////////
    get totalRows(): number|undefined{
        if (this.items == undefined) {
            return undefined;
        }
        return this.items.length
    }

    
}
</script>
