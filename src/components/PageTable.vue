
<template>

<div class="row">
    <div class="table-responsive">
        <table class="table caption-top">
            <caption v-if="title != ''">List of users</caption>
            <thead v-if="items.heads.length">
                <tr>
                <th v-for="(head) in items.heads" v-bind:key="head" scope="col"> {{ head }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="row in items.rows.slice(pageStart,pageEnd)" v-bind:key="row">
                    <td v-for="elem in row" v-bind:key="elem"> {{ elem }}</td>
                </tr>
            </tbody>
            
        </table>
    </div>
</div>
<div class="row">
    <nav aria-label="Page navigation">
        <ul class="pagination justify-content-center">
            <li class="page-item">
            <a class="page-link text-dark" @click.prevent.stop="onPrevious"  href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
            </a>
            </li>
            <li class="page-item"><a class="page-link text-dark" href="#">1</a></li>
            <li class="page-item"><a class="page-link text-dark" href="#">2</a></li>
            <li class="page-item"><a class="page-link text-dark" href="#">3</a></li>
            <li class="page-item">
            <a class="page-link text-dark" @click.prevent.stop="onNext"  href="#" aria-label="Next">
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
        items:{
            type: Object,
            default:function(){
                return {
                    heads:['#','First','Last','Handle'],
                    rows:[
                        ['1','Mark','Otto','@mdo'],
                        ['2','Mark','Otto','@mdo'],
                        ['3','Mark','Otto','@mdo'],
                    ]
                }
            }
        },
        numOfPerPage:{
            type: Number,
            default: 2
        },
        total :{
            type: Number,
            default: 3
        }
    },
    computed:{
        totalPage(){
            return (this.total%this.numOfPerPage == 0)?this.total/this.numOfPerPage:this.total/this.numOfPerPage+1
        },
        pageStart(){
            return this.curPage*this.numOfPerPage
        },
        pageEnd(){
            return this.pageStart+this.numOfPerPage
        }
    },
    methods:{
        onNext(){
            if (this.curPage< this.totalPage-1) {
                this.curPage++
            }
        },
        onPrevious(){
            if (this.curPage>0) {
                this.curPage--
            }
        }
    }
}
</script>