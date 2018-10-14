<template>
    <div class="com-footer">
        <div class="toggle touch-item" @click="$router.push({name:'Home'})">
            <div v-show="act!=='home'" class="item item-index">
                <div class="item-img"></div>
                <p class="text">
                    首页
                </p>
            </div>
            <div class="item-img" v-show="act==='home'"></div>
        </div>
        <div v-for="(item,index) in list"
             class="item touch-item"
             @click="$router.push({name:item.routeName})"
             :class="[item.className,item.status]">
            <div class="item-img"></div>
            <p class="text">
                {{item.label}}
            </p>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                act: '',
                list:[
                    {
                        label:'分类',
                        type:'sort',
                        className:'item-sort',
                        routeName:'Sort',
                        status:''
                    },
                    {
                        label:'发现',
                        type:'discovery',
                        routeName:'DiscoveryIndex',
                        className:'item-discovery',
                        status:''
                    },
                    {
                        label:'购物车',
                        type:'shoppingCart',
                        routeName:'ShoppingCart',
                        className:'item-shopping',
                        status:''
                    },
                    {
                        label:'我的',
                        type:'my',
                        routeName:'My',
                        className:'item-my',
                        status:''
                    },
                ]
            }
        },
        mounted(){
            const me = this;
            let cRoute = me.$route.name;
            if (cRoute.match(/ShoppingCart/gi)) {
                me.act = 'shoppingCart'
            }
            if (cRoute.match(/Home/gi)) {
                me.act = 'home'
            }
            if (cRoute.match(/Sort/gi)) {
                me.act = 'sort'
            }
            if (cRoute.match(/Discovery/gi)) {
                me.act = 'discovery'
            }
            if(cRoute.match(/My/gi)){
                me.act = 'my'
            }
            me.list.forEach((item)=>{
                item.status=item.type===me.act?'active':''
            })
        }
    }
</script>
<style lang='scss' scoped rel='stylesheet/scss'>
    @import "../../assets/scss/modules/mixin";
    @import "../../assets/scss/modules/var";
    
    
    @mixin footerBg($url) {
        background: url("./images/#{$url}")  no-repeat;
        background-size: 100% 100%;
    }
    
    .com-footer {
        z-index: 11;
        @extend %shadow-list;
        position: fixed;
        height: 130px;
        width: 750px;
        bottom: 0;
        border-top: 1px solid #eeeeee;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        background: white;
        padding: 0 20px;
        & > div {
            width: 20%;
            cursor: pointer;
        }
        .toggle {
            display: flex;
            align-items: center;
            justify-content: center;
            .item-img {
                width: 88px;
                height: 88px;
                @include footerBg('icon-index-active.png');
                transition: transform .3s ease;
                &:hover{
                    transform: scale(1.2);
                }
            }
        }
        .item {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            .text {
                color: #666666;
                font-size: 24px;
            }
            .item-img {
                width: 56px;
                height: 56px;
                display: block;
                transition: transform .3s ease;
                &:hover{
                    transform: scale(1.3);
                }
                margin-bottom: 18px;
            }
            &.active{
                .text{
                    color: $cl-font-blue;
                }
            }
            &-sort {
                .item-img {
                    @include footerBg('icon-sort.png')
                }
                &.active {
                    .item-img {
                        @include footerBg('icon-sort-active.png')
                    }
                }
            }
            &-discovery {
                .item-img {
                    @include footerBg('icon-eye.png')
                }
                &.active {
                    .item-img {
                        @include footerBg('icon-eye-active.png')
                    }
                }
            }
            &-index {
                .item-img {
                    @include footerBg('icon-index.png')
                }
                
            }
            &-shopping {
                .item-img {
                    @include footerBg('icon-shopping.png')
                }
                &.active {
                    .item-img {
                        @include footerBg('icon-shopping-active.png')
                    }
                }
            }
            &-my {
                .item-img {
                    @include footerBg('icon-my.png')
                }
                &.active {
                    .item-img {
                        @include footerBg('icon-my-active.png')
                    }
                }
            }
        }
    }
</style>