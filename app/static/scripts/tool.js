// 格式化秒数到时间格式
Number.prototype.formatTime = function () {
    // 计算
    var h = 0,
        i = 0,
        s = parseInt(this);
    if (s > 60) {
        i = parseInt(s / 60);
        s = parseInt(s % 60);
        if (i > 60) {
            h = parseInt(i / 60);
            i = parseInt(i % 60);
        }
    }
    // 补零
    var zero = function (v) {
        return (v >> 0) < 10 ? '0' + v : v;
    };
    return [zero(h), zero(i), zero(s)].join(':');
};
String.prototype.endsWith = function (suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};
window.prezero = function (v) {
    return (v >> 0) < 10 ? '0' + v : v;
};
window.getUrlParam = function (name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
    var r = decodeURI(window.location.search || window.location.hash).substr(1).match(reg);
    if (r !== null) {
        return window.unescape(r[2]);
    }
    return null;
}

function msieversion() {

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) // If Internet Explorer, return version number
    {
        // alert(parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
        return true;
    } else { // If another browser, return 0
        // alert('otherbrowser');
        return false;
    }
    return false;
}