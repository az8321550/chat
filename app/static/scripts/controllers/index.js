'use strict';
angular.module('newpApp').controller('IndexCtrl', function($scope, $rootScope, $filter, $routeParams, $http, $timeout, $interval, $log) {
  $rootScope.nav = 'index';
  $('.cycle-slideshow').cycle();


  // $http.get('scripts/zz2twicetranfer.json').success(function(data) {
  //   window.data = $scope.data =data;
  //   $.each(window.data,function(i,n){
  //   	$.each(data,function(j,m){
  //   		var aa = new Date(n.createTime);
  //   		var bb = new Date(m.createTime);
  //   		if(n.act_id!==m.act_id&&n.username===m.username&&n.amount===m.amount&&Math.abs(aa-bb)<60000&&aa-bb<0){
  //   			$log.log(n.username,n.amount,n.createTime,m.createTime);
  //   		}
  //   	});
  //   });
  // });
});