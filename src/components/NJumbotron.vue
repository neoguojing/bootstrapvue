<template>
    <div style="margin-top:10px;">
        <b-row>
            <b-col>
                <b-jumbotron 
                    v-for="(item,index) in items" 
                    v-bind:lead="item.lead"
                    v-bind:key="index" 
                    v-show="index==currentPage"
                >
                <p v-html="item.content"></p>
                </b-jumbotron>
            </b-col>
        </b-row>
        <b-row class="nav">
            <b-col cols="5">
            </b-col>
            <b-col cols="2">
                <b-button-group block>
                <b-button  variant="primary" 
                    @click="onPrev" 
                    :disabled="isPrevActive!=true"
                >Prev</b-button>
                <b-button variant="primary" 
                    @click="onNext" 
                >{{ submitBtnName }}</b-button>
                </b-button-group>
            </b-col>
            <b-col cols="5">
            </b-col>
        </b-row>
            
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue,Emit,Inject,Provide,Watch,Model } from 'vue-property-decorator';
import { BJumbotron,BButton,BRow,BCol } from 'bootstrap-vue';

/**
 * items=[
 *      {
 *          lead:"first",
 *          content:"<p>For more information visit website</p>"
 *      },
 *      {
 *          lead:"second",
 *          content:"<p>#####################################</p>"
 *      }
 * ]
 */
@Component({
    components: {
        BJumbotron,
        BButton,
        BRow,BCol
    }
})
export default class NJumbotron extends Vue {
    constructor(){
        super()
        this.currentPage = 0;
        this.isPrevActive = false;
        this.submitBtnName = "Next";
    }
    /////////////////////////////////////////////
    @Prop(Array) items?: object[];
    /////////////////////////////////////////////
    currentPage: number;
    isPrevActive: boolean;
    submitBtnName: string;
    //////////////////////////////////////////////
    get pageNum(): number{
        if (this.items == undefined){
            return 0;
        }
        return this.items.length;
    }


    /////////////////////////////////////////////////////
    onPrev(){
        if (this.currentPage > 0) {
            this.isPrevActive = true;
            this.currentPage--;
        }
        if (this.currentPage == 0) {
            this.isPrevActive = false;
        }

        this.submitBtnName = "Next"
    }

    onNext(){
        if (this.currentPage < (this.pageNum-1)) {
            this.currentPage++;
        } 

        if (this.submitBtnName == "Submit") {
            this.emitSubmit()
        }

        if (this.currentPage == (this.pageNum-1)) {
            this.submitBtnName = "Submit"
            
        }
        this.isPrevActive = true;
    }

    ////////////////////////////////////////////////////////
    @Emit("submit")
    emitSubmit(){
        console.log("emitSubmit")
    }
}
</script>

<style scoped>
    .nav{
        bottom: 10px;
    }
</style>