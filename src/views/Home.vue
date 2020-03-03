<template>
  <div class="home">
    <BRow>
      <BCol>
        <NCarousel 
          id="my-slide"
          :interval="400"
          :imgWidth="1024"
          :imgHeight="480"
          :imgList="imgList"
          @curSlide="getCurrentSlide"
        ></NCarousel>
    </BCol>
    </BRow>

    <BRow>
      <BCol>
        <NModal 
          btnName="my-table"
          modalTitle="对话框"
          @show="handleModalEnvet"
          @hidden="handleModalEnvet"
          @close="handleModalEnvet"
          @cancel="handleModalEnvet"
          @ok="handleModalEnvet"
          btnSize="lg"
        ></NModal>
    </BCol>
    </BRow>

    <BRow>
      <BCol>
        <NTable 
          id="my-table"
          :items="items"
          :perPage="perPage"
          :currentPage="currentPage"
        ></NTable>
    </BCol>
    </BRow>
    <BRow>
      <BCol>
        <NPagination
          :rows="rows" 
          :perPage="perPage" 
          target="my-table" 
          v-on:pageChanged="setCurrentPage"
        ></NPagination>
    </BCol>
    </BRow>

    <BRow>
      <BCol>
        <NPageTable
          :items="items" 
          :perPage="perPage" 
          id="my-page-table" 
        ></NPageTable>
    </BCol>
    </BRow>
  </div>
</template>

<script>
// @ is an alias to /src
import { BRow,BCol } from 'bootstrap-vue';
import NPagination from '@/components/NPagination.vue'
import NTable from '@/components/NTable.vue'
import NCarousel from '@/components/NCarousel.vue'
import NPageTable from '@/components/NPageTable.vue'
import NModal from '@/components/NModal.vue'

export default { //导出模块
  name: 'Home',
  components: {
    NPagination,
    NTable,
    NCarousel,
    NPageTable,
    NModal
  },
  data() {
      return {
        perPage: 3,
        currentPage: 1,
        items: [
          { id: 1, 姓: 'Fred', 名: 'Flintstone' },
          { id: 2, 姓: 'Wilma', 名: 'Flintstone' },
          { id: 3, 姓: 'Barney', 名: 'Rubble' },
          { id: 4, 姓: 'Betty', 名: 'Rubble' },
          { id: 5, 姓: 'Pebbles', 名: 'Flintstone' },
          { id: 6, 姓: 'Bamm Bamm', 名: 'Rubble' },
          { id: 7, 姓: 'The Great', 名: 'Gazzoo' },
          { id: 8, 姓: 'Rockhead', 名: 'Slate' },
          { id: 9, 姓: 'Pearl', 名: 'Slaghoople' }
        ],
        imgList:[
          {
              caption:"First slide",
              text:"Nulla vitae elit libero, a pharetra augue mollis interdum.",
              src:"https://picsum.photos/1024/480/?image=52"
          },
          {
              caption:"",
              text:"",
              src:"https://picsum.photos/1024/480/?image=54"
          },
          {
              caption:"",
              text:"",
              src:"https://picsum.photos/1024/480/?image=55"
          }
        ]
      }
    },
    computed: {
      rows() {
        return this.items.length
      }
    },
    methods:{
      setCurrentPage(val){
        console.log("setCurrentPage:",val)
        this.currentPage = val
      },
      getCurrentSlide(val){
        console.log("getCurrentSlide:",val)
      },
      handleModalEnvet(val){
        console.log("handleModalEnvet:",val)
      }
    }
}
</script>
