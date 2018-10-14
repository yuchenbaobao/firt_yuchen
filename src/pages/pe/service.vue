<template>
    <div class="service">
        <com-header>A+体检服务</com-header>
        <div class="center">
            <p class="img"><img src='../login/images/Null 02@2x.png'/></p>
            <p class="text top">很抱歉，暂时没有合适的体检服务</p>
            <p class="text">可以向您提供服务</p>
        </div>
    </div>
</template>
<script>
import ComHeader from '@/components/header'
export default {
    components:{
            ComHeader,
        },
    data(){
        return{

        }
    }
}
</script>
<style lang='scss' scoped rel='stylesheet/scss'>
    .service{
        background:#FFFFFF;
        .center{
            width:60%;
            margin:0 auto;
            .img{
                margin-top:241px;
                margin-left:20%;
                img{
                    width:279px;
                    height:200px;   
                }
            }
            .top{
                margin-top:50px;
            }
            .text{
                color:#999999 ;
                font-size:30px;
                text-align:center;
                line-height:36px;
            }
        }
    }
</style>