angular.module('newpApp', [
    'ngAnimate',
    'ngCookies',
    'ngRoute',
    'ui.slider',
    'angularMoment',
    'toastr'
]).config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '../../views/main.html',
        controller: 'IndexCtrl'
    }).when('/activity', {
        templateUrl: '../../views/activity.html',
        controller: 'ActivityCtrl'
    })
    .when('/game/:gameid', {
        templateUrl: '../../views/game.html',
        controller: 'GameCtrl'
    }).when('/pk10/:gameid', {
        templateUrl: '../../views/pk10.html',
        controller: 'PK10Ctrl'
    }).when('/mmc', {
        templateUrl: '../../views/mmc.html',
        controller: 'MmcCtrl'
    }).when('/team', {
        templateUrl: '../../views/team.html',
        controller: 'TeamCtrl'
    }).when('/data/:type', {
        templateUrl: '../../views/data.html',
        controller: 'DataCtrl'
    }).when('/record', {
        templateUrl: 'views/record.html'
    }).when('/prefer/:type', {
        templateUrl: '../../views/prefer.html',
        controller: 'PreferCtrl'
    }).when('/trade/:type', {
        templateUrl: '../../views/trade.html',
        controller: 'TradeCtrl'
    }).when('/notice/:id', {
        templateUrl: '../../views/notice.html',
        controller: 'NoticeCtrl'
    }).when('/help', {
        templateUrl: '../../views/help.html',
        controller: 'HelpCtrl'
    }).when('/find', {
        templateUrl: '../../views/find.html',
        controller: 'FindCtrl'
    }).when('/card', {
        templateUrl: '../../views/card.html',
        controller: 'CardCtrl'
    }).when('/msg', {
        templateUrl: '../../views/msg.html',
        controller: 'MsgCtrl'
    }).when('/setting', {
        templateUrl: '../../views/setting.html',
        controller: 'SettingCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
}).config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('ErrorHandler');
    //initialize get if not there
    if (!$httpProvider.defaults.headers.get) {
        $httpProvider.defaults.headers.get = {};
    }
    //disable IE ajax request caching
    $httpProvider.defaults.headers.get['If-Modified-Since'] = '0';
}]).run(function ($rootScope, $location, $http) {
    $http.get('/lobby/app/kirinResource/personal/personalInfo?_=' + Math.random()).success(function (r) {
        if (r.data !== null) {
            $rootScope.d.user = r.data;
        } else {
            if ($location.$$path === '/find') {
                return false;
            }
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
            }, 1500)
        }
    });
}).run(function (amMoment) {
    amMoment.changeLocale('zh-cn');
}).directive('selectOnClick', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.on('click', function () {
                this.select();
            });
        }
    };
});

function GLO() {
    var logoutD = dialog({
        width: 300,
        title: '请确认',
        content: '是否要退出xx？',
        cancelValue: '取消',
        cancel: function () {
        },
        okValue: '确定',
        ok: function () {
            this.title('请稍后...');
            this.content('退出中...');
            $.getJSON('/lobby/app/kirinResource/personal/logout', function (r) {
                logoutD.content('退出成功');
                if (r.status === '1') {
                    setTimeout(function () {
                        window.location = "/lotto/j_spring_cas_security_logout";
                    }, 500);
                }
            });
            return false;
        }
    }).showModal();

}