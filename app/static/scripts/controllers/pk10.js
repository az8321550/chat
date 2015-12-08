angular.module('newpApp').controller('PK10Ctrl', function ($http, $scope, $rootScope, $routeParams, $log, $interval, $timeout, $filter, repeatGet) {
        $rootScope.nav = 'game';
        $scope.Math = window.Math;
        $scope.moment = window.moment;
        $scope.chase = {};
        $scope.getNumbers = function (numbers) {
            var ret = [];
            $.each(numbers.split(','), function (i, no) {
                var n = {
                    num: no
                };
                ret.push(n);
            });
            return ret;
        }

        $scope.chase.chaseCount = 0;


        $log.debug('routeParams', $routeParams);

        function init() {
            $http.get('/lotto/rest/period/' + $scope.lotto.label + '/previous').success(function (data) {
                $scope.previous = data;
                if (!$scope.previous.numbers) {
                    lottoing();
                }
            });
            $http.get('/lotto/rest/period/' + $scope.lotto.label).success(function (data) {
                $scope.curPeriod = data;
            });
            $http.get('/lotto/rest/period/' + $scope.lotto.label + '/next').success(function (data) {
                $log.log('下一期', data, status);
                $scope.next = data;
            });
            $http.get('/lotto/rest/period/' + $scope.lotto.label + '/recent/8')
                .success(function (data) {
                    $scope.recent = data;
                });
            // $('.ui-slider-handle').draggable();
            $http.get('/lotto/rest/brokerage/?type=' + $scope.lotto.label).success(function (brokerage) {
                $scope.selBrokerage = {
                    val: brokerage.upper * 2,
                    min: 1700,
                    max: brokerage.upper * 2
                };
            });
        }

        function change() {
            $scope.previous = $scope.curPeriod;
            $scope.curPeriod = $scope.next;
            lottoing(true);
        }

        $scope.$on('$destroy', function () {
            // Make sure that the interval is destroyed too
            $interval.cancel($scope.timer);
            repeatGet.clear();
        });

        function updateTime() {
            $http.get('/lotto/rest/auth').success(function (data, status, headers, config) {
                $log.log('updatetime', data, status, headers, config);
                if (headers('Date')) {
                    //
                    var nowDate = new Date(headers('Date')),
                        now = nowDate.getTime();
                    window.then = window.moment().toDate().getTime();
                    window.serverThen = now;
                    window.timeoffset = window.serverThen - window.then;
                    $log.log('timeoffset', window.timeoffset);
                }
            }).error(function () {
            });
        }

        $scope.timer = $interval(function () {
            if ($scope.lotto.label === 'MMC') {
                return false;
            }
            var localnow = window.moment().toDate().getTime();
            var now = localnow;
            if (window.timeoffset && window.timeoffset !== 0) {
                now = localnow + window.serverThen - window.then;
            }
            var open = window.moment($scope.curPeriod.openTime).toDate().getTime();
            // $log.debug((now.getTime() - open.getTime()) / 1000);
            if ((open - now) / 1000 < $scope.curPeriod.game.offSaleAdvance) {
                change();
            }
            $scope.countDown = Number((open - now) / 1000 - $scope.curPeriod.game.offSaleAdvance).formatTime();
            var lottocd = (open - now) / 1000 - 190 - $scope.curPeriod.game.offSaleAdvance;
            $scope.lottoingCountDown = Number(lottocd < 0 ? 0 : lottocd).formatTime();
        }, 1000);

        function lottoing(delay) {
            if ($scope.previous === undefined || $scope.previous.signature === undefined || $scope.previous.numbers) {
                return false;
            }
            repeatGet.getNumbers('/lotto/rest/period/' + $scope.lotto.label + '/single/' + $scope.previous.signature, 5000, 60, delay ? $scope.previous.game.offSaleAdvance * 1000 : 0).then(function (data, status) {
                    $log.log('上一期', data, status);
                    $scope.previous = data;
                    $http.get('/lotto/rest/period/' + $scope.lotto.label + '/next').success(function (data, status) {
                        $log.log('下一期', data, status);
                        $scope.next = data;
                    });
                    $http.get('/lotto/rest/period/' + $scope.lotto.label + '/recent/8')
                        .success(function (data) {
                            $scope.recent = data;
                        });
                },
                function (data, status) {
                    $log.log(data, status);
                });
        }

        $scope.selectLotto = function (lotto) {
            $rootScope.curLotto = lotto;
            $scope.lotto = window.lottos[lotto];
            $rootScope.currLotto = lotto;
            $scope.currentTab = $scope.lotto.tabs[0];
            $scope.currGroup = $scope.currentTab.methodgroups[0];
            $scope.currentMethod = $scope.currentTab.methodgroups[0].methods[0];
            //styles:
            if (lotto.indexOf('11x5') > -1) {
                $scope.style_rowname = {
                    'padding-left': '10px',
                    'width': '62px'
                };
                $scope.style_right = {
                    'margin-left': '135px'
                };
            }
            if (lotto.indexOf('klsf') > -1) {
                $scope.style_rowname = {
                    'padding-left': '10px',
                    'width': '62px'
                };
                $scope.style_mid = {
                    'width': '380px'
                };
            }
            init();
        };
        $scope.selectLotto('pk10');
        $scope.selTab = function (tab) {
            $scope.currentTab = tab;
            $scope.currGroup = $scope.currentTab.methodgroups[0];
            $scope.currentMethod = $scope.currGroup.methods[0];
        };
        $scope.selMethod = function (group, method, tab) {
            $scope.currGroup = $scope.currentTab.methodgroups[0];
            $scope.currentMethod = method;
            if (tab) {
                $scope.currentTab = tab;
                $scope.currGroup = $scope.currentTab.methodgroups[0];
            }
        };
        $scope.curTicket = {}; //init
        $scope.selNum = function (row, n) {
            // $log.debug(row, n);
            if (!$scope.curTicket[row.name]) {
                $scope.curTicket[row.name] = {};
            }
            if ($scope.currentMethod.spec == 'daxiaodanshuang') {
                $scope.curTicket[row.name] = {};
                if ($scope.curTicket[row.name][n.trueValue] === true) {
                    $scope.curTicket[row.name][n.trueValue] = false;
                } else {
                    $scope.curTicket[row.name][n.trueValue] = true;
                }
            } else {
                if ($scope.curTicket[row.name][n.value] === true) {
                    $scope.curTicket[row.name][n.value] = false;
                } else {
                    $scope.curTicket[row.name][n.value] = true;
                }
            }
            // $log.debug($scope.curTicket);
            $scope.curLetter();
        };
        $scope.selAll = function (row) {
            if (!$scope.curTicket[row.name]) {
                $scope.curTicket[row.name] = {};
            }
            angular.forEach(row.nums, function (n) {
                $scope.curTicket[row.name][n.value] = true;
            });
            $scope.curLetter();
        };
        $scope.selBig = function (row) {
            $scope.curTicket[row.name] = {};
            angular.forEach(row.nums, function (n) {
                $scope.curTicket[row.name][n.value] = n.value > $scope.lotto.midNum;
            });
        };
        $scope.selSmall = function (row) {
            $scope.curTicket[row.name] = {};
            angular.forEach(row.nums, function (n) {
                $scope.curTicket[row.name][n.value] = n.value <= $scope.lotto.midNum;
            });
        };
        $scope.selOdd = function (row) {
            $scope.curTicket[row.name] = {};
            angular.forEach(row.nums, function (n) {
                $scope.curTicket[row.name][n.value] = n.value % 2 === 1;
            });
        };
        $scope.selEven = function (row) {
            $scope.curTicket[row.name] = {};
            angular.forEach(row.nums, function (n) {
                $scope.curTicket[row.name][n.value] = n.value % 2 === 0;
            });
        };
        $scope.selNone = function (row) {
            $scope.curTicket[row.name] = {};
            angular.forEach(row.nums, function (n) {
                $scope.curTicket[row.name][n.value] = false;
            });
        };
        $scope.removeTickets = function () {
            $scope.tickets = [];
        };
        $scope.$watch('curLetter()', function (curLetter) {
            $scope.checkSelectingLegal();
        });

        $scope.luru = {};
        $scope.$watch('luru.text', function (newvalue, oldvalue) {
            if (newvalue === undefined) {
                return false;
            }
            $log.log('luru.text changed', newvalue, oldvalue);
            $scope.luru.text = $scope.luru.text.replace('；', ';');
            $scope.luru.text = $scope.luru.text.replace('：', ':');
            $scope.luru.text = $scope.luru.text.replace('，', ',');
            $scope.checkSelectingLegal();
        });
        $scope.checkSelectingLegal = function (imediate) {
            function check() {
                $log.log('checkSelectingLegal');
                var t = $scope.curLetter();
                var regx = $scope.currentMethod.regx;
                $log.log(regx, t);
                if (regx.test(t)) {
                    $scope.selectingIsLegal = {};
                    $http.post('/lotto/rest/ticket/quantity', {
                        originalNumbers: t,
                        game: $scope.lotto.label,
                        method: $scope.currentMethod.code,
                        multi: 1,
                        mode: $scope.mode
                    })
                        .success(function (data) {
                            $scope.selectingQty = data;
                        }).error(function () {
                            $scope.selectingQty = 0;
                            $scope.selectingCanBuy = false;
                        });
                    $scope.selectingCanBuy = true;
                    return true;
                } else {
                    $scope.selectingQty = 0;
                    $scope.selectingCanBuy = false;
                    return false;
                }
            }

            if (imediate) {
                return check();
            }

            if ($scope.checkSelectingTimer) {
                $timeout.cancel($scope.checkSelectingTimer);
            }
            $scope.checkSelectingTimer = $timeout(function () {
                check();
            }, 600);
        };
        $scope.curLetter = function () {
            var letter = '';
            if ($scope.currentMethod.spec === 'luru') {
                letter = $scope.luru.text;
            } else {
                if ($scope.currentMethod.spec === 'daxiaodanshuang') {
                    angular.forEach($scope.currentMethod.rows, function (row) {
                        angular.forEach(row.nums, function (n) {
                            if ($scope.curTicket[row.name] && $scope.curTicket[row.name][n.trueValue] === true) {
                                letter += n.trueValue + ',';
                            }
                        });
                        if (letter.endsWith(',')) {
                            letter = letter.substring(0, letter.length - 1);
                        }
                        letter += ';';
                    });
                    letter = letter.substring(0, letter.length - 1);
                } else {
                    angular.forEach($scope.currentMethod.rows, function (row) {
                        angular.forEach(row.nums, function (n) {
                            if ($scope.curTicket[row.name] && $scope.curTicket[row.name][n.value] === true) {
                                letter += n.value + ($scope.currentMethod.separator ? $scope.currentMethod.separator : ',');
                            }
                        });
                        if (letter.endsWith(($scope.currentMethod.separator ? $scope.currentMethod.separator : ','))) {
                            letter = letter.substring(0, letter.length - 1);
                        }
                        letter += ';';
                    });
                    letter = letter.substring(0, letter.length - 1);
                    if ($scope.currentMethod.name === '1~5名定位胆') {
                        letter += ';;;;;';
                    }
                    if ($scope.currentMethod.name === '6~10名定位胆') {
                        letter = ';;;;;' + letter;
                    }
                }
            }

            $log.debug(letter);
            return letter;
        };
        $scope.checkCurrMultiple = function () {
            $scope.multi = $scope.multi.replace(/\D|^0/g, '');
            $scope.multi = $scope.multi > 65535 ? 65535 : $scope.multi;
            $scope.multi = $scope.multi < 1 ? 1 : $scope.multi;
        };
        $scope.selectingMny = function () {
            return $scope.selectingQty * 2 * Math.pow(0.1, $scope.mode) * $scope.multi;
        };
        $scope.tickets = [];
        $scope.add2basket = function () {
            if (!$scope.selectingQty) {
                return false;
            }
            var ticket = {
                title: $scope.currentTab.name + ($scope.currentTab.methodgroups[0].methods.length === 1 ? '' : '-' + $scope.currentMethod.name),
                method: $scope.currentMethod.code,
                num: $scope.curLetter(),
                multi: $scope.multi,
                mode: $scope.mode,
                qty: $scope.selectingQty,
                mny: $scope.selectingMny(),
                brokerage: ($scope.selBrokerage.max - $scope.selBrokerage.val) / 2
            };
            $scope.tickets.push(ticket);
            $scope.curTicket = {};
            $scope.luru.text = '';
            $scope.ticketSum();
        };
        $scope.removeTicket = function (index) {
            $scope.tickets.splice(index, 1);
        };
        $scope.$watchCollection('tickets', function (tickets) {
            if (tickets.length !== 1) {
                $scope.isChase = false;
            }
        });
        $scope.purchase = function () {
            if ($rootScope.d.user.freezeType == 1 || $rootScope.d.user.freezeType == 2) {
                alert('您不能进行游戏操作，请联系客服人员。');
                window.history.go(-1);
                return false;
            }
            $scope.trueTickets = [];
            var ticket = {
                originalNumbers: $scope.curLetter(),
                game: $scope.lotto.label,
                period: $scope.lotto.label !== 'MMC' ? $scope.curPeriod.signature : '',
                method: $scope.currentMethod.code,
                multi: $scope.multi,
                mode: $scope.mode,
                brokerage: ($scope.selBrokerage.max - $scope.selBrokerage.val) / 2
            };
            $scope.trueTickets.push(ticket);
            $http.post('/lotto/rest/ticket/batch', $scope.trueTickets).
                success(function (data) {
                    if ($scope.lotto.label == 'MMC') {
                        if (data[0].prize > 0) {
                            toastr.success(data[0].prize + '元', '恭喜中奖', {
                                closeButton: true,
                                closeHtml: '<button></button>'
                            });
                        } else {
                            toastr.info('您没中奖，请继续努力', '很遗憾', {
                                closeButton: true,
                                closeHtml: '<button></button>'
                            });
                        }
                        init();
                    }
                });
        };
        $scope.purchaseMulti = function () {
            $scope.trueTickets = [];
            if ($scope.isChase) {
                var t = $scope.tickets[0];
                var ticket = {
                    originalNumbers: t.num,
                    game: $scope.lotto.label,
                    period: $scope.curPeriod.signature,
                    method: t.method,
                    multi: t.multi,
                    mode: t.mode,
                    brokerage: t.brokerage
                };
                $scope.trueTickets.push(ticket);
                var fps = $filter('limitTo')($scope.futurePeriods, $scope.chase.chaseCount);
                angular.forEach(fps, function (fp) {
                    var ticket = {
                        originalNumbers: t.num,
                        game: $scope.lotto.label,
                        period: fp.signature,
                        method: t.method,
                        multi: fp.chaseMulti,
                        mode: t.mode,
                        brokerage: t.brokerage
                    };
                    $scope.trueTickets.push(ticket);
                });
            } else {
                angular.forEach($scope.tickets, function (t) {
                    var ticket = {
                        originalNumbers: t.num,
                        game: $scope.lotto.label,
                        period: $scope.curPeriod.signature,
                        method: t.method,
                        multi: t.multi,
                        mode: t.mode,
                        brokerage: t.brokerage
                    };
                    $scope.trueTickets.push(ticket);
                });
            }


            var submitUrl = $scope.isChase ? '/lotto/rest/ticket/bundle' : '/lotto/rest/ticket/batch';
            var submitData = $scope.isChase ? {
                cancelOnWin: $scope.cancelOnWin,
                tickets: $scope.trueTickets
            } : $scope.trueTickets;
            $http.post(submitUrl, submitData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).
                success(function (data) {
                    $scope.getCurrMny();
                    $scope.data = data;
                    var content = '',
                        successCount = 0,
                        failCount = 0,
                        reason = '';
                    $.each(data, function (i, n) {
                        if (n.code) {
                            successCount++;
                        } else {
                            failCount++;
                        }
                        if (n.reason) {
                            reason = n.reason;
                        }
                    });
                    if (failCount > 0) {
                        content = '成功' + successCount + '条，失败' + failCount + '条。原因:' + reason;
                    } else {
                        content = '恭喜购买成功！';

                    }
                    if (content.indexOf('余额') > -1) {
                        content = '您的彩票账户余额不足，请从大厅转账或者充值';
                        dialog({
                            title: '温馨提示',
                            content: content,
                            width: 300,
                            button: [{
                                value: '去充值页面',
                                callback: function () {
                                    window.location.hash = "trade/deposit";
                                },
                                autofocus: true
                            }, {
                                value: '去转账页面',
                                callback: function () {
                                    window.location.hash = "trade/transfer";
                                }
                            }, {
                                value: '重新选注'
                            }]
                        }).showModal();
                        return false;
                    }
                    dialog({
                        title: '温馨提示',
                        content: content,
                        width: 300
                    }).showModal();
                    $scope.removeTickets();
                    $scope.isChase = false;
                }).error(function () {
                    dialog({
                        title: '温馨提示',
                        content: '购买失败！',
                        width: 300
                    }).showModal();
                });
        };
        $scope.getFuturePeriods = function () {
            $http.get('/lotto/rest/period/' + $scope.lotto.label + '/future/120')
                .success(function (data) {
                    $scope.futurePeriods = data;
                });
        };
        $scope.$watch('curPeriod', function (currentPeriod, previous) {
            updateTime();
            if (currentPeriod) {
                $scope.getFuturePeriods();
                if (previous && currentPeriod !== previous) {
                    window.changeWarn = dialog({
                        title: '温馨提示',
                        content: '您好，前期已截止，投注时请确认您选择的期号'
                    }).showModal();
                    setTimeout(function () {
                        window.changeWarn.close().remove();
                    }, 5000);
                }
            }

        });
        $scope.$watch('previous', function (previous, last) {
            if (previous && previous.numbers) {
                $scope.raceing = true;

                if (last) window.raceAresult(previous.numbers.split(','));

                $timeout(function () {
                    $scope.raceing = false;
                    window.audio = document.getElementById('raceing_audio');
                    window.audio.pause();

                    previous.showNumbers = $scope.getNumbers(previous.numbers);
                    window.showNumbers = previous.showNumbers;
                    window.boardShow();
                }, last ? 20000 : 0);

            }
        });
        $scope.$watch('isChase', function (isChase) {
            if (isChase) {
                $scope.chase.chaseMulti = $scope.tickets[0].multi;
                $scope.cancelOnWin = false;
            }
        });

        function HaddleChase() {

            var fps = $filter('limitTo')($scope.futurePeriods, $scope.chase.chaseCount);
            $log.debug(fps);
            if ($scope.chase.chaseType === 'same') {
                angular.forEach(fps, function (fp) {
                    fp.chaseMulti = $scope.chase.chaseMulti;
                });
            }
            if ($scope.chase.chaseType === 'times') {
                var times = $scope.chase.chaseTimes;
                angular.forEach(fps, function (fp, index) {
                    fp.chaseMulti = times;
                    if (index % $scope.chase.chaseGutter === 0) {
                        times = times * $scope.chase.chaseTimes;
                    }
                });
            }
            $scope.chaseSum();
        }

        $scope.$watch('chase', HaddleChase, true);
        $scope.$watchCollection('futurePeriods', HaddleChase);
        $scope.loadRecords = function () {
            $scope.showtag = 'record';
            $http.get('/lotto/rest/ticket/recent/' + $scope.lotto.label).success(function (data) {
                $scope.records = data;
            });
        }
        $scope.loadRecords();
        $scope.vocabulary = {};
        $scope.vocabulary.name = function (code) {
            return window.vocs[code];
        };
        $scope.chinese = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
        $scope.chaseSum = function () {
            if (!$scope.isChase) {
                return false;
            }
            var fps = $filter('limitTo')($scope.futurePeriods, $scope.chase.chaseCount);
            var sum = 0;
            angular.forEach(fps, function (p) {
                sum += p.chaseMulti / $scope.tickets[0].multi * $scope.tickets[0].mny;
            });
            $scope.chase_sum = sum;
            // $log.log($scope.chaseResult);
        }
        $scope.ticketSum = function () {
            if ($scope.tickets.length === 0) {
                return false;
            }
            var sum = 0,
                qty = 0;
            angular.forEach($scope.tickets, function (t) {
                sum += t.mny;
                qty += t.qty * 1;
            });
            $scope.t_mny_sum = sum;
            $scope.t_qty_sum = qty;
            // $log.log($scope.chaseResult);
        }
        $scope.mute = function () {
            $scope.muted = window.audio.muted = !window.audio.muted;
        }
        $scope.getCurrMny = function () {
            $http.get('/lotto/rest/prefer').success(function (data) {
                $scope.currMny = data.asset;
            });
        };
        $scope.getCurrMny();
    }).filter('hasNumber', function () {
        return function (items) {
            if (items) {
                var filtered = [];
                $.each(items, function (i, n) {
                    if (n.numbers) {
                        filtered.push(n);
                    }
                });
                return filtered;
            }
        };
    });