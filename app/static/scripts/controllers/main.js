angular.module('newpApp').controller('MainCtrl', function ($rootScope, $scope, $http, $routeParams, $timeout, $location, $log, $filter) {

    $rootScope.nav = 'home';
    //$log.log($location);
    $rootScope.moment = window.moment;
    $rootScope.state = function (s) {
        $rootScope.status = s;
        $timeout(function () {
            $rootScope.status = 'normal';
        }, 1000)
    }

    $rootScope.d = { //data

    };
    $rootScope.v = { //visible

    };
    $rootScope.cur = { //current

    };
    window.mnychange1 = function (amount) {
        $('.mnychange1').css({
            'color': amount > 0 ? 'red' : 'green'
        });
        $('.mnychange1').html(amount > 0 ? '+' + amount : amount);
        $('.mnychange1').stop(true, true).show().animate({
            'margin-top': '-=1em',
            'opacity': 'toggle'
        }, 'slow', function () {
            $('.mnychange1').css({
                'margin-top': '-1em'
            }).hide();
        });
    };
    $rootScope.$watch('d.mnys[1].balance', function (newb, oldb) {
        oldb = oldb || 0.00;
        newb = newb || 0.00;
        var amount = newb - oldb;
        if (amount === 0.00) {
            return false;
        }
        window.mnychange1(amount.toFixed(2));
    });
    window.mnychange0 = function (amount) {
        $('.mnychange0').css({
            'color': amount > 0 ? 'red' : 'green'
        });
        $('.mnychange0').html(amount > 0 ? '+' + amount : amount);
        $('.mnychange0').stop(true, true).show().animate({
            'margin-top': '-=1em',
            'opacity': 'toggle'
        }, 'slow', function () {
            $('.mnychange0').css({
                'margin-top': '-1em'
            }).hide();
        });
    };
    $rootScope.$watch('d.mnys[0].balance', function (newb, oldb) {
        oldb = oldb || 0.00;
        newb = newb || 0.00;
        var amount = newb - oldb;
        if (amount === 0.00) {
            return false;
        }
        window.mnychange0(amount.toFixed(2));
    });

    $rootScope.shua = function () {
        $http.get('/lobby/app/kirinResource/funds/getBalance?_=' + Math.random()).success(function (r) {
            $rootScope.d.mnys = r.infos;
        });
    };
    $rootScope.shua();
    /*$rootScope.getAgBalance = function () {
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
    $rootScope.getAgBalance();*/
    $http.get('/lobby/app/kirinResource/globleResource/platform/carousel').success(function (r) {
        $rootScope.cnotices = r.data;
        $.each(r.data, function (i, n) {
            if (n.top === 1) {
                $rootScope.notice = function () {
                    dialog({
                        width: 780,
                        title: n.title,
                        content: n.content
                    }).showModal();
                }
                return false;
            }
        });
    });

    $http.get('/lobby/app/kirinResource/globleResource/sysConfig').success(function (r) {
        $rootScope.sysConfig = {};
        $rootScope.sysConfig.maxCardNum = r.data[0];
        $rootScope.sysConfig.minTradeMoney = r.data[1];
        $rootScope.sysConfig.maxTradeMoney = r.data[2];
        $rootScope.sysConfig.maxTradeTimes = r.data[3];

        window.sysConfig = $rootScope.sysConfig;
    });
    window.personInterval = setInterval(function () {
        $http.get('/lobby/app/kirinResource/personal/personalInfo?_=' + Math.random()).success(function (r) {
            if (r.data !== null) {
                $rootScope.d.user = r.data;
            } else {
                if (window.unloginD) {
                    window.unloginD.close().remove();
                }
                window.unloginD = dialog({
                    title: '温馨提示',
                    content: '您的登录超时或者未登录,需要跳转到登录页面吗？',
                    ok: function () {
                        window.location.href = "/login";
                    },
                    okValue: '去登录'
                });
                window.unloginD.showModal();
                setTimeout(function () {
                    window.location.href = "/login";
                }, 1000)
            }
        });
    }, 60000);
    $rootScope.showLiteral = function (lottoName, methodCode, trueValue) {
        if (!lottoName) {
            return false;
        }
        if (!window.lottos) {
            return false;
        }
        var lotto = {};
        var thismethod = {};
        $.each(window.lottos, function (i, l) {
            if (l.label === lottoName) {
                lotto = l;
            }
        });
        $.each(lotto.tabs, function (i, tab) {
            $.each(tab.methodgroups, function (j, group) {
                $.each(group.methods, function (k, method) {
                    if (method.code === methodCode) {
                        thismethod = method;
                        return false;
                    }
                });
            });
        });
        if (!thismethod.rows) {
            return trueValue
        }
        var thisValue = $filter('filter')(thismethod.rows[0].nums, {
            'trueValue': trueValue
        })[0];
        if (thisValue) {
            return thisValue.value;
        } else {
            return trueValue;
        }
    }
});