<template>
    <div class="personal">
        <com-header>请填写个人信息</com-header>
        <div class="up">
            <div class="line"></div>
            <div class="line1"></div>
            <ul class="left">
                <li>名字</li>
                <li>身份证号</li>
                <li>手机号</li>
            </ul>
            <ul class="right">
                <li><input type='text' placeholder="必填" v-model="textName" @input="textNames()"/></li>
                <li><input type='text' placeholder="必填" v-model="textNumber" @input="textNames()"/></li>
                <li><input type='text' placeholder="必填" v-model="textPhone" @input="textNames()"/></li>
            </ul>
        </div>
        <div class="en">
            <div class="line"></div>
            <div class="line1"></div>
            <ul class="left">
                <li>出生日期</li>
                <li>性别</li>
                <li>婚姻状态</li>
            </ul>
            <ul class="right date">
                <li class="choose">
                    <select v-model="value" class="select ">
                        <option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </option>
                    </select>
                </li>
                <img class="img" src="../login/images/icon-depart.png"/>
                <li> 
                    <radio
                        class="radio as-radiolist"
                        align="left"
                        v-model="data"
                        :options="['男性','女性']">
                    </radio>
                </li>
                <li>
                     <radio
                        class="radio as-radiolist"
                        align="left"
                        v-model="value1"
                        :options="['已婚','未婚',]">
                    </radio>
                </li>
            </ul>
        </div>
        <div class="down">
            <div class="line"></div>
            <div class="line1"></div>
            <ul class="left">
                <li>所在部门</li>
                <li>员工工号</li>
                <li>邮箱</li>
            </ul>
            <ul class="right">
                <li><input type='text' placeholder="选填"/></li>
                <li><input type='text' placeholder="选填"/></li>
                <li><input type='text' placeholder="选填"/></li>
            </ul>
        </div>
        <div class="down_to" @click="choose()" :class="{bind:symbol}">
            下一步
        </div>
    </div>
</template>
<script>
import ComHeader from '@/components/header'
import {Checklist,MtPoup,MessageBox,Radio} from 'mint-ui'
export default {
    components:{
            ComHeader,
            Checklist,
            Radio
        },
    data(){
        return{
            value:'选项1',
            symbol:false,
            textName:'',
            textNumber:'',
            textPhone:'',
            data:'男性',
            value1:'已婚',
            options: [
                {
                value: '选项1',
                label: '1991年6月1日'
                },
                {
                value: '选项2',
                label: '1992年6月1日'
                },
                {
                value: '选项3',
                label: '1993年6月1日'
                },
                {
                value: '选项4',
                label: '1994年6月1日'
                },
                {
                value: '选项5',
                label: '1995年6月1日'
                },
                {
                value: '选项6',
                label: '1996年6月1日'
                }
            ],
        }
    },
    watch:{
         
        },
    mounted(){
        
        },
    methods:{
        choose(){
            if(this.symbol){  
                    this.$router.push({
                    name:'PeChoose' 
                })
            }
        },
        textNames(){
            if(this.textName!==''&&this.textNumber!==''&&this.textPhone!==''){
                this.symbol=true
            }else{
                this.symbol=false
            }
        },
    }
}
</script>
<style lang='scss' scoped rel='stylesheet/scss'>
    .personal{
        .up,.en,.down{
            width: 100%;
            height:266px;
            padding:0 30px;
            background:#FFFFFF;
            position: relative;
            .line,.line1{
                width:690px;;
                border-top:1px solid #DDDDDD ;
                margin-top:88px;
                position: absolute
            }
            .line1{
                margin-top:176px !important;
            }
        }
        .en,.down{
            margin-top:20px;
        }
        .down{
            margin-bottom: 120px !important;
        }
        li{
            height:88px;
            line-height:88px;
            color:#333333;
            font-size:30px;
            input{
                width:100%;
            }
        }
        .left{
                float: left;
                li{
                    color:#999999 !important;
                }
            }
        .right{
            padding-left:180px;
            .choose{
                float:right;
                color:#999999;
                margin-right:40px;
            }
            .select{
                -webkit-appearance: none;
                border: none;
                outline: none;
                font-size:28px;
                background:0;
                cursor: pointer;
            }
            .img{
                float:right;
                position:fixed;
                right:30px;
                height:48px !important;
                width:20px !important;
                margin-top:20px;
            }
        }
        .date{
            float:right;
            .img{
                width:20px;
                height:68px;
            }
        }
        .down_to{
            height:100px;
            width:100%;
            color:#FFFFFF;
            // background:#FF612C;
            background: #CCCCCC;
            text-align:center;
            line-height:100px;
            font-size:30px;
            position:fixed;
            bottom: 0;
            cursor: pointer;
        }
        .bind{
            background:#FF612C !important;
        }
    }
</style>
<style lang='scss' rel="stylesheet/scss">
    .personal{
        .radio{
            float: left;
            margin-top:25px;
            .mint-radiolist-label {
                font-size:28px;
            } 
            .mint-cell{
                float:left;
                margin:0 30px;
            }
        }  
    }
</style>


