<template>
    <div class="information">
        <com-header>请选择体检机构</com-header>
        <div class="up">
            <p class="province left">
                <select v-model="value" class="select">
                    <option
                            v-for="item in options1"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </option>
                </select>
                <img src="../login/images/icon-unfold.png" />
            </p>
            <p class="city left">
                <select v-model="value" class="select ">
                    <option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </option>
                </select><img src="../login/images/icon-unfold.png" />
            </p>
            <p class="line left"></p>
        </div>
        <div class="center">
            <div class="en">
                <com-animate-tab :swiper="true"
                                 :index="0"
                                 :data="tabList"
                                 :lineWidth="120"
                                 :tabStyle="{'backgroundColor':'white','borderBottom':'1px solid #eee','padding':'0 1.2rem'}"
                >
                    <com-tab-item v-for="(item,index) in tabList"
                                  flex="1"
                                  :key="index"
                                  @tab="chooseTab(item)">
                        <div>{{item.label}}</div>
                    </com-tab-item>
                </com-animate-tab>
            </div>
            <div class="love_down" v-show="love" v-for="(item,index) in downList" :key='index'>
                <p class="name">{{item.lable}}</p>
                <radio
                        class="radio as-radiolist"
                        align="right"
                        v-model="value1"
                        :options="[item.address]">
                </radio>
            </div>
        </div>
        <div class="center">
            <div class="abd_down" v-show="abd" v-for="(item,index) in downList" :key='index'>
                <p class="name">{{item.lable}}</p>
                <radio
                        class="radio as-radiolist"
                        align="right"
                        v-model="value1"
                        :options="[item.address]">
                </radio>
            </div>
        </div>
        <div class="next" @click="personal()">
            下一步
        </div>
    </div>
</template>
<script>
    import ComHeader from '@/components/header'
    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    import {ComAnimateTab, ComTabItem} from '@/components/animateTab'
    import {Checklist, MtPoup, MessageBox, Radio} from 'mint-ui'

    export default {
        components: {
            swiper,
            swiperSlide,
            ComHeader,
            ComAnimateTab,
            ComTabItem,
            Checklist,
            Radio
        },
        data() {
            return {
                value1: '天心分院',
                value: '选项1',
                tabList: [],
                love: true,
                abd: false,
                options: [
                    {
                        value: '选项1',
                        label: '长沙市'
                    },
                    {
                        value: '选项2',
                        label: '郑州市'
                    },
                    {
                        value: '选项3',
                        label: '深圳市'
                    }],
                options1: [
                    {
                        value: '选项1',
                        label: '湖南省'
                    },
                    {
                        value: '选项2',
                        label: '海南省'
                    },
                    {
                        value: '选项3',
                        label: '广东省'
                    }],
                downList: [{lable: '天心分院', address: '长沙市天心区芙蓉南路一段458号现代大厦203号1010楼'},
                    {lable: '芙蓉分院', address: '长沙市天心区芙蓉南路一段458号现代大厦1020楼'},
                    {lable: '岳麓分院', address: '长沙市天心区芙蓉南路一段458号现代大厦1030楼'}],

            }
        },
        mounted() {
            const me = this
            setTimeout(function () {
                me.tabList = [{
                    label: '美年大健康',
                },
                    {
                        label: '爱康国宾',
                    }]
            },)
        },
        methods: {
            chooseTab(item) {
                if (item.label === "美年大健康") {
                    this.love = true
                    this.abd = false
                } else {
                    this.love = false
                    this.abd = true
                }
                console.log(item)
            },
            personal() {
                this.$router.push({
                    name: 'PePersonal'
                })
            }
        }
    }
</script>
<style lang='scss' scoped rel='stylesheet/scss'>
    .information {
        .up {
            background: #FFFFFF;
            height: 80px;
            line-height: 80px;
            text-align: center;
            .select {
                -webkit-appearance: none;
                border: none;
                outline: none;
                font-size: 28px;
                cursor: pointer;
            }
            .left {
                font-size: 28px;
                width: 373px;
                float: left;
                img {
                    padding-top: 20px;
                }
            }
            .line {
                height: 36px;
                width: 2px;
                border: 1px solid #DDDDDD;
                margin-top: 22px;
            }
            .city {
                float: right;
            }
        }
        .center1 {
            margin-bottom: 110px;
        }
        .en {
            margin-top: 10px;
        }
        .love_down, .abd_down {
            height: 190px;
            padding: 30px 0 0 20px;
            background: #FFFFFF;
            margin-bottom: 10px;
            position: relative;
            .name {
                color: #333333;
                font-size: 30px !important;
            }
        }
        .next {
            height: 100px;
            width: 750px;
            text-align: center;
            line-height: 100px;
            color: #FFFFFF;
            background: #FF612C;
            font-size: 30px;
            position: fixed;
            bottom: 0;
            cursor: pointer;
        }
    }
</style>
<style lang='scss' rel="stylesheet/scss">
    .information {
        .radio {
            right: 30px;
            position: absolute;
            .mint-radio-core {
            }
            .mint-radio-label {
                font-size: 28px;
                line-height: 32px;
                margin-top: 20px;
                width: 590px;
                height: 64px !important;
                color: #666666;
                margin-right: 110px;
                height: 32px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
        }
    }
</style>
<style lang="scss" rel="stylesheet">
    @import "../../assets/scss/modules/var";
    
    .information {
        .tab-item.active {
            div {
                color: $cl-font-red;
            }
        }
    }
</style>
