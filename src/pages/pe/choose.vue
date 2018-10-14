<template>
<div class="choose">
    <com-header>选择体检套餐</com-header>
    <div class="up">
        <p class="exchange" ><button v-for="(d,i) in tabDatas" @click="curIndex=i;man(d)" v-bind:class="{active:i==curIndex}" :key="i">{{d.title}}</button></p>
    </div>
    <div class="en">
        <!-- <p class="text">美年大健康~天心分院</p> -->
        <div class="table" v-show="man1">
            <table >    
                <tr class="table_header">
                    <th class="th1 border">体检项目</th>
                    <th class="th2 border">体检内容</th>
                    <th class="th2 border">临床意义</th>
                </tr>
                <tr class="table_body" v-for="(item,index) in chooseList" :key="index" border="1">
                    <td class="th1">{{item.td1}}</td>
                    <td class="th2" style="text-align:left">{{item.td2}}</td>
                    <td class="th2 padding" style="text-align:left">{{item.td3}}</td>
                </tr>
            </table>
        </div>
    </div>
    <div class="en">
        <div class="table" v-show="man2">
            <table >    
                <tr class="table_header">
                    <th class="th1 border">体检项目</th>
                    <th class="th2 border">体检内容</th>
                    <th class="th2 border">临床意义</th>
                </tr>
                <tr class="table_body" v-for="(item,index) in chooseList" :key="index" border="1">
                    <td class="th1">{{item.td1}}</td>
                    <td class="th2" style="text-align:left">{{item.td2}}</td>
                    <td class="th2 padding" style="text-align:left">{{item.td3}}</td>
                </tr>
            </table>
        </div>
    </div>
    
    <div class="next" @click="institutions()">
            选择当前套餐
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
            curIndex:0,
            man1:true,
            man2:false,
            tabDatas:[
                    {
                        title:"男1套餐",
                    },
                    {
                        title:"男2套餐",
                    }
                ],
            chooseList:[
              {
                   td1:'一般检查',
                   td2:'身高、体重、体重指数(BM)、血压(BP)、脉搏(P)',
                   td3:'体重是否正常，有无体重不足、超重或者肥胖；有无血压脉搏异常等等 '
               },
               {
                   td1:'内科检查',
                   td2:'营养、面容、心脏、肺部、腹部',
                   td3:'通过体检检查，检查心、肺、腹部等器官及部位的基本状况，发现异常疾病的相关征兆或初步排除常见疾病。',
               },{
                   td1:'眼科检查',
                   td2:'视力、外眼',
                   td3:'了解视力状况，眼外观是否正常，有无沙眼，结膜炎等。',
               },{
                   td1:'耳鼻喉科检查',
                   td2:'耳鼻、口咽',
                   td3:'筛查耳鼻、口咽发育、功能有无异常，有无疾病，用于诊断中耳炎，鼻炎，扁桃体病变。',
               },{
                   td1:'一般检查',
                   td2:'身高、体重、体重指数(BM)、血压(BP)、脉搏(P)',
                   td3:'体重是否正常，有无体重不足、超重或者肥胖；有无血压脉搏异常等等 '
               }
            ] 
            }
        },
        moutend(){
            this.getChoose()
        },
        methods: {
            getChoose() {
            this.$http.get('../../../static/json/content-man1.json') 
            .then(function(res){
                if(res.data.result){
                    alert('12121212121212212')
                     console.log('11111111',res)
                    }
                })
            },
            institutions(){
                console.log('121212212')
                this.$router.push({
                    name:'PeInstitutions'
                })
            },
            man(d){
                console.log('121212212')
                if(d.title==='男1套餐'){
                    this.man1=true;
                    this.man2=false;
                }else{
                    this.man1=false;
                    this.man2=true;
                }
            }
        }, 
    } 
</script>
<style lang='scss' scoped rel='stylesheet/scss'>
.choose{
        .up{
            height:96px;
            background:#FFFFFF;
            padding-left:30px;
            box-sizing: border-box;
            margin-bottom: 10px;
            .active{
                background: #FF4300 !important;
                color: #FFFFFF !important;
                border:none !important;
            }
        .exchange{
            float:left;
            button{ 
                background:#FFFFFF ;
                border-radius: 4px;
                height:56px;
                width:345px;
                margin:20px 0 0 0;
                border:1px solid #FF612C;
                color:#CCCCCC;
                font-size:26px;
                cursor: pointer;
            }
        }
    }  
    .en{
        background:#FFFFFF;
        width:100%;
        .text{
            width:690px;
            margin:0 auto;
            font-size:40px;
            color:#333333;
            padding:30px 0;
        }
        .table{
            margin-bottom: 120px !important;
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
    }  
    .next{
        height:100px;
        width:750px;
        text-align:center;
        line-height:100px;
        color:#FFFFFF;
        background:#FF612C;
        font-size:30px;
        position:fixed;
        bottom:0;
        cursor: pointer;
    }      
}
</style>


