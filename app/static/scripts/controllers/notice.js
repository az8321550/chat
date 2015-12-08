'use strict';
angular.module('newpApp').controller('NoticeCtrl', function($scope, $rootScope, $filter, $routeParams, $http, $timeout, $interval, $log) {
    $rootScope.nav = 'home';
    var id = $routeParams.id;
    $http.get('/lobby/app/kirinResource/globleResource/platform/notice').success(function(r) {
        $scope.notices = r.data;
        if (id) {
            $scope.thisNotice = $filter('filter')(r.data, {
                paId: id
            })[0];
        } else {
            $scope.thisNotice = r.data[0];
        }
        $("#note_containt").empty().append($scope.thisNotice.content);
    });
    $scope.choose = function(notice) {
        $scope.thisNotice = notice;
        $("#note_containt").empty().append($scope.thisNotice.content);
    }
});