<template>
    <div class="animate-tab" :style="wrapStyle">
        <swiper :options="swiperOption" ref="mySwiper" >
            <slot></slot>
            <div class="animate-slide-line" :style="lineStyle" v-show="lineShow"></div>
        </swiper>
    </div>
</template>
<script>
    import 'swiper/dist/css/swiper.css'
    import {swiper, swiperSlide} from 'vue-awesome-swiper';
    export default{
        name: 'AnimateTab',
        props: {
            data: {
                type: Array
            },
            index: {
                type: Number,
                default(){
                    return 0
                }
            },
            tabStyle: {
                type: Object
            },
            height: {
                type: String
            },
            width: {
                type: String
            },
            swiper: {
                type: Boolean,
                default(){
                    return true
                }
            },
            itemWidth: {
                type: String
            },
            lineWidth: {
                type: [String, Number]
            },
            lineHeight: {
                type: [String, Number]
            },
            lineColor: {
                type: [String, Array]
            },
            lineShow:{
            	type: Boolean,
				default(){
					return true
				}
            }
        },
        data(){
            return {
                remUnit: 75
            }
        },
        components: {
            swiper
        },
        computed: {
            mySwiper() {
                return this.$refs.mySwiper.swiper
            },
            swiperOption(){
                const me = this;
                return {
                    slidesPerView: "auto",
                    spaceBetween: 0,
                    initialSlide: 0,
                    allowSlidePrev:me.swiper,
                    allowSlideNext:me.swiper
                }
            },
            wrapStyle(){
                const me = this;
                if (me.tabStyle) {
                    return me.tabStyle
                } else {
                    return {
                        height: me.height ? Number(me.height) / me.remUnit + 'rem' : '',
                        width: me.width ? Number(me.width) / me.remUnit + 'rem' : ''
                    }
                }
            },
            lineStyle(){
                const me = this;
                let width = me.lineWidth ? Number(me.lineWidth) / me.remUnit + 'rem' : '';
                let height = me.lineHeight ? Number(me.lineHeight) / me.remUnit + 'rem' : '';
                let background = me.lineColor ? me.lineColor : '';
                return {
                    width,
                    height,
                    background
                }
            }
        },
        methods: {
            test(){
                console.log(123)
            },
            tabStyleInit() {
                const me = this;
                this.setStyle(me.index);
            },
            setStyle(index){
                const me = this;
                index = index > me.data.length - 1 ? me.data.length - 1 : index;
                let $parentDom = me.$parent.$parent.$el,
                    $doms = $parentDom.querySelectorAll('.tab-item'),
                    $animateSlideLine = $parentDom.querySelector('.animate-slide-line'),
                    $cDom = $doms[index],
                    swiperW = $animateSlideLine.offsetWidth,
                    cDomW = $cDom.offsetWidth,
                    l = 0,
                    finalL = 0;
                $doms.forEach(function (dom) {
                    me.utils.removeClass(dom, 'active');
                });
                me.utils.addClass($doms[index], 'active');
                for (let i = 0; i <= index - 1; i++) {
                    l += $doms[i].offsetWidth;
                }

                finalL = l + (cDomW - swiperW) / 2;
                $animateSlideLine.style.left = finalL + 'px';
                if (finalL) {
                    $animateSlideLine.style.left = finalL + 'px';
                    this.utils.addClass($cDom, 'active');
                    $animateSlideLine.style.visibility = 'visible';
                }
            }
        },
        mounted(){
            const me = this;
            if (me.data.length) {
                me.tabStyleInit();
            }
        },
        watch: {
            'data'(a){
                const me = this;
                if (a.length) {
                    me.$nextTick(() => {
                        me.tabStyleInit();
                    })
                }
            },
            'index'(a){
                const me = this;
                if (me.data.length) {
                    me.$nextTick(() => {
                        me.setStyle(a);
                    })
                }
            }
        }

    }
</script>
<style lang='scss' scoped rel='stylesheet/scss'>
    @import "../../assets/scss/modules/var";
    @import "../../assets/scss/modules/mixin";
    
    .animate-slide-line {
        visibility: hidden;
        position: absolute;
        content: '';
        width: 60px;
        height: 4px;
        left: 0;
        bottom: 1px;
        border-radius: 50px;
        background: $cl-red;
        transition: all .4s ease;
    }
</style>
<style lang="scss" rel="stylesheet/scss">
    @import "../../assets/scss/modules/var";
    @import "../../assets/scss/modules/mixin";
    
    .animate-tab {
        height: 88px;
        width: 100%;
        .swiper-container {
            width: 100%;
            height: 100%;
            .swiper-slide {
                width: auto;
            }
        }
    }
</style>