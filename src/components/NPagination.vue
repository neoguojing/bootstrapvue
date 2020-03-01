<template>
<BPagination 
    :total-rows="rows"
    :per-page="perPage"
    :aria-controls="target"
    @input="mCurrentPage"
></BPagination>
</template>

<script lang="ts">
import { Component, Prop, Vue,Emit,Inject,Provide,Watch,Model } from 'vue-property-decorator';
import { BPagination } from 'bootstrap-vue';

/*
Props:
    rows:总数据量
    perPage：每页的数据个数
    target：目标表的id
Event：
    pageChanged：在页面变化时通知父组件当前pageid
*/
@Component({
    components: {
        BPagination
    }
})
export default class NPagination extends Vue {
    currentPage = 1;
    mCurrentPage(val: number) {
        console.log("current page:",this.currentPage,val)
        this.currentPage = val;
        this.emitCurrentPage(this.currentPage);
    }
    @Emit('pageChanged')
    emitCurrentPage(val: number){
        console.log('currentPage emit',val);
    }

    @Prop(Number) rows?: number;
    @Prop(Number) perPage?: number;
    @Prop(String) target?: string;
}
</script>
