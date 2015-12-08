'use strict';
angular.module('newpApp')
    .controller('CardCtrl', function($scope, $rootScope, $location, $http, $timeout, $interval, $compile) {
        $rootScope.nav = 'prefer';
        $scope.tab = 'card';
        $http.get('/lobby/app/kirinResource/personal/getPayPassword').success(function(r) {
            if (r.status === '1' && r.data.pwd === '') {
                dialog({
                    content: '您需要先设定资金密码！',
                    title: '安全提示',
                    ok: function() {
                        if ($scope.vpwdDialog) {
                            $scope.vpwdDialog.close().remove();
                        }
                        if (window.parent.aDialog) {
                            window.parent.location = "#/prefer/pass";
                            window.parent.aDialog.close().remove();
                        } else {
                            window.location = "#/prefer/pass";
                        }
                    }
                }).showModal();
                window.location = "#/prefer/pass";
            }
        });
        $scope.CardsThrough = function() {
            $scope.through = true;
            $http.get('/lobby/app/kirinResource/funds/getUserBindingBankCard').success(function(r) {
                $scope.cards = r.data || [];
            });
            $http.get('/lobby/app/kirinResource/funds/getSysBankInfo').success(function(r) {
                $scope.banks = r.data;
            });
            $http.get('/lobby/app/kirinResource/funds/cardlock').success(function(r) {
                $scope.lock = r.data;
            });
        };
        $scope.validate = function() {
            if (!$rootScope.vedPayPwd) {
                $scope.vpwdDialog = dialog({
                    width: 400,
                    title: '资金密码验证',
                    content: $compile('<form ng-submit="paypwdOK()"><label>请输入资金密码：</label><input value="" autofocus ng-model="ving_paypwd" id="ving_paypwd" name="资金密码" class="input_1" autocomplete="off" required type="password" minlength = "6" maxlength = "20" /><p>累计错误三次将被冻结交易，需要联系客服解除。</p></form>')($scope),
                    okValue: '确认',
                    cancelValue: '取消',
                    cancel: function() {
                        window.history.go(-1);
                    },
                    ok: function() {
                        this.title('认证中....');
                        var paypwd = $scope.ving_paypwd;
                        if(!paypwd){
                          alert('请输入资金密码');
                          return false;
                        }
                        $http.get('/lobby/app/kirinResource/personal/checkPayPassword?paypwd=' + paypwd).success(function(r) {
                            if (r.status === '1') {
                                $scope.CardsThrough();
                                $rootScope.vedPayPwd = true;
                                $scope.vpwdDialog.close().remove();
                            } else {
                                alert(r.message);
                                $scope.ving_paypwd='';
                                setTimeout(function() {
                                    $scope.validate();
                                }, 1);
                            }
                        }).error(function(r) {});
                    }
                }).showModal();
            } else {
                $scope.CardsThrough();
            }
        };
        $scope.validate();
        $scope.paypwdOK = function() {
            if ($scope.vpwdDialog) {
                $scope.vpwdDialog.ok();

            }
        }

        $scope.master = {};
        $scope.reset = function() {
            $scope.addingCard = angular.copy($scope.master);
        };
        $scope.reset();

        function CardCheck(bankno) {
            var lastNum = bankno.substr(bankno.length - 1, 1); //取出最后一位（与luhm进行比较）

            var first15Num = bankno.substr(0, bankno.length - 1); //前15或18位
            var newArr = new Array();
            for (var i = first15Num.length - 1; i > -1; i--) { //前15或18位倒序存进数组
                newArr.push(first15Num.substr(i, 1));
            }
            var arrJiShu = new Array(); //奇数位*2的积 <9
            var arrJiShu2 = new Array(); //奇数位*2的积 >9

            var arrOuShu = new Array(); //偶数位数组
            for (var j = 0; j < newArr.length; j++) {
                if ((j + 1) % 2 == 1) { //奇数位
                    if (parseInt(newArr[j]) * 2 < 9)
                        arrJiShu.push(parseInt(newArr[j]) * 2);
                    else
                        arrJiShu2.push(parseInt(newArr[j]) * 2);
                } else //偶数位
                    arrOuShu.push(newArr[j]);
            }

            var jishu_child1 = new Array(); //奇数位*2 >9 的分割之后的数组个位数
            var jishu_child2 = new Array(); //奇数位*2 >9 的分割之后的数组十位数
            for (var h = 0; h < arrJiShu2.length; h++) {
                jishu_child1.push(parseInt(arrJiShu2[h]) % 10);
                jishu_child2.push(parseInt(arrJiShu2[h]) / 10);
            }

            var sumJiShu = 0; //奇数位*2 < 9 的数组之和
            var sumOuShu = 0; //偶数位数组之和
            var sumJiShuChild1 = 0; //奇数位*2 >9 的分割之后的数组个位数之和
            var sumJiShuChild2 = 0; //奇数位*2 >9 的分割之后的数组十位数之和
            var sumTotal = 0;
            for (var m = 0; m < arrJiShu.length; m++) {
                sumJiShu = sumJiShu + parseInt(arrJiShu[m]);
            }

            for (var n = 0; n < arrOuShu.length; n++) {
                sumOuShu = sumOuShu + parseInt(arrOuShu[n]);
            }

            for (var p = 0; p < jishu_child1.length; p++) {
                sumJiShuChild1 = sumJiShuChild1 + parseInt(jishu_child1[p]);
                sumJiShuChild2 = sumJiShuChild2 + parseInt(jishu_child2[p]);
            }
            //计算总和
            sumTotal = parseInt(sumJiShu) + parseInt(sumOuShu) + parseInt(sumJiShuChild1) + parseInt(sumJiShuChild2);

            //计算Luhm值
            var k = parseInt(sumTotal) % 10 == 0 ? 10 : parseInt(sumTotal) % 10;
            var luhm = 10 - k;

            if (lastNum == luhm) {
                return true;
            } else {
                return false;
            }
        }
        $scope.addCard = function() {
            if (CardCheck($scope.addingCard.Num)) {
                if ($scope.addingCard.Bank) {
                    if ($scope.addingCard.Account) {
                        if ($scope.addingCard.Branch) {
                            var pass = true;
                        } else {
                            dialog({
                                content: '请输入支行信息',
                                quickClose: true
                            }).show($('#card-branch')[0]);
                        }
                    } else {
                        dialog({
                            content: '请输入开户人姓名',
                            quickClose: true
                        }).show($('#account-name')[0]);
                    }
                } else {
                    dialog({
                        content: '请选择银行',
                        quickClose: true
                    }).show($('#banks')[0]);
                }
            } else {
                dialog({
                    content: '请输入有效的银行卡',
                    quickClose: true
                }).show($('#card-number')[0]);
            }
            var sameName = true;
            $.each($scope.cards, function(i, n) {
                if ($scope.addingCard.Account !== n.cardHolder) {
                    sameName = false;
                }
            });
            if (!sameName) {
                dialog({
                    content: '不可以绑定不同开户人的银行卡',
                    title: '温馨提示'
                }).showModal();
                return false;
            }
            if (pass) {
                $http.post('/lobby/app/kirinResource/funds/addBankCard', {
                    bankCard: $scope.addingCard.Num,
                    bankCode: $scope.addingCard.Bank.sysBankCode,
                    bankName: $scope.addingCard.Bank.sysBankName,
                    branchInfo: $scope.addingCard.Branch,
                    cardHolder: $scope.addingCard.Account,
                    city: "",
                    district: "",
                    province: ""
                }).success(function(r) {
                    if (r.status === 'k') {
                        $scope.CardsThrough();
                        $rootScope.state('ok_card');
                        $scope.reset();
                    } else {
                        dialog({
                            title: '温馨提示',
                            content: r.message
                        }).showModal();
                    }
                });
            }
        };
        $scope.cardTips = function(card) {
            dialog({
                content: '我们给您的这张卡上转了一笔小于一元的金额，请用此金额验证。',
                quickClose: true
            }).show($('#card' + card.cardId)[0]);
            $('#card' + card.cardId).focus();
        }
        $scope.aliveCard = function(card) {
            $http.get('/lobby/app/kirinResource/funds/validcard?cardid=' + card.cardId + '&validamount=' + card.vAmount).success(function(r) {
                if (r.status === 'error') {
                    dialog({
                        title: '温馨提示',
                        content: '验证失败，请填写系统汇入此卡的金额'
                    }).show($('#card' + card.cardId)[0]);
                    $('#card' + card.cardId).focus();
                } else {
                    $scope.CardsThrough();
                }
            });
        };
        $scope.deleteCard = function(card) {
            $http.post('/lobby/app/kirinResource/funds/removeCard', {
                cardId: card.cardId
            }).success(function(r) {
                if (r.status === '1') {
                    dialog({
                        title: '消息',
                        content: '您的申请已经提交'
                    }).showModal();
                    $scope.CardsThrough();
                } else {
                    dialog({
                        title: '温馨提示',
                        content: r.message
                    }).showModal();
                }
            });
        };
        $scope.lockAction = function() {
            if ($scope.lock == 0) {
                dialog({
                    quickClose: true,
                    content: '您不能自己解锁，请联系客服。'
                }).show($('#card_lock')[0]);

                return false;
            }
            dialog({
                title: '确认',
                content: '您选择锁定之后,本人将不能解锁。需要联系客服人员为您解锁,是否继续?',
                okValue: '继续',
                ok: function() {
                    $http.get('/lobby/app/kirinResource/funds/cardlock?action=lock').success(function(r) {
                        $scope.CardsThrough();
                    })
                }
            }).showModal();
        }
    });