<template>
    <div class="person-info">
        <div class="box">
            <div class="row">
                <div class="row__left">
                    <div class="field">
                        名字
                    </div>
                </div>
                <div class="row__content">
                    <input class="value" v-model.trim="formData.name" placeholder="必填">
                </div>
            </div>
            <div class="row">
                <div class="row__left">
                    <div class="field">
                        身份证号
                    </div>
                </div>
                <div class="row__content">
                    <input class="value" v-model.trim="formData.idCard" placeholder="必填">
                </div>
            </div>
            <div class="row">
                <div class="row__left">
                    <div class="field">
                        手机号
                    </div>
                </div>
                <div class="row__content">
                    <input class="value" v-model.trim="formData.phone" placeholder="必填">
                </div>
            </div>
        </div>
        <div class="box">
            <div class="row">
                <div class="row__left">
                    <div class="field">
                        出生日期
                    </div>
                </div>
                <div class="row__content">
                </div>
                <div class="row__right">
                    <div class="date-pick"></div>
                </div>
            </div>
            <div class="row">
                <div class="row__left">
                    <div class="field">
                        性别
                    </div>
                </div>
                <div class="row__content">
                </div>
                <div class="row__right">
                    <radio
                            class="radio as-radiolist"
                            align="left"
                            v-model="formData.sex"
                            :options="['男性','女性']">
                    </radio>
                </div>
            </div>
            <div class="row">
                <div class="row__left">
                    <div class="field">
                        婚姻状况
                    </div>
                </div>
                <div class="row__content">
                </div>
                <div class="row__right">
                    <radio
                            class="radio as-radiolist"
                            align="left"
                            v-model="formData.marriage"
                            :options="['已婚','未婚']">
                    </radio>
                </div>
            </div>
        </div>
        <div class="box">
            <div class="row">
                <div class="row__left">
                    <div class="field">
                        所在部门
                    </div>
                </div>
                <div class="row__content">
                    <input class="value" v-model.trim="formData.department" placeholder="选填">
                </div>
            </div>
            <div class="row">
                <div class="row__left">
                    <div class="field">
                        员工工号
                    </div>
                </div>
                <div class="row__content">
                    <input class="value" v-model.trim="formData.workId" placeholder="选填">
                </div>
            </div>
            <div class="row">
                <div class="row__left">
                    <div class="field">
                        邮箱
                    </div>
                </div>
                <div class="row__content">
                    <input class="value" v-model.trim="formData.email" placeholder="选填">
                </div>
            </div>
        </div>
        <div class="next-step-btn" @click="next()">
            下一步
        </div>
    </div>
</template>
<script>
    import ComHeader from '@/components/header'
    import {Checklist, MtPoup, MessageBox, Radio, DatetimePicker} from 'mint-ui'


    export default {
        components: {
            ComHeader,
            Checklist,
            Radio,
            DatetimePicker
        },
        data() {
            return {
                formData: {
                    name: '',
                    idCard: '',
                    phone: '',
                    date: '',
                    sex: '男性',
                    department: '',
                    workId: '',
                    email: '',
                    marriage: '已婚',
                }
            }
        },
        watch: {},
        computed: {
            canNext() {
                return false
            }
        },
        methods: {
            choose() {
                if (this.symbol) {
                    this.$router.push({
                        name: 'PeChoose'
                    })
                }
            },
            textNames() {
                if (this.textName !== '' && this.textNumber !== '' && this.textPhone !== '') {
                    this.symbol = true
                } else {
                    this.symbol = false
                }
            },
            next() {
                const me = this
                let formData = me.formData
                _valid().then(resolve => {
                    _next()
                }, reject => {
                    me.utils.toastMsg(reject, 'center')
                })

                function _next() {
                    me.$emit('step2Commit', formData)
                }

                function _valid() {
                    let _msg = ''
                    return new Promise((resolve, reject) => {
                        if (!(formData.phone.match(/^\d{11}$/gi))) {
                            _msg = '请输入11位手机号码'
                        }
                        if (!(formData.idCard.match(/^(\d{18})|(\d{17}[a-zA-Z])$/))) {
                            _msg = '身份证格式错误'
                        }


                        if (!formData.name.length) {
                            _msg = '请输入名字'
                        }
                        if (_msg.length) {
                            reject(_msg)
                        } else {
                            resolve('验证通过')
                        }


                    })
                }
            }
        },
        mounted() {

        }
    }
</script>
<style lang='scss' scoped rel='stylesheet/scss'>
    @import "../../../assets/scss/modules/var";
    @import "../../../assets/scss/modules/mixin";
    
    .person-info {
        margin-bottom: 110px;
        .box {
            width: 100%;
            height: 266px;
            padding: 0 30px;
            background: #FFFFFF;
            position: relative;
            & + .box {
                margin-top: 20px;
            }
            @extend %shadow-list
        }
        .row {
            @include flex(flex-start, center);
            height: 88px;
            &__right {
            }
            &__left {
            }
            &__content {
                flex: 1;
            }
            & + .row {
                border-top: 1px solid $cl-border;
            }
        }
        .field {
            width: 180px;
            font-size: 30px;
            color: #999;
        }
        .value {
            font-size: 30px;
            color: #333;
            width: 100%;
        }
        /deep/ {
            .radio {
                float: left;
                .mint-radiolist-label {
                    font-size: 28px;
                }
                .mint-cell {
                    float: left;
                    & + .mint-cell {
                        margin-left: 50px;
                    }
                }
                
                .mint-radio-core {
                    margin-right: 15px;
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
        &.disabled {
            &:after {
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



