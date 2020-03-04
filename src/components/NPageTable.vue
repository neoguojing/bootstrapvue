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
import { Component, Prop, Vue,Emit,Inject,Provide,Watch,Model } from 'vue-property-decorator';
import { BPagination,BTable,BRow,BCol} from 'bootstrap-vue';

/*
Props:
    id:总数据量
    items：每页的数据个数
    perPage：目标表的id

data:
    currentPage:当前页数
*/
@Component({
    components: {
        BPagination,
        BTable,
        BRow,
        BCol
    }
})
export default class NPageTable extends Vue {
    @Prop(String) id?: string;
    @Prop(Array) items?: any[];
    @Prop(Number) perPage?: number;

    /////////////////////////////////////////////
    currentPage = 1;

    ///////////////////////////////////////////
    get totalRows(): number{
        return this.items.length
    }

    
}
</script>
