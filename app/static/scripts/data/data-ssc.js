var lottos = {};
window.cqssc = {
    name: '重庆时时彩',
    label: 'CQSSC',
    cate: 'SSC',
    histype: 'ssc',
    category: 'game',
    number: 5,
    midNum: 4,
    maxNumber: 9,
    periodCounts: 120,
    tabs: [
        {
            name: '五星',
            label: 'wuxing',
            methodgroups: [
                {
                    name: '直选',
                    methods: [
                        {
                            name: '复式',
                            code: '5DC',
                            tip: '分别从万位、千位、百位、十位、个位中各选至少 1 个号码。',
                            fl: '投注方案：13456； 开奖号码：13456，即中五星直选。',
                            sm: '从万位、千位、百位、十位、个位中选择一个5位数号码组成一注，所选号码与开奖号码相同，且顺序一致，即为中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^\d(,\d)*(;\d(,\d)*){4}$/, base: 200000,
                            rows: [
                                {
                                    name: '万位',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                },
                                {
                                    name: '千位',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                },
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
                            name: '单式', code: '5DS', tip: '手动输入号码，输入 1 个五位数号码组成一注。',
                            fl: '投注方案：13456； 开奖号码：13456，即中五星直选。',
                            sm: '手动输入一个5位数号码组成一注，所选号码的万位、千位、百位、十位、个位与开奖号码相同，且顺序一致，即为中奖。',
                            spec: 'luru', regx: /^\d(,\d){4}(;\d(,\d){4})*$/, base: 200000
                        }
                    ]
                },
                {
                    name: '组选',
                    methods: [
                        {
                            name: '组选120', code: '5G120', tip: '从 0-9 中任意选择 5 个或以上号码。',
                            fl: '投注方案：10568； 开奖号码：10568(顺序不限)，即中五星组选120。',
                            sm: '从0-9中任意选择5个号码为一注，所选号码与开奖号码的万位，千位，百位，十位，个位相同，顺序不限，即中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^\d(,\d){4,}$/, base: 1666.67,
                            rows: [
                                {
                                    name: '单号',
                                    least: 5,
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                }
                            ]
                        },
                        {
                            name: '组选60', code: '5G60', tip: '从“二重号” 0-9 中选择 1 个或以上号码，并从“单号” 0-9 中选择 3 个或以上号码。',
                            fl: '投注方案：二重号8,单号016	开奖号码：01688(顺序不限)，即可中五星组选60',
                            sm: '选择1个二重号与3个单号号码组成一注，所选的单号号码与开奖号码相同，且所选二重号在开奖结果中出现2次，即为中奖',
                            spec: 'number',
                            widget: true,
                            regx: /^\d(,\d)*;\d(,\d){2,}$/, base: 3333.33,
                            rows: [
                                {
                                    name: '二重',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                },
                                {
                                    name: '单号',
                                    least: 3,
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                }
                            ]
                        },
                        {
                            name: '组选30', code: '5G30', tip: '从“二重号” 0-9 中选择 2 个或以上号码，并从“单号” 0-9 中选择 1 个或以上号码。',
                            fl: '投注方案：二重号68	单号0	开奖号码:06688(顺序不限)，即可中五星组选30',
                            sm: '选择2个二重号和1个单号号码组成一注，所选单号号码与开奖号码相同，且所选的２个二重号分别在开奖号码中出现2次，即为中奖',
                            spec: 'number',
                            widget: true,
                            regx: /^\d(,\d)+;\d(,\d)*$/, base: 6666.67,
                            rows: [
                                {
                                    name: '二重',
                                    least: 2,
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                },
                                {
                                    name: '单号',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                }
                            ]
                        },
                        {
                            name: '组选20', code: '5G20', tip: '从“三重号” 0-9 中选择 1 个或以上号码，并从“单号” 0-9 中选择 2 个或以上号码。',
                            fl: '三重号8	单号01	开奖号码:01888(顺序不限)，即可中五星组选20',
                            sm: '选择1个三重号和2个单号号码组成一注，所选单号号码与开奖号码相同，且所选三重号在开奖号码中出现3次，即为中奖',
                            spec: 'number',
                            widget: true,
                            regx: /^\d(,\d)*;\d(,\d)+$/, base: 10000,
                            rows: [
                                {
                                    name: '三重',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                },
                                {
                                    name: '单号',
                                    least: 2,
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                }
                            ]
                        },
                        {
                            name: '组选10', code: '5G10', tip: '从“三重号” 0-9 中选择 1 个或以上号码，并从“二重号” 0-9 中选择 1 个或以上号码。',
                            fl: '投注方案：三重号:8,二重号:1	开奖号码：11888(顺序不限)，即可中五星组选10',
                            sm: '选择1个二重号和1个三重号组成一注，所选三重号在开奖号码中出现3次，且所选二重号在开奖号码中出现2次，即为中奖',
                            spec: 'number',
                            widget: true,
                            regx: /^\d(,\d)*;\d(,\d)*$/, base: 20000,
                            rows: [
                                {
                                    name: '三重',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                },
                                {
                                    name: '二重号',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                }
                            ]
                        },
                        {
                            name: '组选5', code: '5G5', tip: '从“四重号” 0-9 中选择 1 个或以上号码，并从“单号” 0-9 中选择 1 个或以上号码。',
                            fl: '投注方案：四重号:8　单号1	开奖号码:18888(顺序不限)，即可中五星组选5',
                            sm: '选择1个四重号和1个单号号码组成一注,所选的单号号码与开奖结果相同，且所选四重号在开奖结果中出现4次，即为中奖',
                            spec: 'number',
                            widget: true,
                            regx: /^\d(,\d)*;\d(,\d)*$/, base: 40000,
                            rows: [
                                {
                                    name: '四重',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                },
                                {
                                    name: '单号',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                }
                            ]
                        }
                    ]
                }, {
                    name: '特殊',
                    methods: [
                        {
                            name: '一帆风顺', code: 'S1', tip: ' 从 0-9 中任意选择 1 个或以上号码。',
                            fl: '投注方案:8	开奖号码：至少出现1个8，即中一帆风顺',
                            sm: '从0-9中任意选择一个号码为一注，只要开奖号码的万位、千位、百位、十位、个位中包含所选号码，即为中奖',
                            spec: 'number',
                            widget: true,
                            regx: /^\d(;\d)*$/, base: 4.7840,
                            seperator: ';',
                            rows: [
                                {
                                    name: '一帆风顺',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                }
                            ]
                        },
                        {
                            name: '好事成双', code: 'S2', tip: ' 从 0-9 中任意选择1个或以上的二重号码。',
                            fl: '投注方案:8	开奖号码：至少出现2个8，即中好事成双',
                            sm: '从0-9中任意选择一个号码为一注，只要开奖号码的万位、千位、百位、十位、个位中出现2次，即为中奖',
                            spec: 'number',
                            widget: true,
                            regx: /^\d(;\d)*$/, base: 24.4515,
                            seperator: ';',
                            rows: [
                                {
                                    name: '好事成双',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                }
                            ]
                        },
                        {
                            name: '三星报喜', code: 'S3', tip: ' 从 0-9 中任意选择 1 个或以上的三重号码。',
                            fl: '投注方案:8	开奖号码：至少出现3个8，即中三星报喜',
                            sm: '从0-9中任意选择一个号码为一注，只要开奖号码的万位、千位、百位、十位、个位中出现3次，即为中奖',
                            spec: 'number',
                            widget: true,
                            regx: /^\d(;\d)*$/, base: 233.4060,
                            seperator: ';',
                            rows: [
                                {
                                    name: '三星报喜',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                }
                            ]
                        },
                        {
                            name: '四季发财', code: 'S4', tip: ' 从 0-9 中任意选择 1 个或以上的四重号码。',
                            fl: '投注方案:8	开奖号码：至少出现4个8，即中四季发财',
                            sm: '从0-9中任意选择一个号码为一注，只要开奖号码的万位、千位、百位、十位、个位中出现4次，即为中奖',
                            spec: 'number',
                            widget: true,
                            regx: /^\d(;\d)*$/, base: 4334.4892,
                            seperator: ';',
                            rows: [
                                {
                                    name: '四季发财',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: '四星',
            label: 'sixing',
            methodgroups: [
                {
                    name: '直选',
                    methods: [
                        {
                            name: '复式', code: '4DC', tip: '分别从千位、百位、十位、个位中各选至少 1 个号码。',
                            fl: '投注方案：3456； 开奖号码：*3456，即中后四星直选。',
                            sm: '从、千位、百位、十位、个位中选择一个4位数号码组成一注，所选号码与开奖号码相同，且顺序一致，即为中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^\d(,\d)*(;\d(,\d)*){3}$/, base: 20000,
                            rows: [
                                {
                                    name: '千位',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                },
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
                            name: '单式',
                            code: '4DS',
                            tip: '手动输入号码，输入 1 个四位数号码组成一注。',
                            fl: '投注方案：3456； 开奖号码：*3456，即中后四星直选。',
                            sm: '手动输入一个4位数号码组成一注，所选号码的千位、百位、十位、个位与开奖号码相同，且顺序一致，即为中奖。',
                            spec: 'luru',
                            regx: /^\d(,\d){3}(;\d(,\d){3})*$/,
                            base: 20000
                        }
                    ]
                },
                {
                    name: '组选',
                    methods: [
                        {
                            name: '组选24', code: '4G24', tip: '从 0-9 中任意选择 4 个或以上号码。',
                            fl: '投注方案：0568		开奖号码：*0568（顺序不限），即可中四星组选24',
                            sm: '从0-9中选择4个号码组成一注，所选号码与开奖号码的千位、百位、十位、个位相同，顺序不限，即为中奖',
                            spec: 'number',
                            widget: true,
                            regx: /^\d(,\d){3,}$/, base: 833.3333,
                            rows: [
                                {
                                    name: '单号',
                                    least: 4,
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                }
                            ]
                        },
                        {
                            name: '组选12', code: '4G12', tip: '从“二重号” 0-9 中选择 1 个或以上号码，并从“单号” 0-9 中选择 2 个或以上号码。',
                            fl: '投注方案：二重号:8;单号:6		开奖号码：*0688（顺序不限）,即可中四星组选12',
                            sm: '选择1个二重号和2个单号号码组成一注,所选单号与开奖号码的千位、百位、十位、个位相同，且所选二重号在开奖结果中出现两次，即为中奖',
                            spec: 'number',
                            widget: true,
                            regx: /^\d(,\d)*;\d(,\d)+$/, base: 1666.6667,
                            rows: [
                                {
                                    name: '二重',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                },
                                {
                                    name: '单号',
                                    least: 2,
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                }
                            ]
                        },
                        {
                            name: '组选6', code: '4G6', tip: '从“二重号” 0-9 中选择 2 个或以上号码。',
                            fl: '投注方案：二重号68;	开奖结果:06688(顺序不限),即可中四星组选6',
                            sm: '选择2个二重号，所选的2个二重号在开奖号码的千位、百位、十位、个位分别出现2次，即为中奖',
                            spec: 'number',
                            widget: true,
                            regx: /^\d(,\d)+$/, base: 3333.3333,
                            rows: [
                                {
                                    name: '二重',
                                    least: 2,
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                }
                            ]
                        },
                        {
                            name: '组选4', code: '4G4', tip: ' 从“三重号” 0-9 中选择 1 个或以上号码，并从“单号” 0-9 中选择 1 个或以上号码。',
                            fl: '投注方案：三重号:8; 单号:2	开奖结果:*8828(顺序不限)，即可中四星组选4',
                            sm: '选择一个三重号与一个单号号码组成一注，所选单号号码与开奖结果的千位、百位、十位、个位相同，且所选三重号在结果中出现3次，即为中奖',
                            spec: 'number',
                            widget: true,
                            regx: /^\d(,\d)*;\d(,\d)*$/, base: 5000.0000,
                            rows: [
                                {
                                    name: '三重',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                },
                                {
                                    name: '单号',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: '前三',
            label: 'qiansan',
            methodgroups: [
                {
                    name: '直选',
                    methods: [
                        {
                            name: '复式', code: '3##DC', tip: '分别从万位、千位、百位中各选至少 1 个号码。',
                            fl: '投注方案：345； 开奖号码：345**，即中前三直选。',
                            sm: '从万位、千位、百位中选择一个3位数号码组成一注，所选号码与开奖号码的前3位相同，且顺序一致，即为中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^\d(,\d)*(;\d(,\d)*){2}$/, base: 2000,
                            rows: [
                                {
                                    name: '万位',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                },
                                {
                                    name: '千位',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                },
                                {
                                    name: '百位',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                }
                            ]
                        },
                        {
                            name: '单式', code: '3##DS', tip: '手动输入号码，输入 1 个三位数号码组成一注。', spec: 'luru',
                            fl: '投注方案：345； 开奖号码：345**，即中前三直选。',
                            sm: '手动输入一个3位数号码组成一注，所选号码的万位、千位、百位与开奖号码相同，且顺序一致，即为中奖。',
                            regx: /^\d(,\d){2}(;\d(,\d){2})*$/, base: 2000
                        },
                        {
                            name: '和值', code: '3##DT', tip: '从前三位和值 0-27 中任意选择 1 个或以上号码。',
                            fl: '投注方案：15；开奖号码：456**，即为中奖',
                            sm: '选择一个号码，值等于开奖号码的前三位上的数字之和即为中奖。',
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
                        },
                        {
                            name: '跨度', code: '3##DD', tip: '从前三位最大数、最小数的差 0-9 中任意选择 1 个或以上号码。',
                            fl: '投注方案：6，开奖号 137**，即为中奖',
                            sm: '选择的号码等于前三位数，最大数和最小数之差。',
                            spec: 'number',
                            widget: false,
                            regx: /^\d(;\d)*$/, base: 2000,
                            seperator: ';',
                            rows: [
                                {
                                    name: '跨度',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                }
                            ]
                        }
                    ]
                },
                {
                    name: '组选',
                    methods: [
                        {
                            name: '组三', code: '3##G3', tip: '从 0-9 中任意选择 2 个或以上号码。',
                            fl: '投注方案：5,8,8；开奖号码前三位：1个5，2个8 (顺序不限)，即中前三组三。',
                            sm: '从0-9中选择2个数字组成两注，所选号码与开奖号码的万位、千位、百位相同，且顺序不限，即为中奖。',
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
                            name: '组六', code: '3##G6', tip: '从 0-9 中选择 3 个或以上号码。',
                            fl: '投注方案：2,5,8；开奖号码前三位：1个2、1个5、1个8 (顺序不限)，即中前三组六。',
                            sm: '从0-9中任意选择3个号码组成一注，所选号码与开奖号码的万位、千位、百位相同，顺序不限，即为中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^\d(,\d){2,}$/, base: 333.3333,
                            rows: [
                                {
                                    name: '',
                                    least: 3,
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                }
                            ]
                        },
                        {
                            name: '混合', code: '3##GM', tip: '手动输入号码，输入 1 个三位数号码组成一注。',
                            fl: '投注方案：分別投注(0,0,1),以及(1,2,3)，开奖号码前三位包括：(1)0,0,1，顺序不限，即中得组三；或者(2)1,2,3，顺序不限，即中得组六。',
                            sm: '手动输入一个3位数号码组成一注(不含豹子号)，开奖号码的万位、千位、百位符合后三组三或组六均为中奖。',
                            mixedPrize: true,
                            prizes: [
                                {name: '组三', base: 666.6667},
                                {name: '组六', base: 333.3333}
                            ], spec: 'luru',
                            regx: /^\d(,\d){1,2}(;\d(,\d){1,2})*$/, base: 666.6667
                        },
                        {
                            name: '和值', code: '3##GT', tip: '从和值 1-26 中选择 1 个或以上号码。',
                            fl: '投注方案：14；开奖号码：077**，即为中奖',
                            sm: '所选数值等于开奖号码万位、千位、百位三个数字相加之和(不含豹子号)，即为中奖。',
                            spec: 'number',
                            widget: false,
                            regx: /^\d+(;\d+)*$/, base: 666.6667,
                            seperator: ';',
                            rows: [
                                {
                                    name: '和值',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9},
                                        {value: 10}, {value: 11}, {value: 12}, {value: 13}, {value: 14}, {value: 15}, {value: 16}, {value: 17}, {value: 18}, {value: 19},
                                        {value: 20}, {value: 21}, {value: 22}, {value: 23}, {value: 24}, {value: 25}, {value: 26}]
                                }
                            ],
                            mixedPrize: true,
                            prizes: [
                                {name: '组三', base: 666.6667},
                                {name: '组六', base: 333.3333}
                            ]
                        },
                        {
                            name: '包胆', code: '3##GA', tip: '从 0-9 中选择任意 1 个胆码。',
                            fl: '投注方案：投注方案：胆码2；开奖号码为258**，即中前三组六包胆',
                            sm: '从0-9中任选至少一个胆码进行投注，开奖号码前三位包含所选号码若为组六即中组六奖金，组三即中组三奖金，豹子不中奖',
                            spec: 'number',
                            widget: false,
                            regx: /^\d(;\d)*$/, base: 666.6667,
                            seperator: ';',
                            rows: [
                                {
                                    name: '胆码',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                }
                            ],
                            mixedPrize: true,
                            prizes: [
                                {name: '组三', base: 666.6667},
                                {name: '组六', base: 333.3333}
                            ]
                        }
                    ]
                },
                {
                    name: '其他',
                    methods: [
                        {
                            name: '特殊号', code: '3##GP', tip: '选择前三位开奖号码的特殊属性。',
                            fl: '投注方案：投注豹子,开奖号码：333** 即中豹子；投注顺子,开奖号码：123** 即中顺子；投注对子,开奖号码：22***或 *33** 即中对子；',
                            sm: '从前三位的开奖结果中判断，如果出现对应的选号方式即为中奖',
                            spec: 'teshuhao',
                            widget: false,
                            regx: /^\d(;\d){0,2}$/,
                            mixedPrize: true,
                            prizes: [
                                {name: '豹子', base: 200},
                                {name: '顺子', base: 200 * 0.208},
                                {name: '对子', base: 7.4074}
                            ],
                            seperator: ';',
                            rows: [
                                {
                                    name: '特殊号',
                                    nums: [{value: '豹子', trueValue: '0'}, {value: '顺子', trueValue: '1'}, {
                                        value: '对子',
                                        trueValue: '2'
                                    }]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: '中三',
            label: 'zhongsan',
            methodgroups: [
                {
                    name: '直选',
                    methods: [
                        {
                            name: '复式', code: '#3#DC', tip: '分别从千位、百位、十位中各选至少 1 个号码。',
                            fl: '投注方案：345； 开奖号码：*345*，即中中三直选。',
                            sm: '从千位、百位、十位中选择一个3位数号码组成一注，所选号码与开奖号码的前3位相同，且顺序一致，即为中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^\d(,\d)*(;\d(,\d)*){2}$/, base: 2000,
                            rows: [
                                {
                                    name: '千位',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                },
                                {
                                    name: '百位',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                },
                                {
                                    name: '十位',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                }
                            ]
                        },
                        {
                            name: '单式', code: '#3#DS', tip: '手动输入号码，输入 1 个三位数号码组成一注。',
                            fl: '投注方案：345； 开奖号码：*345*，即中中三直选。',
                            sm: '手动输入一个3位数号码组成一注，所选号码的万位、千位、百位与开奖号码相同，且顺序一致，即为中奖。', spec: 'luru',
                            regx: /^\d(,\d){2}(;\d(,\d){2})*$/, base: 2000
                        },
                        {
                            name: '和值', code: '#3#DT', tip: '从中间三位和值 0-27 中任意选择 1 个或以上号码。',
                            fl: '投注方案：15；开奖号码：*456*，即为中奖',
                            sm: '选择一个号码，值等于开奖号码的中间三位上的数字之和即为中奖。',
                            spec: 'number',
                            widget: false,
                            regx: /^\d+(;\d+)*$/, base: 2000,
                            seperator: ';',
                            rows: [
                                {
                                    name: '和值',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9},
                                        {value: 10}, {value: 11}, {value: 12}, {value: 13}, {value: 14}, {value: 15}, {value: 16}, {value: 17}, {value: 18}, {value: 19},
                                        {value: 20}, {value: 21}, {value: 22}, {value: 23}, {value: 24}, {value: 25}, {value: 26}, {value: 27}]
                                }
                            ]
                        },
                        {
                            name: '跨度', code: '#3#DD', tip: '从中间三位最大数、最小数的差 0-9 中任意选择 1 个或以上号码。',
                            fl: '投注方案：6，开奖号 *137*，即为中奖',
                            sm: '选择的号码等于中间三位数，最大数和最小数之差。',
                            spec: 'number',
                            widget: false,
                            regx: /^\d(;\d)*$/, base: 2000,
                            seperator: ';',
                            rows: [
                                {
                                    name: '跨度',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                }
                            ]
                        }
                    ]
                },
                {
                    name: '组选',
                    methods: [
                        {
                            name: '组三', code: '#3#G3', tip: ' 从 0-9 中任意选择 2 个或以上号码。',
                            fl: '投注方案：5,8,8；开奖号码中间三位：1个5，2个8 (顺序不限)，即中中三组三。',
                            sm: '从0-9中选择2个数字组成两注，所选号码与开奖号码的千位、百位、十位相同，且顺序不限，即为中奖。',
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
                            name: '组六', code: '#3#G6', tip: ' 从 0-9 中选择 3 个或以上号码。',
                            fl: '投注方案：2,5,8；开奖号码中间三位：1个2、1个5、1个8 (顺序不限)，即中中三组六。',
                            sm: '从0-9中任意选择3个号码组成一注，所选号码与开奖号码的千位、百位、十位相同，顺序不限，即为中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^\d(,\d){2,}$/, base: 333.3333,
                            rows: [
                                {
                                    name: '',
                                    least: 3,
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                }
                            ]
                        },
                        {
                            name: '混合', code: '#3#GM', tip: ' 手动输入号码，输入 1 个三位数号码组成一注。',
                            fl: '投注方案：分別投注(0,0,1),以及(1,2,3)，开奖号码中间三位包括：(1)0,0,1，顺序不限，即中得组三；或者(2)1,2,3，顺序不限，即中得组六。',
                            sm: '手动输入一个3位数号码组成一注(不含豹子号)，开奖号码的千位、百位、十位符合后三组三或组六均为中奖。',
                            regx: /^\d(,\d){1,2}(;\d(,\d){1,2})*$/, base: 666.6667,
                            mixedPrize: true,
                            prizes: [
                                {name: '组三', base: 666.6667},
                                {name: '组六', base: 333.3333}
                            ], spec: 'luru'
                        },
                        {
                            name: '和值', code: '#3#GT', tip: ' 从和值 1-26 中选择 1 个或以上号码。',
                            fl: '投注方案：14；开奖号码：*077*，即为中奖',
                            sm: '所选数值等于开奖号码千位、百位、十位三个数字相加之和(不含豹子号)，即为中奖。',
                            spec: 'number',
                            widget: false,
                            regx: /^\d+(;\d+)*$/, base: 666.6667,
                            seperator: ';',
                            rows: [
                                {
                                    name: '和值',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9},
                                        {value: 10}, {value: 11}, {value: 12}, {value: 13}, {value: 14}, {value: 15}, {value: 16}, {value: 17}, {value: 18}, {value: 19},
                                        {value: 20}, {value: 21}, {value: 22}, {value: 23}, {value: 24}, {value: 25}, {value: 26}]
                                }
                            ],
                            mixedPrize: true,
                            prizes: [
                                {name: '组三', base: 666.6667},
                                {name: '组六', base: 333.3333}
                            ]
                        },
                        {
                            name: '包胆', code: '#3#GA', tip: ' 从 0-9 中选择任意 1 个胆码。',
                            fl: '投注方案：投注方案：胆码2；开奖号码为*258*，即中中三组六包胆',
                            sm: '从0-9中任选至少一个胆码进行投注，开奖号码中间三位包含所选号码若为组六即中组六奖金，组三即中组三奖金，豹子不中奖',
                            spec: 'number',
                            widget: false,
                            regx: /^\d(;\d)*$/, base: 666.6667,
                            rows: [
                                {
                                    name: '胆码',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                }
                            ],
                            mixedPrize: true,
                            seperator: ';',
                            prizes: [
                                {name: '组三', base: 666.6667},
                                {name: '组六', base: 333.3333}
                            ]
                        }
                    ]
                },
                {
                    name: '其他',
                    methods: [
                        {
                            name: '特殊号', code: '#3#GP', tip: ' 选择中间三位开奖号码的特殊属性。',
                            fl: '投注方案：投注豹子,开奖号码：*333* 即中豹子；投注顺子,开奖号码：*123* 即中顺子；投注对子,开奖号码：*22**或 **33* 即中对子；',
                            sm: '从中三位的开奖结果中判断，如果出现对应的选号方式即为中奖',
                            spec: 'teshuhao',
                            widget: false,
                            regx: /^\d(;\d){0,2}$/, base: 200,
                            mixedPrize: true,
                            prizes: [
                                {name: '豹子', base: 200},
                                {name: '顺子', base: 200 * 0.2083},
                                {name: '对子', base: 7.4074}
                            ],
                            seperator: ';',
                            rows: [
                                {
                                    name: '特殊号',
                                    nums: [{value: '豹子', trueValue: '0'}, {value: '顺子', trueValue: '1'}, {
                                        value: '对子',
                                        trueValue: '2'
                                    }]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: '后三',
            label: 'housan',
            methodgroups: [
                {
                    name: '直选',
                    methods: [
                        {
                            name: '复式', code: '##3DC', tip: ' 分别从百位、十位、个位中各选至少 1 个号码。',
                            fl: '如:投注方案：345； 开奖号码：**345，即中后三直选。',
                            sm: '从百位、十位、个位中选择一个3位数号码组成一注，所选号码与开奖号码后3位相同，且顺序一致，即为中奖。',
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
                            name: '单式', code: '##3DS', tip: ' 手动输入号码，输入 1 个三位数号码组成一注。',
                            fl: '投注方案：345； 开奖号码：**345，即中后三直选。',
                            sm: '手动输入一个3位数号码组成一注，所选号码的百位、十位、个位与开奖号码相同，且顺序一致，即为中奖。', spec: 'luru',
                            regx: /^\d(,\d){2}(;\d(,\d){2})*$/, base: 2000
                        },
                        {
                            name: '和值', code: '##3DT', tip: ' 从后三位和值 0-27 中任意选择 1 个或以上号码。',
                            fl: '投注方案：15；开奖号码：**456，即为中奖',
                            sm: '选择一个号码，值等于开奖号码的后三位上的数字之和即为中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^\d+(;\d+)*$/, base: 2000,
                            seperator: ';',
                            rows: [
                                {
                                    name: '和值',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9},
                                        {value: 10}, {value: 11}, {value: 12}, {value: 13}, {value: 14}, {value: 15}, {value: 16}, {value: 17}, {value: 18}, {value: 19},
                                        {value: 20}, {value: 21}, {value: 22}, {value: 23}, {value: 24}, {value: 25}, {value: 26}, {value: 27}]
                                }
                            ]
                        },
                        {
                            name: '跨度', code: '##3DD', tip: ' 从后三位最大数、最小数的差 0-9 中任意选择 1 个或以上号码。',
                            fl: '投注方案：6，开奖号 **137，即为中奖',
                            sm: '选择的号码等于后三位数，最大数和最小数之差。',
                            spec: 'number',
                            widget: false,
                            regx: /^\d(;\d)*$/, base: 2000,
                            seperator: ';',
                            rows: [
                                {
                                    name: '跨度',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                }
                            ]
                        }
                    ]
                },
                {
                    name: '组选',
                    methods: [
                        {
                            name: '组三', code: '##3G3', tip: ' 从 0-9 中任意选择 2 个或以上号码。',
                            fl: '投注方案：5,8,8；开奖号码后三位：1个5，2个8 (顺序不限)，即中后三组三。',
                            sm: '从0-9中选择2个数字组成两注，所选号码与开奖号码的百位、十位、个位相同，且顺序不限，即为中奖。',
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
                            name: '组六', code: '##3G6', tip: ' 从 0-9 中选择 3 个或以上号码。',
                            fl: '投注方案：2,5,8；开奖号码后三位：1个2、1个5、1个8 (顺序不限)，即中后三组六。',
                            sm: '从0-9中任意选择3个号码组成一注，所选号码与开奖号码的百位、十位、个位相同，顺序不限，即为中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^\d(,\d){2,}$/, base: 333.3333,
                            rows: [
                                {
                                    name: '',
                                    least: 3,
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                }
                            ]
                        },
                        {
                            name: '混合', code: '##3GM', tip: ' 手动输入号码，输入 1 个三位数号码组成一注。',
                            fl: '投注方案：分別投注(0,0,1),以及(1,2,3)，开奖号码后三位包括：(1)0,0,1，顺序不限，即中得后三组三；或者(2)1,2,3，顺序不限，即中得后三组六。',
                            sm: '	手动输入一个3位数号码组成一注(不含豹子号)，开奖号码的百位、十位、个位符合后三组三或组六均为中奖。',
                            regx: /^\d(,\d){1,2}(;\d(,\d){1,2})*$/, base: 666.6667,
                            mixedPrize: true,
                            prizes: [
                                {name: '组三', base: 666.6667},
                                {name: '组六', base: 333.3333}
                            ], spec: 'luru'
                        },
                        {
                            name: '和值', code: '##3GT', tip: ' 从和值 1-26 中选择 1 个或以上号码。',
                            fl: '投注方案：14；开奖号码：**077，即为中奖',
                            sm: '所选数值等于开奖号码百位、十位、个位三个数字相加之和(不含豹子号)，即为中奖。',
                            spec: 'number',
                            widget: false,
                            regx: /^\d+(;\d+)*$/, base: 666.6667,
                            seperator: ';',
                            rows: [
                                {
                                    name: '和值',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9},
                                        {value: 10}, {value: 11}, {value: 12}, {value: 13}, {value: 14}, {value: 15}, {value: 16}, {value: 17}, {value: 18}, {value: 19},
                                        {value: 20}, {value: 21}, {value: 22}, {value: 23}, {value: 24}, {value: 25}, {value: 26}]
                                }
                            ],
                            mixedPrize: true,
                            prizes: [
                                {name: '组三', base: 666.6667},
                                {name: '组六', base: 333.3333}
                            ]
                        },
                        {
                            name: '包胆', code: '##3GA', tip: ' 从 0-9 中选择任意 1 个胆码。',
                            fl: '投注方案：投注方案：胆码2；开奖号码为**258，即中后三组六包胆',
                            sm: '从0-9中任选至少一个胆码进行投注，开奖号码后三位包含所选号码若为组六即中组六奖金，组三即中组三奖金，豹子不中奖',
                            spec: 'number',
                            widget: false,
                            regx: /^\d(;\d)*$/, base: 666.6667,
                            seperator: ';',
                            rows: [
                                {
                                    name: '胆码',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                }
                            ],
                            mixedPrize: true,
                            prizes: [
                                {name: '组三', base: 666.6667},
                                {name: '组六', base: 333.3333}
                            ]
                        }
                    ]
                },
                {
                    name: '其他',
                    methods: [
                        {
                            name: '特殊号', code: '##3GP', tip: ' 选择后三位开奖号码的特殊属性。',
                            fl: '投注方案：投注豹子,开奖号码：**333 即中豹子；投注顺子,开奖号码：**123 即中顺子；投注对子,开奖号码：***22或 **33* 即中对子；',
                            sm: '从后三位的开奖结果中判断，如果出现对应的选号方式即为中奖',
                            spec: 'teshuhao',
                            widget: false,
                            regx: /^\d(;\d){0,2}$/, base: 200,
                            mixedPrize: true,
                            prizes: [
                                {name: '豹子', base: 200},
                                {name: '顺子', base: 200 * 0.2083},
                                {name: '对子', base: 7.4074}
                            ],
                            seperator: ';',
                            rows: [
                                {
                                    name: '特殊号',
                                    nums: [{value: '豹子', trueValue: '0'}, {value: '顺子', trueValue: '1'}, {
                                        value: '对子',
                                        trueValue: '2'
                                    }]
                                }
                            ]
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
                    name: '直选',
                    methods: [
                        {
                            name: '前二选号', code: '2*DC', tip: ' 分别从万位、千位中各选至少 1 个号码。',
                            fl: '投注方案：58；开奖号码前二位：58，即中前二直选。',
                            sm: '从万位、千位中选择一个2位数号码组成一注，所选号码与开奖号码的前2位相同，且顺序一致，即为中奖。',
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
                            name: '单式', code: '2*DS', tip: ' 手动输入号码，输入 1 个二位数号码组成一注。',
                            fl: '投注方案：58；开奖号码前二位：58，即中前二直选。',
                            sm: '手动输入一个2位数号码组成一注，所选号码的万位、千位与开奖号码相同，且顺序一致，即为中奖。', spec: 'luru',
                            regx: /^\d,\d(;\d,\d)*$/, base: 200
                        },
                        {
                            name: '前二和值', code: '2*DT', tip: ' 从前二位和值 0-18 中任意选择 1 个或以上号码。',
                            fl: '投注方案：和值1；开奖号码前二位：01,10，即中前二直选。',
                            sm: '所选数值等于开奖号码的万位、千位二个数字相加之和，即为中奖。',
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
                            name: '前二跨度', code: '2*DD', tip: ' 从前二位最大数、最小数的差 0-9 中任意选择 1 个或以上号码。',
                            fl: '投注方案 6，开奖号码：82***，即为中奖',
                            sm: '选择的号码值等于前二位最大数、最小数的差。 ',
                            spec: 'number',
                            widget: false,
                            regx: /^\d(;\d)*$/, base: 200,
                            seperator: ';',
                            rows: [
                                {
                                    name: '跨度',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                }
                            ]
                        },
                        {
                            name: '后二选号', code: '*2DC', tip: ' 分别从十位、个位中各选至少 1 个号码。',
                            fl: '投注方案：58；开奖号码后二位：58，即中后二直选。',
                            sm: '从十位、个位中选择一个2位数号码组成一注，所选号码与开奖号码的十位、个位相同，且顺序一致，即为中奖。',
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
                            name: '单式', code: '*2DS', tip: ' 手动输入号码，输入 1 个二位数号码组成一注。', spec: 'luru',
                            fl: '投注方案：58；开奖号码后二位：58，即中后二直选。',
                            sm: '手动输入一个2位数号码组成一注，所选号码的十位、个位与开奖号码相同，且顺序一致，即为中奖。',
                            regx: /^\d,\d(;\d,\d)*$/, base: 200
                        },
                        {
                            name: '后二和值', code: '*2DT', tip: ' 从后二位和值 0-18 中任意选择 1 个或以上号码。',
                            fl: '投注方案：和值1；开奖号码后二位：01,10，即中后二直选。',
                            sm: '所选数值等于开奖号码的十位、个位二个数字相加之和，即为中奖。',
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
                            name: '后二跨度', code: '*2DD', tip: ' 从后二位最大数、最小数的差 0-9 中任意选择 1 个或以上号码。',
                            fl: '投注方案 6，开奖号码：***82，即为中奖',
                            sm: '选择的号码值等于后二位最大数、最小数的差。 ',
                            spec: 'number',
                            widget: false,
                            regx: /^\d(;\d)*$/, base: 200,
                            seperator: ';',
                            rows: [
                                {
                                    name: '跨度',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                }
                            ]
                        }
                    ]
                },
                {
                    name: '组选',
                    methods: [
                        {
                            name: '前二选号', code: '2*GC', tip: ' 从 0-9 中任意选择 2 个或以上号码。',
                            fl: '投注方案：5,8；开奖号码前二位：85 或58(顺序不限，不含对子号)，即中前二组选。',
                            sm: '从0-9中选2个号码组成一注，所选号码与开奖号码的万位、千位相同，顺序不限（不含对子号），即中奖。',
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
                            name: '单式', code: '2*GS', tip: ' 手动输入号码，输入 1 个二位数号码组成一注。', spec: 'luru',
                            fl: '投注方案：5,8；开奖号码前二位：85 或58(顺序不限，不含对子号)，即中前二组选。',
                            sm: '手动输入一个2位数号码组成一注，所选号码的万位、千位与开奖号码相同，顺序不限（不含对子号），即为中奖。',
                            regx: /^\d,\d(;\d,\d)*$/, base: 100
                        },
                        {
                            name: '前二和值', code: '2*GT', tip: ' 从前二位和值 1-17 中任意选择 1 个或以上号码。',
                            fl: '投注方案：和值1；开奖号码前二位：10或01 (顺序不限，不含对子号)，即中前二组选。',
                            sm: '所选数值等于开奖号码的万位、千位二个数字相加之和（不含对子号），即为中奖。',
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
                        },
                        {
                            name: '前二包胆', code: '2*GA', tip: ' 从 0-9 中选择任意 1 个胆码。',
                            fl: '投注方案：胆5,拖8；开奖号码前二位：85 或58(顺序不限，不含对子号)，即中前二组选胆拖。',
                            sm: '从0~9中任选1个胆码，多个拖码进行投注（所选胆码与胣码不可重复），开奖号码前二位包含所选号码（不含对子号）即中奖',
                            spec: 'number',
                            widget: false,
                            regx: /^\d(;\d)*$/, base: 100,
                            seperator: ';',
                            rows: [
                                {
                                    name: '胆码',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                }
                            ]
                        },
                        {
                            name: '后二选号', code: '*2GC', tip: ' 从 0-9 中任意选择 2 个或以上号码。',
                            fl: '投注方案：5,8；开奖号码后二位：85 或58 (顺序不限，不含对子号)，即中后二组选。',
                            sm: '从0-9中选2个号码组成一注，所选号码与开奖号码的十位、个位相同，顺序不限（不含对子号），即中奖。',
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
                            name: '单式', code: '*2GS', tip: ' 手动输入号码，输入 1 个二位数号码组成一注。', spec: 'luru',
                            fl: '投注方案：5,8；开奖号码后二位：85 或58 (顺序不限，不含对子号)，即中后二组选。',
                            sm: '手动输入一个2位数号码组成一注，所选号码的十位、个位与开奖号码相同，顺序不限（不含对子号），即为中奖。',
                            regx: /^\d,\d(;\d,\d)*$/, base: 100
                        },
                        {
                            name: '后二和值', code: '*2GT', tip: ' 从前二位和值 1-17 中任意选择 1 个或以上号码。',
                            fl: '投注方案：和值1；开奖号码后二位：10或01(顺序不限，不含对子号)，即中后二组选。',
                            sm: '所选数值等于开奖号码的十位、个位二个数字相加之和（不含对子号），即为中奖。',
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
                        },
                        {
                            name: '后二包胆', code: '*2GA', tip: ' 从 0-9 中选择任意 1 个胆码。',
                            fl: '投注方案：胆5,拖8；开奖号码后二位：85 或58(顺序不限，不含对子号)，即中后二组选胆拖。',
                            sm: '从0~9中任选1个胆码，多个拖码进行投注（所选胆码与胣码不可重复），开奖号码后二位包含所选号码（不含对子号）即中奖',
                            spec: 'number',
                            widget: false,
                            regx: /^\d(;\d)*$/, base: 100,
                            seperator: ';',
                            rows: [
                                {
                                    name: '胆码',
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
                            name: '前二', code: '2*S', tip: ' 从万位、千位的 “大、小、单、双” 中至少各选一个组成一注。',
                            fl: '投注方案：小双；开奖号码万位与千位：小双，即中前二大小单双。',
                            sm: '对万位、千位的“大（56789）小（01234）、单（13579）双（02468）”形态进行购买，所选号码的位置、形态与开奖号码的位置、形态相同，即为中奖。',
                            spec: 'daxiaodanshuang',
                            regx: /^\d(,\d)*;\d(,\d)*$/, base: 8.0000,
                            rows: [
                                {
                                    name: '万位',
                                    nums: [{value: '大', trueValue: 0}, {value: '小', trueValue: 1}, {
                                        value: '单',
                                        trueValue: 2
                                    }, {value: '双', trueValue: 3}]
                                },
                                {
                                    name: '千位',
                                    nums: [{value: '大', trueValue: 0}, {value: '小', trueValue: 1}, {
                                        value: '单',
                                        trueValue: 2
                                    }, {value: '双', trueValue: 3}]
                                }
                            ]
                        },
                        {
                            name: '后二', code: '*2S', tip: ' 从十位、个位的 “大、小、单、双” 中至少各选一个组成一注。',
                            fl: '投注方案：大单；开奖号码十位与个位：大单，即中后二大小单双。',
                            sm: '对十位和个位的“大（56789）小（01234）、单（13579）双（02468）”形态进行购买，所选号码的位置、形态与开奖号码的位置、形态相同，即为中奖。',
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
                        }
                    ]
                }

            ]
        },
        {
            name: '定位胆',
            label: 'yixing',
            methodgroups: [
                {
                    name: '',
                    methods: [
                        {
                            name: '定位胆', code: '1DP', tip: ' 从万位，千位，百位，十位，个位任意位置上任意选择 1 个或以上号码。',
                            fl: '投注方案：万位 1；开奖号码万位：1，即中定位胆万位。',
                            sm: '从万位、千位、百位、十位、个位任意位置上至少选择1个以上号码，所选号码与相同位置上的开奖号码一致，即为中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^(.{0}|(\d(,\d)*))(;(.{0}|(\d(,\d)*))){4}$/, base: 20,
                            rows: [
                                {
                                    name: '万位',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                },
                                {
                                    name: '千位',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                },
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
                    name: '三星',
                    methods: [
                        {
                            name: '前三一码', code: '3*F1', tip: ' 从 0-9 中任意选择 1 个或以上号码。',
                            fl: '投注方案：1；开奖号码前三位：至少出现1个1，即中前三一码不定位。',
                            sm: '从0-9中选择1个号码，每注由1个号码组成，只要开奖号码的万位、千位、百位中包含所选号码，即为中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^\d(;\d)*$/, base: 7.3348,
                            seperator: ';',
                            rows: [
                                {
                                    name: '号码',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                }
                            ]
                        },
                        {
                            name: '前三二码', code: '3*F2', tip: ' 从 0-9 中任意选择 2 个或以上号码。',
                            fl: '投注方案：1,2；开奖号码前三位：至少出现1和2各1个，即中前三二码不定位。',
                            sm: '从0-9中选择2个号码，每注由2个不同的号码组成，开奖号码的万位、千位、百位中同时包含所选的2个号码，即为中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^\d(,\d)+$/, base: 36.6962,
                            rows: [
                                {
                                    name: '号码',
                                    least: 2,
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                }
                            ]
                        },
                        /*{name:'中三一码',tip:' 从 0-9 中任意选择 1 个或以上号码。',
                         spec:'number',
                         widget:true,
                         rows:[
                         {name:'号码',nums:[{value:0},{value:1},{value:2},{value:3},{value:4},{value:5},{value:6},{value:7},{value:8},{value:9}]}
                         ]
                         },
                         {name:'中三二码',tip:' 从 0-9 中任意选择 2 个或以上号码。',
                         spec:'number',
                         widget:true,
                         rows:[
                         {name:'号码',nums:[{value:0},{value:1},{value:2},{value:3},{value:4},{value:5},{value:6},{value:7},{value:8},{value:9}]}
                         ]
                         },*/
                        {
                            name: '后三一码', code: '*3F1', tip: ' 从 0-9 中任意选择 1 个或以上号码。',
                            fl: '投注方案：1；开奖号码后三位：至少出现1个1，即中后三一码不定位。',
                            sm: '从0-9中选择1个号码，每注由1个号码组成，只要开奖号码的百位、十位、个位中包含所选号码，即为中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^\d(;\d)*$/, base: 7.3348,
                            seperator: ';',
                            rows: [
                                {
                                    name: '号码',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                }
                            ]
                        },
                        {
                            name: '后三二码', code: '*3F2', tip: ' 从 0-9 中任意选择 2 个或以上号码。',
                            fl: '投注方案：1,2；开奖号码后三位：至少出现1和2各1个，即中后三二码不定位。',
                            sm: '从0-9中选择2个号码，每注由2个不同的号码组成，开奖号码的百位、十位、个位中同时包含所选的2个号码，即为中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^\d(,\d)+$/, base: 36.6962,
                            rows: [
                                {
                                    name: '号码',
                                    least: 2,
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                }
                            ]
                        }
                    ]
                },
                {
                    name: '四星',
                    methods: [
                        {
                            name: '四星一码', code: '4F1', tip: ' 从 0-9 中任意选择 1 个或以上号码。',
                            fl: '投注方案：1；开奖号码后四位：至少出现1个1，即中四星一码不定位。',
                            sm: '从0-9中选择1个号码，每注由1个号码组成，只要开奖号码的千位、百位、十位、个位中包含所选号码，即为中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^\d(;\d)*$/, base: 5.7621,
                            seperator: ';',
                            rows: [
                                {
                                    name: '号码',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                }
                            ]
                        },
                        {
                            name: '四星二码', code: '4F2', tip: ' 从 0-9 中任意选择 2 个或以上号码。',
                            fl: '投注方案：1,2；开奖号码后四位：至少出现1和2各1个，即中四星二码不定位。',
                            sm: '从0-9中选择2个号码，每注由2个不同的号码组成，开奖号码的千位、百位、十位、个位中同时包含所选的2个号码，即为中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^\d(,\d)+$/, base: 20.3449,
                            rows: [
                                {
                                    name: '号码',
                                    least: 2,
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                }
                            ]
                        }
                    ]
                },
                {
                    name: '五星',
                    methods: [
                        {
                            name: '五星二码', code: '5F2', tip: ' 从 0-9 中任意选择 2 个或以上号码。',
                            fl: '投注方案：1,2；开奖号码：至少出现1和2各1个，即中五星二码不定位。',
                            sm: '从0-9中选择2个号码，每注由2个不同的号码组成，开奖号码的万位、千位、百位、十位、个位中同时包含所选的2个号码，即为中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^\d(,\d)+$/, base: 13.5078,
                            rows: [
                                {
                                    name: '号码',
                                    least: 2,
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                }
                            ]
                        },
                        {
                            name: '五星三码', code: '5F3', tip: ' 从 0-9 中任意选择 3 个或以上号码。',
                            fl: '投注方案：1,2,3；开奖号码：至少出现1、2、3各1个，即中五星三码不定位。',
                            sm: '从0-9中选择3个号码，每注由3个不同的号码组成，开奖号码的万位、千位、百位、十位、个位中同时包含所选的3个号码，即为中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^\d(,\d){2,}$/, base: 45.5539,
                            rows: [
                                {
                                    name: '号码',
                                    least: 3,
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: '任选二',
            methodgroups: [
                {
                    name: '直选',
                    methods: [
                        {
                            name: '直选复式', code: 'A2DC', tip: ' 从万位、千位、百位、十位、个位中至少两位上各选1个号码组成一注。',
                            fl: '投注方案：万位1，十位2； 开奖号码：1**2*，即中任二直选。',
                            sm: '从万位、千位、百位、十位、个位中任意选择两个位，在这两个位上至少各选1个号码组成一注，所选2个位置上的开奖号码与所选号码完全相同，且顺序一致，即为中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^(.{0}|(\d(,\d)*))(;(.{0}|(\d(,\d)*))){4}$/, base: 200,
                            rows: [
                                {
                                    name: '万位',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                },
                                {
                                    name: '千位',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                },
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
                            name: '直选单式', code: 'A2DS', tip: ' 从万位、千位、百位、十位、个位中至少选择两个位置,至少手动输入一个两位数的号码构成一注。',
                            fl: '投注方案：勾选位置千位、个位，输入号码12； 开奖号码：*1**2，即中任二直选。',
                            sm: '从万位、千位、百位、十位、个位中任意勾选两个位置，手动输入一个两位数号码组成一注，所选2个位置和输入的号码都与开奖号码相同，且顺序一致，即为中奖。',
                            spec: 'luru',
                            widget: true,
                            regx: /^\d,\d(;\d,\d)*\|\d(,\d){1,4}$/, base: 200,
                            positions: [
                                {name: '万位', value: 0}, {name: '千位', value: 1}, {name: '百位', value: 2}, {
                                    name: '十位',
                                    value: 3,
                                    checked: true
                                }, {name: '个位', value: 4, checked: true}
                            ]
                        },
                        {
                            name: '直选和值', code: 'A2DT', tip: ' 从 0-9 中任意选择 1 个或以上的三重号码。',
                            fl: '投注方案：勾选位置千位、个位，选择和值15； 开奖号码：*8**7，即中任二直选和值。',
                            sm: '从万位、千位、百位、十位、个位中任意勾选两个位置，然后选择一个和值，所选2个位置的开奖号码相加之和与所选和值一致，且顺序一致，即为中奖。',
                            spec: 'number',
                            seperator: ';',
                            widget: false,
                            regx: /^\d+(;\d+)*\|\d(,\d){1,4}$/, base: 200,
                            positions: [
                                {name: '万位', value: 0}, {name: '千位', value: 1}, {name: '百位', value: 2}, {
                                    name: '十位',
                                    value: 3,
                                    checked: true
                                }, {name: '个位', value: 4, checked: true}
                            ],
                            rows: [
                                {
                                    name: '和值',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9},
                                        {value: 10}, {value: 11}, {value: 12}, {value: 13}, {value: 14}, {value: 15}, {value: 16}, {value: 17}, {value: 18}]
                                }
                            ]
                        }
                    ]
                },
                {
                    name: '组选',
                    methods: [
                        {
                            name: '组选复式', code: 'A2GC', tip: ' 从万位、千位、百位、十位、个位中至少选择两个位置,号码区至少选择两个号码构成一注。',
                            fl: '投注方案：勾选位置万位、个位，选择号码79； 开奖号码：9***7 或 7***9，均中任二组选。',
                            sm: '从万位、千位、百位、十位、个位中任意勾选两个位置，然后从0-9中选择两个号码组成一注，所选2个位置的开奖号码与所选号码一致，顺序不限，即为中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^\d(,\d)+\|\d(,\d){1,4}$/, base: 100,
                            positions: [
                                {name: '万位', value: 0}, {name: '千位', value: 1}, {name: '百位', value: 2}, {
                                    name: '十位',
                                    value: 3,
                                    checked: true
                                }, {name: '个位', value: 4, checked: true}
                            ],
                            rows: [
                                {
                                    name: '组选',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                }
                            ]
                        },
                        {
                            name: '组选单式', code: 'A2GS', tip: '从万位、千位、百位、十位、个位中至少选择两个位置,至少手动输入一个两位数的号码构成一注。',
                            fl: '投注方案：勾选位置万位、个位，输入号码79； 开奖号码：9***7 或 7***9，均中任二组选。',
                            sm: '从万位、千位、百位、十位、个位中任意勾选两个位置，然后输入两个号码组成一注，所选2个位置的开奖号码与输入号码一致，顺序不限，即为中奖。',
                            spec: 'luru',
                            positions: [
                                {name: '万位', value: 0}, {name: '千位', value: 1}, {name: '百位', value: 2}, {
                                    name: '十位',
                                    value: 3,
                                    checked: true
                                }, {name: '个位', value: 4, checked: true}
                            ],
                            widget: true,
                            regx: /^\d,\d(;\d,\d)*\|\d(,\d){1,4}$/, base: 100
                        },
                        {
                            name: '组选和值', code: 'A2GT', tip: ' 从万位、千位、百位、十位、个位中至少选择两个位置,至少选择一个和值号码构成一注。',
                            fl: '投注方案：勾选位置千位、个位，选择和值6； 开奖号码：*4**2 或 *2**4，均中任二组选和值。',
                            sm: '从万位、千位、百位、十位、个位中任意勾选两个位置，然后选择一个和值，所选2个位置的开奖号码相加之和与所选和值一致，顺序不限，即为中奖。',
                            spec: 'number',
                            seperator: ';',
                            widget: false,
                            regx: /^\d+(;\d+)*\|\d(,\d){1,4}$/, base: 100,
                            positions: [
                                {name: '万位', value: 0}, {name: '千位', value: 1}, {name: '百位', value: 2}, {
                                    name: '十位',
                                    value: 3,
                                    checked: true
                                }, {name: '个位', value: 4, checked: true}
                            ],
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
            name: '任选三',
            methodgroups: [
                {
                    name: '直选',
                    methods: [
                        {
                            name: '直选复式', code: 'A3DC', tip: ' 从万位、千位、百位、十位、个位中至少三位上各选1个号码组成一注。',
                            fl: '投注方案：万位1、千位5、十位2； 开奖号码：15*2*，即中任三直选。',
                            sm: '从万位、千位、百位、十位、个位中任意选择三个位，在这三个位上至少各选1个号码组成一注，所选3个位置上的开奖号码与所选号码完全相同，且顺序一致，即为中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^(.{0}|(\d(,\d)*))(;(.{0}|(\d(,\d)*))){4}$/, base: 2000,
                            rows: [
                                {
                                    name: '万位',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                },
                                {
                                    name: '千位',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                },
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
                            name: '直选单式', code: 'A3DS', tip: ' 从万位、千位、百位、十位、个位中至少选择三个位置,至少手动输入一个三位数的号码构成一注。',
                            fl: '投注方案：勾选位置万位、千位、个位，输入号码152； 开奖号码：15**2，即中任三直选。',
                            sm: '从万位、千位、百位、十位、个位中任意勾选三个位置，手动输入一个三位数号码组成一注，所选三个位置上的开奖号码与输入号码完全相同，且顺序一致，即为中奖。',
                            spec: 'luru',
                            widget: true,
                            positions: [
                                {name: '万位', value: 0}, {name: '千位', value: 1}, {
                                    name: '百位',
                                    value: 2,
                                    checked: true
                                }, {name: '十位', value: 3, checked: true}, {name: '个位', value: 4, checked: true}
                            ],
                            regx: /^\d(,\d){2}(;\d(,\d){2})*\|\d(,\d){2,4}$/, base: 2000
                        },
                        {
                            name: '直选和值', code: 'A3DT', tip: ' 从万位、千位、百位、十位、个位中至少选择三个位置,至少选择一个和值号码构成一注。',
                            fl: '投注方案：勾选位置万位、千位、个位，选择和值8； 开奖号码：22**4，即中任三直选和值。',
                            sm: '从万位、千位、百位、十位、个位中任意勾选三个位置，然后选择一个和值，所选3个位置的开奖号码相加之和与所选和值一致，且顺序一致，即为中奖。',
                            spec: 'number',
                            seperator: ';',
                            widget: false,
                            regx: /^\d+(;\d+)*\|\d(,\d){2,4}$/, base: 2000,
                            positions: [
                                {name: '万位', value: 0}, {name: '千位', value: 1}, {
                                    name: '百位',
                                    value: 2,
                                    checked: true
                                }, {name: '十位', value: 3, checked: true}, {name: '个位', value: 4, checked: true}
                            ],
                            rows: [
                                {
                                    name: '和值',
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
                            name: '组三复式', code: 'A3G3C', tip: ' 从万位、千位、百位、十位、个位中至少选择三个位置,号码区至少选择两个号码构成一注。',
                            fl: '投注方案：勾选位置万位、千位、个位，选择号码18； 开奖号码：11**8 或 18**1，均中任三组三。',
                            sm: '从万位、千位、百位、十位、个位中任意勾选三个位置，然后从0-9中选择两个号码组成一注，所选3个位置的开奖号码与所选号码一致，顺序不限，即为中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^\d(,\d)+\|\d(,\d){2,4}$/, base: 666.6667,
                            positions: [
                                {name: '万位', value: 0}, {name: '千位', value: 1}, {
                                    name: '百位',
                                    value: 2,
                                    checked: true
                                }, {name: '十位', value: 3, checked: true}, {name: '个位', value: 4, checked: true}
                            ],
                            rows: [
                                {
                                    name: '组三',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                }
                            ]
                        },
                        {
                            name: '组三单式', code: 'A3G3S', tip: '从万位、千位、百位、十位、个位中至少选择三个位置,手动输入两个号码构成一注。',
                            fl: '投注方案：勾选位置万位、千位、个位，输入号码779； 开奖号码：97**7 或 79**7，均中任三组三。',
                            sm: '从万位、千位、百位、十位、个位中任意勾选三个位置，然后输入两个号相同号码和一个不同号码组成一注，所选3个位置的开奖号码与输入号码一致，顺序不限，即为中奖。',
                            spec: 'luru',
                            widget: true,
                            positions: [
                                {name: '万位', value: 0}, {name: '千位', value: 1}, {
                                    name: '百位',
                                    value: 2,
                                    checked: true
                                }, {name: '十位', value: 3, checked: true}, {name: '个位', value: 4, checked: true}
                            ],
                            regx: /^\d,\d(;\d,\d)*\|\d(,\d){2,4}$/, base: 666.6667
                        },
                        {
                            name: '组六复式', code: 'A3G6C', tip: ' 从万位、千位、百位、十位、个位中至少选择三个位置,号码区至少选择三个号码构成一注。',
                            fl: '投注方案：勾选位置万位、百位、个位，选择号码159； 开奖号码：1*5*9 或 9*1*5，均中任三组六。',
                            sm: '从万位、千位、百位、十位、个位中任意勾选三个位置，然后从0-9中选择三个号码组成一注，所选3个位置的开奖号码与所选号码一致，顺序不限，即为中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^\d(,\d){2,}\|\d(,\d){2,4}$/, base: 333.3333,
                            positions: [
                                {name: '万位', value: 0}, {name: '千位', value: 1}, {
                                    name: '百位',
                                    value: 2,
                                    checked: true
                                }, {name: '十位', value: 3, checked: true}, {name: '个位', value: 4, checked: true}
                            ],
                            rows: [
                                {
                                    name: '组六',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                }
                            ]
                        },
                        {
                            name: '组六单式', code: 'A3G6S', tip: '从万位、千位、百位、十位、个位中至少选择三个位置,手动输入三个号码构成一注。',
                            fl: '投注方案：勾选位置万位、百位、个位，选择号码159； 开奖号码：1*5*9 或 9*1*5，即中任三组六。',
                            sm: '从万位、千位、百位、十位、个位中任意勾选三个位置，然后输入三个各不相同的3个号码组成一注，所选3个位置的开奖号码与输入号码一致，顺序不限，即为中奖。',
                            spec: 'luru',
                            widget: true,
                            positions: [
                                {name: '万位', value: 0}, {name: '千位', value: 1}, {
                                    name: '百位',
                                    value: 2,
                                    checked: true
                                }, {name: '十位', value: 3, checked: true}, {name: '个位', value: 4, checked: true}
                            ],
                            regx: /^\d(,\d){2}(;\d(,\d){2})*\|\d(,\d){2,4}$/, base: 333.3333
                        },
                        {
                            name: '混合组选', code: 'A3GM', tip: '从万位、千位、百位、十位、个位中至少选择三个位置,手动输入三个号码构成一注(不包含豹子号)。',
                            fl: '投注方案：勾选位置千位、百位、个位，分別投注(0,0,1),以及(1,2,3)，开奖号码：*00*1，顺序不限，即中任三组三；或者(2)*21*3，顺序不限，即中任三组六。',
                            sm: '从万位、千位、百位、十位、个位中任意勾选三个位置，然后输入三个号码组成一注，所选3个位置的开奖号码与输入号码一致，顺序不限，即为中奖。',
                            spec: 'luru',
                            widget: false,
                            regx: /^\d(,\d){1,2}(;\d(,\d){1,2})*\|\d(,\d){2,4}$/,
                            mixedPrize: true,
                            prizes: [
                                {name: '组三', base: 666.6667},
                                {name: '组六', base: 333.3333}
                            ],
                            positions: [
                                {name: '万位', value: 0}, {name: '千位', value: 1}, {
                                    name: '百位',
                                    value: 2,
                                    checked: true
                                }, {name: '十位', value: 3, checked: true}, {name: '个位', value: 4, checked: true}
                            ]
                        },
                        {
                            name: '组选和值', code: 'A3GT', tip: '从万位、千位、百位、十位、个位中至少选择三个位置,至少选择一个和值号码构成一注。',
                            fl: '投注方案：勾选位置万位、千位、个位；选择和值8；开奖号码：13**4 顺序不限，即中任三直选。',
                            sm: '从万位、千位、百位、十位、个位中任意勾选三个位置，然后选择一个和值，所选3个位置的开奖号码相加之和与所选和值一致，顺序不限，即为中奖。',
                            spec: 'number',
                            seperator: ';',
                            widget: false,
                            regx: /^\d+(;\d+)*\|\d(,\d){2,4}$/, base: 666.6667,
                            positions: [
                                {name: '万位', value: 0}, {name: '千位', value: 1}, {
                                    name: '百位',
                                    value: 2,
                                    checked: true
                                }, {name: '十位', value: 3, checked: true}, {name: '个位', value: 4, checked: true}
                            ],
                            rows: [
                                {
                                    name: '和值',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9},
                                        {value: 10}, {value: 11}, {value: 12}, {value: 13}, {value: 14}, {value: 15}, {value: 16}, {value: 17}, {value: 18}, {value: 19},
                                        {value: 20}, {value: 21}, {value: 22}, {value: 23}, {value: 24}, {value: 25}, {value: 26}]
                                }
                            ]
                        }
                    ]
                }

            ]
        },
        {
            name: '任选四',
            methodgroups: [
                {
                    name: '直选',
                    methods: [
                        {
                            name: '直选复式', code: 'A4DC', tip: '从万位、千位、百位、十位、个位中至少四位上各选1个号码组成一注。',
                            fl: '投注方案：万位1、千位5、百位0、十位2； 开奖号码：1502*，即中任四直选。',
                            sm: '从万位、千位、百位、十位、个位中任意选择四个位置，在这四个位上至少各选1个号码组成一注，所选4个位置上的开奖号码与所选号码完全相同，且顺序一致，即为中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^(.{0}|(\d(,\d)*))(;(.{0}|(\d(,\d)*))){4}$/, base: 20000,
                            rows: [
                                {
                                    name: '万位',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                },
                                {
                                    name: '千位',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                },
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
                            name: '直选单式', code: 'A4DS', tip: '从万位、千位、百位、十位、个位中至少选择四个位置,至少手动输入一个四位数的号码构成一注。',
                            fl: '投注方案：勾选位置万位、千位、十位、个位，输入号码1524； 开奖号码：15*24，即中任四直选。',
                            sm: '从万位、千位、百位、十位、个位中任意勾选四个位置，手动输入一个四位数号码组成一注，所选4个位置上的开奖号码与输入号码完全相同，且顺序一致，即为中奖。',
                            spec: 'luru',
                            widget: true,
                            positions: [
                                {name: '万位', value: 0}, {name: '千位', value: 1, checked: true}, {
                                    name: '百位',
                                    value: 2,
                                    checked: true
                                }, {name: '十位', value: 3, checked: true}, {name: '个位', value: 4, checked: true}
                            ],
                            regx: /^\d(,\d){3}(;\d(,\d){3})*\|\d(,\d){3,4}$/, base: 20000
                        }
                    ]
                },
                {
                    name: '组选',
                    methods: [
                        {
                            name: '组选24', code: 'A4G24', tip: '从万位、千位、百位、十位、个位中至少选择四个位置,号码区至少选择四个号码构成一注。',
                            fl: '投注方案：勾选位置万位、千位、十位、个位，选择号码1234； 开奖号码：12*34 或 13*24，均中任四组选24。',
                            sm: '从万位、千位、百位、十位、个位中任意勾选四个位置，然后从0-9中选择四个号码组成一注，所选4个位置的开奖号码与所选号码一致，顺序不限，即为中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^\d(,\d){3,}\|\d(,\d){3,4}$/, base: 833.3333,
                            positions: [
                                {name: '万位', value: 0}, {name: '千位', value: 1, checked: true}, {
                                    name: '百位',
                                    value: 2,
                                    checked: true
                                }, {name: '十位', value: 3, checked: true}, {name: '个位', value: 4, checked: true}
                            ],
                            rows: [
                                {
                                    name: '组选',
                                    least: 4,
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                }
                            ]
                        },
                        {
                            name: '组选12', code: 'A4G12', tip: '从万位、千位、百位、十位、个位中至少选择四个位置,从“二重号”选择一个号码，“单号”中选择两个号码组成一注。',
                            fl: '投注方案：勾选位置万位、千位、十位、个位，选择二重号：8，单号：0、6； 开奖号码：88*06 或 08*68，均中任四组选12。',
                            sm: '从万位、千位、百位、十位、个位中任意勾选四个位置，然后选择1个二重号码和2个单号号码组成一注，所选4个位置的开奖号码中包含与所选号码，且所选二重号码在所选4个位置的开奖号码中出现了2次，即为中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^\d(,\d)*;\d(,\d)+\|\d(,\d){3,4}$/, base: 1666.6667,
                            positions: [
                                {name: '万位', value: 0}, {name: '千位', value: 1, checked: true}, {
                                    name: '百位',
                                    value: 2,
                                    checked: true
                                }, {name: '十位', value: 3, checked: true}, {name: '个位', value: 4, checked: true}
                            ],
                            rows: [
                                {
                                    name: '二重',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                },
                                {
                                    name: '单号',
                                    least: 2,
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                }
                            ]
                        },
                        {
                            name: '组选6', code: 'A4G6', tip: '从万位、千位、百位、十位、个位中至少选择四个位置,从“二重号”中选择两个号码组成一注。',
                            fl: '投注方案：勾选位置万位、千位、十位、个位，选择二重号：6、8； 开奖号码：66*88 或 68*68，均中任四组选6。',
                            sm: '从万位、千位、百位、十位、个位中任意勾选四个位置，然后从0-9中选择2个二重号组成一注，所选4个位置的开奖号码与所选号码一致，并且所选的2个二重号码在所选4个位置的开奖号码中分别出现了2次，顺序不限，即为中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^\d(,\d)+\|\d(,\d){3,4}$/, base: 3333.3333,
                            positions: [
                                {name: '万位', value: 0}, {name: '千位', value: 1, checked: true}, {
                                    name: '百位',
                                    value: 2,
                                    checked: true
                                }, {name: '十位', value: 3, checked: true}, {name: '个位', value: 4, checked: true}
                            ],
                            rows: [
                                {
                                    name: '二重',
                                    least: 2,
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                }
                            ]
                        },
                        {
                            name: '组选4', code: 'A4G4', tip: '从万位、千位、百位、十位、个位中至少选择四个位置,从“三重号”中选择一个号码，“单号”中选择一个号码组成一注。',
                            fl: '投注方案：勾选位置万位、千位、十位、个位，选择三重号：8，单号：0； 开奖号码：88*80 或 80*88，均中任四组选4。',
                            sm: '从万位、千位、百位、十位、个位中任意勾选四个位置，然后从0-9中选择1个三重号和1个单号组成一注，所选4个位置的开奖号码与所选号码一致，并且所选三重号码在所选4个位置的开奖号码中出现了3次，顺序不限，即为中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^\d(,\d)*;\d(,\d)*\|\d(,\d){3,4}$/, base: 5000,
                            positions: [
                                {name: '万位', value: 0}, {name: '千位', value: 1, checked: true}, {
                                    name: '百位',
                                    value: 2,
                                    checked: true
                                }, {name: '十位', value: 3, checked: true}, {name: '个位', value: 4, checked: true}
                            ],
                            rows: [
                                {
                                    name: '三重',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                },
                                {
                                    name: '单号',
                                    nums: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                }
                            ]
                        }
                    ]
                }

            ]
        }
    ]
};
// window.lottos.push(cqssc);
lottos.cqssc = window.cqssc;
var xjssc = angular.copy(window.cqssc);
xjssc.name = '新疆时时彩', xjssc.label = 'XJSSC', xjssc.adjustTime = 63, xjssc.periodCounts = 96;
lottos.xjssc = xjssc;
var jxssc = angular.copy(window.cqssc);
jxssc.name = '江西时时彩', jxssc.label = 'JXSSC', jxssc.adjustTime = 60, jxssc.periodCounts = 84;
lottos.jxssc = jxssc;
var tjssc = angular.copy(window.cqssc);
tjssc.name = '天津时时彩', tjssc.label = 'TJSSC', tjssc.adjustTime = 113, tjssc.periodCounts = 84;
lottos.tjssc = tjssc;
var tjssc = angular.copy(window.cqssc);
tjssc.name = '至尊时时彩', tjssc.label = 'FFC5', tjssc.isOur = true, tjssc.periodCounts = 288;
lottos.ffc5 = tjssc;
var tjssc = angular.copy(window.cqssc);
tjssc.name = '兴隆两分彩', tjssc.label = 'FFC2', tjssc.isOur = true, tjssc.periodCounts = 720;
lottos.ffc2 = tjssc;
var tjssc = angular.copy(window.cqssc);
tjssc.name = '吉祥分分彩', tjssc.label = 'FFC1', tjssc.isOur = true, tjssc.periodCounts = 1440;
lottos.ffc1 = tjssc;
var tjssc = angular.copy(window.cqssc);
tjssc.name = '如意秒秒彩', tjssc.label = 'MMC', tjssc.isOur = true;
lottos.MMC = tjssc;