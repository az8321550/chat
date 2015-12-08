angular.module('newpApp').controller('ActivityCtrl', function($scope,$rootScope, $filter, $routeParams, $http, $timeout, $interval, $log) {
    $rootScope.nav='activity';
    if(!$scope.bigtab){
        $scope.bigtab=1
    }
});