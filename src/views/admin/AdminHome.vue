<template>
  <div class="home">
    <BRow>
      <BCol>
        <NCarousel 
          id="my-slide"
          :imgWidth="1024"
          :imgHeight="480"
          :imgList="imgList"
          @curSlide="getCurrentSlide"
        ></NCarousel>
      </BCol>
    </BRow>

    <BRow style="margin-top:10px;">
      <BCol cols="9">
        <b-card no-body>
          <b-tabs card fill>
            <b-tab no-body title="NPageTable">
              <BRow>
                <BCol>
                  <NPageTable
                    :items="items" 
                    :perPage="perPage" 
                    id="my-page-table" 
                  ></NPageTable>
                </BCol>
              </BRow>
            </b-tab>

            <b-tab no-body title="Page+Table">
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
            </b-tab>

            <b-tab title="Modal">
              <BRow>
                <BCol>
                  <b-card
                    overlay
                    title="Card Title"
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-alt="Image"
                    img-top
                    tag="article"
                    class="mb-2"
                  >
                    <b-card-text>
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </b-card-text>

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

                  </b-card>
                </BCol>
              </BRow>
            </b-tab>

          </b-tabs>
        </b-card>
      </BCol>

      <BCol cols="3">
        <BRow>
          <BCol>
            <b-calendar locale="zh">
            </b-calendar>
          </BCol>
        </BRow>
        <BRow>
          <BCol>
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block href="#" v-b-toggle.accordion-1 variant="info">Accordion 1</b-button>
              </b-card-header>
              <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>
                  <b-card-text>{{ text }}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block href="#" v-b-toggle.accordion-2 variant="info">Accordion 2</b-button>
              </b-card-header>
              <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>{{ text }}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block href="#" v-b-toggle.accordion-3 variant="info">Accordion 3</b-button>
              </b-card-header>
              <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>{{ text }}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </BCol>
        </BRow>
      </BCol>
    </BRow>

  </div>
</template>

<script>
// @ is an alias to /src
import { BRow,BCol,BCard,BTab,BTabs,BCardText,BCalendar,BCollapse,BCardBody,BCardHeader,BButton  } from 'bootstrap-vue';
import NPagination from '@/components/NPagination.vue'
import NTable from '@/components/NTable.vue'
import NCarousel from '@/components/NCarousel.vue'
import NPageTable from '@/components/NPageTable.vue'
import NModal from '@/components/NModal.vue'

export default { //导出模块
  name: 'AdminHome',
  components: {
    NPagination,
    NTable,
    NCarousel,
    NPageTable,
    NModal,
    BTab,
    BCard,
    BTabs,
    BCardText,
    BCalendar,
    BCollapse,BCardBody,BCardHeader,BButton
  },
  data() {
      return {
        perPage: 3,
        currentPage: 1,
        text:"ddddddddddddddddd",
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
