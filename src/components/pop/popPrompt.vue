<template>
    <mt-popup
            class=" pop-modal"
            v-model="show"
            popup-transition="popup-fade"
            position="center">
        <div class="content">
            <span class="icon iconfont icon-close" @click="show=false"></span>
            <div class="main" :style="textStyle">
                <div class="text">
                    <slot name="text">
                        提示
                    </slot>
                </div>
            </div>
            <div class="extend">
                <slot name="extend"></slot>
            </div>
            <com-operate-footer :fixed="false" width="100%" height="88">
                <com-operate-item v-for="(item,index) in btn" :key="index" :type="item.color"
                                  @click="handle(item.event)">
                    <slot>{{item.label}}</slot>
                </com-operate-item>
            </com-operate-footer>
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
    export default{
        props: {
            modalCloseCb: {
                type: Boolean
            },
            textHeight: {
                type: String
            },
            textWidth: {
                type: String
            },
            btn: {
                type: Array
            }
        },
        data(){
            return {
                show: false,
                remUnit: 75
            }
        },
        methods: {
            handle(type){
                if (!type) return false
                if (type === 'cancel') {
                    this.show = false
                }
                this.$emit(type);
            }
        },
        computed: {
            textStyle(){
                const me = this;
                let width = me.textWidth ? Number(me.textWidth) / me.remUnit + 'rem' : '';
                let height = me.textHeight ? Number(me.textHeight) / me.remUnit + 'rem' : '';
                return {
                    height,
                    width
                }
            }
        },
        watch: {
            'show'(a){
            }
        }
    }
</script>
<style lang='scss' scoped rel='stylesheet/scss'>
    @import "../../assets/scss/modules/var";
    @import "../../assets/scss/modules/mixin";
    
    $cl-gray-middle: #666;
    $cl-gray-light: #999;
    $cl-gray-deep: #333;
    $cl-green: green;
    .pop-modal {
        width: 600px;
        border-radius: 10px;
        overflow: hidden;
    }
    
    .content {
        position: relative;
        width: 100%;
        min-height: 350px;
        padding-bottom: 88px;
    }
    
    .main {
        width: 100%;
        margin: 0 auto;
        height: 260px;
        padding: 30px 40px;
        @include flex(center, center);
        .text {
            font-size: 30px;
            text-align: center;
            line-height: 45px;
        }
    }
    
    .icon-close {
        font-size: 20px;
        top: 20px;
        right: 20px;
    }
</style>