<template>
    <div class="login">
        <div class="logo"></div>
        <div class="login-box">
            <com-animate-tab :swiper="false"
                             :index="0"
                             :data="tabList"
                             :lineWidth="120"
                             :tabStyle="{'padding':'0 2.6rem'}">
                <com-tab-item v-for="(item,index) in tabList"
                              flex="1"
                              :key="index"
                              @tab="page.type=item.type"
                >
                    <div class="tab-text">{{item.label}}</div>
                </com-tab-item>
            </com-animate-tab>
            <div class="form-wrap">
                <div class="form-row">
                    <span class="icon iconfont icon-phone-user"></span>
                    <input v-model="formData.phone" placeholder="请输入手机号">
                    <span @click="clear('phone')" v-show='formData.phone' class="iconfont icon-delete-round"></span>
                </div>
                <div class="form-row" v-show="page.type==='0'">
                    <span class="icon iconfont icon-lock"></span>
                    <input v-model="formData.password" :type="showPwd?'text':'password'" placeholder="请输入密码">
                    <span @click="clear('password')" v-show="formData.password"
                          class="iconfont icon-delete-round"></span>
                    <span class="icon iconfont" :class="{'icon-eye':showPwd,'icon-eye-1':!showPwd}"
                          @click="showPwd=!showPwd"></span>
                </div>
                <div class="form-row" v-show="page.type==='1'">
                    <span class="icon iconfont icon-safe"></span>
                    <input v-model="formData.sms" placeholder="请输入验证码">
                    <span class="get-sms" @click="getSms">{{smsHandle.text}}</span>
                </div>
                <div class="tip" @click="$router.push({name:'LoginSetPwd'})" v-show="page.type==='0'">
                    忘记密码？
                </div>
            </div>
            <div class="commit ">
                <div class="btn touch-item " @click='login'>登录</div>
                <div class="tip">提示：首次登录请使用短信登录</div>
            </div>
        </div>
        <div class="footer">
            登陆即同意<a>《A+福利站服务协议》</a>
        </div>
    </div>
</template>
<script>
    import {ComAnimateTab, ComTabItem} from '@/components/animateTab'
    export default{
        data(){
            return {
                tabList: [{
                    label: '密码登录',
                    type: '0'
                }, {
                    label: '短信登录',
                    type: '1'
                }],
                loginLoading: {
                    text: '正在为您切换其他登录方式',
                    title: '一键登录失败',
                    show: false
                },
                formData: {
                    phone: '',
                    password: '',
                    sms: ''
                },
                page: {
                    type: '0'  //0 密码登录  1 短信登录
                },
                showPwd: false,
                smsHandle: {
                    text: '获取验证码',
                    time: 10,
                    status: '0'  //-1 重新  0 初始  1 计时
                }
            }
        },
        mounted(){
            const me=this;
            this.initPageHeight();
        },
        methods: {
            login(){
                const me = this;
                let {page, formData} = me;
                let type = page.type;
                let postData = {
                    phone: formData.phone
                };
                if (type === '0') {           //密码登录
                    postData.password = formData.password;
                } else {
                    postData.sms = formData.sms;  //验证码登录
                }
                if (_valid()) {
                    _ajax();
                }

                function _valid() {
                    let _msg = '';
                    let _flag = true;
                    if (type === '1') {
                        if (!(/^\d{6}$/.test(formData.sms))) {
                            _msg = '验证码不正确';
                            _flag = false;
                        }
                        if (!formData.sms.length) {
                            _msg = '请输入验证码';
                            _flag = false;
                        }
                    }
                    if (type === '0') {
                        if (!formData.password) {
                            _msg = '请输入密码';
                            _flag = false;
                        }
                    }

                    if (!(/^\d{11}$/.test(formData.phone))) {
                        _msg = '请输入11位数字手机号码';
                        _flag = false;
                    }

                    if (_msg) {
                        me.utils.toastMsg(_msg, 'center');
                    }
                    return _flag
                }

                function _ajax() {
                    //todo:异步请求
                    if(formData.phone===me.$root.userData.phone&&formData.password===me.$root.userData.password){
                        me.utils.setLocalStorage('phone',formData.phone);
                        me.utils.setLocalStorage('password',formData.password);
                        
                        
                        let flag = false
                        
                        //todo:跳转处理
                        //todo:当返回有info的时候，就跳到info页面，没有的话就跳套餐选择
                        if(flag){
                            me.$router.push({
                                name:'Info'
                            })
                        }else{
                            me.$router.push({
                                name:'Fill'
                            })
                        }
                    }else{
                        me.utils.toastMsg('密码错误','center')
                    }
                    //todo:设置信息
                    //me.utils.toastMsg('登录成功','center');
                    //todo:判断是否设置了默认企业
                }
            },
            clear(field){
                const me = this;
                let {formData} = me;
                formData[field] = '';
            },
            getSms(){
                const me = this;
                let {smsHandle, formData} = me;
                if (smsHandle.status === '1') {
                    return false
                }
                if (!formData.phone) {
                    me.utils.toastMsg('请输入手机号码', 'center');
                    return false
                }
                if (!formData.phone.match(/^1\d{10}$/gi)) {
                    me.utils.toastMsg('手机号码格式错误', 'center');
                    return false
                }

                //todo: ajax
                _down();
                function _down() {
                    smsHandle.status = '1'; //开始计时
                    smsHandle.text = smsHandle.time;
                    let timer = setInterval(function () {
                        smsHandle.text -= 1;
                        if (smsHandle.text === 0) {
                            clearInterval(timer);
                            smsHandle.status = '-1';
                            smsHandle.text = '重新发送'
                        }
                    }, 1000)
                }
            }
        },
        components: {
            ComAnimateTab,
            ComTabItem
        }
    }
</script>
<style lang='scss' scoped rel='stylesheet/scss'>
    @import "../../assets/scss/modules/mixin";
    @import "../../assets/scss/modules/var";
    
    .login {
        width: 100%;
        height: 100%;
        background: url("./images/bg.png");
        background-size: 100% 100%;
        padding-top: 78px;
        padding-bottom: 120px;
    }
    
    .logo {
        width: 373px;
        height: 278px;
        margin: 0 auto;
        background: url("./images/logo.png") -20px 0 no-repeat;
        background-size: 100% 100%;
        
    }
    
    .login-box {
        .tab-text {
            font-size: 30px;
            color: #666666;
        }
        .form-wrap {
            position: relative;
            width: 600px;
            margin: 0 auto;
            padding-bottom: 80px;
            .form-row {
                border-bottom: 1px solid $cl-border;
                height: 88px;
                padding: 0 10px;
                display: flex;
                align-items: center;
                
                margin-top: 18px;
                .icon-phone-user, .icon-lock, .icon-safe {
                    margin-right: 30px;
                }
                
                .get-sms {
                    font-size: 28px;
                    color: #00ACFF;
                    cursor: pointer;
                }
                input {
                    font-size: 28px;
                    line-height: 1;
                    flex: 1;
                }
            }
            .iconfont {
                color: #cccccc;
                font-size: 36px;
                &.icon-eye {
                    width: 40px;
                    font-size: 28px;
                    cursor: pointer;
                }
                &.icon-eye-1 {
                    width: 40px;
                    font-size: 34px;
                    cursor: pointer;
                }
                & + .iconfont {
                    margin-left: 20px;
                }
                &.icon-delete-round {
                    font-size: 28px;
                    cursor: pointer;
                }
                
            }
            .tip {
                cursor: pointer;
                position: absolute;
                bottom: 26px;
                right: 0;
                font-size: 28px;
                color: $cl-font-blue;
            }
        }
        .commit {
            width: 600px;
            margin: 0 auto;
            .btn {
                height: 88px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 30px;
                color: white;
                border-radius: 100px;
                overflow: hidden;
                background: linear-gradient(to right, #FEDE5B, #F0601B);
            }
            .tip {
                margin-top: 20px;
                text-align: center;
                color: #FF4300;
            }
        }
    }
    
    .footer {
        position: absolute;
        bottom: 40px;
        width: 100%;
        text-align: center;
        color: #cccccc;
        a {
            color: $cl-font-blue;
        }
    }
    
    .loading {
        p {
            &:nth-child(1) {
                font-size: 30px;
                color: white;
                margin-bottom: 30px;
            }
            &:nth-child(2) {
                font-size: 28px;
                color: white;
                margin-bottom: 30px;
            }
        }
    }
</style>
<style ref="stylesheet/scss" lang="scss">
    .login {
        .tab-item {
            &.active {
                .tab-text {
                    color: #FF4D00;
                }
            }
        }
    }
</style>
