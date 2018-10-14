<template>
    <div class="loading">
        <div class="box">
            <slot></slot>
            <img src="../images/loading.gif">
        </div>
    </div>
</template>

<script>
    export default{
        props:[
            'title','text'
        ],
        data(){
            return{
            
            }
        }
    }
</script>

<style lang='scss' scoped rel='stylesheet/scss'>
    .loading{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        .box{
            border-radius: 8px;
            background: rgba(0,0,0,0.8);
            padding: 50px 54px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            
        }
    }
</style>