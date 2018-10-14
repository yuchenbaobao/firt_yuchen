/**
 * Created by zhengxinshuo on 2018/8/22.
 */
import Vue from 'vue'

Vue.prototype.initPageHeight = function (boolean, el) {
    const me = this;
    let {$el} = me;
    $el = el || $el;     //el 可以手动传进来
    let H = document.documentElement.clientHeight;
    if (boolean) {
        $el.style.height = H + 'px';
    } else {
        $el.style.minHeight = H + 'px';
    }
};

/**
 * 有些布局需要将滚动条放在页面内部，fixed 本身 或者 scrolling 都存在bug
 *
 * */
Vue.prototype.initLayoutScroll = function () {
    const me = this;
    let {$el} = me,
        H = document.documentElement.clientHeight,
        $elScroll = $el.querySelector('.layout-scroll');

    $el.style.height = H + 'px';
};


/**
 * 页面滚动到顶
 * @param {Boolean/null} boolean
 * */
Vue.prototype.toTop = function (boolean) {
    const me = this;
    let d = document;

    if (boolean) {

    } else {
        d.documentElement.scrollTop = 0;
    }
}