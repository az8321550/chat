'use strict';
angular.module('newpApp')
  .controller('MmcCtrl', function($scope, $rootScope, $routeParams, $location, $filter, $http, $timeout, $interval, $log, repeatGet) {
    $rootScope.curLotto = 'mmc';
    String.prototype.endsWith = function(suffix) {
      return this.indexOf(suffix, this.length - suffix.length) !== -1;
    };
    $rootScope.currNav = 'lotto';
    var dialog = window.dialog;
    var moment = window.moment;
    var restrictors = [{
      base: 200000,
      amount: 200000000000
    }, {
      base: 100000,
      amount: 400000000000
    }, {
      base: 50000,
      amount: 800000000000
    }];


    $scope.toggleLotto = function(lotto) {

      $scope.lotto = lottos[lotto];
      $rootScope.currLotto = lotto;
      $scope.currentTab = $scope.lotto.tabs[0];
      $scope.currGroup = $scope.currentTab.methodgroups[0];
      $scope.currentMethod = $scope.currentTab.methodgroups[0].methods[0];
      repeatGet.clear();
    };
    $scope.lottos = window.lottos;
    $scope.lottoCates = [];
    $log.debug('routeParams', $routeParams);
    var lottos = window.lottos;
    $scope.toggleLotto('MMC');
    $scope.tickets = [];
    $scope.trueTickets = [];
    //init status
    $scope.yuan = {
      name: '元',
      value: 1,
      modeCode: 'YUAN'
    };
    $scope.jiao = {
      name: '角',
      value: 0.1,
      modeCode: 'JIAO'
    };
    $scope.fen = {
      name: '分',
      value: 0.01,
      modeCode: 'FEN'
    };
    $scope.currRate = $scope.yuan; //圆角分
    $scope.currMultiple = 1; //1倍
    $scope.isC = false; //isChasing:是追号
    $scope.cS = 'regular'; //chaseSetting:regular or super
    $scope.cP = 10; //chasePeriod:default=10
    $scope.selectingQty = 0;

    $scope.$watch('lotto', function(newLotto) {
      $log.debug('lotto changed ', newLotto);
      $http.get('/lotto/rest/brokerage/?type=' + newLotto.label).success(function(brokerage) {
        $scope.upperRate = brokerage.upper;
        $scope.lowerRate = brokerage.lower;
        var max = $scope.upperRate - $scope.lowerRate,
          step = 1,
          min = 0,
          initValue = min;
        $scope.offset = initValue / max * 100 - 5;
        $scope.sliderStyle = {
          left: $scope.offset + '%'
        };
        $scope.redemption = min;
      }).error(function() {
        $scope.redemption = 0;
      });
    });


    $scope.setCurrentTab = function(tab) {
      $scope.currentTab = tab;
      $scope.currGroup = $scope.currentTab.methodgroups[0];
      $scope.currentMethod = $scope.currGroup.methods[0];
      $scope.emptyTheSelected();
      $scope.isC = false;
    };
    $scope.setCurrentMethod = function(group, method) {
      $scope.currGroup = group;
      $scope.currentMethod = method;
      $scope.emptyTheSelected();
      $scope.isC = false;
      $scope.luru = {};
    };

    function exclusion(rowIndex, row, num) {
      var currM = $scope.currentMethod,
        rows = currM.rows;
      if (((currM.name.indexOf('组选') > -1 && $scope.currentTab.name !== '五星' && $scope.currentTab.name !== '四星') || $scope.currentTab.name.indexOf('胆拖') > -1) && rows.length > 1) {
        $.each($scope.currentMethod.rows, function(i, thatrow) {
          if (i === rowIndex) {} else {
            $.each(thatrow.nums, function(j, that) {
              if (that.value === num.value && that.selected) {
                that.selected = false;
                thatrow.selectedNums--;
                if (!row.selectedNums) {
                  row.selectedNums = 0;
                } else {

                }
              }
            });
          }
        });
      }
    }
    $scope.selectNum = function(rowIndex, row, num) {
      if (!row.selectedNums) {
        row.selectedNums = 0;
      }
      $log.log($scope.thisT, num);
      if (num.selected) { //取消选号
        num.selected = !num.selected;
        row.selectedNums--;
      } else { //选号
        if (row.max && row.selectedNums === row.max) {
          $.each(row.nums, function(i, n) {
            if (n.selected) {
              n.selected = false;
              return false;
            }
          });
          num.selected = true;
          exclusion(rowIndex, row, num);
        } else {
          num.selected = true;
          exclusion(rowIndex, row, num);
          row.selectedNums++;
        }
      }
      $scope.checkSelectingLegal();
    };
    $scope.getQty = function() {
      return $scope.selectingQty;
    };

    $scope.checkCurrMultiple = function(e) {
      if ($scope.currMultiple.trim() === '') {
        return;
      }
      if (isNaN($scope.currMultiple * 1)) {
        $scope.currMultiple = 1;

      } else {
        if ($scope.currMultiple === '0') {
          $scope.currMultiple = 1;
        }
        $scope.currMultiple = parseInt($scope.currMultiple);
      }
      $scope.chaseMultiple = $scope.currMultiple;
    };

    $scope.selectingCanBuy = false;
    $scope.checkSelectingLegal = function(imediate) {
      function check() {
        $log.log($scope.luru.text);
        $log.log('checkSelectingLegal');
        var t = $scope.selectingTicket();
        var regx = $scope.currentMethod.regx;
        $log.log(regx, t);
        if (regx.test(t)) {
          $scope.selectingIsLegal = {};
          $http.post('/lotto/rest/ticket/quantity', {
              originalNumbers: t,
              game: $scope.lotto.label,
              method: $scope.currentMethod.code,
              multi: 1,
              mode: $scope.currRate.modeCode
            })
            .success(function(data) {
              $scope.selectingQty = data;
            }).error(function() {
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
      $scope.checkSelectingTimer = $timeout(function() {
        check();
      }, 600);
    };




    $scope.luru = {};
    $scope.$watch('luru.text', function(newvalue, oldvalue) {
      if (newvalue === undefined) {
        return false;
      }
      $log.log('luru.text changed', newvalue, oldvalue);
      $scope.luru.text = $scope.luru.text.replace('；', ';');
      $scope.luru.text = $scope.luru.text.replace('：', ':');
      $scope.luru.text = $scope.luru.text.replace('，', ',');
      $scope.checkSelectingLegal();
    });
    $scope.cleanLuru = function() {
      $scope.luru = {};
    };


    $scope.sumQty = function() {
      var qty = 0;
      $.each($scope.tickets, function(i, n) {
        qty += n.quantity * 1;
      });
      return qty;
    };
    $scope.sumMny = function() {
      var mny = 0;
      $.each($scope.tickets, function(i, n) {
        mny += n.money;
      });
      return mny;
    };

    function adjustLuru(t) {
      if (!t) {
        return false;
      }
      var newt = t;
      if (t.endsWith(';')) {
        newt = t.substring(0, t.length - 1);
      }

      if ($scope.lotto.maxNumber > 9) {

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
      return newt;
    }
    $scope.selectingTicket = function() {
      var thisT = '',
        thisTLiteral = '';
      var currMethod = $scope.currentMethod;
      if (currMethod.spec === 'luru') {
        thisT = $scope.luru.text;
        thisT = adjustLuru(thisT);
      } else {
        $.each(currMethod.rows, function(i, row) {
          var rowHasSelect = false;
          $.each(row.nums, function(i, num) {
            if (num.selected) {
              thisT += (currMethod.spec === 'number' ? num.value : num.trueValue) + (currMethod.seperator ? currMethod.seperator : ',');
              thisTLiteral += num.value + (currMethod.seperator ? currMethod.seperator : ',');
              rowHasSelect = true;
            }
          });
          if (rowHasSelect) {
            thisT = thisT.slice(0, thisT.length - 1);
            thisTLiteral = thisTLiteral.slice(0, thisTLiteral.length - 1);
          }
          thisT += ';';
          thisTLiteral += ';';
        });
        thisT = thisT.slice(0, thisT.length - 1);
        thisTLiteral = thisTLiteral.slice(0, thisTLiteral.length - 1);
      }
      //handle positions
      var pl = '';
      var positions = $scope.currentMethod.positions;
      if (positions) {
        pl += '|';
        $.each(positions, function(i, n) {
          if (n.checked) {
            pl += n.value + ',';
          }
        });
        pl = pl.slice(0, pl.length - 1);
        thisT += pl;
      }
      $scope.thisT = thisT;
      $scope.thisTLiteral = thisTLiteral;
      return thisT;
    };

    function checkRestrictors(ticket) {
      var pass = true;
      $.each(restrictors, function(i, n) {
        if (ticket.base >= n.base && ticket.base * ticket.money >= n.amount) {
          pass = false;
          return false;
        }
      });
      return pass;
    }
    $scope.addTicket = function(machine) {
      if (!$scope.selectingCanBuy) {
        return false;
      }
      if ($scope.tickets.length > 0 && $scope.lotto.label === 'MMC') {
        dialog({
          title: '温馨提示',
          content: '请直接点击【马上开奖】'
        }).showModal();
        return false;
      }
      var currMethod = $scope.currentMethod;
      var newTicket = {
        comboName: $scope.currentTab.name + ' ' + $scope.currGroup.name + '-' + currMethod.name,
        mode: $scope.currRate.name,
        modeCode: $scope.currRate.modeCode,
        number: machine ? $scope.selectingTicket() : $scope.thisT,
        multiple: $scope.currMultiple,
        brokerage: $scope.redemption,
        code: currMethod.code,
        quantity: (machine ? 1 : $scope.selectingQty),
        money: (machine ? 1 : $scope.selectingQty) * 2 * $scope.currMultiple * $scope.currRate.value,
        spec: (currMethod.spec !== 'number' && currMethod.spec !== 'luru'),
        literal: $scope.thisTLiteral,
        base: currMethod.base
      };
      if (!checkRestrictors(newTicket)) {
        window.dialog({
          title: '奖金比例错误',
          content: '<strong>警告:</strong> 单注奖金不符合系统配置，请重新选择。',
          ok: function() {}
        }).showModal();
        return false;
      }
      if (machine) { //机选的不验证
        newTicket.mark = Math.random();
        $scope.tickets.push(newTicket);
        $http.post('/lotto/rest/ticket/quantity', {
            originalNumbers: newTicket.number,
            game: $scope.lotto.label,
            method: $scope.currentMethod.code,
            multi: 1,
            mode: $scope.currRate.modeCode
          })
          .success(function(data) {
            var thatTicket = $filter('filter')($scope.tickets, {
              mark: newTicket.mark
            })[0];
            thatTicket.quantity = data * 1;
            thatTicket.money = thatTicket.money * data;
          }).error(function() {

          });
        return true;
      }
      if (!$scope.checkSelectingLegal(true)) {
        window.dialog({
          title: '选号有误',
          content: '<strong>警告:</strong> 您的选号不合法，请注意选号规则。',
          ok: function() {
            $scope.selectingIsLegal = {
              color: 'red'
            };
          }
        }).showModal();
        return false;
      }

      //动画效果
      try {
        require(['node', 'anim'], function($, Anim) {
          var aimpos = $('#J-Bets-List').offset();
          $('.ball-number.selected,.ui-textarea').each(function() {
            var offset = $(this).offset();
            $(this).clone().addClass('moving').css({
              'position': 'absolute',
              top: offset.top,
              left: offset.left
            }).appendTo($('body'));
          });
          var animFinished = 0;
          var totalMoving = $('.moving').length;
          var index = 0;
          $('.moving').each(function(n) {
            var eachE = $(this);
            index++;
            new Anim(n, // 动画目标样式
              {
                'top': aimpos.top + 20 * $scope.tickets.length,
                'left': aimpos.left + 20 * index
              }, {
                duration: 0.5, // 动画时长，秒
                easing: 'ease-out', // 动画特效
                complete: function() { // 动画结束的回调
                  eachE.remove();
                  animFinished++;
                  if (animFinished === totalMoving) {
                    $scope.emptyTheSelected();
                    $scope.tickets.push(newTicket);
                    $log.log($scope.tickets);
                  }
                }
              }).run();
          });
        });
      } catch (e) {
        $scope.emptyTheSelected();
        $scope.tickets.push(newTicket);
      }
    };

    $scope.emptyTheSelected = function() {
      if ($scope.currentMethod.spec === 'luru') {
        $scope.luru.text = '';
      } else {
        $.each($scope.currentMethod.rows, function(i, row) {
          row.selectedNums = 0;
          $.each(row.nums, function(i, num) {
            num.selected = false;
          });
        });
      }
      $scope.checkSelectingLegal();
    };
    $scope.removeTicket = function(index) {
      $scope.tickets.splice(index, 1);
    };


    function sumMoney() {
      var chased = $filter('chaseSelected')($scope.mayChasePeriods);
      $scope.subChaseMny = 0.00;
      $scope.subChaseNum = chased.length;
      $.each(chased, function(i, n) {
        $scope.subChaseMny += n.amount;
      });
    }

    function checkTickets() {
      if (!($scope.tickets && $scope.tickets.length > 0)) { //未选择号码
        window.dialog({
          title: '温馨提示',
          content: '<strong>错误:</strong> 请选择至少一单.'
        }).showModal();
        return false;
      }
      return true;
    }

    function checkAuth() {
      return true;
    }
    $scope.mmstatus = 'none';
    $scope.purchaseConfirm = function(id) {
      if ($rootScope.d.user.freezeType == 1 || $rootScope.d.user.freezeType == 2) {
        alert('您不能进行游戏操作，请联系客服人员。');
        window.history.go(-1);
        return false;
      }
      $scope.mmstatus = 'none';
      if ($scope.lotto.label === 'MMC' && id != 2) {
        alert('请点击摇杆！');
        return false;
      }
      if (!checkAuth()) {
        return false;
      }
      if (!checkTickets()) {
        return false;
      }
      if ($scope.tickets && $scope.tickets.length > 0) {
        var subChaseNum = 0 * 0;
        if ($scope.mayChasePeriods && $scope.isC) {
          $.each($scope.mayChasePeriods, function(i, p) {
            if (p.selected && !p.disabled) {
              subChaseNum += 1;
            }
          });
        }
        window.clickMMC();
        $scope.purchase();
      }
    };
    //purchase
    $scope.purchase = function() {

      $log.log($scope.tickets);
      $log.log($scope.mayChasePeriods);
      $log.log($scope.isC); //是否追号
      $scope.trueTickets = []; //清楚遗留的注单
      if ($scope.isC) {
        $.each($scope.mayChasePeriods, function(i, p) {
          if (p.selected) {
            $.each($scope.tickets, function(i, t) {
              var ticket = {
                originalNumbers: t.number,
                game: $scope.lotto.label,
                period: p.signature,
                method: t.code,
                multi: p.multiple,
                mode: t.modeCode,
                brokerage: t.brokerage
              };
              $scope.trueTickets.push(ticket);
            });
          }
        });
        submitTrueTickets();
      } else {
        var currp = '';
        if ($scope.lotto.label !== 'MMC') {
          currp = $scope.currentPeriod.signature;
        }
        $.each($scope.tickets, function(i, t) {
          var ticket = {
            originalNumbers: t.number,
            game: $scope.lotto.label,
            period: currp + '',
            method: t.code,
            multi: t.multiple,
            mode: t.modeCode,
            brokerage: t.brokerage
          };
          $scope.trueTickets.push(ticket);
        });
        submitTrueTickets();
      }
    };



    function submitTrueTickets() {
      var submitUrl = $scope.cancelOnWin ? '/lotto/rest/ticket/bundle' : '/lotto/rest/ticket/batch';
      var submitData = $scope.cancelOnWin ? {
        cancelOnWin: $scope.cancelOnWin,
        tickets: $scope.trueTickets
      } : $scope.trueTickets;
      window.purchaseingD = dialog({
        title: '温馨提示',
        content: '购彩中，请稍后...'
      }).showModal();
      $http.post(submitUrl, submitData, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).
      success(function(data) {

        // window.purchaseingD.close().remove();
        $scope.getCurrMny();
        $scope.data = data;
        var content = '',
          successCount = 0,
          failCount = 0,
          reason = '';
        $.each(data, function(i, n) {
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
              callback: function() {
                window.location.hash = "trade/deposit";
              },
              autofocus: true
            }, {
              value: '去转账页面',
              callback: function() {
                window.location.hash = "trade/transfer";
              }
            }, {
              value: '重新选注'
            }]
          }).showModal();
          window.purchaseingD.close().remove();
          return false;
        }
        $scope.isC = false;

        if ($scope.lotto.label === 'MMC' && failCount === 0) {

          $scope.getCurrMny();
          $scope.data = data;
          $scope.isC = false;
          $log.log(data);

          window.lastPeriod = $scope.lastPeriod = {};
          $scope.lastPeriod.numbers = data[0].numbers;
          showNumbers();
          var dataissue = data[0];

          $timeout(function() {
            $timeout(function() {
              window.purchaseingD.close().remove();
            }, 500);

            $scope.currMMCNO = [];
            $.each(dataissue.numbers.split(','), function(i, n) {
              $scope.currMMCNO.push({
                num: n
              });
            });
            window.currMMCNO = $scope.currMMCNO;
            $scope.updateTodayPeriods();
            // window.lottoingDialog.close().remove();
            if (dataissue.prize > 0) {
              $scope.mmstatus = 'won';
              $scope.mmprize = dataissue.prize;
            } else {
              $scope.mmstatus = 'lose';
            }
            $timeout(function() {
              $scope.mmstatus = 'none';
            }, 5000);
            if (window.purchaseingD.cancelDisplay) {
              window.purchaseingD.content(content);
            }
          }, 2000);
        } else {
          window.purchaseingD.content(content);
        }
        $scope.loadRecords();


      }).error(function(data) {
        window.purchaseingD.content('购买失败，请刷新页面重试！');
        $scope.data = data || 'Request failed';
      });
    }
    $scope.selectAllNumbers = function(rowIndex, row) {
      $.each(row.nums, function(i, r) {
        r.selected = true;
        exclusion(rowIndex, row, r);
      });
      $scope.checkSelectingLegal();
    };
    $scope.selectBigNumbers = function(row) {
      $.each(row.nums, function(i, r) {
        r.selected = i > Math.floor(row.nums.length / 2) - 1;
      });
      $scope.checkSelectingLegal();
    };
    $scope.selectSmallNumbers = function(row) {
      $.each(row.nums, function(i, r) {
        r.selected = i < Math.ceil(row.nums.length / 2);
      });
      $scope.checkSelectingLegal();
    };
    $scope.selectOddNumbers = function(row) {
      $.each(row.nums, function(i, r) {
        r.selected = r.value % 2 === 1;
      });
      $scope.checkSelectingLegal();
    };
    $scope.selectEvenNumbers = function(row) {
      $.each(row.nums, function(i, r) {
        r.selected = r.value % 2 === 0;
      });
      $scope.checkSelectingLegal();
    };
    $scope.clearSelNumbers = function(row) {
      $.each(row.nums, function(i, r) {
        r.selected = false;
      });
      $scope.checkSelectingLegal();
    };

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    $scope.getRandomInt = function(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    function upperRowSelected(rows, index, randomIndex) {
      var r = false;
      $.each(rows, function(i, n) {
        if (i >= index) {
          return r;
        }
        if (n.nums[randomIndex].selected) {
          r = true;
          return r;
        }
      });
      return r;
    }
    $scope.randomTicket1 = function(notclean) {
      if (notclean) {} else {
        $scope.tickets = [];
      }
      var currMethod = $scope.currentMethod;
      if (currMethod.spec === 'luru') {
        return false;
      }
      $scope.emptyTheSelected();
      $.each(currMethod.rows, function(j, row) {
        var randomIndex;
        if (row.least) {
          for (var i = 0; i < row.least; i++) {
            randomIndex = getRandomInt(0, row.nums.length - 1);
            while (row.nums[randomIndex].selected || (currMethod.name.indexOf('胆拖') > -1 && upperRowSelected(currMethod.rows, j, randomIndex))) {
              randomIndex = getRandomInt(0, row.nums.length - 1);
            }
            row.nums[randomIndex].selected = true;
          }
        } else {
          randomIndex = getRandomInt(0, row.nums.length - 1);
          while (($scope.lotto.maxNumber > 9 || currMethod.name.indexOf('组选') > -1 || currMethod.name.indexOf('胆拖') > -1) && upperRowSelected(currMethod.rows, j, randomIndex)) {
            randomIndex = getRandomInt(0, row.nums.length - 1);
          }
          row.nums[randomIndex].selected = true;
        }
      });
      $scope.selectingCanBuy = true;
      $scope.addTicket(true);
      $scope.emptyTheSelected();
    };
    $scope.randomTicket5 = function() {
      $scope.tickets = [];
      for (var i = 0; i < 5; i++) {
        $scope.randomTicket1(1);
      }
    };
    $scope.randomTicket10 = function() {
      $scope.tickets = [];
      for (var i = 0; i < 10; i++) {
        $scope.randomTicket1(1);
      }
    };
    $scope.removeTickets = function() {
      $scope.tickets = [];
      $scope.trueTickets = [];
    };

    $scope.updateTodayPeriods = function() {

      $http.get('/lotto/rest/period/' + $scope.lotto.label + '/recent/8')
        .success(function(data) {
          $scope.recentPeriods = data;
          if ($scope.lotto.label === 'MMC') {
            $.each(data, function(i, period) {
              var nums = [];
              if (!period.numbers) {
                return true;
              }
              $.each(period.numbers.split(','), function(i, n) {
                nums.push({
                  num: n
                });
              });
              period.showNumbers = nums;
            });
            $scope.recentPeriods = data;
            if ($scope.recentPeriods.length > 0 && !$scope.currMMCNO) {
              $scope.currMMCNO = $scope.recentPeriods[0].showNumbers;
            }
          }
          $log.log('recentPeriods', $scope.recentPeriods);
        });
    };


    window.status = $scope.status = 'normal';
    $scope.$watch('status', function(status) {
      if (status) {
        if (status === 'normal') {
          $scope.updateTodayPeriods();
          window.lastPeriod = $scope.lastPeriod = {};
        }

      }
    });




    $scope.$watch('currentPeriod', function(currentPeriod, lastPeriod) {
      if (!lastPeriod) {
        lastPeriod = 'none';
      }
      if (!currentPeriod) {
        currentPeriod = 'none';
      } else {}

    });
    $scope.$watch('lastPeriod', function(lastPeriod) {
      if (lastPeriod === undefined || lastPeriod.numbers) {

      } else {
        showNumbers();
        $log.log('tring update lastPeriod...' + $scope.lastPeriod.signature);
        if ($scope.lotto.label === 'MMC') {
          return false;
        }
      }

    });

    function showNumbers() {
      var num = [];
      if ($scope.lastPeriod !== undefined && $scope.lastPeriod.numbers !== undefined) {
        $.each($scope.lastPeriod.numbers.split(','), function(i, number) {
          num.push({
            n: number
          });
        });
        $scope.lottoStatus = 'issueing'

        var lottoNumbers = $scope.lotto.number || 5;
        var num2 = [];
        for (var ii = 0; ii < lottoNumbers; ii++) {
          num2.push({
            n: '?'
          });
        }
        $.each(num, function(i, n) {
          setTimeout(function() {
            num2[i].n = num[i].n;
            $scope.openedNums = num2;
          }, i * 200);
        })
      } else {
        var lottoNumbers = $scope.lotto.number || 5;
        for (var i = 0; i < lottoNumbers; i++) {
          num.push({
            n: '?'
          });
        }
        $scope.openedNums = num;
      }


    }



    $scope.todayBoughtTickets = [];
    var DATE_FORMAT = 'YYYY-MM-DD';
    $scope.showDetail = function(period) { //查看用户的购买记录等
      var pdialog = dialog({
        title: '注单详情：第' + period.signature + '期 开奖时间' + moment(period.openTime).format('YYYY-MM-DD A H:mm:ss'),
        align: 'left',
        width: 400,
        cancel: function() {},
        cancelValue: '关闭'
      });
      pdialog.show($('#period' + period.signature)[0]);
      var now = moment();
      if (now.hour() < 3) { //凌晨三点前，今天把昨天的也算进来
        $scope.startDate = moment().subtract(1, 'days').format(DATE_FORMAT);
      } else {
        $scope.startDate = moment(0, 'HH').format(DATE_FORMAT);
      }
      $scope.endDate = moment('23:59:59', 'HH:mm:ss').format(DATE_FORMAT);
      $log.debug('today', $scope.startDate, $scope.endDate);
      var qp = '?startDate=' + $scope.startDate + '&endDate=' + $scope.endDate + '&scope=SELF' + '&subordinate=undefined';
      $http.get('/lotto/rest/ticket/query' + qp).
      success(function(data) {
        $scope.todayBoughtTickets = data;
        $scope.queryTicket = $filter('filter')($scope.todayBoughtTickets, {
          game: period.game.type,
          period: period.signature
        });
        if (angular.isArray($scope.queryTicket) && $scope.queryTicket.length > 0) {
          var content = '您已购买：<br />';
          $.each($scope.queryTicket, function(i, n) {
            content += '号码：' + n.originalNumbers + '中奖金额：' + n.prize + '<br />';
          });
          pdialog.content(content);
        } else {
          pdialog.content('您没有购买这一期的注单。');
        }
      }).error(function() {});
    };
    $scope.getCurrMny = function() {
      $http.get('/lotto/rest/prefer').success(function(data) {
        $scope.currMny = data.asset;
      });
    };
    $scope.getCurrMny();
    $scope.moment = moment;
    window.his = function() {
      dialog({
        skin: 'his-dialog',
        title: $scope.lotto.name + '历史走势',
        width: 1224,
        height: 1324,
        url: $scope.lotto.zoushi
      }).showModal();
    };

    function slideRight(node, duration, callback) {
      //菜单滑入
      try {
        require(['node', 'anim'], function($, Anim) {
          $(node).each(function(n) {
            new Anim(n, // 动画目标样式
              {
                'top': 120,
                'left': -200
              }, {
                duration: 0.2, // 动画时长，秒
                easing: 'ease-out', // 动画特效
                complete: function() { // 动画结束的回调
                  if (callback) {
                    callback();
                  }
                }
              }).run();
          });
        });
      } catch (e) {

      }
    }

    function slideLeft(node, duration, callback) {
      //菜单滑入
      try {
        require(['node', 'anim'], function($, Anim) {
          $(node).each(function(n) {
            new Anim(n, // 动画目标样式
              {
                'top': 120,
                'left': 0
              }, {
                duration: 0.2, // 动画时长，秒
                easing: 'ease-out', // 动画特效
                complete: function() { // 动画结束的回调
                  if (callback) {
                    callback();
                  }
                }
              }).run();
          });
        });
      } catch (e) {

      }
    }
    $scope.loadRecords = function() {

      $http.get('/lotto/rest/ticket/recent/' + $scope.lotto.label).
      success(function(data) {
        $log.debug(data);
        $scope.results = data;
        $scope.records_show = true;
      }).error(function() {});
    };
    $scope.loadRecords();
    $scope.vocabulary = {};
    $scope.vocabulary.name = function(code) {
      return window.vocs[code];
    };
    $scope.ticketDetail = function(t) {
      $scope.viewingTicket = t;
      $log.log(t);
      //dialog({title:'注单查看',content:t.code}).showModal();
    };

  }).filter('hasNumber', function() {
    return function(items) {
      if (items) {
        var filtered = [];
        $.each(items, function(i, n) {
          if (n.numbers) {
            filtered.push(n);
          }
        });
        return filtered;
      }
    };
  }).filter('allowChase', function() {
    return function(items, begin, count) {
      if (items) {
        var filtered = [];
        $.each(items, function(i, item) {
          if (item.signature >= begin && filtered.length < count) {
            filtered.push(item);
          }
        });
        return filtered;
      }
    };
  }).filter('chaseSelected', function() {
    return function(items) {
      if (items) {
        var filtered = [];
        $.each(items, function(i, item) {
          if (item.selected === true) {
            filtered.push(item);
          }
        });
        return filtered;
      }
    };
  }).filter('ticketsFilter', function() {
    return function(items, game, method, period, mode, status) {
      if (items) {
        var filtered = [];
        $.each(items, function(i, item) {
          if (
            (game === undefined || game === 'ALL' || item.game === game) &&
            (method === undefined || method === 'ALL' || item.method === method) &&
            (period === undefined || period === 'ALL' || item.period === period) &&
            (mode === undefined || mode === 'ALL' || item.mode === mode) &&
            (status === undefined || status === 'ALL' || item.status === status)
          ) {
            filtered.push(item);
          } else {}
        });
        return filtered;
      }
    };
  });