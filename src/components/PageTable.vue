
<template>

<div class="row">
    <div class="table">
        <slot></slot>
    </div>
</div>
<div class="row">
    <div class="col-1">
    <span class="badge rounded-pill bg-primary">{{curPage+1}}/{{totalPage}}</span>
    </div>
    <div class="col">
        <nav aria-label="Page navigation">
            <ul class="pagination justify-content-center">
                <li class="page-item">
                <a class="page-link text-dark" :class="previousClass" @click="onPrevious"  href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
                </li>
                <li v-for="(idx,i) in pageBtnCount" v-bind:key="i" @click="onNumBtnClick(idx-1)" :class="{'active':curPage==i}" class="page-item">
                    <a class="page-link text-dark" href="#">{{ idx }}</a>
                </li>
                <li class="page-item">
                <a class="page-link text-dark" :class="nextClass" @click="onNext"  href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
                </li>
            </ul>
        </nav>
     </div>
</div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import _ from 'lodash'

export default {

    name:"PageTable",
    data(){
        return {
            curPage:0 //从0开始
        }
    },
    props: {
        id:{
            type: String,
            default:"pageTable"
        },
        numOfPerPage:{
            type: Number,
            default: 2
        },
        total :{
            type: Number,
            default: 20
        }
    },
    computed:{
        totalPage(){
            return (this.total%this.numOfPerPage == 0)?this.total/this.numOfPerPage:parseInt(this.total/this.numOfPerPage)+1
        },
        nextClass(){
            return {
                disabled: this.curPage == this.totalPage-1,
            }
        },
        previousClass(){
            return {
                disabled: this.curPage == 0,
            }
        },
        pageBtnCount(){
            var arr = []
            if (this.totalPage <= 10) {
                for (var i=1;i<=this.totalPage;i++){
                    arr.push(i)
                }
                return arr
            }

            var idx = this.curPage+1
            if (idx>=5&&idx<=this.totalPage-4){
                arr.push(1,'...')
                for(var j=idx-3;j<idx+3;j++){
                    arr.push(j)
                }
                arr.push('...',this.totalPage)
                return arr
            } 
            if (idx <=5 || idx>=this.totalPage-5){
                arr.push(1,2,3,4,5)
                arr.push('...')
                for(var q=this.totalPage-3;q<=this.totalPage;q++){
                    arr.push(q)
                }
            }
            

            return arr
        }
    },
    emits:['pageChange'],
    methods:{
        onPageChange(){
            this.$emit("pageChange",this.curPage,this.numOfPerPage)           
        },
        onNext:_.debounce(function(e){
            if (this.curPage < this.totalPage-1) {
                this.curPage++
                this.onPageChange()
            }
            console.log(e)
            
        },500),
        onPrevious:_.debounce(function(){
            if (this.curPage > 0) {
                this.curPage--
                this.onPageChange()
            }
            
        },500),
        onNumBtnClick:_.debounce(function(idx){
                if (idx == '...') {
                    return 
                }
                this.curPage = idx
                this.onPageChange(idx)
                
        },500)
    }
}
</script>