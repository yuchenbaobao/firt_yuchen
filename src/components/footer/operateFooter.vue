<template>
    <footer :class="{'fixed':fixed}" class="operate-footer" :style="style">
        <div class="operate-wrap" >
            <slot></slot>
        </div>
    </footer>
</template>
<script>
    export default{
        props:{
            fixed:{
                type:Boolean,
                default:true
            },
            bottom:{
                type:[String]
            },
            width:{
                type:[String,Number],
                default:'750'
            },
            height:{
                type:[String,Number]
            }
        },
        data(){
            return{
                remUnit:75
            }
        },
        computed:{
            style(){
                const me =this;
                let width = '10rem',
                    height = '',
                    bottom = '';
                width=me.width?me.width.match(/%/gi)?
                    me.width: Number(me.width)/me.remUnit+'rem'
                    :width;
                height=me.height?Number(me.height)/me.remUnit+'rem':'';
                bottom=me.bottom?Number(me.bottom)/me.remUnit+'rem':'0';
                return{
                    width,
                    height,
                    bottom
                }
            }
        }
    }
</script>
<style lang='scss' scoped rel='stylesheet/scss'>
    @import "../../assets/scss/modules/mixin";
    @import "../../assets/scss/modules/var";
    .operate-footer {
        position: absolute;
        z-index: 100;
        width: 750px;
        height: 100px;
        bottom: 0;
        left: 50%;
      
        transform: translateX(-50%);
        background: white;
        &.fixed{
            position: fixed;
        }
        .operate-wrap {
            position: absolute;
            width: 100%;
            height: 100%;
            bottom: 0;
            left: 0;
            right: 0;
            display: flex;
            border-top: 1px solid $cl-border;
        }
    }
</style>