<template>
    <div class="institutions">
        <com-header>体检套餐</com-header>
        <!-- <div class="up">
            <p class="up1">已选套餐：</p>
            <p class="up2">男1套餐</p>
        </div> -->
        <!-- <div class="table">
            <table v-show="true">
                <tr class="table_header" >
                    <th class="th1 border">体检项目</th>
                    <th class="th2 border">体检内容</th>
                    <th class="th2 border">临床意义</th>
                </tr>
                <tr class="table_body" v-for="(item,index) in combineCell(detailListMan1)" :key="index" border="1">
                    <td class="th1">{{item.project}}</td>
                    <td class="th2" style="text-align:left">{{item.column1}}</td>
                    <td class="th2 padding" style="text-align:left">{{item.clinical}}</td>
                </tr>
            </table> -->
            <table v-show="Man2">
                <tr class="table_header">
                    <th class="th1 border">体检项目</th>
                    <th class="th2 border">体检内容</th>
                    <th class="th2 border">临床意义</th>
                </tr>
                <tr class="table_body" v-for="(item,index) in detailListMan2" :key="index" border="1">
                    <td class="th1">{{item.project}}</td>
                    <td class="th2" style="text-align:left">{{item.column1}}</td>
                    <td class="th2 padding" style="text-align:left">{{item.clinical}}</td>
                </tr>
            </table>
            <table v-show="Girl1">
                <tr class="table_header" >
                    <th class="th1 border">体检项目</th>
                    <th class="th2 border">体检内容</th>
                    <th class="th2 border">临床意义</th>
                </tr>
                <tr class="table_body" v-for="(item,index) in detailListGirl1" :key="index" border="1">
                    <td class="th1">{{item.project}}</td>
                    <td class="th2" style="text-align:left">{{item.column1}}</td>
                    <td class="th2 padding" style="text-align:left">{{item.clinical}}</td>
                </tr>
            </table>
            <table v-show="Girl2">
                <tr class="table_header" >
                    <th class="th1 border">体检项目</th>
                    <th class="th2 border">体检内容</th>
                    <th class="th2 border">临床意义</th>
                </tr>
                <tr class="table_body" v-for="(item,index) in detailListGirl2" :key="index" border="1">
                    <td class="th1">{{item.project}}</td>
                    <td class="th2" style="text-align:left">{{item.column1}}</td>
                    <td class="th2 padding" style="text-align:left">{{item.clinical}}</td>
                </tr>
            </table>
            <table v-show="Woman1">
                <tr class="table_header" >
                    <th class="th1 border">体检项目</th>
                    <th class="th2 border">体检内容</th>
                    <th class="th2 border">临床意义</th>
                </tr>
                <tr class="table_body" v-for="(item,index) in detailListWoman1" :key="index" border="1">
                    <td class="th1">{{item.project}}</td>
                    <td class="th2" style="text-align:left">{{item.column1}}</td>
                    <td class="th2 padding" style="text-align:left">{{item.clinical}}</td>
                </tr>
            </table>
            <table v-show="Woman2">
                <tr class="table_header">
                    <th class="th1 border">体检项目</th>
                    <th class="th2 border">体检内容</th>
                    <th class="th2 border">临床意义</th>
                </tr>
                <tr class="table_body" v-for="(item,index) in detailListWoman2" :key="index" border="1">
                    <td class="th1">{{item.project}}</td>
                    <td class="th2" style="text-align:left">{{item.column1}}</td>
                    <td class="th2 padding" style="text-align:left">{{item.clinical}}</td>
                </tr>
            </table>
        </div>
        <div class="table">
            <table>
                <tr class="table_header">
                    <th class="th1 border">项目</th>
                    <th class="th2 border">指标</th>
                    <th class="th2 border">临床意义</th>
                </tr>
                <tr class="table_body" v-for="(item,index) in detailLoveMan1" :key="index" border="1">
                    <td class="th1">{{item.project}}</td>
                    <td class="th2" style="text-align:left">{{item.Column1}}</td>
                    <td class="th2 padding" style="text-align:left">{{item.Column2}}</td>
                </tr>
            </table>
        </div>
        <div class="down" @click="$router.go(-1)">
            返回
        </div>
    </div>
</template>
<script>
import ComHeader from '@/components/header'

export default {
    components:{
            ComHeader,
        },
    data(){
        return{
            Man2:false,
            Girl1:false,
            Girl2:false,
            Woman1:false,
            Woman2:false,
            detailListMan1:[],
            detailListMan2:[],
            detailListGirl1:[],
            detailListGirl2:[],
            detailListWoman1:[],
            detailListWoman2:[],
            detailLoveMan1:[]
        }
    },
    mounted(){
        this.getMan1(),
        this.getMan2(),
        this.getGirl1(),
        this.getGirl2(),
        this.getWoman1(),
        this.getWoman2(),
        this.getLoveMan1()
    },
    methods:{
        choose(){
            this.$router.push({
                name:'PeChoose'
            })
        },
        getMan1(){
            var that = this;
            this.$http.get('../../../static/json/content-man1.json')
            .then(function(res){
                console.log('111111',res.data)
                that.detailListMan1=res.data
            })
        },
        getMan2(){
            var that = this;
            this.$http.get('../../../static/json/content-man2.json')
            .then(function(res){
                console.log('22222',res.data)
                that.detailListMan2=res.data
            })
        }, 
        getGirl1(){
            var that = this;
            this.$http.get('../../../static/json/content-man2.json')
            .then(function(res){
                console.log('3333',res.data)
                that.detailListGirl1=res.data
            })
        },
        getGirl2(){
            var that = this;
            this.$http.get('../../../static/json/content-man2.json')
            .then(function(res){
                console.log('4444',res.data)
                that.detailListGirl2=res.data
            })
        }, 
        getWoman1(){
            var that = this;
            this.$http.get('../../../static/json/content-man2.json')
            .then(function(res){
                console.log('5555',res.data)
                that.detailListWoman1=res.data
            })
        }, 
        getWoman2(){
            var that = this;
            this.$http.get('../../../static/json/content-man2.json')
            .then(function(res){
                console.log('6666',res.data)
                that.detailListWoman2=res.data
            })
        },
        getLoveMan1(){
            var that = this;
            this.$http.get('../../../static/json/loveOne.json')
            .then(function(res){
                console.log('loveman1',res.data)
                that.detailLoveMan1=res.data
            })
        },
        combineCell: function (list) {
            console.log('456456456')
                for (var field in list[0]) {
                    var k = 0
                while (k < list.length) {
                    list[k][field + 'span'] = 1
                    list[k][field + 'dis'] = false
                    for (var i = k + 1; i <= list.length - 1; i++) {
                        if (list[k][field] === list[i][field] && list[k][field] !== '') {
                            list[k][field + 'span']++
                            list[k][field + 'dis'] = false
                            list[i][field + 'span'] = 1
                            list[i][field + 'dis'] = true
                        } else {
                        break
                        }
                    }
                    k = i
                }
            }
                return list
        } 
    },   
}
</script>
<style lang='scss' scoped rel='stylesheet/scss'>
    .institutions{
        background:#FFFFFF;
        .up{
            height:80px;
            margin:0 auto;
            box-shadow: 0 5px 10px 0 #E8E8E8;
            p{
                float:left;
                line-height:80px;
                width:150px;
                height:42px;
                font-size:30px;
                color:#333333;
            }
            .up1{
                color:#CCCCCC !important;
                margin-left:30px;
            }
        }
        .table{
            margin-bottom: 120px !important;
            margin-top:30px !important;
            width:690px;
            margin:0 auto;
            table,tr,td{
                border-collapse: collapse;
                border:1px solid #DDDDDD ;
            }
            .th1{
                width:146px;
            }
            .th2{
                width:271px;
                padding:0 20px 0 20px;
            }
            .table_header{
                box-sizing: border-box;
                background:#4A4A4A;
                color:#FFFFFF;
                line-height:60px;
                .border{
                    border:none !important;
                }
            }
            .table_body{
                box-sizing: border-box;
                .padding{
                    padding:30px 20px 20px 20px;
                }
                td{
                   text-align:center;
                   vertical-align:middle;
                   font-size:26px;
                   color:#666666;
                   line-height:37px;

                }
            }
        }
        .down{
            height:100px;
            width:750px;
            color:#FFFFFF;
            background:#FF612C;
            text-align:center;
            line-height:100px;
            font-size:30px;
            position: fixed;
            cursor: pointer;
            bottom: 0;
        }
    }
</style>
