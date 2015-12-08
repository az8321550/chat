angular.module('newpApp')
    .controller('MsgCtrl', function ($scope, $rootScope, $location, $http, $timeout, $interval) {
        $rootScope.nav = 'prefer';
        $scope.tab = 'msg';
        $http.get('/lobby/app/kirinResource/messageCenter/msgtype').success(function (r) {
            $scope.types = r.data;
            $scope.changeTab($scope.types[2]);
            $http.get('/lobby/app/kirinResource/org/msguser').success(function (r) {
                $scope.msgUsers = r.data;
            });
        });

        $scope.tabIndex = 2;
        $scope.changeTab = function (type) {
            $scope.page_index = 0;
            $scope.type = type;
            $scope.loadMsg();
            $scope.tabIndex = type.messageTypeId;
        }
        $scope.changeCate = function (cate) {
            $scope.page_index = 0;
            $scope.msgcate = cate;
            $scope.loadMsg();
        }


        $scope.loadMsg = function () {
            var load = dialog({}).showModal();
            $http.get('/lobby/app/kirinResource/messageCenter/notice', {
                params: {
                    items_per_page: 5,
                    page_index: $scope.page_index,
                    msgtype: $scope.type.messageTypeId,
                    msgcate: $scope.msgcate
                }
            }).success(function (r) {
                $scope.msgs = r.data;
                $scope.page_total = parseInt(r.count / 5);
                load.close().remove();
            });
        };
        $scope.agree = function (msg) {
            http.get('/lobby/app/kirinResource/funds/processRemoveCard?cardid=' + msg.messageId + '&prove=true', function () {
                $scope.loadMsg();
            });
        }
        $scope.deny = function (msg) {
            http.get('/lobby/app/kirinResource/funds/processRemoveCard?cardid=' + msg.messageId + '&prove=false', function () {
                $scope.loadMsg();
            });
        }
        $scope.pre = function () {
            $scope.page_index--;
            $scope.loadMsg();
        }
        $scope.next = function () {
            $scope.page_index++;
            $scope.loadMsg();
        }
        $scope.showSendMsg = function () {
            $scope.show_sending = true;
        }
        $scope.pushedUsers = [];
        $scope.pushUser = function (user) {
            var has = false;
            $.each($scope.pushedUsers, function (i, n) {
                if (n.userName == user.userName) {
                    has = true;
                    return false;
                }
            });
            if (!has) {
                $scope.pushedUsers.push(user);
            }
        };
        $scope.delUser = function (index) {
            $scope.pushedUsers.splice(index, 1);
        };
        $scope.$watch('upup', function (up) {
            doWatch();
        });
        $scope.$watch('directdown', function (up) {
            doWatch();
        });
        $scope.$watch('downs', function (up) {
            doWatch();
        });

        function doWatch() {
            $scope.pushedUsers = [];
            if ($scope.upup === true) {
                doPush($scope.pushedUsers, $scope.msgUsers[0]);
            }
            if ($scope.directdown === true) {
                directdown();
            }
            if ($scope.downs === true) {
                downs();
            }
        }

        function directdown() {
            var ret = [];
            $.each($scope.msgUsers, function (i, n) {
                if (n.comboName === '下1级') {
                    doPush($scope.pushedUsers, n);
                }
            })
        }

        function downs() {
            var ret = [];
            $.each($scope.msgUsers, function (i, n) {
                if (n.comboName !== '上级') {
                    doPush($scope.pushedUsers, n);
                }
            })
        }

        function doPush(array, item) {
            var has = false;
            $.each(array, function (i, n) {
                if (n.userName === item.userName) {
                    has = true;
                    return false;
                }
            });
            if (!has) {
                array.push(item);
            }
        }

        $scope.sendMsg = function () {
            if ($scope.msgTitle && $scope.msgContent && $scope.pushedUsers.length > 0) {

            } else {
                return false;
            }
            var users = ''
            $.each($scope.pushedUsers, function (i, n) {
                users += 'userName=' + n.userName + '&';
            });
            $http.get('/lobby/app/kirinResource/messageCenter/sendmsg?' + users + 'title=' + $scope.msgTitle + '&content=' + $scope.msgContent).success(function () {
                $rootScope.state('ok_msg');
            }).error(function () {
                $rootScope.state('err_msg');
            })
        };
        $scope.readMsg = function (msg) {
            $http.get('/lobby/app/kirinResource/messageCenter/readMsg?msgIds=' + msg.messageId).success(function () {
                msg.readFlag = 1;
            });
        };
    });