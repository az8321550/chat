angular.module('newpApp').service('repeatGet', function repeatGet($http, $q, $interval, $log, $timeout) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    // Define promise-based prompt() method.
    var _intervals = [];
    var _timeout;
    this.clear = function () {
        window.$.each(_intervals, function (i, n) {
            $interval.cancel(n);
        });
        if (_timeout) {
            $timeout.cancel(_timeout);
        }
    };
    this.get = function (url, interval, times) {
        var defer = $q.defer();
        var failtimes = 0;
        function getIt() {
            $log.log(Date(), '尝试请求：' + (failtimes + 1) + '次' + url);
            $http.get(url).success(function (data, status) {
                if (status === 200) {
                    $log.log('成功：' + url);
                    $interval.cancel(inter);
                    defer.resolve(data, status);
                } else {
                    $log.log('失败：' + url);
                    failtimes++;
                    if (failtimes === times) {
                        $interval.cancel(inter);
                        defer.reject(data, status);
                    }
                }
            }).error(function (data, status) {
                $log.log('失败：' + url);
                failtimes++;
                if (failtimes === times) {
                    $interval.cancel(inter);
                    defer.reject(data, status);
                }
            });
        }

        var inter = $interval(getIt, interval);
        _intervals.push(inter);
        getIt();

        return (defer.promise);

    };
    this.getNumbers = function (url, interval, times, timeout) {

        var defer = $q.defer();
        var failtimes = 0;


        function getIt() {
            $log.log(Date(), '尝试请求：' + (failtimes + 1) + '次' + url);
            $http.get(url).success(function (data, status) {
                if (status === 200 && data.numbers !== undefined) {
                    $log.log(Date(), '成功：' + url);
                    $interval.cancel(inter);
                    defer.resolve(data, status);
                } else {
                    $log.log(Date(), '失败：' + url);
                    failtimes++;
                    if (failtimes === times) {
                        $interval.cancel(inter);
                        defer.reject(data, status);
                    }
                }
            }).error(function (data, status) {
                $log.log(Date(), '失败：' + url);
                failtimes++;
                if (failtimes === times) {
                    $interval.cancel(inter);
                    defer.reject(data, status);
                }
            });
        }

        var inter;
        _timeout = $timeout(function () {
            inter = $interval(getIt, interval);
            _intervals.push(inter);
            getIt();
        }, timeout);


        return (defer.promise);

    };

});