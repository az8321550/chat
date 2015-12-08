angular.module('checkApp', []).controller('CheckCtrl', function ($http, $scope, $filter, $log) {
    if (!window.location.origin) {
        window.location.origin = window.location.protocol + "//" + window.location.hostname;
    }
    $scope.curlocation = window.location.origin;
    $scope.lines = [{
        url: 'http://95hg.com',
        speed: 0,
        name: '线路一'
    }, {
        url: 'http://www.newzhizun.com',
        speed: 0,
        name: '线路二'
    }, {
        url: 'http://www.newzhizun.net',
        speed: 0,
        name: '线路三'
    }, {
        url: 'http://www.newzhizun.org',
        speed: 0,
        name: '线路四'
    }];
    $scope.test = function () {
        $.each($scope.lines, function (i, line) {
            line.start = new Date();
            $http.get(line.url).success(function () {
                line.end = new Date();
                line.speed = line.end.getTime() - line.start.getTime();
            }).error(function () {
                line.end = new Date();
                line.speed = line.end.getTime() - line.start.getTime();
            });
        });
    }
});