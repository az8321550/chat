angular.module('newpApp').controller('PreferCtrl', function ($scope, $rootScope, $http, $routeParams, $timeout) {
    $rootScope.nav = 'prefer';
    $scope.tab = $routeParams.type;
    $scope.state = function (s) {
        $scope.status = s;
        $timeout(function () {
            $scope.status = 'normal';
        }, 1000)
    }
    $scope.modiPwd = function () {
        $http.post('/lobby/app/kirinResource/personal/updatePassword', {
            newpass: $scope.password,
            newpass2: $scope.password2,
            oldpass: $scope.oldpwd
        }).success(function (r) {
            if (r.status === '1') {
                $scope.state('ok_pwd');
                dialog({
                    title: '温馨提示',
                    content: '登录密码修改成功'
                }).showModal();

            } else {
                $scope.state('err_pwd');
                $scope.msg_pwd = r.message;
            }
        });
    };
    $scope.modiPayPwd = function () {
        $http.post('/lobby/app/kirinResource/personal/updatePayPassword', {
            newpass: $scope.paypwd,
            newpass2: $scope.paypwd2,
            oldpass: $scope.oldpaypwd
        }).success(function (r) {
            if (r.status === '1') {
                $scope.state('ok_paypwd');
                dialog({
                    title: '温馨提示',
                    content: '资金密码修改成功',
                    quickClose: true
                }).showModal();
                $timeout(function () {

                    $scope.modi_paypwd = false;
                }, 1000);
            } else {
                $scope.state('err_paypwd');
                $scope.msg_paypwd = r.message;
            }
        });
    };
    $scope.saveAsk = function () {
        if ($scope.answer1 === undefined || $scope.answer2 === undefined || $scope.answer3 === undefined) {
            dialog({
                title: '温馨提示',
                content: '三个安全问题必须填写'
            }).showModal();
            return false;
        }
        if ($scope.ask1 === $scope.ask2 || $scope.ask1 === $scope.ask3 || $scope.ask2 === $scope.ask3) {
            dialog({
                title: '温馨提示',
                content: '请选择三个不同的问题'
            }).showModal();
            return false;
        }
        $http.get('/lobby/app/kirinResource/personal/addSecureAsk', {
            params: {
                id1: $scope.ask1.value,
                askTitle1: $scope.ask1.text,
                answer1: $scope.answer1,
                id2: $scope.ask2.value,
                askTitle2: $scope.ask2.text,
                answer2: $scope.answer2,
                id3: $scope.ask3.value,
                askTitle3: $scope.ask3.text,
                answer3: $scope.answer3
            }
        }).success(function (r) {
            dialog({
                title: '温馨提示',
                content: '安全问题修改成功！请牢记答案，可以用来找回密码'
            }).showModal();
            if (r.status === '1') {
                $scope.state('ok_ask');
                $timeout(function () {
                    $scope.modi_ask = false;
                }, 1000);
            } else {
                $scope.state('err_ask');
                $scope.msg_ask = r.message;
            }
        });
    };
    $scope.showFindPayPwd = function () {
        // if(!$scope.findpwdD){
        $scope.findpwdD = dialog({
            content: '请联系客服协助帮您找回资金密码',
            quickClose: 'true'
        });
        // }
        $scope.findpwdD.show($('#find_paypwd')[0]);
    };
    $http.get('/lobby/resource/secureAsk.json').success(function (r) {
        $scope.asks = r;
        $scope.ask1 = $scope.asks[0];
        $scope.ask2 = $scope.asks[1];
        $scope.ask3 = $scope.asks[2];
    });
    $scope.sendMobile = function () {
        if ($scope.mobile === undefined) {
            return false;
        }
        $http.get('/lobby/app/kirinResource/personal/findpwdgetcode', {
            params: {
                userName: userInfo.userName,
                type: 'mobile',
                dest: $scope.mobile
            }
        }).success(function (r) {
            if (r.status === '1') {
                $scope.state('ok_codemobile');

                dialog({
                    content: '请输入您手机收到的验证码',
                    quickClose: true,
                    align: 'right'
                }).show($('#vcode')[0]);
                $('#vcode').focus();
            } else {
                $scope.state('err_codemobile');
                $scope.msg_codemobile = r.message;
            }
        });

    };
    $scope.bindMobile = function () {
        if ($scope.mobile === undefined) {
            return false;
        }
        $http.get('/lobby/app/kirinResource/personal/findpwdvalid', {
            params: {
                userName: userInfo.userName,
                code: $scope.vcode,
            }
        }).success(function (r) {
            if (r.data) {
                $http.get('/lobby/app/kirinResource/personal/bindMobile', {
                    params: {
                        userName: userInfo.userName,
                        mobile: $scope.mobile,
                        vcode: $scope.vcode,
                    }
                }).success(function (r) {
                    if (r.data) {
                        $scope.state('ok_mobile');
                        $rootScope.userInfo.trueMobile = 1;
                        $timeout(function () {
                            $scope.modi_mobile = false;
                        }, 1000);
                    } else {
                        $scope.state('err_mobile');
                        $scope.msg_mobile = r.message;
                    }
                });
            } else {
                dialog({
                    content: '校验码错误',
                    quickClose: true,
                    align: 'right'
                }).show($('#vcode')[0]);
                $('#vcode').focus();
            }
        }).error(function () {
            dialog({
                content: '校验码错误',
                quickClose: true,
                align: 'right'
            }).show($('#vcode')[0]);
            $('#vcode').focus();
        });
    };
    $scope.sendMail = function () {
        if ($scope.mail === undefined) {
            return false;
        }
        $http.get('/lobby/app/kirinResource/personal/findpwdgetcode', {
            params: {
                userName: userInfo.userName,
                type: 'email',
                dest: $scope.mail
            }
        }).success(function (r) {
            if (r.status === '1') {
                $scope.state('ok_codemail');

                dialog({
                    content: '请输入您邮箱收到的验证码',
                    quickClose: true,
                    align: 'right'
                }).show($('#mail_vcode')[0]);
                $('#mail_vcode').focus();
            } else {
                $scope.state('err_codemail');
                $scope.msg_codeMail = r.message;
            }
        });

    };
    $scope.bindMail = function () {
        if ($scope.mail === undefined) {
            return false;
        }
        $http.get('/lobby/app/kirinResource/personal/findpwdvalid', {
            params: {
                userName: userInfo.userName,
                code: $scope.mail_vcode,
            }
        }).success(function (r) {
            if (r.data) {
                $http.get('/lobby/app/kirinResource/personal/bindEmail', {
                    params: {
                        userName: userInfo.userName,
                        email: $scope.mail,
                        vcode: $scope.mail_vcode,
                    }
                }).success(function (r) {
                    if (r.data) {
                        $scope.state('ok_mail');
                        $rootScope.userInfo.validedEmail = 1;
                        $timeout(function () {
                            $scope.modi_Mail = false;
                        }, 1000);
                    } else {
                        $scope.state('err_mail');
                        $scope.msg_Mail = r.message;
                    }
                }).error(function () {
                    $scope.state('err_mail');
                    $scope.msg_mail = '绑定失败。';
                });
            } else {
                dialog({
                    content: '校验码错误',
                    quickClose: true,
                    align: 'right'
                }).show($('#mail_vcode')[0]);
                $('#mail_vcode').focus();
            }
        }).error(function () {
            dialog({
                content: '校验码错误',
                quickClose: true,
                align: 'right'
            }).show($('#mail_vcode')[0]);
            $('#mail_vcode').focus();
        });
    };
});