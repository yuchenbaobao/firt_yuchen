<template>
    <swiper-slide :style="style">
        <div class="tab-item" @click="choose($event)">
            <slot>测试</slot>
        </div>
    </swiper-slide>
</template>
<script>
    import 'swiper/dist/css/swiper.css'
    import {swiperSlide} from 'vue-awesome-swiper';
    export default{
        props: {
            flex: {
                type: [Boolean, String]
            }
        },
        methods: {
            choose(e){
                const me = this;
                let $parentDom = me.$parent.$parent.$el,
                    $doms = $parentDom.querySelectorAll('.tab-item'),
                    cDom = e.currentTarget,
                    index = _index(cDom);
                
                me.$nextTick(() => {
                    me.$parent.$parent.setStyle(index)
                    me.$emit('tab')
                });

                //获取当前第几个dom节点
                function _index(dom) {
                    let _index = 0;
                    $doms.forEach((item, index) => {
                        if (item === dom) {
                            _index = index;
                        }
                    });
                    return _index
                }

            }
        },
        computed: {
            style(){
                const me = this;
                return {
                    flex: me.flex ?
                        (typeof me.flex === 'boolean' ? '1' : me.flex) : ''

                }
            }
        },
        mounted(){
        
        },
        components: {
            swiperSlide
        }
    }
</script>
<style lang='scss' scoped rel='stylesheet/scss'>
    @import "../../assets/scss/modules/mixin";
    @import "../../assets/scss/modules/var";
    
    .tab-item {
        height: 100%;
        width: 100%;
        cursor: pointer;
        @include flex(center, center);
    }
</style>
