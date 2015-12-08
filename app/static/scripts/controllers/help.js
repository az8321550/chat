angular.module('newpApp').controller('HelpCtrl', function ($scope, $rootScope, $filter, $routeParams, $http, $timeout, $interval, $log) {
    $rootScope.nav = 'help';
    if (!$scope.tab) {
        $scope.tab = 1
    }
});