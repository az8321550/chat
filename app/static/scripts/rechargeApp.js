var rechargeModule = angular
    .module('rechargeApp', []);

rechargeModule.controller('RechargeCtrl', function ($scope, $location, $http, $timeout, $interval, $log) {
    function getUrlParam(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
        var r = decodeURI(window.location.search).substr(1).match(reg);
        if (r !== null) {
            return window.unescape(r[2]);
        }
        return null;
    }

    var OrderMoney = getUrlParam('OrderMoney');
    var bank = getUrlParam('bank');
    var party = getUrlParam('party');
    $scope.submit = function () {
        window.postForm.submit();
    }
    if (party === 'tonghui') {

        $http.get('/lobby/app/kirinResource/pay/tonghui?OrderMoney=' + OrderMoney + '&TransID=' + Math.random() + '&bankcode=' + bank).success(function (r) {
            $log.log(r);
            $scope.data = r.data;
            window.postForm = $('form')[0]; //表单对象
            window.postForm.action = 'https://pay.41.cn/gateway';
            angular.forEach(r.data, function (val, key) {
                var eachInput = document.createElement('input'); //email input
                eachInput.setAttribute('name', key);
                eachInput.setAttribute('value', val);
                window.postForm.appendChild(eachInput);
                if (key === 'TransID') {
                    //alert(val);
                }
            });
            var q = '?';
            angular.forEach(r.data, function (val, key) {
                q += key + '=' + val + '&';
            });
            $scope.q = q;
            // window.location=window.postForm.action+q;
            //document.body.appendChild(window.postForm);

            window.postForm.submit();
        });
    }
    if (party === 'baofoo') {

        $http.get('/lobby/app/kirinResource/pay/baofoo?OrderMoney=' + OrderMoney + '&TransID=' + Math.random()).success(function (r) {
            $log.log(r);
            $scope.data = r.data;
            window.postForm = $('form')[0]; //表单对象
            window.postForm.action = 'https://gw.baofoo.com/payindex';
            angular.forEach(r.data, function (val, key) {
                var eachInput = document.createElement('input'); //email input
                eachInput.setAttribute('name', key);
                eachInput.setAttribute('value', val);
                window.postForm.appendChild(eachInput);
                if (key === 'TransID') {
                    //alert(val);
                }
            });
            document.body.appendChild(window.postForm);

            window.postForm.submit();
        });
    }

    if (party === 'huanxun') {

        $http.get('/lobby/app/kirinResource/pay/huanxun?OrderMoney=' + OrderMoney).success(function (r) {
            $log.log(r);
            $scope.data = r.data;
            var q = '?';
            angular.forEach(r.data, function (val, key) {
                q += key + '=' + val + '&';
            });

            // window.location="http://pay.322qqkz.cn/recharge2.html"+q;
            window.location = "http://pay.33kkzzm.cn/recharge2.html" + q;
            // window.location="http://pay.22kp2.cn/recharge2.html"+q;
        });
    }

});