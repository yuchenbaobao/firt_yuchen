<template>
    <mt-popup
            class=" pop-modal"
            v-model="show"
            :closeOnClickModal="false"
            popup-transition="popup-fade"
            position="center">
        <div class="content">
            <div class="title">
                体检人信息
            </div>
            <div class="info">
                <div class="box">
                    <div class="row field">
                        <div class="col col-6">名字</div>
                        <div class="col">出生日期</div>
                    </div>
                    <div class="row value">
                        <div class="col col-6">周杰伦</div>
                        <div class="col">1979年1月18日</div>
                    </div>
                </div>
                <div class="box">
                    <div class="row field">
                        <div class="col col-6">性别</div>
                        <div class="col">婚姻状态</div>
                    </div>
                    <div class="row value">
                        <div class="col col-6">男</div>
                        <div class="col">未婚</div>
                    </div>
                </div>
                <div class="box">
                    <div class="row field">
                        <div class="col col-6">部门</div>
                        <div class="col">工号</div>
                    </div>
                    <div class="row value">
                        <div class="col col-6">--</div>
                        <div class="col">--</div>
                    </div>
                </div>
                <div class="box">
                    <div class="row field">
                        <div class="col col-12">身份证</div>
                    </div>
                    <div class="row value">
                        <div class="col col-12">4451211994</div>
                    </div>
                    <div class="row field">
                        <div class="col col-12">手机号码</div>
                    </div>
                    <div class="row value">
                        <div class="col col-12">13211211111</div>
                    </div>
                    <div class="row field">
                        <div class="col col-12">邮箱</div>
                    </div>
                    <div class="row value">
                        <div class="col col-12">13211211111</div>
                    </div>
                </div>
            </div>
            <div class="close" @click="show=false">
                <span class="iconfont icon-close"></span>
            </div>
        </div>
    </mt-popup>
</template>
<script>
    /**
     * 一个简易的确认弹框
     * prop: btn [Array] 按钮列表，分别传入 label 文本 ,color 颜色 没有的颜色必须自己到comOperateItem 里面封装  event:[String] 事件名，将触发事件
     * prop: textHeight [String] 文本容器的高度，该容器为居中容器
     *
     * emit: cancel ,触发cancel事件，由btn列表里面的 type 决定
     * emit: confirm
     * */
    export default {
        props: {},
        data() {
            return {
                show: false
            }
        },
        methods: {},
    }
</script>
<style lang='scss' scoped rel='stylesheet/scss'>
    @import "../../assets/scss/modules/var";
    @import "../../assets/scss/modules/mixin";
    $col-base:12;
    $cl-gray-middle: #666;
    $cl-gray-light: #999;
    $cl-gray-deep: #333;
    $cl-green: green;
    .pop-modal {
        width: 600px;
        border-radius: 10px;
    }
    .content {
        position: relative;
        width: 100%;
        min-height: 350px;
        
        .title{
            @include flex(center,center);
            height: 88px;
            border-top-right-radius: 10px;
            border-top-left-radius: 10px;
            background-color: #FF612C;
            color: white;
            font-size: 30px;
        }
        .info{
            padding: 0 50px;
            .box{
                padding: 30px 0;
                &+.box{
                    border-top: 2px dashed #CCCCCC;
                }
            }
            .row{
                @include flex(flex-start,flex-start)
            }
            .col{
                &.col-4{
                    width: 33.33%;
                }
                &.col-6{
                    width: 50%;
                }
                &.col-8{
                    width: 66.67%;
                }
                &.col-12{
                    width: 100%;
                }
            }
            .field{
                font-size: 28px;
                color: #ccc;
                &+.row{
                    margin-top: 16px;
                }
            }
            .value{
                font-size: 28px;
                color: #333;
                &+.field{
                    margin-top: 20px;
                }
            
            }
        }
        .close{
            position: absolute;
            @extend %centerX;
            @include flex(center,center);
            bottom: -100px;
            width: 80px;
            height: 80px;
            border: 1px solid white;
            border-radius: 100%;
            .iconfont{
                color: white;
                font-size: 30px;
            }
        }
    }
</style>


