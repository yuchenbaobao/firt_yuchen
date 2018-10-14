/**
 * Created By zhengxinshuo on 2018/1/18
 *
 * 公共的工具方法
 *
 */

import {Toast} from 'mint-ui'
let utils = {
    /**
     * 保存数据在sessionStorage，以键值对存在
     * @param {String} name  键名
     * @param {String/Object/Array/...} value 键值
     *
     */
    setSessionStorage: function (name, value) {
        const me = this;
        if (!this.isSupportStorage())
            return null;

        let list = [],
            obj = {},
            objName = '';
        if (name.indexOf('.') > -1) {
            list = name.split('.');
            objName = list.shift();
            obj = me.getLocalStorage(objName);
            obj = me.isObject(obj) ? obj : {}; // 强制转换为对象
            _turn(obj, list, value);
            value = JSON.stringify(obj);
            sessionStorage.setItem(objName, value);
        }
        else {
            if (this.isObject(value)) {
                value = JSON.stringify(value);
            }
            sessionStorage.setItem(name, value);
        }

        function _turn(obj, list, value) {
            let name = '';
            if (list.length > 1) {
                name = list.shift();
                obj[name] = me.isObject(obj[name]) ? obj[name] : {};
                _turn(obj[name], list, value)
            } else {
                name = list[0];
                obj[name] = value;
            }
        }
    },

    /**
     * 获取sessionStorage数据
     * @param {String} name 键名
     * @return {String/Object/...} 键值
     *
     */
    getSessionStorage: function (name) {
        if (!this.isSupportStorage())
            return null;
        let value = sessionStorage.getItem(name);
        if (this.isJSON(value)) {
            return JSON.parse(value);
        } else {
            return value;
        }
    },

    getUserDataFromOld: function (name) {
        let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

        if (arr = document.cookie.match(reg)) {
            return decodeURI(this.decrypt(unescape(arr[2]), name));
        }
        else {
            return null;
        }
    },


    /**
     * 保存数据在localStorage，以键值对存在
     * @param {String} name  键名
     * @param {String/Object/Array/...} value 键值
     *
     */
    setLocalStorage: function (name, value) {
        const me = this;
        if (!this.isSupportStorage())
            return null;

        let list = [],
            obj = {},
            objName = '';
        if (name.indexOf('.') > -1) {
            list = name.split('.');
            objName = list.shift();
            obj = me.getLocalStorage(objName);
            obj = me.isObject(obj) ? obj : {}; // 强制转换为对象
            _turn(obj, list, value);
            value = JSON.stringify(obj);
            localStorage.setItem(objName, value);
        }
        else {
            if (this.isObject(value)) {
                value = JSON.stringify(value);
            }
            localStorage.setItem(name, value);
        }

        function _turn(obj, list, value) {
            let name = '';
            if (list.length > 1) {
                name = list.shift();
                obj[name] = me.isObject(obj[name]) ? obj[name] : {};
                _turn(obj[name], list, value)
            } else {
                name = list[0];
                obj[name] = value;
            }
        }
    },

    /**
     * 获取localStorage数据
     * @param {String} name 键名
     * @return {String/Object/...} 键值
     *
     */
    getLocalStorage: function (name) {
        if (!this.isSupportStorage())
            return null;
        let value = localStorage.getItem(name);
        if (this.isJSON(value)) {
            return JSON.parse(value);
        } else {
            return value;
        }
    },

    /**
     * 判断字符串是否为JSON
     * @param  {String}  str json字符串
     * @return {Boolean}     true/false
     */
    isJSON: function (str) {
        try {
            JSON.parse(str);
            return true;
        } catch (e) {
            return false;
        }
    },

    /**
     * 判断是否支持sessionStorage和localStorage
     * @return {Boolean} true/false
     *
     */
    isSupportStorage: function () {
        if (window.sessionStorage && window.localStorage)
            return true;
        else
            return false;
    },

    /**
     * 判断是否为object对象，排除null
     * @param  {obj}  value 判断的对像
     * @return {Boolean} true/false
     *
     */
    isObject: function (value) {
        return (value !== null && typeof value === 'object');
    },

    /**
     * 判断是否为整数
     * @param  {Number}  int 判断的数字
     * @return {Boolean}     true/false
     */
    isInteger: function (int) {
        let n = Number(int);
        return typeof n === 'number' && n % 1 === 0
    },

    /**
     * 获取url地址参数
     * @param  {String} name 参数名
     * @param  {String} str  原字符窜
     * @return {String}      参数值
     *
     */
    getQueryString: function (name, str) {
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        let _str = str || window.location.search.substr(1);
        let r = _str.match(reg);
        let context = "";
        if (r != null)
            context = r[2];
        reg = null;
        r = null;
        return context == null || context == "" || context == "undefined" ? "" : context;
    },

    //**dataURL to blob**
    dataURLtoBlob(dataurl) {
        let arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1], bstr = atob(arr[1]), n = bstr.length,
            u8arr = new Uint8Array(
                n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], {
            type: mime
        });
    },

    toastMsg(str, position,duration){
        Toast({
            message: str || '',
            duration: duration || 2000,
            position: position || 'bottom'
        })
    },
    addClass(elements, cName){
        if (!(this.hasClass(elements, cName))) {
            elements.className += " " + cName;
        }

    },
    removeClass(elements, cName){
        if (this.hasClass(elements, cName)) {
            elements.className = elements.className.replace(new RegExp("(\\s|^)" + cName + "(\\s|$)"), " ");
        }
    },
    hasClass(elements, cName){
        return !!elements.className.match(new RegExp("(\\s|^)" + cName + "(\\s|$)"));
    }
};

export default utils;
