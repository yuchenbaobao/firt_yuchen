<template>
    <div class="date">
        <com-header>选择体检日期</com-header>
        <div class="week">
            <p class="exchange"><button class="back" v-for="(d,i) in tabDatas" @click="curIndex=i" :class="{active:i==curIndex}" :key="i">{{d.title}}</button></p>
        </div>
        <div class="day">
            <div class="month">
                11月份
                <!-- {{month}}份 -->
                <!-- <p>{{nowTime}}</p> -->
            </div>
            <div class="line"></div>
            <div class="today">
                <p class="empty"></p>
                <p v-for="(item,index) in 30" :key="index" @click="curIndex1=index;openDate(item)" :class="{active1:index==curIndex1,datacss:index<5} ">{{item}}</p>
            </div>
        </div>
        <div class="test" v-show="sendVal"></div>
        <com-operate-item class="next" @click.native="save">
            提交
        </com-operate-item>
        <div class="pop">
                <pop-prompt
                        ref="popPrompt"
                        @cancel="$refs.popPrompt.show=false"
                        :btn="[{label:'取消',color:'white',event:'cancel'},{label:'确定',color:'red',event:'cancel',}]">
                    <p slot="text">
                        订单提交后,信息不能修改请仔细核对已下体检信息
                    </p>
                </pop-prompt>
        </div>
        <pop-date :dateDatas="dateData" v-show="sendVal" @listenConfirm="listenMsgConfirm"></pop-date>
    </div>
</template>
<script>
import ComHeader from '@/components/header'
import PopDate from '../../components/pop/popDate.vue'
import DataJson from '../../data.js'
const PopPrompt=()=>import('@/components/pop/popPrompt.vue');
export default {
    props:{
	        com:Boolean,
        },
    components:{
            ComHeader,
            PopDate,
            PopPrompt,
        },
    data(){
        return{
            data:[],
            curIndex:2,
            curIndex1:5,
            sendVal:false,
            dateData: 1,
            nowTime:'',
            year:"",
            month:'',
            date:'',
            tabDatas:[
                    {   
                        nom:'sunday',
                        title:"日",
                    },
                    {
                        nom:'monday',
                        title:"一",
                    },
                    {
                        nom:'tuesday',
                        title:"二",
                    },
                    {
                        nom:'wednesday',
                        title:"三",
                    },
                    {
                        nom:'thursday',
                        title:"四",
                    },
                    {
                        nom:'friday',
                        title:"五",
                    },
                    {
                        nom:'saturday',
                        title:"六",
                    },
                ],
        }
    },
    created() {
        this.nowTimes();
    },
    moutend(){
        this.nowTimes();
    },
    methods:{
        //显示当前的时间
        timeFormate(timeStamp) {
            let year = new Date(timeStamp).getFullYear();
            let month =new Date(timeStamp).getMonth() + 1 < 10? "0" + (new Date(timeStamp).getMonth() + 1): new Date(timeStamp).getMonth() + 1;
            let date =new Date(timeStamp).getDate() < 10? "0" + new Date(timeStamp).getDate(): new Date(timeStamp).getDate();
            let hh =new Date(timeStamp).getHours() < 10? "0" + new Date(timeStamp).getHours(): new Date(timeStamp).getHours();
            let mm =new Date(timeStamp).getMinutes() < 10? "0" + new Date(timeStamp).getMinutes(): new Date(timeStamp).getMinutes();
            this.nowTime = year + "年" + month + "月" + date +"日"
            this.year = year +'年'
            this.month = month +'月'
            this.date = date +'日'
        },
        nowTimes(){
            this.timeFormate(new Date());
            setInterval(this.nowTimes,30*1000);
            },
        openDate(data){
            if(data<6){
                return false
            }else if(data===4 || data===11 || data===18 || data===25){
                this.curIndex=0
            }else if(data===5 || data===12 || data===19 || data===26){
                this.curIndex=1
            }else if(data===6 || data===13 || data===20 || data===27){
                this.curIndex=2
            }else if(data===7 || data===14 || data===21 || data===28){
                this.curIndex=3
            }else if(data===8 || data===15 || data===22 || data===29){
                this.curIndex=4
            }else if(data===9 || data===16 || data===23 || data===30){
                this.curIndex=5
            }else if(data===10 || data===17 || data===24){
                this.curIndex=6
            }
            this.sendVal=true;
            this.dateData = data 
        },
        listenMsgConfirm(type){
            this.sendVal=type
        },
        save() {
			this.$refs.popPrompt.show = true;
            },
        package(){
            this.$router.push({
            name:'PePackage'
            })
        }
    }
}
</script>
<style lang='scss' scoped rel='stylesheet/scss'>
    .date{
        .week{
            height:80px;
            width:750px;
            text-align:center;
            font-size:28px;
            background:#FFFFFF;
            .exchange{
                border:0;
                background:0;
                .back{
                    height:80px;
                    width:56px;
                    border:0;
                    background:0;
                    margin:0 20px;
                    color:#666666;
                    cursor: pointer;
                }
            }
            .active{
                background:#FF602C !important;
                border-radius: 0 !important;
                color:#FFFFFF !important;
            }
        }
        .day{
            margin-top:5px;
            background:#FFFFFF ;
            .month{
                height:102px;
                color:#333333;
                font-size:34px;
                line-height:101px;
                margin-left:67px;
            }
            .line{
                width:690px;
                height:1px;
                margin:0 auto;
                border-top:1px solid #CCCCCC ;
            }
            .today{
                width:670px;
                height:480px;
                margin:0 auto;
                cursor: pointer;
                background:#FFFFFF;
                p{
                    width:56px;
                    height:56px;
                    float: left;
                    margin:19.5px;
                    line-height:56px;
                    text-align:center;
                }
                .active1{
                    border-radius:100%;
                    border: #FF602C 1px solid
                }
                .empty{
                    height:56px;
                    width:339px ;
                    float:left;
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
        .test{
            width: 100%;
            height: 100%;
            background: rgba(1,1,1,0.4);
            position: absolute;
            top: 88px;
            left: 0;
        }
        .datacss{
            color:#CCCCCC;
            border:0 !important;
            cursor: no-drop;
        }
    }
    
</style>
