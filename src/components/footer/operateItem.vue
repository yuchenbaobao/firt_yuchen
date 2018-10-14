<template>
    <div class="item operate-item touch-item" :style="style" :class="[colorClass]" @click="$emit('click')">
        <slot>文本</slot>
    </div>
</template>

<script>
    /**
     * type:red,white,green,blue
     * */
    export default{
        props:{
            disabled:{
                type:Boolean
            },
            type:{
                type:String
            },
            width:{
                type:String
            }
        },
        data(){
            return{
                remUnit:75
            }
        },
        computed:{
            colorClass(){
                let _class='';
                const me =this;
                if(this.disabled){
                    return 'disabled'
                }
                return me.type
            },
            style(){
                return{
                    flex:this.width?'0 0 '+Number(this.width)/this.remUnit+'rem':''
                }
            }
        }
        

    }
</script>

<style lang='scss' scoped rel='stylesheet/scss'>
    @import "../../assets/scss/modules/mixin";
    @import "../../assets/scss/modules/var";
    .operate-item ,.item{
        position: relative;
        flex: 1;
        font-size: 30px;
        cursor: pointer;
        align-items: center;
        justify-content: center;
        display: flex;
        & > * {
            font-size: 30px;
        }
        &.red {
            background: $cl-red;
            color: white;
        }
        &.white {
        
        }
        
        &.disabled {
            background: #cccccc;
            color: white;
        }
        
        .icon-cart-wrap {
            position: relative;
            .icon-cart {
                font-size: 48px;
            }
            .count {
                position: absolute;
                font-size: 18px;
                display: block;
                color: white;
                background: $cl-orange;
                border-radius: 20px;
                min-width: 38px;
                height: 32px;
                line-height: 28px;
                text-align: center;
                top: 16px;
                right: -20px;
            }
        }
    }
</style>