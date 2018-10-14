<template>
    <div class="select-pei step-1">
        <div class="top">
            <div class="select-list">
                <div class="select-box">
                    <label>
                        <select v-model="provinceItem" id="prov" ref="prov">
                            <option
                                    v-for="(item,index) in provinceList"
                                    :key="index"
                                    :label="item.provinceName"
                                    :value="item">
                                {{item.provinceName}}
                            </option>
                        </select>
                        <span @click="test" class="iconfont icon-arrow-down"></span>
                    </label>
                </div>
                <div class="select-box">
                    <label>
                        <select v-model="cityItem" ref="city">
                            <option
                                    v-for="(item,index) in cityList"
                                    :key="index"
                                    :label="item.cityName"
                                    :value="item">
                                {{item.cityName}}
                            </option>
                        </select>
                        <span class="iconfont icon-arrow-down"></span>
                    </label>
                </div>
            </div>
        </div>
        <div class="container">
            <com-animate-tab :swiper="true"
                             :index="0"
                             :data="tabList"
                             :lineWidth="120"
                             :tabStyle="{'backgroundColor':'white','borderBottom':'1px solid #eee','padding':'0 0.8rem'}"
            >
                <com-tab-item v-for="(item,index) in tabList"
                              flex="1"
                              :key="index"
                              @tab="orgType=item.orgType">
                    <div>{{item.label}}</div>
                </com-tab-item>
            </com-animate-tab>
            <div class="tab-content">
                <div v-show="orgType==='1'" class="tab-panel mn">
                    <div class="region-box" v-for="(item,index) in mnList" :key='index'>
                        <p class="name">{{item.orgName}}</p>
                        <p class="address">{{item.orgAddress}}</p>
                        <radio
                                class="radio as-radiolist"
                                align="right"
                                v-model="selectOrgName"
                                :options="[item.orgName]">
                        </radio>
                    </div>
                    <div class="empty" v-show="!mnList.length">
                        <img src="../../../assets/images/bg-empty.png">
                        <p class="text">
                            很抱歉，您所选择的地方暂时没有
                            合适的体检服务可以向您提供
                        </p>
                    </div>
                </div>
                <div v-show="orgType==='2'" class="tab-panel akgb">
                    <div class="region-box" v-for="(item,index) in akgbList" :key='index'>
                        <p class="name">{{item.orgName}}</p>
                        <p class="address">{{item.orgAddress}}</p>
                        <radio
                                class="radio as-radiolist"
                                align="right"
                                v-model="selectOrgName"
                                :options="[item.orgName]">
                        </radio>
                    </div>
                    <div class="empty" v-show="!akgbList.length">
                        <img src="../../../assets/images/bg-empty.png">
                        <p class="text">
                            很抱歉，您所选择的地方暂时没有
                            合适的体检服务可以向您提供
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="canNext" class="next-step-btn" @click="next()">
            下一步
        </div>
        <div v-else class="next-step-btn disabled">
            下一步
        </div>
    </div>
</template>
<script>
    import ComHeader from '@/components/header'
    import {ComAnimateTab, ComTabItem} from '@/components/animateTab'
    import {Checklist, Radio} from 'mint-ui'
    import DataJson from '../../../data.js'

    export default {
        components: {
            ComHeader,
            ComAnimateTab,
            ComTabItem,
            Checklist,
            Radio
        },
        data() {
            return {
                selectOrgName:'',
                orgType: '1',
                tabList: [{
                    label: '美年大健康',
                    orgType:'1'
                },
                    {
                        label: '爱康国宾',
                        orgType:'2'
                    }],
                provinceList: [],
                provinceItem: {},
                cityList: [],
                cityItem: {},
                mnList: [],
                akgbList: []

            }
        },
        computed:{
            selectOrgItem(){
                const me =this;
                let {cityItem,selectOrgName} = me;
                let orgList = cityItem.orgList
                if(orgList&&orgList.length){
                    return orgList.filter(item=>{return item.orgName===selectOrgName})[0]||''
                }
            },
            canNext(){
                const me =this;
                let {orgType,selectOrgItem} =me;
                let  flag = false
                if(orgType==='1'){
                    if(selectOrgItem&&selectOrgItem.orgType.match(/美/)){
                        flag = true
                    }
                }
                if(orgType==='2'){
                    if(selectOrgItem&&selectOrgItem.orgType.match(/爱/)){
                        flag = true
                    }
                }
                return flag
            }
        },
        mounted() {
            const me = this

            me.init()

        },
        watch:{
            'provinceItem'(newValue){
                const me =this;
                me.cityList = newValue.citys
                me.cityItem = me.cityList[0]
            },
            'cityItem'(newValue){
                //城市更换时，触发列表变化
                const me =this;
                me.selectOrgName = ''
                me.filterList()
            }
        },
        methods: {
            next(){
                const me =this
                let {selectOrgItem,provinceItem,cityItem} = me;
                this.$emit('step1Commit',{
                    selectOrgItem,
                    provinceItem,
                    cityItem
                })
            },
            init() {
                //获取列表
                const me = this
                me.provinceList = DataJson

                //初始获取列表的一项赋值给下拉框
                me.provinceItem = me.provinceList[0]
                me.cityList = me.provinceItem.citys
                me.cityItem = me.cityList[0]

                //分别赋值给两个列表
                me.filterList()
                
                //默认用第一个
            },
            filterList() {
                const me = this
                let list = me.cityItem.orgList
                me.akgbList.splice(0,me.akgbList.length)
                me.mnList.splice(0,me.mnList.length)
                list.forEach((item) => {
                    if (item.orgType.match(/爱/gi)) {
                        me.akgbList.push(item)
                    }
                    if (item.orgType.match(/美/gi)) {
                        me.mnList.push(item)
                    }
                })
            },

            test() {
                this.$refs.prov.focus()
            },
            chooseTab(item) {
                if (item.label === "美年大健康") {
                    this.love = true
                    this.abd = false
                } else {
                    this.love = false
                    this.abd = true
                }
            },
            personal() {
                this.$router.push({
                    name: 'LoginPersonal'
                })
            }
        }
    }
</script>
<style lang='scss' scoped rel='stylesheet/scss'>
    @import "../../../assets/scss/modules/var";
    @import "../../../assets/scss/modules/mixin";
    
    .select-pei {
        .select-list {
            @include flex(flext-start, center);
            height: 80px;
            background: #FFFFFF;
            line-height: 80px;
            text-align: center;
            .select-box {
                position: relative;
                @include flex(center, center);
                width: 50%;
                height: 100%;
                label {
                    width: 50%;
                }
                select {
                    max-width: 60%;
                    margin-right: 10px;
                    border: none;
                    outline: none;
                    font-size: 28px;
                    cursor: pointer;
                    background: transparent;
                    -webkit-appearance: none;
                }
                option {
                }
                &:nth-child(1) {
                    &:after {
                        position: absolute;
                        @extend %centerY;
                        display: block;
                        content: '';
                        right: 0;
                        width: 2px;
                        height: 36px;
                        background-color: #ddd;
                    }
                }
                .iconfont {
                    font-size: 20px;
                    color: #999;
                    z-index: 0;
                }
            }
        }
        
        .container {
            margin-top: 10px;
            padding-bottom: 100px;
        }
        
        .region-box {
            height: 190px;
            padding: 30px;
            background: #FFFFFF;
            margin-bottom: 10px;
            position: relative;
            @extend %shadow-list;
            .name {
                color: #333333;
                font-size: 30px !important;
            }
            .address{
                font-size: 28px;
                line-height: 32px;
                margin-top: 20px;
                width: 560px;
                height: 64px !important;
                color: #666666;
                margin-right: 110px;
                overflow: hidden;
                text-overflow: ellipsis;
                @include ellipsis(2);
            }
        }
    
        .empty{
            img{
                display: block;
                width: 285px;
                height: 200px;
                margin: 160px auto 0 ;
            }
            p{
                width: 450px;
                margin: 50px auto;
                text-align: center;
                font-size: 30px;
                color: #999;
                line-height: 1.4;
            }
        }
        
        /deep/ {
            .mint-radiolist {
                position: absolute;
                top: 70px;
                right: 50px;
            }
            .radio {
                .mint-radio-core {
                }
                .mint-radio-label {
                    display: none !important;
                }
            }
            .tab-item.active {
                div {
                    color: $cl-font-red;
                }
            }
        }
    }
    
    .next-step-btn {
        position: fixed;
        bottom: 0;
        height: 100px;
        width: 750px;
        text-align: center;
        line-height: 100px;
        color: #FFFFFF;
        background: #FF612C;
        font-size: 30px;
        cursor: pointer;
        &.disabled{
            &:after{
                display: block;
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: #ccc;
                opacity: 0.4;
                z-index: 1;
            }
        }
    }
</style>

