'use strict';
angular.module('newpApp')
  .controller('FindCtrl', function($scope, $rootScope, $location, $http, $timeout, $interval) {
    $scope.step = 1;
    $scope.findname = function() {
      $http.get('/lobby/app/kirinResource/personal/acctStatusCheck?accName=' + $scope.findingname).success(function(r) {
        if (r.data === null) {
          alert('用户名没找到！');
        } else {
          $scope.step = 2;
          $scope.findoption($scope.findingname);
        }
      }).error(function() {
        alert('用户名没找到！');
      });
    };
    $scope.findoption = function(username) {
      $http.get('/lobby/app/kirinResource/personal/findpwdoption?userName=' + username).success(function(r) {
        $scope.option = r.data;
      });
    }
    $scope.hasOption = function(data, option) {
      for (var i in data) {
        if (data[i].k === option) {

          return true;
        }
      }
      return false;
    };
    $scope.theAccount = function(data, option) {
      for (var i in data) {
        if (data[i].k === option) {
          return data[i].num;
        }
      }
      return null;
    };
    $scope.code = function(opt) {
      $scope.mailsent = false;
      $scope.mobilesent = false;
      $scope.step = 3;
      if (opt === 1) {
        $scope.step3 = 1;
        $http.get('/lobby/app/kirinResource/personal/findpwdgetcode', {
          params: {
            'userName': $scope.findingname,
            'type': 'email',
            'dest': $scope.theAccount($scope.option, 'email')
          }
        }).success(function(r) {
          if (r.status === '1') {
            $scope.mailsent = true;
          }
        });
      }
      if (opt === 2) {
        $scope.step3 = 2;
        $http.get('/lobby/app/kirinResource/personal/findpwdgetcode', {
          params: {
            'userName': $scope.findingname,
            'type': 'mobile',
            'dest': $scope.theAccount($scope.option, 'mobile')
          }
        }).success(function(r) {
          if (r.status === '1') {
            $scope.mobilesent = true;
          }
        });
      }
    };
    $scope.recode = function() {
      $scope.mailsent = false;
      $scope.mobilesent = false;
      if ($scope.step3 === 1) {
        $http.get('/lobby/app/kirinResource/personal/findpwdgetcode', {
          params: {
            'userName': $scope.findingname,
            'type': 'email',
            'dest': $scope.theAccount($scope.option, 'email')
          }
        }).success(function(r) {
          if (r.status === '1') {
            $scope.mailsent = true;
          }
        });
      }
      if ($scope.step3 === 2) {
        $http.get('/lobby/app/kirinResource/personal/findpwdgetcode', {
          params: {
            'userName': $scope.findingname,
            'type': 'mobile',
            'dest': $scope.theAccount($scope.option, 'mobile')
          }
        }).success(function(r) {
          if (r.status === '1') {
            $scope.mobilesent = true;
          }
        });
      }
    };
    $scope.showAsk = function() {
      $scope.step = 3;
      $scope.step3 = 3;
      $http.get('/lobby/app/kirinResource/personal/getRandomAsk?username=' + $scope.findingname).success(function(r) {
        if (r.status === '1') {
          $scope.ask = r.data;
        }
      });
    };
    $scope.validCode = function() {
      $http.get('/lobby/app/kirinResource/personal/findpwdvalid?userName=' + $scope.findingname + '&code=' + $scope.incode).success(function(r) {
        if (r.data == true) {
          $scope.step = 4;
        } else {
          alert('校验码不正确');
        }
      });
    };
    $scope.validAsk = function() {
      $http.get('/lobby/app/kirinResource/personal/validAnswer', {
        params: {
          id: $scope.ask.id,
          answer: $scope.answer
        }
      }).success(function(r) {
        if (r.status === '1') {
          $scope.incode=$scope.answer;
          $scope.step = 4;
        }
      });
    };
    $scope.resetpwd = function() {
      if($scope.pwd!==$scope.pwd2){
        alert('密码输入不一致!');
        return false;
      }
      $http.get('/lobby/app/kirinResource/personal/findpwdchange', {
        params: {
          'userName': $scope.findingname,
          'pwd': $scope.pwd,
          'code': $scope.incode
        }
      }).success(function(r){
        if(r.data==true){
          alert('密码重置成功！');
          window.location='/';
        }else{
          alert('失败，请重试或联系客服');
        }
      })
    }
  });