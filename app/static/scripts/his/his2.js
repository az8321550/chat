angular.module('hisApp', []).controller('HisCtrl', function ($http, $scope, $filter, $log) {
    function getUrlParam(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
        var r = decodeURI(window.location.search).substr(1).match(reg);
        if (r !== null) {
            return window.unescape(r[2]);
        }
        return null;
    }

    var url = getUrlParam('_');
    var width = $('body').width() - 24;
    dialog({
        cancelValue: 'X',
        cancel: function () {
            return false;
        },
        title: '开奖历史',
        width: width,
        height: 4000,
        url: url
        // url: 'http://trend.168kai.com/1002/5x_jb.aspx?gy=10011'
    }).show();
    // setInterval(function() {
    //   var iObj = document.getElementById('iId').contentWindow;
    //   $('.logoWLeft',iObj).remove();
    // }, 100);

});