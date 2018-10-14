<template>
    <div class="popDate" v-show="sendVal">
        <div class="token">
            <div class="up">
                <span class="icon iconfont icon-close" @click="close"></span>
                <div class="title">订单提交后,信息不能修改请仔细核对已下体检信息</div>
                <div class="line"></div>
                <div class="center">
                    <ul class="left">
                        <li>体检机构:</li>
                        <li>体检套餐:</li>
                        <li>体检时间:</li>
                    </ul>
                    <ul class="right">
                        <li>美年大健康~天心分院</li>
                        <li>男1套餐</li>
                        <li>2018年11月{{dateDatas}}日</li>
                    </ul>
                </div>
            </div>
            <div class="down">
                <p class="false" @click="close">取消</p>
                <p class="true" @click="close();packages()">确定</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        dateDatas: Number
    },
    data(){
        return{
            sendVal:true,
            show: false,
        }
    },
    methods:{
        close(){
            this.sendVal=false;
            this.$emit('listenConfirm', this.sendVal)   
        },
        packages(){
            let queryParam = {dateDatas: this.dateDatas}
            this.$router.push({
                path:'/pe/package', query: queryParam
            })
        }
    }
}
</script>
<style lang='scss' scoped rel='stylesheet/scss'>
    .popDate{
        .token{
            height:576px;
            width:600px;
            border-radius: 20px;
            position:absolute;
            top:331px;
            left:75px;
        }
        .up{
            height:486px;
            width:600px;
            background:#FFFFFF;
            border-radius: 15px 15px 0 0;
            .title{
                height:72px;
                width:390px;
                margin:0 auto;
                padding-top:50px;
                color:#333333;
                font-size:30px;
                line-height:36px;
                text-align:center;
            }
            .line{
                height:1px;
                width:500px;
                margin-top:90px;
                border: 1px #CCCCCC dashed;
                margin-left:50px;
          
            }li{
                margin-top:52px
            }
            .center{
                height:312px;
                width:500px;
                margin:0 auto;
                .left{
                    float:left;
                    color:#CCCCCC;
                    font-size:28px;
                }
                .right{
                    float:left;
                    color:#333333;
                    font-size:28px;
                    margin-left:50px;
                    
                }
            }
        }
        .down{
            margin-top:0.5px;
            cursor: pointer;
            p{
               width:300px;
               height:88px; 
               float:left;
               text-align:center;
               line-height:88px;
               background:#FFFFFF
            }
            .false{
                color:#666666;
                border-radius: 0 0 0 15px;
                border-top:1px solid #EEEEEE;
            }
            .true{
                color:#FFFFFF;
                background:#FF612C;
                border-radius: 0 0 15px 0
            }
        }
        .icon-close {
            font-size: 20px;
            top: 20px;
            right: 20px;
            position: absolute;
            cursor: pointer;
        }
    }
</style>


