<template>
    <div class="common-status" v-show="status!=='99'">
        <div class="img-wrap">
            <img src="./images/status-empty.png" v-show="status==='2'">
            <img src="./images/status-success.png" v-show="status==='1'">
        </div>
        <div class="text-wrap">
            <p class="default-text">
                <slot>
                </slot>
            </p>
            <div slot="extend">
                <slot name="extend"></slot>
            </div>
        </div>
        <div class="btn-group" v-if="btn">
            <div class="btn  round" v-for="(item,index) in btnData" :class="[item.color]" @click="handle(item.event)" :key=index>{{item.label}}</div>
        </div>
    </div>
</template>
<script>
    export default{
        props: {
            status: {
                type: [String]   //99:隐藏   0:loading   1:success  -1:error  2:empty   21:empty1
            },
            btn: {
                type: [String, Array]  //label:文本  color:样式  event
            }
        },
        methods:{
            handle(type){
                if (!type) return false;
                this.$emit(type);
            }
        },
        computed: {
            btnData(){
                if (Object.prototype.toString.call(this.btn) === '[object Array]') {
                    return this.btn
                } else {
                    return [this.btn]
                }
            },
        }
    }
</script>
<style lang='scss' scoped rel='stylesheet/scss'>
    @import "../../assets/scss/modules/var";
    @import "../../assets/scss/modules/mixin";
    .common-status {
        background: transparent;
        padding: 150px 0;
        width: 100%;
        @include flex(center, center, column);
        .img-wrap {
            width: 276px;
            height: 200px;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .text-wrap {
            margin-top: 60px;
            .default-text{
                color: #999;
                font-size: 30px;
            }
            
        }
        .btn-group{
            margin-top: 60px;
            @include flex(center,center);
            &>.btn{
                width: 260px;
                height: 60px;
                border: 1px solid #cccccc;
                font-size: 28px;
                color: #999;
                &+.btn{
                    margin-left: 30px;
                }
                &.red{
                    border-color: $cl-font-red;
                    color: $cl-font-red;
                }
            }
        }
    }
</style>
