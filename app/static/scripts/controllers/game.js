angular.module('newpApp').controller('GameCtrl', function ($http, $scope, $rootScope, $routeParams, $log, $interval, $timeout, $filter, repeatGet, toastr) {

    $('.cycle-slideshow2').cycle();

    $rootScope.nav = 'game';
    $scope.Math = window.Math;
    // $scope.moment = window.moment;
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

    $scope.resetClick = function () {
        $('input[id=ifile]').click();
    }
    $scope.removeDuplication = function () {
        if ($scope.luru.text) {
            var ts = $scope.luru.text.split(" ");
            var key = new Object();
            for (var i = 0; i < ts.length; i++) {
                if (key[ts[i]] != ts[i]) {
                    key[ts[i]] = ts[i];
                }
            }

        }
        var tmpts = "";
        for (var k in key) {
            if (tmpts != "") {
                tmpts += " ";
            }
            tmpts += k;
        }
        $scope.luru.text = tmpts;
    }

    $scope.chase.chaseCount = 0;

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
                $.each(data, function (i, period) {
                    if (period.status != 'FETCH_FAILED' && period.status != 'LOTTERY' && period.status != 'REDEEMED' && period.status != 'PRIZE_ISSUED' && period.status != 'BUNDLE_DEALT' && period.status != 'PRIZE_CANCELED') {
                        period.numbers = '';
                    }

                });
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
        window.changeWarn = dialog({
            title: '温馨提示',
            content: '您好，前期已截止，投注时请确认您选择的期号'
        }).showModal();
        setTimeout(function () {
            window.changeWarn.close().remove();
        }, 5000);
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
    }, 1000);

    function lottoing(delay) {
        repeatGet.clear();
        repeatGet.getNumbers('/lotto/rest/period/' + $scope.lotto.label + '/single/' + $scope.previous.signature, 5000, 60, delay ? $scope.previous.game.offSaleAdvance * 1000 : 0)
        .then(function (data, status) {
            $log.log('上一期', data, status);
            $scope.previous = data;
            setTimeout(function () {
                $scope.loadRecords(true);
            }, 1000);
            $http.get('/lotto/rest/period/' + $scope.lotto.label + '/next').success(function (data, status) {
                $log.log('下一期', data, status);
                $scope.next = data;
            });
            $http.get('/lotto/rest/period/' + $scope.lotto.label + '/recent/8').success(function (data) {
                $.each(data, function (i, period) {
                    if (period.status != 'FETCH_FAILED' && period.status != 'LOTTERY' && period.status != 'REDEEMED' && period.status != 'PRIZE_ISSUED' && period.status != 'BUNDLE_DEALT' && period.status != 'PRIZE_CANCELED') {
                        period.numbers = '';
                    }
                });
                $scope.recent = data;
            });
        }, function (data, status) {
            $log.log(data, status);
        });
    }

    $scope.selectLotto = function (lotto) {
        $rootScope.curLotto = lotto;
        $scope.lotto = window.lottos[lotto];
        $rootScope.cur.lotto = lotto;
        $scope.currentTab = $scope.lotto.tabs[0];
        $scope.currGroup = $scope.currentTab.methodgroups[0];
        $scope.currentMethod = $scope.currentTab.methodgroups[0].methods[0];
        $scope.lottoPeriodsCount = $scope.lotto.periodCounts ? $scope.lotto.periodCounts : $scope.lotto.totalPeriods;
        //styles:
        /*if (lotto.indexOf('11x5') > -1) {
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
            $scope.qiu_container = {
                'margin-left': '10px',
                'margin-top': '15px'
            };
            $scope.qiu_lottoed = 'qiu_shi';
            $scope.style_mid = {
                'width': '380px'
            };
        }*/
        /*if ($scope.lotto.number === 3) {
            $scope.qiu_container = {
                'margin-left': '80px'
            };
        }*/

        init();
    };
    $scope.selectLotto($routeParams.gameid);
    $scope.selTab = function (tab) {
        $scope.currentTab = tab;
        $scope.currGroup = $scope.currentTab.methodgroups[0];
        $scope.currentMethod = $scope.currGroup.methods[0];
        $scope.curTicket = {};
    };
    $scope.selMethod = function (group, method) {
        $scope.currGroup = group;
        $scope.currentMethod = method;
        $scope.curTicket = {};
        $scope.luru.text = '';
    };
    $scope.curTicket = {}; //init
    $scope.selNum = function (row, n) {
        // $log.debug(row, n);
        if (!$scope.curTicket[row.name]) {
            $scope.curTicket[row.name] = {};
        }
        if ($scope.curTicket[row.name][n.value] === true) {
            $scope.curTicket[row.name][n.value] = false;
        } else {
            $scope.curTicket[row.name][n.value] = true;
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
        $scope.ticketSum();
    };
    $scope.$watch('curLetter()', function () {
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
    $scope.checkSelectingLegal = function (immediate) {
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
                }).success(function (data) {
                    $scope.selectingQty = data;
                }).error(function (data) {
                    if (data.indexOf('禁用') > -1) {
                        dialog({
                            title: '温馨提示',
                            content: '此玩法暂时不可用!'
                        }).showModal();
                    }

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

        if (immediate) {
            return check();
        }

        if ($scope.checkSelectingTimer) {
            $timeout.cancel($scope.checkSelectingTimer);
        }
        $scope.checkSelectingTimer = $timeout(function () {
            check();
        }, 600);
    };

    function adjustLuru(t) {
        if (!t) {
            return false;
        }
        var newt = t;
        if (t.endsWith(';') || t.endsWith(',') || t.endsWith(' ')) {
            newt = t.substring(0, t.length - 1);
        }

        if ($scope.lotto.maxNumber > 9) {
            newt = newt.replace(/\s*[,;\r\n]+\s*/g, ';');
            newt = newt.replace(/\s+/g, ',');
        } else {
            newt = newt.replace(/[\s,;\r\n]+/g, ';');

            var newnewt = '';
            for (var i = 0; i < newt.length; i++) {
                if (/^\d$/.test(newt[i]) && i < newt.length - 1 && /^\d$/.test(newt[i + 1])) {
                    newnewt += newt[i] + ',';
                } else {
                    newnewt += newt[i];
                }
            }
            newt = newnewt;
        }
        if (newt.endsWith(';') || newt.endsWith(',') || newt.endsWith(' ')) {
            newt = newt.substring(0, newt.length - 1);
        }
        return newt;
    }

    $scope.curLetter = function () {
        var letter = '';
        if ($scope.currentMethod.spec === 'luru') {
            letter = adjustLuru($scope.luru.text);
        } else {
            angular.forEach($scope.currentMethod.rows, function (row) {
                angular.forEach(row.nums, function (n) {
                    if ($scope.curTicket[row.name] && $scope.curTicket[row.name][n.value] === true) {
                        letter += ($scope.currentMethod.spec === 'number' ? n.value : n.trueValue) + ($scope.currentMethod.seperator ? $scope.currentMethod.seperator : ',');
                    }
                });
                if (letter.endsWith(($scope.currentMethod.seperator ? $scope.currentMethod.seperator : ','))) {
                    letter = letter.substring(0, letter.length - 1);
                }
                letter += ';';
            });
            letter = letter.substring(0, letter.length - 1);
        }
        //handle positions
        var pl = '';
        var positions = $scope.currentMethod.positions;
        if (positions) {
            pl += '|';
            $.each(positions, function (i, n) {
                if (n.checked) {
                    pl += n.value + ',';
                }
            });
            pl = pl.slice(0, pl.length - 1);
            letter += pl;
        }
        //$log.debug(letter);
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
        if ($scope.selectingQty) {
        } else {
            dialog({
                title: '提示',
                content: '<div class="dialog-text clearfix"><div class="dialog-warn"></div>号码选择不完整，请重新选择！</div>',
                button: [
                    {
                        value: '退出'
                    }
                ],
                quickClose: true
            }).showModal();
            return false;
        }
        var ticket = {
            title: $scope.currentTab.name + $scope.currGroup.name + '-' + $scope.currentMethod.name,
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
        $scope.ticketSum();
    };
    $scope.removeTicket = function (index) {
        $scope.tickets.splice(index, 1);
        $scope.ticketSum();
    };
    $scope.ticketSum = function () {
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
    $scope.$watchCollection('tickets', function (tickets) {
        if (tickets.length !== 1) {
            $log.log('more than one ticket');
            $scope.isChase = false;
        }
    });
    $scope.$watchCollection('recent', function (recent) {
        if (!recent) {
            return false;
        }
        $.each(recent, function (i, n) {
            if (!n.numbers) {
                return true;
            }
            n.showNumbers = $scope.getNumbers(n.numbers);
        });
    });
    $scope.purchaseConfirm = function () {
        window.dialog({
            title: '确认 ' + $scope.lotto.name + ($scope.isChase ? ' 追号 ' + $scope.chase.chaseCount + ' 期(从' + $scope.chase.startp.signature + '期)' : '第' + $scope.chase.startp.signature + '期'),
            okValue: '确认投注',
            ok: function () {
                $scope.$apply(function () {
                    $scope.purchaseMulti();
                });
            },
            cancelValue: '取消',
            content: $('#purConfirm').clone().html()
        }).showModal();
    };

    $scope.purchaseMulti = function () {
        if ($scope.tickets.length < 1) {
            dialog({
                title: '温馨提示',
                content: '请先选择注单',
                quickClose: true
            }).show();
            return false;
        }
        $scope.trueTickets = [];
        if ($scope.isChase) {
            var t = $scope.tickets[0];
            // var ticket = {
            //   originalNumbers: t.num,
            //   game: $scope.lotto.label,
            //   period: $scope.curPeriod.signature,
            //   method: t.method,
            //   multi: t.multi,
            //   mode: t.mode,
            //   brokerage: t.brokerage
            // };
            // $scope.trueTickets.push(ticket);
            var futures = $filter('after')($scope.futurePeriods, $scope.chase.startp);
            var fps = $filter('limitTo')(futures, $scope.chase.chaseCount);
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
                    period: $scope.chase.startp.signature,
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
        $http.post(submitUrl, submitData).
            success(function (data) {
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
                $scope.loadRecords(true);
            }).error(function () {
                dialog({
                    title: '温馨提示',
                    content: '购买失败！',
                    width: 300
                }).showModal();
            });
    };

    function FuturehasCurrent(futures, current) {
        var r = false;
        $.each(futures, function (i, n) {
            if (n.id === current.id) {
                r = true;
            }
        })
        return r;
    }

    $scope.getFuturePeriods = function () {
        $http.get('/lotto/rest/period/' + $scope.lotto.label + '/future/119')
            .success(function (data) {
                if (!FuturehasCurrent(data, $scope.curPeriod)) {
                    data.unshift($scope.curPeriod);
                }
                $scope.futurePeriods = data;
                $scope.chase.startp = $scope.futurePeriods[0];
            });
    };
    $scope.$watch('curPeriod', function (currentPeriod) {
        updateTime();
        if (currentPeriod) {
            $scope.getFuturePeriods();
        }
    });
    $scope.$watch('previous', function (previous) {
        if (previous && previous.numbers) {
            previous.showNumbers = $scope.getNumbers(previous.numbers);
        }
    });
    $scope.$watch('isChase', function (isChase) {
        if (isChase) {
            if ($scope.tickets.length < 1) {
                dialog({
                    title: '温馨提示',
                    content: '请先选择注单',
                    quickClose: true
                }).show();
                $scope.isChase = false;
            }
            $scope.chase.chaseMulti = $scope.tickets[0].multi;
            $scope.cancelOnWin = false;
        }
    });

    function HaddleChase() {
        var futures = $filter('after')($scope.futurePeriods, $scope.chase.startp);
        var fps = $filter('limitTo')(futures, $scope.chase.chaseCount);
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

    $scope.chaseSum = function () {
        $log.log('sum chase');
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
    };
    $scope.$watch('chase', HaddleChase, true);
    $scope.$watchCollection('futurePeriods', HaddleChase, true);
    $scope.loadRecords = function (hideloading) {
        if (!hideloading) {
            window.loadD = dialog({
                quickClose: true
            }).show($('#load_trigger')[0]);
        }
        $http.get('/lotto/rest/ticket/recent/' + $scope.lotto.label).success(function (data) {
            $scope.records = data;
            if (!hideloading) {
                window.loadD.close().remove();
            }
        });
    }
    $scope.loadRecords(true);
    $scope.vocabulary = {};
    $scope.vocabulary.name = function (code) {
        return window.vocs[code] || code;
    };
    $scope.vocabulary.number = function (code, number) {
        return window.vocs.numbers[code][number] || number;
    };
    $scope.showTicket = function (t) {
        $scope.viewingTicket = t;
        setTimeout(function () {
            window.dialog({
                title: '注单查看',
                content: $('#vt').clone().html()
            }).showModal();
        }, 100);
    };
    $scope.showNumber = function (r) {
        $('.num-tip').hide();
        $('.shownum' + r.code).show();
    };
    $scope.dismissNumber = function (r) {
        $('.shownum' + r.code).hide();
    };
    $scope.dismantle = function (ticket) {
        dialog({
            title: '撤单' + ticket.code,
            content: '确定要撤单？',
            ok: function () {
                $http.delete('/lotto/rest/ticket/' + ticket.code).success(function () {
                    dialog({
                        title: '操作成功',
                        content: '撤单成功'
                    }).showModal();
                    $scope.loadRecords();
                    $scope.getCurrMny();
                }).error(function (r) {
                    dialog({
                        title: '温馨提示',
                        content: r
                    }).showModal();
                });
            },
            cancel: function () {
            },
            okValue: '确定',
            cancelValue: '取消'
        }).showModal();
    };
    $scope.d1his = function (label) {
        return window.d1his[label] || false;
    };
}).filter('after', function () {
    return function (items, futurep) {
        if (items) {
            var filtered = [];
            $.each(items, function (i, item) {
                if (item.id >= futurep.id) {
                    filtered.push(item);
                }
            });
            return filtered;
        }
    };
}).directive('fileReader', function ($rootScope) {
    return {
        scope: {
            fileReader: "="
        },
        link: function (scope, element) {
            $(element).on('change', function (changeEvent) {
                var files = changeEvent.target.files;
                if (files.length) {
                    var r = new FileReader();
                    r.onload = function (e) {
                        var contents = e.target.result;
                        scope.$apply(function () {
                            scope.fileReader = contents;
                        });
                    };
                    r.readAsText(files[0]);
                }
            }).on('click', function (clickEvent) {
                clickEvent.target.value = "";
            });
        }
    };
});
