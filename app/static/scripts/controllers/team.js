angular.module('newpApp').controller('TeamCtrl', function ($scope, $rootScope, $http, $filter, $routeParams, $log) {
    $rootScope.nav = 'team';
    var loading = null;


    $(".page").show().pagination({
        items: 200,
        itemsOnPage: 10,
        cssStyle: "light-theme",
        onPageClick: function(number) {
            return false;
        }
    });

    if ($routeParams.teampath === undefined) {
        return;
    }

    $scope.teampath = $routeParams.teampath;
    if ($rootScope.members) {
        $scope.members = $rootScope.members;
    } else {
        searchTeam();
    }
    $scope.pathName = undefined;
    $scope.queryTeam = function () {
        searchTeam($scope.qUsername, $scope.pathName);
    }
    $scope.loadData = function (username) {
        $scope.page_index = 1;
        searchTeam(undefined, username);
    }
    function searchTeam(searchName, pathName, showdial) {
        //loading = dialog({}).showModal();
        var pageidx = $scope.page_index;
        if (pageidx == undefined) {
            pageidx = 1;
        }
        var qp = "?items_per_page=20&page_index=" + pageidx;
        if (searchName != undefined) {
            qp += "&userName=" + searchName;
        }
        if (pathName != undefined) {
            qp += "&pathName=" + pathName;
        }
        $http.get('/lobby/app/kirinResource/org/searchTeam' + qp).success(function (data) {
            if (data.code == '200') {
                $rootScope.members = data.data.data;
                $scope.members = data.data.data;
                $scope.paths = data.data.paths;
                $scope.pathName = data.data.paths[data.data.paths.length - 1];
                $scope.qUsername = data.data.username;
                $scope.page_total = parseInt(data.data.totalPage);
                $scope.page_index = parseInt(data.data.page);
                $scope.result_count = parseInt(data.data.count);

                $scope.subUsername = undefined;
                $scope.subnewpass = undefined;
                if (showdial == true) {
                    dialog({
                        title: '温馨提示',
                        content: '更新成功'
                    }).show();
                }
            } else {
                dialog({
                    title: '温馨提示',
                    content: data.message
                }).show();
            }
            loading.close();
        });
    }

    $scope.pre = function () {
        $scope.page_index--;
        $scope.queryTeam();
    }
    $scope.next = function () {
        $scope.page_index++;
        $scope.queryTeam();
    }
    $scope.literal = function (index, quota) {
        return '奖金：' + quota.level + ' 剩余配额：' + quota.amount;
    }
    $scope.updateQuota = function () {
        $http.get('/lobby/app/kirinResource/personal/quota').success(function (r) {
            $scope.quotas = $filter('orderBy')(r.data, 'level');
            if (!$scope.selQuota) {
                $scope.selQuota = $scope.quotas[0];
            }
            $scope.limitQuota = angular.copy($scope.quotas[0]);
            $scope.limitQuota.level -= 2;
            $scope.limitQuota.id = null;

        });
    }
    $scope.updateQuota();
    $scope.addMember = function () {
        $scope.add_member = true;
        $scope.subUsername = '';
        $scope.subnewpass = '';
    }
    $scope.addSubUser = function () {
        if ($scope.subUsername && /^[A-Za-z0-9]{6,20}$/.test($scope.subUsername)) {

        } else {
            dialog({
                title: '温馨提示',
                content: '6到20位用户名，只能包含字母和数字'
            }).showModal();
            return false;
        }
        if ($scope.subnewpass && $scope.subnewpass.length >= 6) {

        } else {
            dialog({
                title: '温馨提示',
                content: '请输入6位以上密码'
            }).showModal();
            return false;
        }

        if (!$scope.myQuota) {
            if ($scope.selQuota && $scope.selQuota.amount > 0) {

            } else {
                dialog({
                    title: '温馨提示',
                    content: '配额不足'
                }).showModal();
                return false;
            }
        } else {
            if ($scope.aimQuota * 1 == $scope.aimQuota) {

            } else {
                dialog({
                    title: '温馨提示',
                    content: '请填写' + $scope.limitQuota.level + '到' + 1700 + '之间的偶数'
                }).showModal();
                return false;
            }
            if ($scope.limitQuota) {
                if ($scope.aimQuota <= $scope.limitQuota.level && $scope.aimQuota >= 1700 && $scope.aimQuota % 2 === 0) {
                    $scope.selQuota.level = $scope.aimQuota;
                    $scope.selQuota.id = null;
                } else {
                    dialog({
                        title: '错误',
                        content: '请填写' + $scope.limitQuota.level + '到' + 1700 + '之间的偶数'
                    }).showModal();
                    return false;
                }
            } else {
                if ($scope.aimQuota > $scope.selfLevel) {
                    dialog({
                        title: '错误',
                        content: '请填写' + $scope.selfLevel + '到' + 1700 + '之间的偶数'
                    }).showModal();
                    return false;
                }
                $scope.selQuota = {};
                $scope.selQuota.level = $scope.aimQuota;
                $scope.selQuota.id = null;
            }

        }
        $http.post('/lobby/app/kirinResource/org/addSubUser', {
            userName: $scope.subUsername,
            newpass: $scope.subnewpass,
            role: 1,
            quota: $scope.selQuota
        }).success(function (r) {
            if (r.status === 'k') {
                var currentQuota = $scope.selQuota;
                $scope.updateQuota();
                dialog({
                    title: '温馨提示',
                    content: '添加用户:' + r.data.userName + '成功',
                    ok: function () {
                        $scope.$apply(function () {
                            $scope.myQuota = false;
                            $scope.aimQuota = undefined;
                            $scope.add_member = false;
                            $scope.selQuota = $scope.quotas[0];
                        });
                    },
                    okValue: '好的',
                    cancel: false
                }).showModal();
                $http.put('/lobby/app/kirinResource/personal/setaglevel/' + $scope.subUsername + '/' + $scope.agb1.val).success(function (r) {
                    if (r.status === '1') {
                        dialog({
                            title: '温馨提示',
                            content: 'AG、PT返点设置成功'
                        }).show();
                    } else {
                        dialog({
                            title: '温馨提示',
                            content: 'AG、PT返点设置失败！请点击此用户返点重新设置。'
                        }).show();
                    }
                });
                searchTeam();
            } else {
                dialog({
                    title: '失败',
                    content: r.message
                }).showModal();
            }
        });
    }
    $scope.quotaSet = function (member) {
        $scope.show_quota = true;
        $scope.quotaUser = member;
        subQuotaSearch(member);
    }

    function subQuotaSearch(member) {
        $http.get('/lobby/app/kirinResource/org/quota?username=' + member.userName).success(function (r) {
            $scope.subQuotas = r.data;
        });
    }

    $scope.updateSubQuota = function (quota) {
        var checkLegal = true;
        $.each($scope.subQuotas, function (i, n) {
            if (n.amount < 0) {
                checkLegal = false;
                return false;
            }
        })
        if (!checkLegal) {
            dialog({
                title: '温馨提示',
                content: '配额不能设置成负数'
            }).showModal();
            return false;
        }
        $http.post('/lobby/app/kirinResource/org/quota', $scope.subQuotas).success(function (r) {
            dialog({
                title: '温馨提示',
                content: r.data
            }).showModal();
            $scope.updateQuota();
        }).error(function () {
            dialog({
                title: '温馨提示',
                content: '更新失败'
            }).showModal();
        })
    }
    $scope.rebateSel = function (member) {
        $scope.rebateSelUser = member;
        $http.get('/lobby/app/kirinResource/personal/upperLimit/' + $rootScope.d.user.userName)
            .success(function (data) {
                $http.get('/lotto/rest/brokerage/' + member.userName + '?type=CQSSC')
                    .success(function (data2) {
                        var brokerage = $filter('filter')(data2, {
                            gameCode: 'CQSSC'
                        });
                        $scope.selBrokerage = {
                            val: brokerage[0].upper * 2,
                            min: 1700,
                            max: data.data
                        };
                        $scope.memberbrokerage = brokerage[0].upper * 2;
                    });
            });
        $http.get('/lobby/app/kirinResource/personal/aglevel/' + member.userName).success(function (r) {
            $scope.agb2 = {
                val: r.data,
                min: 0,
                max: $scope.agb1.max
            }
        });
    }

    function checkQuota(level) {
        var levelLow = true;
        var quotaCan = false;
        $.each($scope.quotas, function (i, n) {
            if (level === n.level && n.amount >= 1) {
                quotaCan = true;
            }
            if (level >= n.level) {
                levelLow = false;
            }
        });
        return levelLow || quotaCan;
    }

    $scope.rebateSet = function (member) {
        if (!checkQuota($scope.selBrokerage.val)) {
            dialog({
                title: '温馨提示',
                content: '您' + $scope.selBrokerage.val + '的配额不足'
            }).showModal();
            return false;
        }
        if ($rootScope.d.user.userName !== 'ZZROOT' && $scope.selBrokerage.val < $scope.memberbrokerage) {
            dialog({
                title: '温馨提示',
                content: '下级返点不可以调低，如有疑问请联系客服'
            }).showModal();
            return false;
        }
        $http.get('/lobby/app/kirinResource/org/initSubRebate?username=' + $scope.rebateSelUser.userName + '&level=' + $scope.selBrokerage.val).success(function (data) {
            $http.put('/lobby/app/kirinResource/personal/level/' + $scope.rebateSelUser.userName + '/' + $scope.selBrokerage.val);
            if (data.status == '1') {
                searchTeam($scope.rebateSelUser.userName, undefined, true)
            }
        }).error(function () {
            dialog({
                title: '温馨提示',
                content: '返点设置失败，不能高于上级或者低于下级返点。如有问题，请联系客服。'
            }).showModal();
        });

    };
    $scope.agbSet = function () {
        $http.put('/lobby/app/kirinResource/personal/setaglevel/' + $scope.rebateSelUser.userName + '/' + $scope.agb2.val).success(function (r) {
            if (r.status === '1') {
                dialog({
                    title: '温馨提示',
                    content: 'AG、PT返点设置成功'
                }).show();
            } else {
                dialog({
                    title: '温馨提示',
                    content: r.message
                }).show();
            }
        });
    };

    $scope.subUserTeam = function (member) {
        $http.get('/lobby/app/kirinResource/funds/teamsum?userName=' + member.userName).success(function (r) {
            $scope.subTeamInfo = r.data;
        })
        $scope.subUser = member;
        $scope.show_subteam = true;
    };
    $scope.showSubRecharge = function (member) {
        $scope.recharge = {};
        $scope.subRechargeUser = member;
        $scope.show_recharge = true;
    };
    $scope.subRecharge = function (member) {
        $http.get('/lobby/app/kirinResource/funds/subRecharge', {
            params: {
                subUserName: $scope.subRechargeUser.userName,
                amount: $scope.recharge.amount,
                paypwd: $scope.recharge.paypwd
            }
        }).success(function (r) {
            if (r.status === '1') {
                dialog({
                    title: '成功',
                    content: '已成功为' + $scope.subRechargeUser.userName + '充值' + $scope.recharge.amount + '元'
                }).showModal();
                $scope.recharge = {};
            } else {
                dialog({
                    title: '失败',
                    content: r.message
                }).showModal();
            }

        })
    };
    $scope.showFreeze = function (member) {
        $scope.freezeUser = member;
        $scope.show_freeze = true;
    };
    $scope.showDeFreeze = function (member) {
        $scope.defreezeUser = member;
        $scope.show_defreeze = true;
    };
    $scope.freeze = function (member) {
        $http.get('/lobby/app/kirinResource/org/freeze', {
            params: {
                subUserName: $scope.freezeUser.userName,
                scope: $scope.freezeScope,
                type: $scope.freezeType,
                reason: $scope.freezeReason
            }
        }).success(function (r) {
            var msg = '操作成功';
            if (r.status === 'error') {
                msg = r.message;
            }
            dialog({
                title: '操作结果',
                content: msg
            }).showModal();
        })
    };
    $scope.defreeze = function (member) {
        $http.get('/lobby/app/kirinResource/org/freeze', {
            params: {
                subUserName: $scope.defreezeUser.userName,
                scope: $scope.defreezeScope
            }
        }).success(function (r) {
            var msg = '操作成功';
            if (r.status === 'error') {
                msg = r.message;
            }
            dialog({
                title: '操作结果',
                content: msg
            }).showModal();
        })
    };
    if (!window.location.origin) {
        window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
    }
    $scope.prefix = window.location.origin + '/register.html?_=';
    $scope.getInvites = function () {
        $http.get('/lobby/app/kirinResource/org/invites').success(function (r) {
            $scope.invites = r.data;
        })
    };
    $scope.getInvites();
    $scope.createInvite = function () {
        if ($scope.point) {
            if ($scope.point < 1700 || $scope.point > 1940) {
                dialog({
                    title: '温馨提示',
                    content: '自动注册的奖金允许在1700到1940之间，且是偶数。'
                }).showModal();
                return false;
            }

        } else {
            dialog({
                title: '温馨提示',
                content: '请填写奖金设置'
            }).showModal();
            return false;
        }
        $http.get('/lobby/app/kirinResource/org/hash?point=' + $scope.point).success(function (r) {
            if (r.status === '1') {

                $scope.getInvites();
                $scope.newInvite = r.data;
            } else {
                dialog({
                    title: '温馨提示',
                    content: r.message
                }).showModal();
            }
        })
    };
    $scope.removeLink = function (invite) {
        dialog({
            title: '温馨提示',
            content: '删除后，此链接将失效。无法继续用此链接注册。',
            okValue: '确认删除',
            cancelValue: '取消',
            ok: function () {
                $scope.newInvite = null;
                $http.get('/lobby/app/kirinResource/org/removeInvite?id=' + invite.id).success(function (r) {
                    if (r.status === '1') {
                        $scope.getInvites();
                    } else {
                        dialog({
                            title: '温馨提示',
                            content: r.message
                        }).showModal();
                    }
                });
            }
        }).showModal();

    };
    $http.get('/lobby/app/kirinResource/personal/upperLimit/anyone').success(function (data) {
        $scope.selfLevel = data.data;
    })
    $scope.agb1 = {
        val: 0,
        min: 0,
        max: 0
    };
    $http.get('/lobby/app/kirinResource/personal/aglevel/self').success(function (r) {
        $scope.agb1 = {
            val: 0,
            min: 0,
            max: r.data
        };
    });
    $scope.moment = window.moment;


});
