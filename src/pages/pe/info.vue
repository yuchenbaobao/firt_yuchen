<template>
    <div class="package">
        <com-header>体检服务信息</com-header>
        <div class="img_bg">
            <img class="logo" src="../../assets/images/bg-logo.png" />
            <p class="up color">卓望非广深地区体检服务</p>
            <p class="en color">尊敬的金刚先生</p>
            <p class="down color">您已经提交了体检服务订单，订单的信息如下</p>
        </div>
        <div class="center">
            <ul class="left">
                <li>订单号</li>
                <li>订单类型</li>
                <li>体检日期</li>
                <li>体检机构</li>
                <li>体检地址</li>
            </ul>
            <ul class="right">
                <li>110110110110110110</li>
                <li>团体</li>
                <li>2018年9月30号</li>
                <li>美年大健康&nbsp;芙蓉分院</li>
                <li class="address">长沙市芙蓉区远大一路132号天友大酒店南栋</li>
            </ul>
        </div>
        <div class="bottom">
            <div class="left">
                <p class="img"><span class="iconfont icon-service"></span></p>
                <p class="text">联系客服</p>
            </div>
            <div class="right">
                <p class="pack float" @click="view()">查看体检套餐</p>
                <p class="line"></p>
                <p class="information float" @click="showInfo" >查看体检人信息</p>
            </div>
        </div>
        <pop-user-info ref="popUserInfo"></pop-user-info>
    </div>
</template>
<script>
    import ComHeader from '@/components/header'
    import { MessageBox } from 'mint-ui';
    import PopUserInfo from '../../components/pop/popUserInfo.vue'
    export default {
        props:{
            value:{}
        },
        components:{
            ComHeader,
            MessageBox,
            PopUserInfo
        },
        data(){
            return{
                showUserInfo:false
            }
        },
        methods:{
            view(){
                this.$router.push({
                    name:'Detail'
                })
            },
            showInfo(){
                this.$refs.popUserInfo.show = true;
            }
        },
    }
</script>
<style lang="scss" scoped rel='stylesheet/scss'>
    @import "../../assets/scss/modules/mixin";
    .package{
        background:#FFFFFF ;
        .img_bg{
            background: url('../login/images/images-bg.png');
            height:230px;
            width:100%;
            .logo{
                float:left;
                margin:20px 20px 0 20px;
                width:126px;
                height:30px;
            }
            .color{
                color:#FFFFFF ;
            }
            .up{
                padding-top:24px;
                font-size:24px;
            }
            .en{
                font-size:34px;
                line-height:36px;
                padding-top:43px;
                text-align:center;
            }
            .down{
                text-align:center;
                font-size:28px;
                line-height:32px;
                padding-top:20px
            }
        }
        .center{
            position: relative;
            background:#FFFFFF ;
            min-height:564px;
            margin-bottom: 300px;
            &:after{
                position: absolute;
                bottom: -20px;
                left: 0;
                content: '';
                width: 750px;
                height: 20px;
                background: url("../../assets/images/bg-content-bottom.png");
                background-size: 100% 100%;
            }
            li{
                margin-top:60px;
                line-height: 1.4;
            }
            .left{
                float:left;
                margin-left:60px;
                li{
                    color:#999999;
                    font-size:28px;
                }
            }
            .right{
                float:left;
                margin-left:48px;
                
                li{
                    color:#333333;
                    font-size:28px;
                }
                .address{
                    width:488px;
                    overflow : hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
            }
        }
        .bottom{
            width:750px;
            height:100px;
            position:fixed;
            background:#FFFFFF ;
            cursor: pointer;
            bottom:0;
            @extend %shadow-list;
            .left{
                float:left;
                .img{
                    margin:25px 0 0 50px;
                    .icon-service{
                        font-size:26px;
                    }
                }
                .text{
                    margin:10px 0 10px 30px;
                    color:#999999;
                    font-size:22px;
                }
            }
            .right{
                float:left;
                width:572px;
                height:66px;
                border:1px solid #CCCCCC;
                border-radius: 20px;
                margin-top:17px;
                font-size:28px;
                color:#333333;
                line-height:34px;
                margin-left:30px;
                .float{
                    float:left;
                    margin-top:16px;
                    text-align:center;
                    width:282px;
                    height:66px;
                }
                .line{
                    height:66px;
                    border:1px solid #CCCCCC;
                    float:left;
                }
            }
        }
    }
</style>
