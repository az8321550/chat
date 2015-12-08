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
        }, {
            name: '号码分布'
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
    $scope.bss = {
        'k_0': '小',
        'k_1': '小',
        'k_2': '小',
        'k_3': '小',
        'k_4': '小',
        'k_5': '大',
        'k_6': '大',
        'k_7': '大',
        'k_8': '大',
        'k_9': '大'
    };
    $scope.ons = {
        'k_0': '偶',
        'k_1': '奇',
        'k_2': '偶',
        'k_3': '奇',
        'k_4': '偶',
        'k_5': '奇',
        'k_6': '偶',
        'k_7': '奇',
        'k_8': '偶',
        'k_9': '奇'
    };
    $scope.qcs = {
        'k_0': '合',
        'k_1': '质',
        'k_2': '质',
        'k_3': '质',
        'k_4': '合',
        'k_5': '质',
        'k_6': '合',
        'k_7': '质',
        'k_8': '合',
        'k_9': '合'
    };
    $scope.zs = {
        'k_0': '0',
        'k_1': '1',
        'k_2': '2',
        'k_3': '0',
        'k_4': '1',
        'k_5': '2',
        'k_6': '0',
        'k_7': '1',
        'k_8': '2',
        'k_9': '0'
    };

    $scope.lottos.three = {
        name: '3d',
        positions: [{
            name: '百位'
        }, {
            name: '十位'
        }, {
            name: '个位'
        }, {
            name: '号码分布'
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
        }, {
            name: '号码分布'
        }],
        nums: [{
            value: '01'
        }, {
            value: '02'
        }, {
            value: '03'
        }, {
            value: '04'
        }, {
            value: '05'
        }, {
            value: '06'
        }, {
            value: '07'
        }, {
            value: '08'
        }, {
            value: '09'
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


    var href = window.location.href;
    $scope.tabSelected = "#" + href.split('#')[1];

    if ($scope.type == "three" && $scope.tabSelected == "#five") {
        $scope.tabSelected = "#three";
        window.location.href = href.split("#")[0] + "#three";
    }
    if ($scope.type == "three") {
        $("#three").css("display", "block");
    } else {
        $("#five").css("display", "block");
        $("#four").css("display", "block");
        $("#font3").css("display", "block");
        $("#back3").css("display", "block");
        $("#mid3").css("display", "block");
    }
    $("#font2").css("display", "block");
    $("#back2").css("display", "block");
    $('#func_id').show();
    $('#show_id').show();
    $('#hidd_id').hide();
    $scope.tabChange = function (e) {
        if (e.target.nodeName === "A") {
            if (e.target.getAttribute("href") == '#show' || e.target.getAttribute("href") == '#hidd') {

                $scope.func = e.target.getAttribute("href");
                $("canvas").remove();
                if ($scope.func == '#hidd') {
                    $('#func_id').hide('slow', function () {
                        draw();
                    });
                    $('#show_id').hide();
                    $('#hidd_id').show();
                }
                if ($scope.func == '#show') {

                    $('#func_id').show('slow', function () {
                        draw();
                    });
                    $('#show_id').show();
                    $('#hidd_id').hide();
                }

            } else {
                $scope.tabSelected = e.target.getAttribute("href");
                var href = window.location.href;
                window.location.href = href.split('#')[0] + $scope.tabSelected;
                window.location.reload();

            }

        }
    }

    $scope.initCols = function () {
        var cols = [];
        var nlts = angular.copy($scope.lottos[$scope.type]);
        nlts.oldpositions = nlts.positions;
        if ($scope.tabSelected == '#five' || $scope.tabSelected == '#three') {
            $scope.thislotto = nlts;
        }
        if ($scope.tabSelected == '#four') {
            nlts.positions = nlts.positions.slice(1, nlts.positions.length);
            $scope.thislotto = nlts;
        }
        if ($scope.tabSelected == '#front3') {
            var last = nlts.positions.slice(5, nlts.positions.length);
            nlts.positions = nlts.positions.slice(0, 3);
            nlts.positions = nlts.positions.concat(last);
            $scope.thislotto = nlts;
        }
        if ($scope.tabSelected == '#back3') {
            nlts.positions = nlts.positions.slice(2, nlts.positions.length);
            $scope.thislotto = nlts;
        }
        if ($scope.tabSelected == '#mid3') {
            var last = nlts.positions.slice(5, nlts.positions.length);
            nlts.positions = nlts.positions.slice(1, 4);
            nlts.positions = nlts.positions.concat(last);
            $scope.thislotto = nlts;
        }
        if ($scope.tabSelected == '#front2') {
            var last = nlts.positions.slice(nlts.positions.length - 1, nlts.positions.length);
            nlts.positions = nlts.positions.slice(0, 2);
            nlts.positions = nlts.positions.concat(last);
            $scope.thislotto = nlts;
        }
        if ($scope.tabSelected == '#back2') {
            nlts.positions = nlts.positions.slice(nlts.positions.length - 3, nlts.positions.length);
            $scope.thislotto = nlts;
        }

        $.each($scope.thislotto.positions, function (i, p) {
            $.each($scope.thislotto.nums, function (j, n) {

                var col = {
                    position: i,
                    num: n.value,
                    odd: i % 2 == 1,
                    miss: null,
                    numt: 0
                };

                cols.push(col);
            });
        });

        window.cols = cols;
        $scope.cols = cols;
    };
    var lg36total = {leop: 0, g3: 0, g6: 0, mleop: 0, mg3: 0, mg6: 0};
    var lg36avg = angular.copy(lg36total);
    var lg36miss = angular.copy(lg36total);
    var lg36contis = angular.copy(lg36total);

    function check3Leopard(p, lp, idx) {

        if (p.numbers[0] != "255" && p.numbers[0] == p.numbers[1] && p.numbers[1] == p.numbers[2]) {
            p.leopard = "是";
            if (lp) {
                if (lp.data.leopardidx > lg36miss.leop) {
                    lg36miss.leop = lp.data.leopardidx;
                }
                if (idx == lp.data.nextleop) {
                    lg36contis.leop += 1;
                } else {
                    lg36contis.leop = 1;
                }
            } else {
                lg36contis.leop = 1;
            }
            if (lg36contis.leop > lg36contis.mleop) {
                lg36contis.mleop = lg36contis.leop;
            }
            p.leopardidx = 0;
            p.nextleop = idx + 1;
            lg36total.leop += 1;


        } else {
            if (lp) {
                p.leopard = lp.data.leopardidx + 1;
                p.leopardidx = lp.data.leopardidx + 1;
                if (p.leopardidx > lg36miss.leop) {
                    lg36miss.leop = p.leopardidx;
                }
            } else {
                p.leopard = 1;
                p.leopardidx = 1;
            }

        }
        lg36avg.leop = parseInt($scope.length / (lg36total.leop == 0 ? 1 : lg36total.leop));
    }

    function group3(p, lp, idx) {
        if (p.numbers[0] != "255" && (p.numbers[0] == p.numbers[1] || p.numbers[1] == p.numbers[2] || p.numbers[0] == p.numbers[2])) {
            p.group3 = "✓";
            lg36total.g3 += 1;
            if (lp) {
                if (lp.data.g3miss > lg36miss.g3) {
                    lg36miss.g3 = lp.data.g3miss;
                }
                if (idx == lp.data.nextg3p) {
                    lg36contis.g3 += 1;
                } else {
                    lg36contis.g3 = 1;
                }
            } else {
                lg36contis.g3 = 1;
            }
            if (lg36contis.g3 > lg36contis.mg3) {
                lg36contis.mg3 = lg36contis.g3;
            }

            p.g3miss = 0;
            p.nextg3p = idx + 1;
        } else {
            if (!p.g3miss) {
                p.g3miss = 0;
            }
            if (lp) {
                p.g3miss = lp.data.g3miss + 1;
            } else {
                p.g3miss += 1;
            }
            if (p.g3miss > lg36miss.g3) {
                lg36miss.g3 = p.g3miss;
            }
        }
        lg36avg.g3 = parseInt($scope.length / (lg36total.g3 == 0 ? 1 : lg36total.g3));
    }

    function group6(p, lp, idx) {
        if (p.numbers[0] != "255" && p.numbers[0] != p.numbers[1] && p.numbers[1] != p.numbers[2] && p.numbers[0] != p.numbers[2]) {
            p.group6 = "✓";
            lg36total.g6 += 1;
            if (lp) {
                if (lp.data.g6miss > lg36miss.g6) {
                    lg36miss.g6 = lp.data.g6miss;
                }
                if (idx == lp.data.nextg6p) {
                    lg36contis.g6 += 1;
                } else {
                    lg36contis.g6 = 1;
                }
            } else {
                lg36contis.g6 = 1;
            }
            if (lg36contis.g6 > lg36contis.mg6) {
                lg36contis.mg6 = lg36contis.g6;
            }

            p.g6miss = 0;
            p.nextg6p = idx + 1;
        } else {
            if (!p.g6miss) {
                p.g6miss = 0;
            }
            if (lp) {
                p.g6miss = lp.data.g6miss + 1;
            } else {
                p.g6miss += 1;
            }
            if (p.g6miss > lg36miss.g6) {
                lg36miss.g6 = p.g6miss;
            }
        }
        lg36avg.g6 = parseInt($scope.length / (lg36total.g6 == 0 ? 1 : lg36total.g6));
    }

    function cross(p) {
        var max = Math.abs(p.numbers[0] - p.numbers[1]);
        if (Math.abs(p.numbers[1] - p.numbers[2]) > max) {
            max = Math.abs(p.numbers[1] - p.numbers[2]);
        }
        if (Math.abs(p.numbers[0] - p.numbers[2]) > max) {
            max = Math.abs(p.numbers[0] - p.numbers[2]);
        }
        p.cross = max;
    }

    function dsumt(p) {
        if (p.numbers[0] == "255") {
            p.dsum = 0;
            p.tail = 0;
        } else {
            var dsum = parseInt(p.numbers[0]) + parseInt(p.numbers[1]) + parseInt(p.numbers[2]);
            p.dsum = dsum;
            p.tail = dsum;
            if (dsum > 9) {
                var tail = (dsum + "");
                p.tail = tail.substring(tail.length - 1, tail.length);
            }
        }
    }

    function sum2(p) {
        if (p.numbers[0] == "255") {
            p.sum = 0;
            p.cross = 0;
        } else {
            p.sum = parseInt(p.numbers[0]) + parseInt(p.numbers[1]);
            p.cross = Math.abs(p.numbers[0] - p.numbers[1]);
        }

    }

    var globalData = null;

    function reDraw() {

        $scope.initCols();
        var hit = angular.copy(window.cols);
        var mis = angular.copy(window.cols);
        var avgmis = angular.copy(window.cols);
        var contis = angular.copy(window.cols);
        var bcross = [];
        var bpair = {};
        var crossavg = [];
        var crosscontis = [];
        var crossmiss = [];
        var rows = [];
        var missc = [];
        $.each(globalData, function (i, p) {
            var cols = [];
            var crossarr = [];
            if (p.numbers == undefined) {
                if ($scope.type == "three") {
                    p.numbers = "255,255,255";
                } else {
                    p.numbers = "255,255,255,255,255";
                }
            }
            var numbers = p.numbers.split(",");
            if ($scope.thislotto.name == "11x5") {
                for (var j = 0; j < numbers.length; j++) {
                    if (parseInt(numbers[j]) < 10) {
                        numbers[j] = "0" + numbers[j];
                    }
                }
            }

            if (!p.oldnumbers) {
                p.oldnumbers = numbers;
            }
            p.numbers = numbers;
            if ($scope.tabSelected == '#three') {
                group3(p, rows[rows.length - 1], i);
                group6(p, rows[rows.length - 1], i);
                cross(p);
                dsumt(p);
            }
            if ($scope.tabSelected == '#four') {
                p.numbers = numbers.slice(1, numbers.length);
            }
            if ($scope.tabSelected == '#front3') {
                p.numbers = numbers.slice(0, 3);
                check3Leopard(p, rows[rows.length - 1], i);
                group3(p, rows[rows.length - 1], i);
                group6(p, rows[rows.length - 1], i);
                cross(p);
                dsumt(p);
            }
            if ($scope.tabSelected == '#back3') {
                p.numbers = numbers.slice(2, numbers.length);
                check3Leopard(p, rows[rows.length - 1], i);
                group3(p, rows[rows.length - 1], i);
                group6(p, rows[rows.length - 1], i);
                cross(p);
                dsumt(p);
            }
            if ($scope.tabSelected == '#mid3') {
                p.numbers = numbers.slice(1, 4);
                check3Leopard(p, rows[rows.length - 1], i);
                group3(p, rows[rows.length - 1], i);
                group6(p, rows[rows.length - 1], i);
                cross(p);
                dsumt(p);
            }
            if ($scope.tabSelected == '#front2') {
                p.numbers = numbers.slice(0, 2);
                sum2(p);
            }
            if ($scope.tabSelected == '#back2') {
                p.numbers = numbers.slice(numbers.length - 2, numbers.length);
                sum2(p);
            }
            $.each(window.cols, function (j, c) {
                var col = angular.copy(c);
                var idx = c.position;
                var nums = p.numbers;

                if (idx > ($scope.thislotto.positions.length - 2)) {
                    idx = idx % ($scope.thislotto.positions.length - 2);

                    for (var k = 0; k < nums.length; k++) {
                        if (nums[k] == c.num) {
                            col.shownum = true;
                            if (col.truenum && col.truenum == nums[idx]) {
                                col.numt += 1;
                            } else {
                                col.numt += 1;
                                col.truenum = nums[idx];
                                if (contis[j].nextp == i) {
                                    contis[j].times += 1;
                                } else {
                                    contis[j].times = 1;
                                }
                            }

                            col.miss = 0;
                            hit[j].times = hit[j].times + 1 || 1;
                            mis[j].times = 0;
                            contis[j].nextp = i + 1;
                        } else {
                            if (contis[j].maxtimes == undefined) {
                                contis[j].maxtimes = 1;
                            }
                            if (contis[j].times > contis[j].maxtimes) {
                                contis[j].maxtimes = contis[j].times;
                            }
                            if (col.miss != 0)
                                col.miss = 1;

                            hit[j].times = hit[j].times || 0;
                            mis[j].times = mis[j].times + 1 || 1;
                        }
                    }

                    var rtmp = rows[i - 1];
                    if (rtmp) {
                        if (col.miss != 0) {
                            col.miss = parseInt(rtmp.cols[j].miss) + parseInt(col.miss);
                        }
                    }
                    if (hit[j].times > 0) {
                        avgmis[j].times = parseInt(parseInt($scope.length) / parseInt(hit[j].times));
                    } else {
                        avgmis[j].times = parseInt(parseInt($scope.length) + 1);
                    }
                    if (mis[j].maxtimes == undefined) {
                        mis[j].maxtimes = col.miss;
                    }
                    if (col.miss > mis[j].maxtimes) {
                        mis[j].maxtimes = col.miss;
                    }
                } else {

                    if (nums && nums[idx] == c.num) {

                        col.shownum = true;
                        col.truenum = nums[idx];

                        hit[j].times = hit[j].times + 1 || 1;
                        col.miss = 0;
                        missc[j] = i;
                        if (contis[j].nextp == i) {
                            contis[j].times += 1;
                            if (contis[j].times > contis[j].maxtimes) {
                                contis[j].maxtimes = contis[j].times;
                            }
                        } else {
                            contis[j].times = 1;
                        }
                        mis[j].times = 0;
                        contis[j].nextp = i + 1;
                    } else {
                        if (contis[j].maxtimes == undefined) {
                            contis[j].maxtimes = 1;
                        }
                        if (contis[j].times > contis[j].maxtimes) {
                            contis[j].maxtimes = contis[j].times;
                        }
                        col.miss = mis[j].times + 1 || 1;
                        hit[j].times = hit[j].times || 0;
                        mis[j].times = mis[j].times + 1 || 1;
                    }
                    if (!missc[j]) {
                        missc[j] = -1;
                    }
                    if (hit[j].times > 0) {
                        avgmis[j].times = parseInt(parseInt($scope.length) / parseInt(hit[j].times));
                    } else {
                        avgmis[j].times = parseInt(parseInt($scope.length) + 1);
                    }

                    if (mis[j].maxtimes == undefined) {
                        mis[j].maxtimes = col.miss;
                    }
                    if (col.miss > mis[j].maxtimes) {
                        mis[j].maxtimes = col.miss;
                    }
                }
                cols.push(col);
            });
            var pair = {};
            if ($scope.tabSelected == "#front2" || $scope.tabSelected == "#back2") {
                var lr = rows[rows.length - 1];
                $.each($scope.thislotto.nums, function (j, c) {
                    var cro = {};
                    if (p.numbers[0] != "255" && p.cross == c.value) {
                        cro.num = p.cross;
                        cro.trunum = true;
                        if (!bcross[j]) {
                            bcross[j] = 0;
                        }
                        bcross[j] += 1;
                        if (lr && crossmiss[j]) {
                            if (lr.cross[j].miss > crossmiss[j]) {
                                crossmiss[j] = lr.cross[j].miss;
                            }
                        } else {
                            if (lr) {
                                crossmiss[j] = lr.cross[j].miss;
                            } else {
                                crossmiss[j] = 0;
                            }

                        }
                        if (lr) {
                            cro.conti = lr.cross[j].conti + 1;
                            if (cro.conti > crosscontis[j]) {
                                crosscontis[j] = cro.conti;
                            }
                        }

                        cro.miss = 0;
                        cro.nextp = j + 1;
                    } else {
                        cro.conti = 0;
                        if (!crosscontis[j]) {
                            crosscontis[j] = 0;
                        }
                        if (!crossmiss[j]) {
                            crossmiss[j] = 0;
                        }
                        if (!bcross[j]) {
                            bcross[j] = 0;
                        }
                        if (!lr || !lr.cross || lr.cross[j].miss == 0) {
                            cro.miss = 1;
                        } else {
                            cro.miss = lr.cross[j].miss + 1;
                        }
                        cro.num = cro.miss;
                    }
                    if (crossmiss[j]) {
                        if (cro.miss > crossmiss[j]) {
                            crossmiss[j] = cro.miss;
                        }
                    }
                    if (cro.miss == $scope.length) {
                        crossmiss[j] = $scope.length;
                    }
                    crossavg[j] = parseInt($scope.length / (bcross[j] == 0 ? 1 : bcross[j]));
                    crossarr.push(cro);
                });
                var nums = p.numbers;
                if (nums[0] != "255" && nums[0] == nums[1]) {
                    pair.num = "对";
                    if (!bpair.total) {
                        bpair.total = 0;
                    }
                    bpair.total = bpair.total + 1;
                    if (bpair.maxmiss) {
                        if (lr.pair.miss > bpair.maxmiss) {
                            bpair.maxmiss = lr.pair.miss;
                        }
                    } else {
                        if (lr) {
                            bpair.maxmiss = lr.pair.miss;
                        } else {
                            bpair.maxmiss = 0;
                        }

                    }
                    if (lr && i == lr.pair.nextp) {
                        bpair.conti = bpair.conti + 1;
                        if (bpair.conti > bpair.maxconti) {
                            bpair.maxconti = bpair.conti;
                        }
                    } else {
                        bpair.conti = 1;
                        if (!bpair.maxconti)
                            bpair.maxconti = bpair.conti;
                    }
                    if (bpair.total) {
                        bpair.avg = parseInt($scope.length / bpair.total);
                    }
                    pair.miss = 0;
                    pair.nextp = i + 1;
                } else {
                    if (lr) {
                        pair.miss = lr.pair.miss + 1;
                        pair.num = pair.miss;
                    } else {
                        pair.miss = 1;
                        pair.num = pair.miss;
                    }

                }


            }
            var row = {
                data: p,
                cross: crossarr,
                pair: pair,
                cols: cols,
                missc: missc
            };
            rows.push(row);
        });
        //  $log.log(rows);

        $scope.rows = rows;
        $scope.hit = hit;
        $scope.mis = mis;
        $scope.avgmis = avgmis;
        $scope.contis = contis;
        $scope.pair = bpair;
        $scope.crosshit = bcross;
        $scope.crossavg = crossavg;
        $scope.crosscontis = crosscontis;
        $scope.crossmiss = crossmiss;
        $scope.lg36total = lg36total;
        $scope.lg36avg = lg36avg;
        $scope.lg36miss = lg36miss;
        $scope.lg36contis = lg36contis;

        setTimeout(function () {
            draw();
        }, 500);

    }

    $http.get('/lotto/rest/period/' + $scope.game + '/recent/' + $scope.length).success(function (data, status) {
        data = $filter('orderBy')(data, 'id');
        if (data instanceof Array) {
            globalData = data;
            reDraw();
        } else {
            dialog({
                title: '提示',
                content: '请重新登录再查看!',
            }).showModal();
        }
    });

    var draw = function () {
        Chart.init();
        DrawLine.bind("chartsTable", "has_line");
        $.each($scope.thislotto.oldpositions.slice(0, $scope.thislotto.positions.length - 1), function (i, po) {
            if (i % 2 == 0) {
                DrawLine.color('#499495');
            } else {
                DrawLine.color('#E4A8A8');
            }
            DrawLine.add((parseInt(i) * $scope.thislotto.nums.length + $scope.thislotto.oldpositions.length), 2, $scope.thislotto.nums.length, 0);
        });

        DrawLine.draw(Chart.ini.default_has_line);
        if ($("#chartsTable").width() > $('body').width()) {
            $('body').width($("#chartsTable").width() + "px");
        }

        $("#no_miss").click(function () {

            var checked = $(this)[0].checked;
            noMiss(checked);
        });
        noMiss($scope.noMiss);
        $("#no_aid").click(function () {
            var checked = $(this)[0].checked;
            noaid(checked);
        });
        noaid($scope.noAid);

        $("#no_lost").click(function () {
            var checked = $(this)[0].checked;
            nolost(checked);
        });
        nolost($scope.noLost);

    };

    function noMiss(checked) {
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
    }

    function noaid(checked) {
        if (checked == true) {
            $(".bottomtdl").css("border-bottom", "1px solid #ff0000");
        } else {
            $(".bottomtdl").css("border-bottom", "");
        }
    }

    function nolost(checked) {
        if (checked == true) {
            $(".lostcor").css("background-color", "yellow");
        } else {
            $(".lostcor").css("background-color", "");
        }
    }

    $scope.changeLength = function (length) {
        window.location.href = '/his3.html?type=' + $scope.type + '&game=' + $scope.game + '&length=' + length + '#five';
    }
});
