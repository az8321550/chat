angular.module('newpApp').controller('DataCtrl', function ($scope, $rootScope, $http, $location, $routeParams, $log) {
    $scope.bigtab = 1;
    if ($routeParams.type === 'ticket') {
        $rootScope.nav = 'record';
    } else {
        $rootScope.nav = 'data';
    }
    $rootScope.cur.nav = 'data';
    $scope.tab = $routeParams.type;
    $scope.$watch('tab', function (tab) {
        if (tab === 'team') {
            setTimeout(function () {
                $http.get('/lobby/app/kirinResource/funds/teamsum?userName=' + $rootScope.d.user.userName).success(function (r) {
                    $scope.subTeamInfo = r.data;
                });
            }, $rootScope.d.user ? 0 : 1000);
        }
    });
    var moment = window.moment;
    $scope.startDate = moment().format('YYYY-MM-DD');
    $scope.endDate = moment().format('YYYY-MM-DD');
    $scope.vocabulary = {};
    $scope.vocabulary.name = function (code) {
        return window.vocs[code] || code;
    };

    var dialog = window.dialog;
    var gameNameSrc = [];
    var gameMethodSrc = [];
    var gameMethodkey = {};
    gameNameSrc.push({
        name: '全部',
        code: ''
    });
    gameMethodSrc.push({
        name: '全部',
        code: ''
    });
    for (var k in lottos) {

        gameNameSrc.push({
            name: lottos[k].name,
            code: lottos[k].label
        });
        var tabs = lottos[k].tabs;
        for (var i = 0; i < tabs.length; i++) {
            var methodgroups = tabs[i].methodgroups;

            for (var j = 0; j < methodgroups.length; j++) {
                var methods = methodgroups[j].methods;
                for (var a = 0; a < methods.length; a++) {
                    if (gameMethodkey[methods[a].code] == null) {
                        gameMethodkey[methods[a].code] = methods[a].code;
                        gameMethodSrc.push({
                            name: tabs[i].name + methodgroups[j].name + methods[a].name,
                            code: methods[a].code
                        });
                    }
                }

            }
        }
    }
    $scope.search = {
        gameNames: gameNameSrc,
        gameMethods: gameMethodSrc,
        userRange: [{
            name: '全部',
            value: 'ALL'
        }, {
            name: '自身',
            value: 'SELF'
        }, {
            name: '直接下级',
            value: 'SUBORDINATE'
        }, {
            name: '全部下级',
            value: 'SUBORDINATES'
        }],

        gameConditions: [{
            name: '游戏名称',
            value: 'game',
            options: []
        }, {
            name: '玩法',
            value: 'method',
            options: []
        }, {
            name: '奖期',
            value: 'period',
            options: []
        }, {
            name: '模式',
            value: 'mode',
            options: [{
                name: '全部',
                value: 'ALL'
            }, {
                name: '元',
                value: 'YUAN'
            }, {
                name: '角',
                value: 'JIAO'
            }, {
                name: '分',
                value: 'FEN'
            }]
        }, {
            name: '状态',
            value: 'status',
            options: [{
                name: '全部',
                value: 'ALL'
            }, {
                name: '已中奖',
                value: 'LOTTERY'
            }, {
                name: '未中奖',
                value: 'SEALED'
            }, {
                name: '未开奖',
                value: 'ORDERED'
            }, {
                name: '已撤单',
                value: 'CANCELED'
            }]
        }]
    };


    var DATE_FORMAT = 'YYYY-MM-DD';

    $scope.changegame = function (game) {
        $log.log(game);
    }


    function initFilter() {
        $scope.methods = [];
        $scope.games = [];
        $scope.games.push({
            name: '全部',
            value: 'ALL'
        });
        $scope.methods.push({
            name: '全部',
            value: 'ALL'
        });

        $scope.periods = [];
        $scope.periods.push({
            name: '全部',
            value: 'ALL'
        });
        var gotGames = {},
            gotMethods = {},
            gotPeriods = {};

        $.each($scope.results, function (i, r) {
            gotGames[r.game] = r.game;
            gotMethods[r.method] = r.method;
            gotPeriods[r.period] = r.period;
        });
        $.each(gotGames, function (i, m) {
            $scope.games.push({
                name: $scope.vocabulary.name(m),
                value: m
            });
        });
        $.each(gotMethods, function (i, m) {
            $scope.methods.push({
                name: $scope.vocabulary.name(m),
                value: m
            });
        });
        $.each(gotPeriods, function (i, m) {
            $scope.periods.push({
                name: m,
                value: m
            });
        });
        $scope.search.gameConditions[0] = {
            name: '游戏',
            value: 'game',
            options: $scope.games
        };
        $scope.search.gameConditions[1] = {
            name: '玩法',
            value: 'method',
            options: $scope.methods
        };
        $scope.search.gameConditions[2] = {
            name: '奖期',
            value: 'period',
            options: $scope.periods
        };
        $scope.game = $scope.games[0].value;
        $scope.method = $scope.methods[0].value;
        $scope.period = $scope.periods[0].value;
    }

    $scope.results = [];
    $scope.go = function () {
        $scope.startDate = $('#d4311').val();
        $scope.endDate = $('#d4312').val();
        if (!$scope.startDate || !$scope.endDate) {
            dialog({
                title: '温馨提示',
                content: '请选择时间'
            }).showModal();
            return false;
        }
        var pageidx = $scope.page_index;
        if (pageidx == undefined) {
            pageidx = 1;
        }
        var qp = '?startDate=' + $scope.startDate + '&endDate=' + $scope.endDate + '&scope=' + $scope.search.uoption.value + '&items_per_page=20&page_index=' + pageidx + '&gameName=' + $scope.search.gameName.code + '&gameMethod=' + $scope.search.gameMethod.code;
        if ($scope.subordinate) {
            qp += '&subordinate=' + $scope.subordinate;
        } else if ($scope.search.uoption.value === 'SUBORDINATE') {
            // dialog({
            //   title: '温馨提示',
            //   content: '请填写下级用户名'
            // }).showModal();
            // return false;
        }
        $http.get('/lotto/rest/ticket/queryPage' + qp).
            success(function (data) {
                $scope.isSearching = false;
                $scope.results = data.data;
                $scope.page_total = parseInt(data.totalPage);
                $scope.page_index = parseInt(data.page);
                $scope.result_count = parseInt(data.count);
                initFilter();
            }).error(function (r) {
                $scope.isSearching = false;
                dialog({
                    title: '温馨提示',
                    content: r
                }).showModal();
            });
    };


    $scope.pre = function () {
        $scope.page_index--;
        $scope.go();
    }
    $scope.next = function () {
        $scope.page_index++;
        $scope.go();
    }

    $scope.getCancel = function (range) {
        var url = '/lotto/rest/ticket/query/cancel';
        if (range === 90) {
            url += '/90';
        } else {
            url += '/30';
        }
        $http.get(url).
            success(function (data) {
                $scope.results = data;
            }).error(function (r) {
                dialog({
                    title: '温馨提示',
                    content: r
                }).showModal();
            });
    }
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
                    $scope.go();
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
    $scope.dismantle2 = function (ticket) {
        dialog({
            title: '撤单' + ticket.code,
            content: '确定要撤单？',
            ok: function () {
                $http.delete('/lotto/rest/ticket/' + ticket.code).success(function () {
                    dialog({
                        title: '操作成功',
                        content: '撤单成功'
                    }).showModal();
                    $scope.go();
                }).error(function (r) {
                    dialog({
                        title: '温馨提示',
                        content: r
                    }).showModal();
                });
                $http.delete('/lotto/rest/ticket/' + ticket.code).success(function () {
                    dialog({
                        title: '操作成功',
                        content: '撤单成功'
                    }).showModal();
                    $scope.go();
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

    $scope.showTicket = function (t) {
        $scope.viewingTicket = t;
        setTimeout(function () {
            window.dialog({
                title: '注单查看',
                content: $('#vt').clone().html()
            }).showModal();
        }, 100);
    };
    $scope.showTranRecord = function (v) {

        $scope.vtran = v;
        setTimeout(function () {
            window.dialog({
                title: 'AG帐变查看',
                content: $('#tranvt').clone().html()
            }).showModal();
        }, 100);

    };
    $scope.showBetRecord = function (v) {

        $scope.vbet = v;
        setTimeout(function () {
            window.dialog({
                title: 'AG游戏记录查看',
                content: $('#betvt').clone().html()
            }).showModal();
        }, 100);

    };
    $scope.showChangeTicket = function (change) {
        $http.get('/lotto/rest/asset/' + change.id + '/source').success(function (t) {

            $scope.viewingTicket = t;
            setTimeout(function () {
                window.dialog({
                    title: '注单查看',
                    content: $('#vt').clone().html()
                }).showModal();
            }, 100);
        });
    };
    $scope.showBundle = function (r) {
        $http.get('/lotto/rest/ticket/bundle/' + r.bundle).success(function (data) {
            window.chased = window.dialog({
                title: '追号查看',

                button: [{
                    value: '追号撤单',
                    callback: function () {
                        $scope.cancelBundle(r.bundle);
                    }
                }, {
                    value: '关闭',
                    autofocus: true
                }]
            }).showModal();
            $scope.bundles = data;
            setTimeout(function () {
                window.chased.content($('#ct').clone().html());
            }, 500);
        });
    };
    $scope.cancelBundle = function (bundle) {
        window.dbundle = dialog({
            title: '请稍后',
            content: '撤单中'
        }).showModal();
        $http.delete('/lotto/rest/ticket/bundle/' + bundle).success(function (d) {
            $scope.go();
            window.dbundle.content('撤单成功');
            setTimeout(function () {
                window.dbundle.close().remove();
            }, 1000);
            $log.log(d);

        });
    }
    $scope.showNumber = function (r) {
        $('.num-tip').hide();
        $('.shownum' + r.code).show();
    };
    $scope.dismissNumber = function (r) {
        $('.shownum' + r.code).hide();
    };
    $scope.moment = moment;
    if ($routeParams.type === 'asset') {
        $scope.types = [{
            name: '加入游戏',
            label: '加入游戏'
        }, {
            name: '投注返点',
            label: '投注返点'
        }, {
            name: '团队返点',
            label: '团队返点'
        }, {
            name: '奖金派送',
            label: '奖金派送'
        }, {
            name: '撤单退钱',
            label: '撤单退钱'
        }, {
            name: '大厅转账',
            label: '大厅转账'
        }];
    }
    if ($routeParams.type === 'lasset') {
        $scope.types = [{
            name: '在线充值',
            label: '在线充值'
        }, {
            name: '申请提款',
            label: '申请提款'
        }, {
            name: '撤销提款',
            label: '撤销提款'
        }, {
            name: '系统充值',
            label: '系统充值'
        }, {
            name: '系统扣款',
            label: '系统扣款'
        }, {
            name: '活动奖励',
            label: '活动奖励'
        }];
        $scope.lobbyTypes = [{
            name: '在线充值',
            label: 'ZXCZ'
        }, {
            name: '申请提款',
            label: 'WYTK'
        }, {
            name: '撤销提款',
            label: 'CXTK'
        }, {
            name: '系统充值',
            label: 'RGCZ'
        }, {
            name: '系统扣款',
            label: 'XTKJ'
        }, {
            name: '活动奖励',
            label: 'HDJL'
        }, {
            name: '上级充值',
            label: 'SJCZ'
        }, {
            name: '为下级充值',
            label: 'WXJCZ'
        }, {
            name: '转入大厅',
            label: 'ZRDT'
        }, {
            name: '转出大厅',
            label: 'ZCDT'
        }, {
            name: 'AG反水',
            label: 'AGFS'
        }];
    }
    $scope.searchasset = {
        userRange: [{
            name: '全部',
            value: 'ALL',
            tradvalue: 'ALL'
        }, {
            name: '自身',
            value: 'SELF',
            tradvalue: 'self'
        }, {
            name: '直接下级',
            value: 'SUBORDINATE',
            tradvalue: 'dsub'
        }, {
            name: '全部下级',
            value: 'SUBORDINATES',
            tradvalue: 'allsub'
        }]
    };

    var DATE_FORMAT = 'YYYY-MM-DD';
    $scope.results = [];
    $scope.goAsset = function () {

        $scope.startDate = $('#asset_st').val();
        $scope.endDate = $('#asset_et').val();
        if (!$scope.startDate || !$scope.endDate) {
            dialog({
                title: '温馨提示',
                content: '请选择时间'
            }).showModal();
            return false;
        }
        var pageidx = $scope.page_index;
        if (pageidx == undefined) {
            pageidx = 1;
        }
        $scope.selectedValues = undefined;
        var perPage = 20;
        var qp = '?startDate=' + $scope.startDate + '&endDate=' + $scope.endDate + '&scope=' + $scope.searchasset.uoption.value + '&items_per_page=20&page_index=' + pageidx;

        if ($scope.subordinate) {
            qp += '&subordinate=' + $scope.subordinate;
        } else if ($scope.search.uoption.value === 'SUBORDINATE') {
            // dialog({
            //   title: '温馨提示',
            //   content: '请填写下级用户名'
            // }).showModal();
            // return false;
        }
        window.loading = dialog({
            content: '查询中...'
        }).showModal();
        if ($routeParams.type === 'asset') {
            $http.get('/lotto/rest/asset/queryPage' + qp).
                success(function (data) {
                    $log.debug(data);
                    $scope.results = [];
                    $scope.result_count = parseInt(data.count);
                    $scope.page_total = parseInt(data.totalPage);
                    $scope.page_index = parseInt(data.page);
                    var data = data.data;
                    $.each(data, function (i, n) {
                        n.created = moment(n.created).format('YYYY-MM-DD HH:mm:ss');
                        n.cate = '彩票';
                        if (n.charger === 'lobby_admin') {
                            n.memo = '大厅转账';
                        }
                        n.label = $scope.vocabulary.name(n.memo.substring(0, 4));
                        $scope.results.push(n);
                    });
                    window.loading.close().remove();
                }).error(function (data) {
                    dialog({
                        title: '温馨提示',
                        content: data
                    }).showModal();
                    window.loading.close().remove();
                });
        }
        if ($routeParams.type === 'lasset') {
            var types = $scope.fundinTypes;
            $log.log('查询条件', types);
            if (!types) {
                types = [];
                $.each($scope.lobbyTypes, function (i, n) {
                    types.push(n.label);
                });
            }
            $http.get('/lobby/app/kirinResource/funds/tradeRecords', {
                params: {
                    beginTime: '00:00',
                    endTime: '23:59',
                    beginDate: moment($scope.startDate).format('YYYY.MM.DD'),
                    endDate: moment($scope.endDate).format('YYYY.MM.DD'),
                    dateRange: 'customDate',
                    minAmount: '',
                    maxAmount: '',
                    tradeScopes: [$scope.searchasset.uoption.tradvalue],
                    username: $scope.subordinate ? $scope.subordinate : '',
                    fundinType: types,
                    fundoutType: [],
                    pageIndex: pageidx,
                    perPage: perPage
                }
            }).success(function (r) {
                $scope.results = [];
                window.loading.close().remove();
                if (r.status === '1') {
                    var count = r.count;
                    $scope.result_count = count;
                    if (count % perPage == 0) {
                        $scope.page_total = parseInt(count / perPage);
                    } else {
                        $scope.page_total = parseInt(count / perPage) + 1;
                    }
                    $.each(r.data, function (i, n) {
                        $scope.results.push({
                            cate: '大厅',
                            owner: n.userName,
                            created: moment(n.createTime).format('YYYY-MM-DD HH:mm:ss'),
                            change: n.amount,
                            pre: n.preAvailable,
                            post: n.postAvailable,
                            memo: n.subject,
                            label: $scope.vocabulary.name(n.subject),
                            id: n.actId,
                            to_uid: n.to_uid
                        });
                    });
                    $.each($scope.results, function (i, n) {
                        if (n.memo === '为下级充值') {
                            $http.get('/lobby/app/kirinResource/personal/username/' + n.to_uid).success(function (r) {
                                n.memo = '为' + r.data + '充值';
                            });
                        }
                    });
                }
            }).error(function () {
                window.loading.close().remove();
            });
        }
    };
    $scope.preAsset = function () {
        $scope.page_index--;
        $scope.goAsset();
    }
    $scope.nextAsset = function () {
        $scope.page_index++;
        $scope.goAsset();
    }


    $scope.showTicket = function (t) {
        $scope.viewingTicket = t;
        setTimeout(function () {
            window.dialog({
                title: '注单查看',
                content: $('#vt').clone().html()
            }).showModal();
        }, 100);
    };

    var searchbegindate;
    var searchenddate;


    $scope.goprofit = function (username) {

        $scope.beginDay = $('#p_sd').val();
        $scope.endDay = $('#p_ed').val();

        if (!$scope.beginDay || !$scope.endDay) {
            window.alert('时间段不能为空!');
            return;
        }
        if ($scope.tab === 'profit' && moment($scope.endDay).add(1, 'days').add(3, 'hours').add(15, 'minutes').toDate().getTime() > moment().toDate().getTime()) {
            dialog({
                title: '温馨提示',
                quickClose: true,
                content: $scope.endDay + '的盈亏数据尚未生成，查询结果中不包含' + $scope.endDay + '的盈亏数据。'
            }).show();
        }

        var qp = '?search=true';

        if ($scope.subordinate !== undefined && $scope.subordinate !== '') {
            //qp+= '&username='+$scope.subordinate;
            //searchname=$scope.subordinate;
        }
        if ($scope.beginDay !== undefined) {
            qp += '&beginday=' + $scope.beginDay;
            searchbegindate = $scope.beginDay;
        }

        if ($scope.endDay !== undefined) {
            qp += '&endday=' + $scope.endDay;
            searchenddate = $scope.endDay;
        }
        if (username) {
            qp += '&username=' + username;
        } else {
            if ($scope.subordinate !== undefined && $scope.subordinate !== '') {
                qp += '&username=' + $scope.subordinate;
                username = $scope.subordinate;
            }
        }


        window.going = dialog({
            content: '查询中...',
            close: function () {
                return false;
            }
        }).showModal();
        var purl = '/lobby/app/kirinResource/funds/getProfitOfUser';
        if ($scope.tab === 'AgProfit') {
            purl = '/lobby/app/kirinResource/funds/getAgProfitOfUser';
        }
        $http.get(purl + qp).
            success(function (data) {
                $log.debug(data);
                $scope.results = {};
                if (data.data[0] && !((username == undefined || username == 'ZZROOT') && $rootScope.d.user.userName == 'ZZROOT')) {
                    $scope.results.firstrow = data.data[0];
                }
                $scope.data = data.data;
                $scope.results.total = {
                    'groupRecharge': 0.0,
                    'groupWithdraw': 0.0,
                    'groupSaleAmount': 0.0,
                    'groupBrokerageAmount': 0.0,
                    'groupLotteryAmount': 0.0,
                    'groupProfit': 0.0
                };
                $.each($scope.data, function (i, n) {
                    if (i == 0) {
                        $scope.results.total.groupRecharge += n.recharge;
                        $scope.results.total.groupWithdraw += n.withdraw;
                        $scope.results.total.groupSaleAmount += n.saleAmount;
                        $scope.results.total.groupBrokerageAmount += n.brokerageAmount;
                        $scope.results.total.groupLotteryAmount += n.lotteryAmount;
                        $scope.results.total.groupProfit += n.profit;
                    } else {
                        $scope.results.total.groupRecharge += n.groupRecharge;
                        $scope.results.total.groupWithdraw += n.groupWithdraw;
                        $scope.results.total.groupSaleAmount += n.groupSaleAmount;
                        $scope.results.total.groupBrokerageAmount += n.groupBrokerageAmount;
                        $scope.results.total.groupLotteryAmount += n.groupLotteryAmount;
                        $scope.results.total.groupProfit += n.groupProfit;
                    }
                    if (i == 0 && !((username == undefined || username == 'ZZROOT') && $rootScope.d.user.userName == 'ZZROOT')) {
                        return true;
                    }
                    // $http.get('/lobby/app/kirinResource/org/hasChild?username=' + n.codeKey).success(function(r) {
                    //   n.hasChildren = r.data;
                    // });
                });
                if (username) {
                    $http.get('/lobby/app/kirinResource/org/fatherpaths?username=' + username).success(function (r) {
                        $scope.paths = r.data;
                    });
                }

                window.going.close().remove();
            }).error(function () {
                window.going.close().remove();
            });
    };

    $scope.agtrantypes = [{
        label: '1',
        name: '已结算'
    }, {
        label: '0',
        name: '未结算'
    }, {
        label: '-1',
        name: '重置试玩额度'
    }, {
        label: '-2',
        name: '注单被篡改'
    }, {
        label: '-8',
        name: '取消指定局注单'
    }, {
        label: '-9',
        name: '取消注单'
    }];

    $scope.agbettypes = [{
        label: '1',
        name: '已结算'
    }, {
        label: '0',
        name: '未结算'
    }, {
        label: '-1',
        name: '重置试玩额度'
    }, {
        label: '-2',
        name: '注单被篡改'
    }, {
        label: '-8',
        name: '取消指定局注单'
    }, {
        label: '-9',
        name: '取消注单'
    }];

    $scope.goAgAsset = function () {

        var perPage = 20;
        var pageidx = $scope.page_index;
        if (pageidx == undefined) {
            pageidx = 1;
        }
        var selectedtype = $scope.selectedValues;
        if (selectedtype == undefined) {
            selectedtype = "";
        }
        var username = $scope.subordinate;
        if (username == undefined) {
            username = "";
        }
        if ($routeParams.type === 'agtran') {
            $scope.startDate = $('#tran_asset_st').val();
            $scope.endDate = $('#tran_asset_et').val();
            if (!$scope.startDate || !$scope.endDate) {
                dialog({
                    title: '温馨提示',
                    content: '请选择时间'
                }).showModal();
                return false;
            }

            var qp = '?startDate=' + $scope.startDate + '&endDate=' + $scope.endDate + '&scope=' + $scope.searchasset.uoption.value + '&items_per_page=' + perPage + '&page_index=' + pageidx + '&type=' + selectedtype + '&username=' + username;

            if ($scope.subordinate) {
                qp += '&subordinate=' + $scope.subordinate;
            } else if ($scope.search.uoption.value === 'SUBORDINATE') {
                // dialog({
                //   title: '温馨提示',
                //   content: '请填写下级用户名'
                // }).showModal();
                // return false;
            }
            window.loading = dialog({
                content: '查询中...'
            }).showModal();

            $http.get('/lobby/app/kirinResource/game/ag/findTraPage' + qp).
                success(function (r) {
                    $log.debug(r);
                    var count = r.count;
                    $scope.result_count = count;
                    if (count % perPage == 0) {
                        $scope.page_total = parseInt(count / perPage);
                    } else {
                        $scope.page_total = parseInt(count / perPage) + 1;
                    }

                    $scope.results = r.data;

                    window.loading.close().remove();
                }).error(function (data) {
                    dialog({
                        title: '温馨提示',
                        content: data
                    }).showModal();
                    window.loading.close().remove();
                });
        }
        if ($routeParams.type === 'agbet') {
            $scope.startDate = $('#bet_asset_st').val();
            $scope.endDate = $('#bet_asset_et').val();
            if (!$scope.startDate || !$scope.endDate) {
                dialog({
                    title: '温馨提示',
                    content: '请选择时间'
                }).showModal();
                return false;
            }

            var qp = '?startDate=' + $scope.startDate + '&endDate=' + $scope.endDate + '&scope=' + $scope.searchasset.uoption.value + '&items_per_page=' + perPage + '&page_index=' + pageidx + '&type=' + selectedtype + '&username=' + username;

            if ($scope.subordinate) {
                qp += '&subordinate=' + $scope.subordinate;
            } else if ($scope.search.uoption.value === 'SUBORDINATE') {
                // dialog({
                //   title: '温馨提示',
                //   content: '请填写下级用户名'
                // }).showModal();
                // return false;
            }
            window.loading = dialog({
                content: '查询中...'
            }).showModal();

            $http.get('/lobby/app/kirinResource/game/ag/findBetPage' + qp).
                success(function (r) {
                    $log.debug(r);
                    var count = r.count;
                    $scope.result_count = count;
                    if (count % perPage == 0) {
                        $scope.page_total = parseInt(count / perPage);
                    } else {
                        $scope.page_total = parseInt(count / perPage) + 1;
                    }

                    $scope.results = r.data;

                    window.loading.close().remove();
                }).error(function (data) {
                    dialog({
                        title: '温馨提示',
                        content: data
                    }).showModal();
                    window.loading.close().remove();
                });

        }
    };
    $scope.preAgAsset = function () {
        $scope.page_index--;
        $scope.goAgAsset();
    }
    $scope.nextAgAsset = function () {
        $scope.page_index++;
        $scope.goAgAsset();
    }


    $scope.moment = moment;
    $scope.startDate = moment().subtract($routeParams.type === 'profit' ? 1 : 0, 'days').format('YYYY-MM-DD');
    $scope.endDate = moment().subtract($routeParams.type === 'profit' ? 1 : 0, 'days').format('YYYY-MM-DD');
    var username = getUrlParam('?username');
    if (username) {
        $scope.subordinate = username;
        setTimeout(function () {

            $scope.goAsset();
        }, 0)
    }
    ;

}).filter('ticketsFilter', function ($log) {
    return function (items, game, method, period, mode, status) {
        if (items) {
            var filtered = [];
            $.each(items, function (i, item) {
                if (
                    (game === undefined || game === 'ALL' || item.game === game) &&
                    (method === undefined || method === 'ALL' || item.method === method) &&
                    (period === undefined || period === 'ALL' || item.period === period) &&
                    (mode === undefined || mode === 'ALL' || item.mode === mode) &&
                    (status === undefined || status === 'ALL' || item.status === status || (status == 'LOTTERY' && item.won))
                ) {
                    filtered.push(item);
                } else {
                }
            });
            return filtered;
        }
    };
}).filter('typeFilter', function ($log) {
    return function (items, types) {
        $log.debug(types);
        var filtered = [];
        if (types) {

        } else {
            return items;
        }
        if (items) {
            $.each(types, function (i, type) {
                $.each(items, function (i, item) {
                    if (item.label.indexOf(type) > -1) {
                        filtered.push(item);
                    } else {
                    }
                });
            });
            return filtered;
        }
    };
});