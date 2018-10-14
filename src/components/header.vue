<template>
    <div class="com-header" >
        <span class="iconfont icon-return" @click="back" ></span>
        <div class="main">
            <slot></slot>
        </div>
        <div class="right-tip">
            <slot name="rightTip"></slot>
        </div>
    </div>
</template>

<script>
    export default{
        props:{
            backHandle:{
                type:[Function]
            }
        },
        methods:{
            back(){
                if(this.backHandle){
                    this.backHandle()
                }else{
                    this.$router.go(-1)
                }
            }
        }
    }
</script>

<style lang='scss' scoped rel='stylesheet/scss'>
    @import "../assets/scss/modules/mixin";
    @import "../assets/scss/modules/var";
    .com-header{
        position: relative;
        height: 88px;
        font-size: 34px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        background: white;
        border-bottom: 1px solid #eee;
        border-bottom: 1px solid $cl-border;
    }
    .right-tip{
        position: absolute;
        @extend %centerY;
        right: 30px;
    }
    .icon-return{
        position: absolute;
        cursor: pointer;
        top: 50%;
        left: 40px;
        transform: translateY(-50%);
        font-size: 34px;
        transition: all .4s ease;
    }
    .main{
        font-size: 34px;
        width: 268px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
</style>
