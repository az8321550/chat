angular.module('newpApp').controller('SettingCtrl', function ($scope, $rootScope, $filter, $routeParams, $http, $timeout, $interval, $log) {
    $rootScope.nav = 'setting';
    if (!$scope.bigtab) {
        $scope.bigtab = 1
    }
});