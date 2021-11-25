<template>
<BPagination 
    :total-rows="rows"
    :per-page="perPage"
    :aria-controls="target"
    @input="mCurrentPage"
    align="center"
></BPagination>
</template>

<script lang="ts">
import { Options,Vue } from 'vue-class-component';

/*
Props:
    rows:总数据量
    perPage：每页的数据个数
    target：目标表的id
Event：
    pageChanged：在页面变化时通知父组件当前pageid
*/
@Options({
    components: {
    },
    props:{
        rows: Number,
        perPage: Number,
        target: String,
    },
    emits:['pageChanged'],
})
export default class Pagination extends Vue {
    currentPage = 1;
    mCurrentPage(val: number) {
        console.log("current page:",this.currentPage,val)
        this.currentPage = val;
        this.emitCurrentPage(this.currentPage);
    }

    emitCurrentPage(val: number){
        console.log('currentPage emit',val);
    }

    rows?: number;
    perPage?: number;
    target?: string;
}
</script>
