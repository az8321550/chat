window.sd11x5 =
{
    name: '山东11选5',
    label: 'SD11X5',
    cate: '11X5',
    histype: 'eleven',
    category: 'game115',
    number: 5,
    midNum: 5,
    maxNumber: 11,
    ajustTime: 54,
    periodCounts: 78,
    tabs: [
        {
            name: '三 码',
            methodgroups: [
                {
                    name: '前三',
                    methods: [
                        {
                            name: '前三直选复式',
                            code: '3##EDC',
                            tip: '从01-11共11个号码中选择3个不重复的号码组成一注',
                            fl: '  如：选择01，02，03，开奖号码顺序为01，02，03 * *，即为中奖。',
                            sm: '从01-11共11个号码中选择3个不重复的号码组成一注，所选号码与当期顺序摇出的5个号码中的前3个号码相同，且顺序一致，即为中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^\d+(,\d+)*(;\d+(,\d+)*){2}$/, base: 1980,
                            rows: [
                                {
                                    name: '第一位',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}]
                                },
                                {
                                    name: '第二位',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}]
                                },
                                {
                                    name: '第三位',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}]
                                }
                            ]
                        },
                        {
                            name: '前三直选单式',
                            code: '3##DS',
                            tip: '手动输入3个号码组成一注。',
                            fl: '  如：手动输入01 02 03，开奖号码为是01 02 03 * *，即为中奖。',
                            sm: '手动输入3个号码组成一注，所输入的号码与当期顺序摇出的5个号码中的前3个号码相同，且顺序一致，即为中奖。',
                            spec: 'luru',
                            regx: /^\d+(,\d+){2}(;\d+(,\d+){2})*$/, base: 1980
                        },
                        {
                            name: '前三组选复式',
                            code: '3##GC',
                            tip: '从01-11中共11个号码中选择3个号码。',
                            fl: '如：选择01 02 03（展开为01 02 03 * *，01 03 02 * *，02 01 03 * *，02 03 01 * *，03 01 02 * *，03 02 01 * *），开奖号码为03 01 02  即为中奖。',
                            sm: '从01-11总共11个号码中选择3个号码，所选号码与当期顺序摇出的5个号码中的前3个号码相同，顺序不限，即为中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^\d+(,\d+){2,}$/, base: 330,
                            rows: [
                                {
                                    name: '前三组选',
                                    least: 3,
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}]
                                }
                            ]
                        },
                        {
                            name: '前三组选单式',
                            code: '3##GS',
                            tip: '手动输入3个号码组成一注。',
                            fl: '如：手动输入01 02 03（展开为01 02 03 * *，01 03 02 * * , 02 01 03 * *，02 03 01 * *，03 01 02 * *，03 02 01 * *），开奖号码为01 03 02 * *，即为中奖。',
                            sm: '手动输入3个号码组成一注，所输入的号码与当期顺序摇出的5个号码中的前3个号码相同，顺序不限，即为中奖。',
                            spec: 'luru',
                            regx: /^\d+(,\d+){2}(;\d+(,\d+){2})*$/, base: 330
                        },
                        {
                            name: '前三组选胆拖',
                            code: '3##GK',
                            tip: '分别从胆码和拖码的01-11中，至少选择1个胆码和2个拖码组成一注。',
                            fl: '  如：选择胆码 01，选择拖码 02 06，开奖号码为 02 01 06 * *，即为中奖。',
                            sm: '分别从胆码和拖码的01-11中，至少选择1个胆码和2个拖码组成一注。当期顺序摇出的5个号码中的前3个号码中同时包含所选的1个胆码和2个拖码，顺序不限，即为中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^\d+(,\d+)?;\d+(,\d+)*$/, base: 330,
                            rows: [
                                {
                                    name: '胆 码',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}]
                                },
                                {
                                    name: '拖 码',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}]
                                }
                            ]
                        }
                    ]
                },
                {
                    name: '后三',
                    methods: [
                        {
                            name: '后三直选复式',
                            code: '##3EDC',
                            tip: '从01-11共11个号码中选择3个不重复的号码组成一注。',
                            fl: '  如：选择01，02，03，开奖号码顺序为* *，01，02，03 即为中奖。',
                            sm: '从01-11共11个号码中选择3个不重复的号码组成一注，所选号码与当期顺序摇出的5个号码中的后3个号码相同，且顺序一致，即为中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^\d+(,\d+)*(;\d+(,\d+)*){2}$/, base: 1980,
                            rows: [
                                {
                                    name: '第三位',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}]
                                },
                                {
                                    name: '第四位',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}]
                                },
                                {
                                    name: '第五位',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}]
                                }
                            ]
                        },
                        {
                            name: '后三直选单式',
                            code: '##3DS',
                            tip: '手动输入3个号码组成一注。',
                            fl: ' 如：手动输入01 02 03，开奖号码顺序为* *，01，02，03 即为中奖。',
                            sm: '手动输入3个号码组成一注，所输入的号码与当期顺序摇出的5个号码中的后3个号码相同，且顺序一致，即为中奖。',
                            spec: 'luru',
                            regx: /^\d+(,\d+){2}(;\d+(,\d+){2})*$/, base: 1980
                        },
                        {
                            name: '后三组选复式',
                            code: '##3GC',
                            tip: '至从01-11中共11个号码中选择3个号码。',
                            fl: '  如：选择01 02 03（展开为 * *01 02 03， * *01 03 02， * *02 01 03，* *02 03 01 ， * *03 01 02， * *03 02 01），开奖号码为03 01 02  即为中奖。',
                            sm: '从01-11中共11个号码中选择3个号码，所选号码与当期顺序摇出的5个号码中的后3个号码相同，顺序不限，即为中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^\d+(,\d+){2,}$/, base: 330,
                            rows: [
                                {
                                    name: '后三组选',
                                    least: 3,
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}]
                                }
                            ]
                        },
                        {
                            name: '后三组选单式',
                            code: '##3GS',
                            tip: '手动输入3个号码组成一注。',
                            fl: ' 如：手动输入01 02 03（展开为* * 01 02 03，* * 01 03 02 ,* * 02 01 03，* * 02 03 01 ，* * 03 01 02 ，* * 03 02 01），开奖号码为 * * 01 03 02，即为中奖。',
                            sm: '手动输入3个号码组成一注，所输入的号码与当期顺序摇出的5个号码中的后3个号码相同，顺序不限，即为中奖。',
                            spec: 'luru',
                            regx: /^\d+(,\d+){2}(;\d+(,\d+){2})*$/, base: 330
                        },
                        {
                            name: '后三组选胆拖',
                            code: '##3GK',
                            tip: '分别从胆码和拖码的01-11中，至少选择1个胆码和2个拖码组成一注。',
                            fl: '  如：选择胆码 01，选择拖码 02 06，开奖号码为 * *02 01 06，即为中奖。',
                            sm: '分别从胆码和拖码的01-11中，至少选择1个胆码和2个拖码组成一注。当期顺序摇出的5个号码中的后3个号码中同时包含所选的1个胆码和2个拖码，顺序不限，即为中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^\d+(,\d+)?;\d+(,\d+)*$/, base: 330,
                            rows: [
                                {
                                    name: '胆 码',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}]
                                },
                                {
                                    name: '拖 码',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: '二 码',
            methodgroups: [
                {
                    name: '',
                    methods: [
                        {
                            name: '前二直选复式',
                            code: '2*EDC',
                            tip: '从01-11共11个号码中选择2个不重复的号码组成一注。',
                            fl: '  如：选择01 02，开奖号码 01 02 * * *，即为中奖。',
                            sm: '从01-11共11个号码中选择2个不重复的号码组成一注，所选号码与当期顺序摇出的5个号码中的前2个号码相同，且顺序一致，即中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^\d+(,\d+)*;\d+(,\d+)*$/, base: 220,
                            rows: [
                                {
                                    name: '第一位',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}]
                                },
                                {
                                    name: '第二位',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}]
                                }
                            ]
                        },
                        {
                            name: '前二直选单式',
                            code: '2*DS',
                            tip: '手动输入2个号码组成一注。',
                            fl: '如：手动输入 01 02，开奖号码为01 02 * * *，即为中奖。',
                            sm: '手动输入2个号码组成一注，所输入的号码与当期顺序摇出的5个号码中的前2个号码相同，且顺序一致，即为中奖。',
                            spec: 'luru',
                            regx: /^\d+,\d+(;\d+,\d+)*$/, base: 220
                        },
                        {
                            name: '前二组选复式',
                            code: '2*GC',
                            tip: '从01-11中共11个号码中选择2个号码。',
                            fl: '如：选择01 02（展开为01 02 * * *，02 01 * * *），开奖号码为02 01 * * * 或 01 02 * * *，即为中奖。',
                            sm: '从01-11中共11个号码中选择2个号码，所选号码与当期顺序摇出的5个号码中的前2个号码相同，顺序不限，即为中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^\d+(,\d+)+$/, base: 110,
                            rows: [
                                {
                                    name: '前二',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}]
                                }
                            ]
                        },
                        {
                            name: '前二组选单式',
                            code: '2*GS',
                            tip: '手动输入2个号码组成一注。',
                            fl: '如：手动输入01 02（展开为01 02 * * *，02 01 * * *），开奖号码为02 01 *** 或 01 02 ***，即为中奖。',
                            sm: '手动输入2个号码组成一注，所输入的号码与当期顺序摇出的5个号码中的前2个号码相同，顺序不限，即为中奖。',
                            spec: 'luru',
                            regx: /^\d+,\d+(;\d+,\d+)*$/, base: 110
                        },
                        {
                            name: '前二组选胆拖',
                            code: '2*GK',
                            tip: '分别从胆码和拖码的01-11中，至少选择1个胆码和1个拖码组成一注',
                            fl: '如：选择胆码 01，选择拖码 06，开奖号码为 06 01* * *，即为中奖。',
                            sm: '分别从胆码和拖码的01-11中，至少选择1个胆码和1个拖码组成一注。当期顺序摇出的5个号码中的前2个号码中同时包含所选的1个胆码和1个拖码，顺序不限，即为中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^\d+;\d+(,\d+)*$/, base: 110,
                            rows: [
                                {
                                    name: '胆 码',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}]
                                },
                                {
                                    name: '拖 码',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}]
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
                    name: '',
                    methods: [
                        {
                            name: '前三一码不定位',
                            code: 'F',
                            tip: '从01-11共11个号码中选择1个号码进行购买。',
                            fl: '如：选择01，开奖号码为 01**** ，* 01*** ，**01**即为中奖。',
                            sm: '选择一个号码投注,与开奖数的前三个号码当中的其它一个号相同,即中奖',
                            spec: 'number',
                            widget: true,
                            regx: /^\d+(;\d+)*$/, base: 7.3333,
                            seperator: ';',
                            rows: [
                                {
                                    name: '',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}]
                                }
                            ]
                        },
                        {
                            name: '后三一码不定位',
                            code: '*3F',
                            tip: '选从01-11共11个号码中选择1个号码进行购买。',
                            fl: '如：选择01，开奖号码为 ****01，***01*，**01**即为中奖。',
                            sm: '选择一个号码投注,与开奖数的后三个号码当中的其它一个号相同,即中奖',
                            spec: 'number',
                            widget: true,
                            regx: /^\d+(;\d+)*$/, base: 7.3333,
                            seperator: ';',
                            rows: [
                                {
                                    name: '',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: '定位胆',
            methodgroups: [
                {
                    name: '',
                    methods: [
                        {
                            name: '',
                            code: 'DP',
                            tip: '任意1个位置或多个位置上选择1个号码。',
                            fl: '如：万位上选择01，开奖号码为01 * * * *，即为中奖。 如：千位上选择01，开奖号码为 * 01* * *，即为中奖。',
                            sm: '例：从第一位，第二位，第三位任意1个位置或多个位置上选择1个号码，所选号码与相同位置上的开奖号码一致，即为中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^(.{0}|(\d+(,\d+)*))(;(.{0}|(\d+(,\d+)*))){4}$/, base: 22,
                            rows: [
                                {
                                    name: '第一位',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}]
                                },
                                {
                                    name: '第二位',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}]
                                },
                                {
                                    name: '第三位',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}]
                                },
                                {
                                    name: '第四位',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}]
                                },
                                {
                                    name: '第五位',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: '趣味型',
            methodgroups: [
                {
                    name: '',
                    methods: [
                        {
                            name: '定单双',
                            code: 'S',
                            tip: '选择一种大小单双进行购买',
                            fl: '如：选择4单1双，开奖号为01 03 05 07 08，即为中奖',
                            sm: '您投注的大小单双个数与开奖的一致即为中奖',
                            spec: 'box',
                            widget: false,
                            regx: /^\d(;\d)*$/, base: 0,
                            mixedPrize: true,
                            prizes: [
                                {name: '5单0双', base: 153},
                                {name: '4单1双', base: 12.2304},
                                {name: '3单2双', base: 4.5576},
                                {name: '2单3双', base: 6.1152},
                                {name: '1单4双', base: 30.768},
                                {name: '0单5双', base: 923.0405},
                            ],
                            seperator: ';',
                            rows: [
                                {
                                    hideLead: true,
                                    name: '定单双',
                                    nums: [{value: '5单0双', trueValue: 1}, {value: '4单1双', trueValue: 2}, {
                                        value: '3单2双',
                                        trueValue: 3
                                    }, {value: '2单3双', trueValue: 4}, {value: '1单4双', trueValue: 5}, {
                                        value: '0单5双',
                                        trueValue: 6
                                    }]
                                }
                            ]
                        },
                        {
                            name: '猜中位',
                            code: 'M',
                            tip: '从3-9中任意选择1个或1个以上数字。',
                            fl: '如：选择号码4，开奖号码为 2 3 4 7 8，即为中奖',
                            sm: '您选择的号码是开奖号码排序后的中间位置的值，5 7 4 9 11 的中间值是 7',
                            spec: 'number',
                            widget: true,
                            regx: /^\d(;\d)*$/, base: 0,
                            mixedPrize: true,
                            prizes: [
                                {name: '3或9', base: 33},
                                {name: '4或8', base: 14.6667},
                                {name: '5或7', base: 10.224},
                                {name: '6', base: 9.2208}
                            ],
                            seperator: ';',
                            rows: [
                                {
                                    name: '猜中位',
                                    nums: [{value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: '任选复式',
            methodgroups: [
                {
                    name: '',
                    methods: [
                        {
                            name: '任选一中一',
                            code: '1O1C',
                            tip: '从01-11共11个号码中选择1个号码进行购买。',
                            fl: '如：选择05，开奖号码为08 04 11 05 03，即为中奖',
                            sm: '从01-11共11个号码中选择1个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^\d+(;\d+)*$/, base: 4.336,
                            seperator: ';',
                            rows: [
                                {
                                    name: '',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}]
                                }
                            ]
                        },
                        {
                            name: '任选二中二',
                            code: '2O2C',
                            tip: '从01-11共11个号码中选择2个号码进行购买。',
                            fl: '如：选择05 04，开奖号码为08 04 11 05 03，即为中奖。',
                            sm: '从01-11共11个号码中选择2个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^\d+(,\d+)+$/, base: 11,
                            rows: [
                                {
                                    name: '',
                                    least: 2,
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}]
                                }
                            ]
                        },
                        {
                            name: '任选三中三',
                            code: '3O3C',
                            tip: '从01-11共11个号码中选择3个号码进行购买。',
                            fl: '如：选择05 04 11，开奖号码为08 04 11 05 03，即为中奖。',
                            sm: '从01-11共11个号码中选择3个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^\d+(,\d+){2,}$/, base: 33,
                            rows: [
                                {
                                    name: '',
                                    least: 3,
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}]
                                }
                            ]
                        },
                        {
                            name: '任选四中四',
                            code: '4O4C',
                            tip: '从01-11共11个号码中选择4个号码进行购买。',
                            fl: '如：选择05 04 08 03，开奖号码为08 04 11 05 03，即为中奖。',
                            sm: '从01-11共11个号码中选择4个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^\d+(,\d+){3,}$/, base: 131.1776,
                            rows: [
                                {
                                    name: '',
                                    least: 4,
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}]
                                }
                            ]
                        },
                        {
                            name: '任选五中五',
                            code: '5O5C',
                            tip: '从01-11共11个号码中选择5个号码进行购买。',
                            fl: '如：选择05 04 11 03 08，开奖号码为08 04 11 05 03，即为中奖。',
                            sm: '从01-11共11个号码中选择5个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^\d+(,\d+){4,}$/, base: 923.0405,
                            rows: [
                                {
                                    name: '',
                                    least: 4,
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}]
                                }
                            ]
                        },
                        {
                            name: '任选六中五',
                            code: '5O6C',
                            tip: '从从01-11共11个号码中选择6个号码进行购买。',
                            fl: '如：选择05 10 04 11 03 08，开奖号码为08 04 11 05 03，即为中奖。',
                            sm: '从01-11共11个号码中选择6个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^\d+(,\d+){5,}$/, base: 153.3603,
                            rows: [
                                {
                                    name: '',
                                    least: 6,
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}]
                                }
                            ]
                        },
                        {
                            name: '任选七中五',
                            code: '5O7C',
                            tip: '从01-11共11个号码中选择8个号码进行购买。',
                            fl: '如：选择05 04 11 03 08 10 09，开奖号码为08 04 11 05 03，即为中奖。',
                            sm: '从01-11共11个号码中选择7个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^\d+(,\d+){6,}$/, base: 44,
                            rows: [
                                {
                                    name: '',
                                    least: 7,
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}]
                                }
                            ]
                        },
                        {
                            name: '任选八中五',
                            code: '5O8C',
                            tip: '从1-11选择8个或8个以上号码。',
                            fl: '如：选择05 04 11 03 08 10 09 01，开奖号码为08 04 11 05 03，即为中奖。',
                            sm: '从01-11共11个号码中选择8个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^\d+(,\d+){7,}$/, base: 16.4486,
                            rows: [
                                {
                                    name: '',
                                    least: 8,
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: '任选单式',
            methodgroups: [
                {
                    name: '',
                    methods: [
                        {
                            name: '任选一中一',
                            code: '1O1S',
                            tip: '从01-11共11个号码中选择1个号码进行购买。',
                            fl: '如：选择05，开奖号码为08 04 11 05 03，即为中奖',
                            sm: '从01-11共11个号码中选择1个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
                            spec: 'luru',
                            widget: true,
                            regx: /^\d+(;\d+)*$/, base: 4.336
                        },
                        {
                            name: '任选二中二',
                            code: '2O2S',
                            tip: '从01-11共11个号码中选择2个号码进行购买。',
                            fl: '如：选择05 04，开奖号码为08 04 11 05 03，即为中奖。',
                            sm: '从01-11共11个号码中选择2个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
                            spec: 'luru',
                            widget: true,
                            regx: /^\d+,\d+(;\d+,\d+)*$/, base: 11
                        },
                        {
                            name: '任选三中三',
                            code: '3O3S',
                            tip: '从01-11共11个号码中选择3个号码进行购买。',
                            fl: '如：选择05 04 11，开奖号码为08 04 11 05 03，即为中奖。',
                            sm: '从01-11共11个号码中选择3个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
                            spec: 'luru',
                            widget: true,
                            regx: /^\d+(,\d+){2}(;\d+(,\d+){2})*$/, base: 33
                        },
                        {
                            name: '任选四中四',
                            code: '4O4S',
                            tip: '从01-11共11个号码中选择4个号码进行购买。',
                            fl: '如：选择05 04 08 03，开奖号码为08 04 11 05 03，即为中奖。',
                            sm: '从01-11共11个号码中选择4个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
                            spec: 'luru',
                            widget: true,
                            regx: /^\d+(,\d+){3}(;\d+(,\d+){3})*$/, base: 131.1776
                        },
                        {
                            name: '任选五中五',
                            code: '5O5S',
                            tip: '从01-11共11个号码中选择5个号码进行购买。',
                            fl: '如：选择05 04 11 03 08，开奖号码为08 04 11 05 03，即为中奖。',
                            sm: '从01-11共11个号码中选择5个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
                            spec: 'luru',
                            widget: true,
                            regx: /^\d+(,\d+){4}(;\d+(,\d+){4})*$/, base: 923.0405
                        },
                        {
                            name: '任选六中五',
                            code: '5O6S',
                            tip: '从01-11共11个号码中选择6个号码进行购买。',
                            fl: '如：选择05 10 04 11 03 08，开奖号码为08 04 11 05 03，即为中奖。',
                            sm: '从01-11共11个号码中选择6个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
                            spec: 'luru',
                            widget: true,
                            regx: /^\d+(,\d+){5}(;\d+(,\d+){5})*$/, base: 153.3603
                        },
                        {
                            name: '任选七中五',
                            code: '5O7S',
                            tip: '从01-11共11个号码中选择7个号码进行购买。',
                            fl: '如：选择05 04 10 11 03 08 09，开奖号码为08 04 11 05 03，即为中奖。',
                            sm: '从01-11共11个号码中选择7个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
                            spec: 'luru',
                            widget: true,
                            regx: /^\d+(,\d+){6}(;\d+(,\d+){6})*$/, base: 44
                        },
                        {
                            name: '任选八中五',
                            code: '5O8S',
                            tip: '从01-11共11个号码中选择8个号码进行购买。',
                            fl: '如：选择05 04 11 03 08 10 09 01，开奖号码为08 04 11 05 03，即为中奖。',
                            sm: '从01-11共11个号码中选择8个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
                            spec: 'luru',
                            widget: true,
                            regx: /^\d+(,\d+){7}(;\d+(,\d+){7})*$/, base: 16.4486
                        }
                    ]
                }
            ]
        },
        {
            name: '任选胆拖',
            methodgroups: [
                {
                    name: '',
                    methods: [
                        {
                            name: '任选二中二',
                            code: '2O2K',
                            tip: '分别从胆码和拖码的01-11中，至少选择1个胆码和1个拖码组成一注。',
                            fl: '如：选择胆码 08，选择拖码 06，开奖号码为 06 08 11 09 02，即为中奖。',
                            sm: '分别从胆码和拖码的01-11中，至少选择1个胆码和1个拖码组成一注，只要当期顺序摇出的5个开奖号码中同时包含所选的1个胆码和1个拖码，所选胆码必须全中，即为中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^\d+;\d+(,\d+)*$/, base: 11,
                            rows: [
                                {
                                    name: '胆码',
                                    max: 1,
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}]
                                },
                                {
                                    name: '拖码',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}]
                                }
                            ]
                        },
                        {
                            name: '任选三中三',
                            code: '3O3K',
                            tip: '分别从胆码和拖码的01-11中，至少选择1个胆码和2个拖码组成一注。',
                            fl: '如：选择胆码 08，选择拖码 06 11，开奖号码为 06 08 11 09 02，即为中奖。',
                            sm: '分别从胆码和拖码的01-11中，至少选择1个胆码和2个拖码组成一注，只要当期顺序摇出的5个开奖号码中同时包含所选的1个胆码和2个拖码，所选胆码必须全中，即为中奖。',
                            spec: 'number',
                            count: 3,
                            widget: true,
                            regx: /^\d+(,\d+)?;\d+(,\d+)*$/, base: 33,
                            rows: [
                                {
                                    name: '胆码',
                                    max: 2,
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}]
                                },
                                {
                                    name: '拖码',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}]
                                }
                            ]
                        },
                        {
                            name: '任选四中四',
                            code: '4O4K',
                            tip: '分别从胆码和拖码的01-11中，至少选择1个胆码和3个拖码组成一注。',
                            fl: '如：选择胆码 08，选择拖码 06 09 11，开奖号码为 06 08 11 09 02，即为中奖。',
                            sm: '分别从胆码和拖码的01-11中，至少选择1个胆码和3个拖码组成一注，只要当期顺序摇出的5个开奖号码中同时包含所选的1个胆码和3个拖码，所选胆码必须全中，即为中奖。',
                            spec: 'number',
                            count: 4,
                            widget: true,
                            regx: /^\d+(,\d+){0,2};\d+(,\d+)*$/, base: 132,
                            rows: [
                                {
                                    name: '胆码',
                                    max: 3,
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}]
                                },
                                {
                                    name: '拖码',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}]
                                }
                            ]
                        },
                        {
                            name: '任选五中五',
                            code: '5O5K',
                            tip: '分别从胆码和拖码的01-11中，至少选择1个胆码和4个拖码组成一注。',
                            fl: '如：选择胆码 08，选择拖码 02 06 09 11，开奖号码为  06 08 11 09 02，即为中奖。',
                            sm: '分别从胆码和拖码的01-11中，至少选择1个胆码和4个拖码组成一注，只要当期顺序摇出的5个开奖号码中同时包含所选的1个胆码和4个拖码，所选胆码必须全中，即为中奖。',
                            spec: 'number',
                            count: 5,
                            widget: true,
                            regx: /^\d+(,\d+){0,3};\d+(,\d+)*$/, base: 924,
                            rows: [
                                {
                                    name: '胆码',
                                    max: 4,
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}]
                                },
                                {
                                    name: '拖码',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}]
                                }
                            ]
                        },
                        {
                            name: '任选六中五',
                            code: '5O6K',
                            tip: '分别从胆码和拖码的01-11中，至少选择1个胆码和5个拖码组成一注。',
                            fl: '如：选择胆码 08，选择拖码 01 02 05 06 09 11，开奖号码为 06 08 11 09 02，即为中奖。',
                            sm: '分别从胆码和拖码的01-11中，至少选择1个胆码和5个拖码组成一注，只要当期顺序摇出的5个开奖号码同时存在于胆码和拖码的任意组合中，即为中奖。',
                            spec: 'number',
                            count: 6,
                            widget: true,
                            regx: /^\d+(,\d+){0,4};\d+(,\d+)*$/, base: 154,
                            rows: [
                                {
                                    name: '胆码',
                                    max: 5,
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}]
                                },
                                {
                                    name: '拖码',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}]
                                }
                            ]
                        },
                        {
                            name: '任选七中五',
                            code: '5O7K',
                            tip: '分别从胆码和拖码的01-11中，至少选择1个胆码和6个拖码组成一注。',
                            fl: '如：选择胆码 08，选择拖码 01 02 05 06 07 09 11，开奖号码为 06 08 11 09 02，即为中奖。',
                            sm: '分别从胆码和拖码的01-11中，至少选择1个胆码和6个拖码组成一注，只要当期顺序摇出的5个开奖号码同时存在于胆码和拖码的任意组合中，即为中奖。',
                            spec: 'number',
                            count: 7,
                            widget: true,
                            regx: /^\d+(,\d+){0,5};\d+(,\d+)*$/, base: 44,
                            rows: [
                                {
                                    name: '胆码',
                                    max: 6,
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}]
                                },
                                {
                                    name: '拖码',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}]
                                }
                            ]
                        },
                        {
                            name: '任选八中五',
                            code: '5O8K',
                            tip: '分别从胆码和拖码的01-11中，至少选择1个胆码和7个拖码组成一注。',
                            fl: '如：选择胆码 08，选择拖码 01 02 03 05 06 07 09 11，开奖号码为 06 08 11 09 02，即为中奖。',
                            sm: '分别从胆码和拖码的01-11中，至少选择1个胆码和7个拖码组成一注，只要当期顺序摇出的5个开奖号码同时存在于胆码和拖码的任意组合中，即为中奖。',
                            spec: 'number',
                            count: 8,
                            widget: true,
                            regx: /^\d+(,\d+){0,6};\d+(,\d+)*$/, base: 16.5,
                            rows: [
                                {
                                    name: '胆码',
                                    max: 7,
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}]
                                },
                                {
                                    name: '拖码',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};
lottos.sd11x5 = sd11x5;
var new11x5 = angular.copy(sd11x5);
new11x5.name = '广东11选5', new11x5.label = 'GD11X5', new11x5.adjustTime = 60, new11x5.periodCounts = 84;
lottos.gd11x5 = new11x5;
var new11x5 = angular.copy(sd11x5);
new11x5.name = '江西11选5', new11x5.label = 'JX11X5', new11x5.adjustTime = 113, new11x5.periodCounts = 84;
lottos.jx11x5 = new11x5;
var new11x5 = angular.copy(sd11x5);
new11x5.name = '重庆11选5', new11x5.label = 'CQ11X5', xjssc.periodCounts = 85;
lottos.cq11x5 = new11x5;
var new11x5 = angular.copy(sd11x5);
new11x5.name = '上海11选5', new11x5.label = 'SH11X5', new11x5.adjustTime = 85;
lottos.sh11x5 = new11x5;
var new11x5 = angular.copy(sd11x5);
new11x5.name = '安徽11选5', new11x5.label = 'AH11X5', new11x5.adjustTime = 60;
lottos.ah11x5 = new11x5;
var new11x5 = angular.copy(sd11x5);
new11x5.name = '至尊十一选五', new11x5.label = 'FFC11X55', new11x5.isOur = true, new11x5.periodCounts = 288;
lottos.ffc11x55 = new11x5;
var new11x5 = angular.copy(sd11x5);
new11x5.name = '招财十一选五', new11x5.label = 'FFC11X52', new11x5.isOur = true, new11x5.periodCounts = 720;
lottos.ffc11x52 = new11x5;
var new11x5 = angular.copy(sd11x5);
new11x5.name = '进宝十一选五', new11x5.label = 'FFC11X51', new11x5.isOur = true, new11x5.periodCounts = 1440;
lottos.ffc11x51 = new11x5;

