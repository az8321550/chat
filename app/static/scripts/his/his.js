angular.module('hisApp', []).controller('HisCtrl', function ($http, $scope, $filter, $log) {
    function getUrlParam(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
        var r = decodeURI(window.location.search).substr(1).match(reg);
        if (r !== null) {
            return window.unescape(r[2]);
        }
        return null;
    }

    $scope.type = getUrlParam('type');
    $scope.game = getUrlParam('game');
    $scope.length = getUrlParam('length');
    $scope.games = {};
    $scope.games.CQSSC = {
        name: '重庆时时彩'
    };
    $scope.games.XJSSC = {
        name: '新疆时时彩'
    };
    $scope.games.JXSSC = {
        name: '江西时时彩'
    };
    $scope.games.TJSSC = {
        name: '天津时时彩'
    };
    $scope.games.FFC5 = {
        name: '至尊时时彩'
    };
    $scope.games.FFC2 = {
        name: '兴隆两分彩'
    };
    $scope.games.FFC1 = {
        name: '吉祥分分彩'
    };
    $scope.games.MMC = {
        name: '如意秒秒彩'
    };

    $scope.games.SD11X5 = {
        name: '山东11选5'
    };
    $scope.games.GD11X5 = {
        name: '广东11选5'
    };
    $scope.games.JX11X5 = {
        name: '江西11选5'
    };
    $scope.games.CQ11X5 = {
        name: '重庆11选5'
    };
    $scope.games.FFC11X55 = {
        name: '至尊十一选五'
    };
    $scope.games.FFC11X52 = {
        name: '招财十一选五'
    };
    $scope.games.FFC11X51 = {
        name: '进宝十一选五'
    };

    $scope.games.FC3D = {
        name: '福彩3D'
    };
    $scope.games.PL3 = {
        name: '体彩排三'
    };
    $scope.games.FFC3D5 = {
        name: '五分3D'
    };
    $scope.games.FFCPL = {
        name: '五分排三'
    };

    $scope.games.GDKLSF = {
        name: '广东快乐十分'
    };
    $scope.games.CQKLSF = {
        name: '重庆快乐十分'
    };
    $scope.games.BJPK10 = {
        name: '北京PK10'
    };

    $scope.thisgame = $scope.games[$scope.game];

    $scope.lottos = {};
    $scope.lottos.ssc = {
        name: 'ssc',
        positions: [{
            name: '万位'
        }, {
            name: '千位'
        }, {
            name: '百位'
        }, {
            name: '十位'
        }, {
            name: '个位'
        }],
        nums: [{
            value: '0'
        }, {
            value: '1'
        }, {
            value: '2'
        }, {
            value: '3'
        }, {
            value: '4'
        }, {
            value: '5'
        }, {
            value: '6'
        }, {
            value: '7'
        }, {
            value: '8'
        }, {
            value: '9'
        }]
    };
    $scope.lottos.three = {
        name: '3d',
        positions: [{
            name: '百位'
        }, {
            name: '十位'
        }, {
            name: '个位'
        }],
        nums: [{
            value: '0'
        }, {
            value: '1'
        }, {
            value: '2'
        }, {
            value: '3'
        }, {
            value: '4'
        }, {
            value: '5'
        }, {
            value: '6'
        }, {
            value: '7'
        }, {
            value: '8'
        }, {
            value: '9'
        }]
    };
    $scope.lottos.eleven = {
        name: '11x5',
        positions: [{
            name: '万位'
        }, {
            name: '千位'
        }, {
            name: '百位'
        }, {
            name: '十位'
        }, {
            name: '个位'
        }],
        nums: [{
            value: '1'
        }, {
            value: '2'
        }, {
            value: '3'
        }, {
            value: '4'
        }, {
            value: '5'
        }, {
            value: '6'
        }, {
            value: '7'
        }, {
            value: '8'
        }, {
            value: '9'
        }, {
            value: '10'
        }, {
            value: '11'
        }]
    };
    $scope.lottos.pk10 = {
        name: 'pk10',
        positions: [{
            name: '第一位'
        }, {
            name: '第二位'
        }, {
            name: '第三位'
        }, {
            name: '第四位'
        }, {
            name: '第五位'
        }, {
            name: '第六位'
        }, {
            name: '第七位'
        }, {
            name: '第八位'
        }, {
            name: '第九位'
        }, {
            name: '第十位'
        }],
        nums: [{
            value: '1'
        }, {
            value: '2'
        }, {
            value: '3'
        }, {
            value: '4'
        }, {
            value: '5'
        }, {
            value: '6'
        }, {
            value: '7'
        }, {
            value: '8'
        }, {
            value: '9'
        }, {
            value: '10'
        }]
    };
    $scope.lottos.klsf = {
        name: 'klsf',
        positions: [{
            name: '第8位'
        }, {
            name: '第7位'
        }, {
            name: '第6位'
        }, {
            name: '第5位'
        }, {
            name: '第4位'
        }, {
            name: '第3位'
        }, {
            name: '第2位'
        }, {
            name: '第1位'
        }],
        nums: [{
            value: '1'
        }, {
            value: '2'
        }, {
            value: '3'
        }, {
            value: '4'
        }, {
            value: '5'
        }, {
            value: '6'
        }, {
            value: '7'
        }, {
            value: '8'
        }, {
            value: '9'
        }, {
            value: '10'
        }, {
            value: '11'
        }, {
            value: '12'
        }, {
            value: '13'
        }, {
            value: '14'
        }, {
            value: '15'
        }, {
            value: '16'
        }, {
            value: '17'
        }, {
            value: '18'
        }, {
            value: '19'
        }, {
            value: '20'
        }]
    };
    $scope.initCols = function () {
        var cols = [];
        $scope.thislotto = $scope.lottos[$scope.type];
        $.each($scope.thislotto.positions, function (i, p) {
            $.each($scope.thislotto.nums, function (j, n) {
                var col = {
                    position: i,
                    num: n.value,
                    odd: i % 2 == 1,
                    miss: null

                };
                cols.push(col);
            });
        });
        window.cols = cols;
        $scope.cols = cols;
        $log.log('cols', window.cols);
    };
    $scope.initCols();
    var hit = angular.copy(window.cols);
    var mis = angular.copy(window.cols);
    $http.get('/lotto/rest/period/' + $scope.game + '/recent/' + $scope.length).success(function (data) {
        data = $filter('orderBy')(data, 'id');
        var rows = [];
        $.each(data, function (i, p) {
            var cols = [];
            $.each(window.cols, function (j, c) {
                var col = angular.copy(c);
                if (p.numbers && p.numbers.split(',')[c.position] == c.num) {
                    col.shownum = true;
                    col.truenum = p.numbers.split(',')[c.position];
                    col.miss = 0;
                    hit[j].times = hit[j].times + 1 || 1;
                    mis[j].times = 0;
                } else {
                    col.miss = mis[j].times + 1 || 1;
                    hit[j].times = hit[j].times || 0;
                    mis[j].times = mis[j].times + 1 || 1;

                }
                cols.push(col);
            });
            var row = {
                data: p,
                cols: cols
            };
            rows.push(row);
        });
        $log.log(rows);
        $scope.rows = rows;
        $scope.hit = hit;
        $scope.mis = mis;
        setTimeout(function () {
            $scope.draw();
        }, 500);
    });
    $scope.draw = function () {
        Chart.init();
        DrawLine.bind("chartsTable", "has_line");
        $.each($scope.thislotto.positions, function (i, po) {
            if (i % 2 == 0) {
                DrawLine.color('#499495');
            } else {
                DrawLine.color('#E4A8A8');
            }
            DrawLine.add((parseInt(i) * $scope.thislotto.nums.length + $scope.thislotto.positions.length + 1), 2, $scope.thislotto.nums.length, 0);
        });
        // DrawLine.color('#499495');
        // DrawLine.add((parseInt(0) * 10 + 5 + 1), 2, 10, 0);
        // DrawLine.color('#E4A8A8');
        // DrawLine.add((parseInt(1) * 10 + 5 + 1), 2, 10, 0);
        // DrawLine.color('#499495');
        // DrawLine.add((parseInt(2) * 10 + 5 + 1), 2, 10, 0);
        // DrawLine.color('#E4A8A8');
        // DrawLine.add((parseInt(3) * 10 + 5 + 1), 2, 10, 0);
        // DrawLine.color('#499495');
        // DrawLine.add((parseInt(4) * 10 + 5 + 1), 2, 10, 0);
        DrawLine.draw(Chart.ini.default_has_line);
        if ($("#chartsTable").width() > $('body').width()) {
            $('body').width($("#chartsTable").width() + "px");
        }
        $("#container").height($("#chartsTable").height() + "px");
        $("#missedTable").width($("#chartsTable").width() + "px");
        resize();

        $("#no_miss").click(function () {

            var checked = $(this)[0].checked;
            var nols = $(".ball04,.ball03");
            if (checked == true) {
                $.each(nols, function (i, n) {
                    n.style.display = 'none';
                });
            } else {
                $.each(nols, function (i, n) {
                    n.style.display = 'block';
                });
            }
        });

    };
    $scope.changeLength = function (length) {
        window.location.href = '/his.html?type=' + $scope.type + '&game=' + $scope.game + '&length=' + length;
    }
});