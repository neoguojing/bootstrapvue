
<template>

<div class="row">
    <div class="table-responsive">
        <table class="table caption-top">
            <caption v-if="title != ''">List of users</caption>
            <thead v-if="heads.length">
                <tr>
                <th v-for="(head) in heads" v-bind:key="head" scope="col"> {{ head }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" v-bind:key="item">
                    <td v-for="elem in item" v-bind:key="elem"> {{ elem }}</td>
                </tr>
            </tbody>
            
        </table>
    </div>
</div>
<div class="row">
    <nav aria-label="Page navigation">
        <ul class="pagination justify-content-center">
            <li class="page-item">
            <a class="page-link text-dark" @click="onPrevious"  href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
            </a>
            </li>
            <li v-for="idx in pageBtnCount" v-bind:key="idx" @click="onNumBtnClick(idx-1)" class="page-item"><a class="page-link text-dark" href="#">{{ idx }}</a></li>
            <li class="page-item">
            <a class="page-link text-dark" @click="onNext"  href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
            </a>
            </li>
        </ul>
    </nav>
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
        title:{
            type: String,
            default:"List of users"
        },
        heads:{
            type: Array,
            default:function(){
                return ['#','First','Last','Handle']
            }
        },
        items:{  //每次只传一页数据
            type: Array,
            default:function(){
                return [
                        ['1','Mark','Otto','@mdo'],
                        ['2','Mark','Otto','@mdo'],
                        ['3','Mark','Otto','@mdo'],
                    ]
            }
        },
        numOfPerPage:{
            type: Number,
            default: 2
        },
        total :{
            type: Number,
            default: 100
        }
    },
    computed:{
        totalPage(){
            return (this.total%this.numOfPerPage == 0)?this.total/this.numOfPerPage:parseInt(this.total/this.numOfPerPage)+1
        },
        pageBtnCount(){
            var arr = []
            if (this.totalPage <= 10) {
                for (var i=1;i<=this.totalPage;i++){
                    arr.push(i)
                }
                return arr
            }
            
            console.log(this.curPage)
            var idx = this.curPage
            if (idx>5&&idx<=this.totalPage-4){
                arr.push(1,'...')
                for(var j=idx-3;j<idx+3;j++){
                    arr.push(j)
                }
                arr.push('...',this.totalPage)
                return arr
            } else if (idx<=5||idx>this.totalPage-4){
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