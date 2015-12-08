window.fc3d = {
    name: '福彩3D',
    label: 'FC3D',
    cate: '3D',
    histype: 'three',
    category: 'game3d',
    number: 3,
    midNum: 4,
    maxNumber: 9,
    totalPeriods: '每天一',
    zoushi: 'http://www.d5xq.cn/AloneModel/five.php?lotteryid=3&limit=30',
    tabs: [
        {
            name: '三星',
            label: 'sanxing',
            methodgroups: [
                {
                    name: '直选',
                    methods: [
                        {
                            name: '直选复式', code: '3DC', tip: '从百位、十位、个位中选择一个3位数号码组成一注。',
                            fl: '如：选择123，开奖号码为123，即为中奖。',
                            sm: '从百位、十位、个位中选择一个3位数号码组成一注，所选号码与开奖号码相同，且顺序一致，即为中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^\d(,\d)*(;\d(,\d)*){2}$/, base: 2000,
                            rows: [
                                {
                                    name: '百位',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                },
                                {
                                    name: '十位',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                },
                                {
                                    name: '个位',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                }
                            ]
                        },
                        {
                            name: '直选单式', code: '3DS', tip: '手动输入号码，输入 1 个三位数号码组成一注。', spec: 'luru',
                            fl: '如：手动输入123，开奖号码为123，即为中奖。',
                            sm: '手动输入一个3位数号码组成一注，所选号码与开奖号码相同，且顺序一致，即为中奖。',
                            regx: /^\d(,\d){2}(;\d(,\d){2})*$/, base: 2000
                        },
                        {
                            name: '直选和值', code: '3DT', tip: '从前三位和值 0-27 中任意选择 1 个或以上号码。',
                            fl: '如：选择6，开奖号码为123、141、114、006、060等任意一个和值为6的结果，即为中奖。',
                            sm: '所选数值等于开奖号码的三个数字相加之和，即为中奖。',
                            spec: 'number',
                            widget: false,
                            regx: /^\d+(;\d+)*$/, base: 2000,
                            seperator: ';',
                            rows: [
                                {
                                    name: '和值',
                                    code: '3##DT',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9},
                                        {value: 10}, {value: 11}, {value: 12}, {value: 13}, {value: 14}, {value: 15}, {value: 16}, {value: 17}, {value: 18}, {value: 19},
                                        {value: 20}, {value: 21}, {value: 22}, {value: 23}, {value: 24}, {value: 25}, {value: 26}, {value: 27}]
                                }
                            ]
                        }
                    ]
                },
                {
                    name: '组选',
                    methods: [
                        {
                            name: '组三', code: '3G3', tip: '从 0-9 中任意选择 2 个或以上号码。',
                            fl: '如：选择12（展开为122，212，221 和 112、121、211），开奖号码为212 或 121，即为中奖。',
                            sm: '从0-9中任意选择2个数字组成两注，所选号码与开奖号码相同，顺序不限，即为中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^\d(,\d)+$/, base: 666.6667,
                            rows: [
                                {
                                    name: '',
                                    least: 2,
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                }
                            ]
                        },
                        {
                            name: '组六', code: '3G6', tip: '从 0-9 中选择 3 个或以上号码。',
                            fl: '如：选择123（展开为123，132，231，213，312，321），开奖号码为321，即为中奖。',
                            sm: '从0-9中任意选择3个号码组成一注，所选号码与开奖号码相同，顺序不限，即为中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^\d(,\d){2,}$/, base: 329.8611,
                            rows: [
                                {
                                    name: '',
                                    least: 3,
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                }
                            ]
                        },
                        {
                            name: '混合组选', code: '3GM', tip: '手动输入号码，输入 1 个三位数号码组成一注。',
                            fl: '如：选择123、455，开奖号码为321即中组六奖，开奖号码为545即中组三奖。',
                            sm: '手动输入购买号码，3个数字为一注，开奖号码符合组三或组六均为中奖。',
                            mixedPrize: true,
                            prizes: [
                                {name: '组三', base: 666.6667},
                                {name: '组六', base: 329.8611}
                            ], spec: 'luru',
                            regx: /^\d(,\d){1,2}(;\d(,\d){1,2})*$/, base: 666.6667
                        }
                    ]
                }
            ]
        },
        {
            name: '二星',
            label: 'erxing',
            methodgroups: [
                {
                    name: '前二',
                    methods: [
                        {
                            name: '前二直选复式', code: '2*DC', tip: ' 分别从万位、千位中各选至少 1 个号码。',
                            fl: '如：选择号码34，开出34*即为中奖。',
                            sm: '从百位和十位上至少各选1个号码，所选号码与开奖号码百位、十位相同，且顺序一致，即为中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^\d(,\d)*(;\d(,\d)*)+$/, base: 200,
                            rows: [
                                {
                                    name: '万位',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                },
                                {
                                    name: '千位',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                }
                            ]
                        },
                        {
                            name: '前二直选单式', code: '2*DS', tip: ' 手动输入号码，输入 1 个二位数号码组成一注。', spec: 'luru',
                            fl: '如：手动输入12，开奖号码为是12*，即为中奖。',
                            sm: '手动输入一个2位数号码组成一注，所选号码与开奖号码的百位、十位相同，且顺序一致，即为中奖。',
                            regx: /^\d,\d(;\d,\d)*$/, base: 200
                        },
                        {
                            name: '前二直选和值', code: '2*DT', tip: ' 从前二位和值 0-18 中任意选择 1 个或以上号码。',
                            fl: '如：选择和值11 开奖号为923，即为中奖',
                            sm: '所选数值等于开奖号码的百位、十位二个数字相加之和，即为中奖。',
                            spec: 'number',
                            widget: false,
                            regx: /^\d+(;\d+)*$/, base: 200,
                            seperator: ';',
                            rows: [
                                {
                                    name: '和值',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9},
                                        {value: 10}, {value: 11}, {value: 12}, {value: 13}, {value: 14}, {value: 15}, {value: 16}, {value: 17}, {value: 18}]
                                }
                            ]
                        },
                        {
                            name: '前二组选复式', code: '2*GC', tip: ' 从 0-9 中任意选择 2 个或以上号码。',
                            fl: '如：百位选择7，十位选择8，开奖号码78*或87*，即为中奖。',
                            sm: '从0-9中选2个号码组成一注，所选号码与开奖号码的百位、十位相同，顺序不限，即为中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^\d(,\d)+$/, base: 100,
                            rows: [
                                {
                                    name: '组选',
                                    least: 2,
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                }
                            ]
                        },
                        {
                            name: '前二组选单式', code: '2*GS', tip: ' 手动输入号码，输入 1 个二位数号码组成一注。', spec: 'luru',
                            fl: '如：手动输入12，开奖号码为是12*，即为中奖。',
                            sm: '手动输入一个2位数号码组成一注，所选号码与开奖号码的百位、十位相同，且顺序一致，即为中奖。',
                            regx: /^\d,\d(;\d,\d)*$/, base: 100
                        },
                        {
                            name: '前二组选和值', code: '2*GT', tip: ' 从前二位和值 1-17 中任意选择 1 个或以上号码。',
                            fl: '如：选择和值11 开奖号为923，即为中奖。',
                            sm: '如：选择和值11 开奖号为923，即为中奖。',
                            spec: 'number',
                            widget: false,
                            regx: /^\d+(;\d+)*$/, base: 100,
                            seperator: ';',
                            rows: [
                                {
                                    name: '和值',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9},
                                        {value: 10}, {value: 11}, {value: 12}, {value: 13}, {value: 14}, {value: 15}, {value: 16}, {value: 17}]
                                }
                            ]
                        }
                    ]
                },
                {
                    name: '后二',
                    methods: [
                        {
                            name: '后二直选复式', code: '*2DC', tip: ' 分别从十位、个位中各选至少 1 个号码。',
                            fl: '如：选择号码34，开出*34，即为中奖。',
                            sm: '从十位和个位上至少各选1个号码，所选号码与开奖号码的十位、个位相同，且顺序一致，即为中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^\d(,\d)*(;\d(,\d)*)+$/, base: 200,
                            rows: [
                                {
                                    name: '十位',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                },
                                {
                                    name: '个位',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                }
                            ]
                        },
                        {
                            name: '后二直选单式', code: '*2DS', tip: ' 手动输入号码，输入 1 个二位数号码组成一注。', spec: 'luru',
                            fl: '如：手动输入12，开奖号码为是*12，即为中奖。',
                            sm: '手动输入一个2位数号码组成一注，所选号码与开奖号码的十位、个位相同，且顺序一致，即为中奖。',
                            regx: /^\d,\d(;\d,\d)*$/, base: 200
                        },
                        {
                            name: '后二直选和值', code: '*2DT', tip: ' 从后二位和值 0-18 中任意选择 1 个或以上号码。',
                            fl: '所选数值等于开奖号码的十位、个位二个数字相加之和，即为中奖。',
                            sm: '如：选择号码5，开出*42不中',
                            spec: 'number',
                            widget: false,
                            regx: /^\d+(;\d+)*$/, base: 200,
                            seperator: ';',
                            rows: [
                                {
                                    name: '和值',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9},
                                        {value: 10}, {value: 11}, {value: 12}, {value: 13}, {value: 14}, {value: 15}, {value: 16}, {value: 17}, {value: 18}]
                                }
                            ]
                        },
                        {
                            name: '后二组选复式', code: '*2GC', tip: ' 从 0-9 中任意选择 2 个或以上号码。',
                            fl: '如：十位选择7，个位选择8，开奖号码*78或*87，即为中奖。',
                            sm: '从0-9中选2个号码组成一注，所选号码与开奖号码的十位、个位相同，顺序不限，即为中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^\d(,\d)+$/, base: 100,
                            rows: [
                                {
                                    name: '组选',
                                    least: 2,
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                }
                            ]
                        },
                        {
                            name: '后二组选单式', code: '*2GS', tip: ' 手动输入号码，输入 1 个二位数号码组成一注。', spec: 'luru',
                            fl: '如：手动输入12，开奖号码为是*21或者*12，即为中奖。',
                            sm: '手动输入购买号码，2个数字为一注，所选号码与开奖号码的十位、个位相同，顺序不限，即为中奖。',
                            regx: /^\d,\d(;\d,\d)*$/, base: 100
                        },
                        {
                            name: '后二组选和值', code: '*2GT', tip: ' 从前二位和值 1-17 中任意选择 1 个或以上号码。',
                            fl: '如：选择和值5 开奖号为923，即为中奖',
                            sm: '所选数值等于开奖号码的十位、个位二个数字相加之和（不包含对子号），即为中奖。',
                            spec: 'number',
                            widget: false,
                            regx: /^\d+(;\d+)*$/, base: 100,
                            seperator: ';',
                            rows: [
                                {
                                    name: '和值',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9},
                                        {value: 10}, {value: 11}, {value: 12}, {value: 13}, {value: 14}, {value: 15}, {value: 16}, {value: 17}]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: '定位胆',
            label: 'dingwei',
            methodgroups: [
                {
                    name: '',
                    methods: [
                        {
                            name: '定位胆', code: '1DP', tip: ' 从百位、十位、个位任意1个位置或多个位置上选择1个号码。',
                            fl: '如：定百位为3，开奖号码为3**，即为中奖。',
                            sm: '从百位、十位、个位任意1个位置或多个位置上选择1个号码，所选号码与相同位置上的开奖号码一致，即为中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^(.{0}|(\d(,\d)*))(;(.{0}|(\d(,\d)*))){2}$/, base: 20,
                            rows: [
                                {
                                    name: '百位',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                },
                                {
                                    name: '十位',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                },
                                {
                                    name: '个位',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: '不定位',
            methodgroups: [
                {
                    name: '三星不定位',
                    methods: [
                        {
                            name: '一码不定位', code: '3F1', tip: ' 从0-9中选择1个号码，每注由1个号码组成。',
                            fl: '如：选择一码不定位4，开出4**、*4*、**4，即为中奖。',
                            sm: '从0-9中选择1个号码，每注由1个号码组成，只要开奖结果中包含所选号码，即为中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^\d(;\d)*$/, base: 7.0956,
                            seperator: ';',
                            rows: [
                                {
                                    name: '号码',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                }
                            ]
                        },
                        {
                            name: '二码不定位', code: '3F2', tip: '从0-9中选择2个号码，每注由2个号码组成。',
                            fl: '如：选择二码不定位45，开出45*、54*、*54、*45、5*4、4*5，即为中奖。',
                            sm: '从0-9中选择2个号码，每注由2个号码组成，只要开奖结果中包含所选2个号码，即为中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^\d(,\d)+$/, base: 36.5355,
                            rows: [
                                {
                                    name: '号码',
                                    least: 2,
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: '大小单双',
            methodgroups: [
                {
                    name: '二星',
                    methods: [
                        {
                            name: '后二大小单双', code: '*2S', tip: ' 对十位、个位的“大（56789）小（01234）、单（13579）双（02468）”形态进行购买。',
                            fl: '如：选择后二大小单双“小双”，开奖号码十位与个位为“小双”，即为中奖。',
                            sm: '对十位、个位的“大（56789）小（01234）、单（13579）双（02468）”形态进行购买，所选号码的位置、形态与开奖号码的位置、形态相同，即为中奖。',
                            spec: 'daxiaodanshuang',
                            regx: /^\d(,\d)*;\d(,\d)*$/, base: 8.0000,
                            rows: [
                                {
                                    name: '十位',
                                    nums: [{value: '大', trueValue: 0}, {value: '小', trueValue: 1}, {
                                        value: '单',
                                        trueValue: 2
                                    }, {value: '双', trueValue: 3}]
                                },
                                {
                                    name: '个位',
                                    nums: [{value: '大', trueValue: 0}, {value: '小', trueValue: 1}, {
                                        value: '单',
                                        trueValue: 2
                                    }, {value: '双', trueValue: 3}]
                                }
                            ]
                        },
                        {
                            name: '前二大小单双', code: '2*S', tip: ' 对百位、十位的“大（56789）小（01234）、单（13579）双（02468）”形态进行购买。',
                            fl: '如：选择前二大小单双“大单”，开奖号码百位与十位为“大单”，即为中奖。',
                            sm: '对百位、十位的“大（56789）小（01234）、单（13579）双（02468）”形态进行购买，所选号码的位置、形态与开奖号码的位置、形态相同，即为中奖。',
                            spec: 'daxiaodanshuang',
                            regx: /^\d(,\d)*;\d(,\d)*$/, base: 8.0000,
                            rows: [
                                {
                                    name: '百位',
                                    nums: [{value: '大', trueValue: 0}, {value: '小', trueValue: 1}, {
                                        value: '单',
                                        trueValue: 2
                                    }, {value: '双', trueValue: 3}]
                                },
                                {
                                    name: '十位',
                                    nums: [{value: '大', trueValue: 0}, {value: '小', trueValue: 1}, {
                                        value: '单',
                                        trueValue: 2
                                    }, {value: '双', trueValue: 3}]
                                }
                            ]
                        },
                        {
                            name: '三码大小单双', code: '3S', tip: ' 从百位、十位、个位中的“大、小、单、双”中至少各选一个组成一注。。',
                            fl: '如：选择大小单双“大单双”，开奖号码百位与十位为“大单双”，即为中奖。',
                            sm: '从百位、十位、个位中的“大、小、单、双”中至少各选一个组成一注。',
                            spec: 'daxiaodanshuang',
                            regx: /^\d(,\d)*;\d(,\d)*;\d(,\d)*$/, base: 16.0000,
                            rows: [
                                {
                                    name: '百位',
                                    nums: [{value: '大', trueValue: 0}, {value: '小', trueValue: 1}, {
                                        value: '单',
                                        trueValue: 2
                                    }, {value: '双', trueValue: 3}]
                                },
                                {
                                    name: '十位',
                                    nums: [{value: '大', trueValue: 0}, {value: '小', trueValue: 1}, {
                                        value: '单',
                                        trueValue: 2
                                    }, {value: '双', trueValue: 3}]
                                },
                                {
                                    name: '个位',
                                    nums: [{value: '大', trueValue: 0}, {value: '小', trueValue: 1}, {
                                        value: '单',
                                        trueValue: 2
                                    }, {value: '双', trueValue: 3}]
                                }
                            ]
                        }
                    ]
                }

            ]
        }
    ]
};
lottos.fc3d = fc3d, lottos.fc3d.adjustTime = 540;
var pl3 = angular.copy(window.fc3d);
pl3.name = '体彩排三', pl3.label = 'PL3', pl3.adjustTime = 19 * 60;
lottos.pl3 = pl3;
var pl3 = angular.copy(fc3d);
pl3.name = '五分3D', pl3.label = 'FFC3D5', pl3.isOur = true, pl3.periodCounts = 288;
lottos.ffc3d5 = pl3;
var pl3 = angular.copy(fc3d);
pl3.name = '五分排三', pl3.label = 'FFCPL35', pl3.isOur = true, pl3.periodCounts = 288;
lottos.ffcpl35 = pl3;