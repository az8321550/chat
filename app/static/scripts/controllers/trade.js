angular.module('newpApp').controller('TradeCtrl', function ($scope, $rootScope, $http, $routeParams, $log) {
    var dialog = window.dialog;
    $rootScope.nav = 'asset';
    $scope.tab = $routeParams.type;
    if ($routeParams.type === 'withdraw') {
        $http.get('/lobby/app/kirinResource/personal/personalInfo').success(function (r) {
            if (r.status === '1') {
                $scope.baseinfo = r.data;
                if ($scope.baseinfo.freezeType === 3 || $scope.baseinfo.freezeType === 2) {
                    alert('您不能提款，请联系客服');
                    return false;
                }
            }
        }).error(function () {
        });
        $http.get('/lobby/app/kirinResource/funds/getUserBindingBankCard').success(function (r) {
            $scope.cards = r.data;
            if (!r.data || r.data.length === 0) {
                dialog({
                    title: '温馨提示',
                    content: '您必须先绑定银行卡才能提现。',
                    cancelValue: '关闭',
                    cancel: function () {
                        return false;
                    },
                    okValue: '去绑定银行卡',
                    ok: function () {
                        window.location.href = "#/card";
                    }
                }).showModal();
                return false;
            }
        });
        $http.get('/lobby/app/kirinResource/globleResource/sysConfig').success(function (r) {
            $scope.minAmount = r.data[1];
            $scope.maxAmount = r.data[2];
        });
        $scope.selectCard = function (card) {
            if (!card.valided) {
                // dialog({
                //   title: '温馨提示',
                //   content: '您的银行卡尚未激活'
                // }).showModal();
                //return false;
            }
            $scope.selectedCard = card;
        }

    }

    $scope.deposit = function () {
        var amount = $scope.damount * 1
        if (!angular.isNumber(amount) || isNaN(amount)) {
            alert('输入正确的充值金额');
            return false;
        }
        if ($scope.damount < 10 || $scope.damount > 100000) {
            alert('请输入10元到10万元之间的金额');
            return false;
        }
        if (!$scope.bankcode) {
            alert('请选择银行');
            return false;
        }
        $('#depisitForm').empty();
        var form = $('#depisitForm')[0];
        form.action = '/recharge.html';
        form.target = '_blank';
        form.method = 'get';
        var orderMoney = document.createElement('input'); //email input
        orderMoney.setAttribute('name', 'OrderMoney');
        orderMoney.setAttribute('value', parseFloat($scope.damount).toFixed(2));
        form.appendChild(orderMoney);
        var party = document.createElement('input'); //email input
        party.setAttribute('name', 'party');
        party.setAttribute('value', 'tonghui');
        form.appendChild(party);
        var bank = document.createElement('input'); //email input
        bank.setAttribute('name', 'bank');
        bank.setAttribute('value', $scope.bankcode);
        form.appendChild(bank);
        form.submit();
    };

    $scope.minAmount = 100;
    $scope.maxAmount = 100000;


    $scope.apply = function () {

        var m = moment();
        if (m.get('hour') > 2 && m.get('hour') < 9) {
            dialog({
                title: '温馨提示',
                content: '客服已经休息，凌晨2点之后，早上9点之前暂不受理提款申请。<br>请您早点休息，注意身体O(∩_∩)O~'
            }).showModal();
            return false;
        }
        if ($scope.baseinfo.freezeType === 3 || $scope.baseinfo.freezeType === 2) {
            alert('您不能提款，请联系客服');
            return false;
        }
        if (!$scope.selectedCard) {
            dialog({
                title: '温馨提示',
                content: '请选择一张银行卡'
            }).showModal();
            return false;
        }
        var amountD = dialog({
            content: '金额不能为空',
            quickClose: true,
            align: 'right'
        });
        if (!$scope.amount) {
            amountD.showModal($('#J-amount')[0]);
            return false;
        }
        if (!angular.isNumber($scope.amount * 1) || isNaN($scope.amount * 1) || ($scope.amount * 1 < $scope.minAmount * 1) || ($scope.amount * 1 > $scope.maxAmount * 1)) {
            amountD.content('金额不合法').showModal($('#J-amount')[0]);
            return false;
        }
        var pwdD = dialog({
            content: '资金密码不能为空',
            quickClose: true,
            align: 'right'
        });
        if (!$scope.paypwd) {
            pwdD.showModal($('#J-spassword')[0]);
            return false;
        }
        if (window.applying) {
            return false;
        }
        window.applying = true;
        $http({
            method: 'POST',
            url: '/lobby/app/kirinResource/funds/withdrawalAmountAction',
            data: {
                accountName: $scope.selectedCard.carHolder,
                bankCode: $scope.selectedCard.bankCode,
                bankData: $scope.selectedCard.cardId,
                bankName: $scope.selectedCard.bankName,
                bankNumber: $scope.selectedCard.cardNum,
                cardId: $scope.selectedCard.cardId,
                paymentPassword: $scope.paypwd,
                withdrawalAmount: $scope.amount
            }
        }).success(function (r) {
            window.applying = false;
            if (r.status === 'error') {
                dialog({
                    title: '温馨提示',
                    content: r.message,
                    ok: function () { //点击完成执行的操作
                        window.location = window.location;
                    },
                    cancel: false,
                    okValue: '好的'
                }).showModal();
            } else {
                dialog({
                    title: '处理成功',
                    content: '您的提现正在处理中，请稍后查询状态。',
                    ok: function () { //点击完成执行的操作
                        window.location = window.location;
                    },
                    cancel: false,
                    okValue: '好的'
                }).showModal();
            }

        }).error(function () {
            window.applying = false;
        });

    };
    $scope.his = function () {
        $http.get('/lobby/app/kirinResource/funds/withdrawhis?items_per_page=10000&page_index=0').success(function (r) {
            $scope.hiss = r.data;
        });
    }
    $scope.transfer = function () {
        if (!$scope.fromChannel || !$scope.toChannel) {
            dialog({
                title: '温馨提示',
                content: '请选择频道'
            }).showModal();
            return false;
        }
        if (!($scope.tamount > 0 && $scope.tamount * 1 == $scope.tamount && ($scope.tamount * 1).toFixed(0) == $scope.tamount)) {
            dialog({
                title: '温馨提示',
                content: '请输入金额，不能输入负数和小数'
            }).showModal();
            return false;
        }
        window.transferD = dialog({
            width: 200,
            title: '温馨提示',
            content: '转账中请稍后',
            cancel: function () {
                return false;
            },
            cancelValue: 'X'
        }).showModal();
        $http.post('/lobby/app/kirinResource/funds/accountTransfor?t=' + Math.random(), {
            from: $scope.fromChannel,
            to: $scope.toChannel,
            amount: $scope.tamount,
            pwd: $scope.paypwd
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).success(function (r) {
            if (r.status === '1') {
                window.transferD.close().remove();
                dialog({
                    width: 200,
                    title: '温馨提示',
                    content: '转账成功!',
                    quickClose: true
                }).showModal();
                $rootScope.shua();
                $scope.getAgBalance();
            } else {
                window.transferD.close().remove();
                dialog({
                    title: '温馨提示',
                    content: r.message
                }).showModal();
            }
        }).error(function (r) {
            window.transferD.close().remove();
            dialog({
                title: '温馨提示',
                content: '转账失败，请确认您的输入，或者联系客服人员。'
            }).showModal();
        });
    };
    $scope.getAgBalance = function () {
        $http.get('/lobby/app/kirinResource/funds/getAgBalance').success(function (r) {
            if ($rootScope.d.mnys && $rootScope.d.mnys >= 3) {
                $rootScope.d.mnys[2].balance = r.data;
            } else {
                $rootScope.d.mnys.push({
                    balance: r.data
                });
            }
        });
    };
    $scope.getAgBalance();
});