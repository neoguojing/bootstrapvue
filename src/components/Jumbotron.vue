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
        <b-row>
            <b-col cols="5">
            </b-col>
            <b-col cols="2">
                <b-button-group block>
                <b-button pill variant="primary" 
                    @click="onPrev" 
                    :disabled="isPrevActive!=true"
                >Prev</b-button>
                <b-button pill variant="primary" 
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
import Button  from './Button.vue';
import { Options,Vue } from 'vue-class-component';

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
@Options({
    components: {
        Button
    },
    props:{
        items: undefined
    },
    emits:['submit']
})
export default class Jumbotron extends Vue {
    constructor(){
        super()
        this.currentPage = 0;
        this.isPrevActive = false;
        this.submitBtnName = "Next";
    }
    /////////////////////////////////////////////
    items?: object[];
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
    emitSubmit(){
        console.log("emitSubmit")
    }
}
</script>
