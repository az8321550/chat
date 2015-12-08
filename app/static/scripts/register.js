var rechargeModule = angular.module('register', []);

rechargeModule.controller('RegisterCtrl', function ($scope, $location, $http, $timeout, $interval, $log) {
    var hash = getUrlParam('_');
    $scope.register = function () {
        if (!($scope.username && /^[A-Za-z0-9]{6,20}$/.test($scope.username))) {
            dialog({
                title: '温馨提示',
                content: '请输入6到20位用户名，只能包含字母和数字'
            }).showModal();
            return false;
        }
        if (!$scope.password || !$scope.password2) {
            dialog({
                title: '温馨提示',
                content: '密码不能为空'
            }).showModal();
            return false;
        }
        if (!$scope.password || $scope.password !== $scope.password2) {
            dialog({
                title: '温馨提示',
                content: '密码为空或者不一致。'
            }).showModal();
            return false;
        }
        window.loading = dialog({
            content: '注册中。。。'
        }).showModal();
        $http.post('/lobby/app/kirinResource/personal/registerUser', {
            "userName": $scope.username,
            "newpass": $scope.password,
            "hash": hash
        }).success(function (r) {
            if (r.status === 'error') {
                window.loading.close().remove();
                dialog({
                    title: '失败',
                    content: r.message
                }).showModal();

            } else {
                //注册成功，初始化返点
                $http.get('/lobby/app/kirinResource/personal/initPoint', {
                    params: {
                        hash: hash,
                        username: r.data.userName
                    }
                }).success(function (r) {
                    if (r.status === '1') {
                        window.loading.close().remove();
                        dialog({
                            title: '成功',
                            content: '恭喜您注册成功',
                            ok: function () {
                                window.location = "/";
                            },
                            okValue: '去登录',
                            cancelValue: '取消',
                            cancel: function () {
                                return false;
                            }
                        }).showModal();
                    } else {
                        window.loading.close().remove();
                        dialog({
                            title: '温馨提示',
                            content: '您的注册已经成功，需要联系上级帮您设置返点才可以进行游戏。',
                            ok: function () {
                                window.location = "/";
                            },
                            okValue: '去登录',
                            cancel: false
                        }).showModal();
                    }
                }).error(function () {
                    window.loading.close().remove();
                    dialog({
                        title: '温馨提示',
                        content: '您的注册已经成功，需要联系上级帮您设置返点才可以进行游戏。',
                        ok: function () {
                            window.location = "/lobby/auth/a.html";
                        },
                        okValue: '去登录',
                        cancel: false
                    }).showModal();
                });
            }
        }).error(function (r) {
            window.loading.close().remove();
            dialog({
                title: '失败',
                content: '注册失败'
            }).showModal();
        });

    };


});