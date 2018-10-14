<template>
    <div class="fill">
        <com-header>
            {{stepTitle}}
        </com-header>
        
        <div class="step-container">
            <step-1 @step1Commit="step1Store" v-show="curStep==='1'"></step-1>
            <step-2 @step2Commit="step2Store" v-show="curStep==='2'"></step-2>
            <step-3></step-3>
        </div>
        
    </div>
</template>
<script>
    import ComHeader from '@/components/header'
    import DataJson from '../../data.js'

    import Step1 from './components/step-1'
    import Step2 from './components/step-2'
    import Step3 from './components/step-3'
    export default {
        components: {
            ComHeader,
            Step1,
            Step2,
            Step3
        },
        data() {
            return {
                stepTitle:"请选择体检机构",
                curStep :'2'
            }
        },
        mounted() {
        },
        methods: {
            step1Store(data){
                //console.log(data)
                const me =this;
                me.stepTitle = '填写体检人信息'
                me.curStep = '2'
                
            },
            step2Store(data){
                //console.log(data)
                const me =this;
                me.stepTitle = '填写体检人信息'
            }
        }
    }
</script>
<style lang='scss' scoped rel='stylesheet/scss'>
    @import "../../assets/scss/modules/var";
    @import "../../assets/scss/modules/mixin";
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
    }
</style>
