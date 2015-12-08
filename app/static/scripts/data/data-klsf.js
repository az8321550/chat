window.gdklsf = {
    name: '广东快乐十分',
    label: 'GDKLSF',
    cate: 'KLSF',
    histype: 'klsf',
    category: 'game10',
    number: 8,
    midNum: 10,
    maxNumber: 20,
    periodCounts: 84,
    tabs: [
        {
            name: '一星',
            methodgroups: [
                {
                    name: '',
                    methods: [
                        {
                            name: '定位胆',
                            code: '1DP',
                            tip: '从八个位数中，任意选择一个或一个以上的号码投注',
                            fl: '如：选择 1，在第八位，开奖号码为 01******* 即为中奖',
                            sm: '从八个位数中，任意选择一个或一个以上的号码投注，选号与开奖号码对应位置一致即为中奖',
                            spec: 'number',
                            widget: true,
                            regx: /^(.{0}|(\d+(,\d+)*))(;(.{0}|(\d+(,\d+)*))){7}$/, base: 37.844,
                            rows: [
                                {
                                    name: '第八位',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}, {value: 12}, {value: 13}, {value: 14}, {value: 15}, {value: 16}, {value: 17}, {value: 18}, {value: 19}, {value: 20}]
                                },
                                {
                                    name: '第七位',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}, {value: 12}, {value: 13}, {value: 14}, {value: 15}, {value: 16}, {value: 17}, {value: 18}, {value: 19}, {value: 20}]
                                },
                                {
                                    name: '第六位',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}, {value: 12}, {value: 13}, {value: 14}, {value: 15}, {value: 16}, {value: 17}, {value: 18}, {value: 19}, {value: 20}]
                                },
                                {
                                    name: '第五位',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}, {value: 12}, {value: 13}, {value: 14}, {value: 15}, {value: 16}, {value: 17}, {value: 18}, {value: 19}, {value: 20}]
                                },
                                {
                                    name: '第四位',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}, {value: 12}, {value: 13}, {value: 14}, {value: 15}, {value: 16}, {value: 17}, {value: 18}, {value: 19}, {value: 20}]
                                },
                                {
                                    name: '第三位',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}, {value: 12}, {value: 13}, {value: 14}, {value: 15}, {value: 16}, {value: 17}, {value: 18}, {value: 19}, {value: 20}]
                                },
                                {
                                    name: '第二位',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}, {value: 12}, {value: 13}, {value: 14}, {value: 15}, {value: 16}, {value: 17}, {value: 18}, {value: 19}, {value: 20}]
                                },
                                {
                                    name: '第一位',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}, {value: 12}, {value: 13}, {value: 14}, {value: 15}, {value: 16}, {value: 17}, {value: 18}, {value: 19}, {value: 20}]
                                },
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
                            name: '任选一',
                            code: '1O1C',
                            tip: '至少选择1个号码投注，选号与开奖号码任意1位一致即中奖',
                            fl: '如：选择 6，开奖号码为 15 9 3 2 7 1 6 11即为中奖',
                            sm: '至少选择1个号码投注，选号与开奖号码任意1位一致即中奖',
                            spec: 'number',
                            widget: true,
                            regx: /^\d+(;\d+)*$/, base: 4.5872,
                            seperator: ';',
                            rows: [
                                {
                                    name: '任选一',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}, {value: 12}, {value: 13}, {value: 14}, {value: 15}, {value: 16}, {value: 17}, {value: 18}, {value: 19}, {value: 20}]
                                },
                            ]
                        },
                        {
                            name: '任选二',
                            code: '2O2C',
                            tip: '至少选择2个号码投注，选号与开奖号码任意2位一致即中奖',
                            fl: '如：选择 9 3，开奖号码为 15 9 3 2 7 1 6 11即为中奖',
                            sm: '至少选择2个号码投注，选号与开奖号码任意2位一致即中奖',
                            spec: 'number',
                            widget: true,
                            regx: /^\d+(,\d+)+$/, base: 12.6147,
                            rows: [
                                {
                                    name: '任选二',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}, {value: 12}, {value: 13}, {value: 14}, {value: 15}, {value: 16}, {value: 17}, {value: 18}, {value: 19}, {value: 20}]
                                },
                            ]
                        },
                        {
                            name: '任选三',
                            code: '3O3C',
                            tip: '至少选择3个号码投注，选号与开奖号码任意3位一致即中奖',
                            fl: '如：选择 15 3 1，开奖号码为 15 9 3 2 7 1 6 11即为中奖',
                            sm: '至少选择3个号码投注，选号与开奖号码任意3位一致即中奖',
                            spec: 'number',
                            widget: true,
                            regx: /^\d+(,\d+){2,}$/, base: 38.9908,
                            rows: [
                                {
                                    name: '任选三',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}, {value: 12}, {value: 13}, {value: 14}, {value: 15}, {value: 16}, {value: 17}, {value: 18}, {value: 19}, {value: 20}]
                                },
                            ]
                        },
                        {
                            name: '任选四',
                            code: '4O4C',
                            tip: '至少选择4个号码投注，选号与开奖号码任意4位一致即中奖',
                            fl: '如：选择 15 6 2 7，开奖号码为 15 9 3 2 7 1 6 11即为中奖',
                            sm: '至少选择4个号码投注，选号与开奖号码任意4位一致即中奖',
                            spec: 'number',
                            widget: true,
                            regx: /^\d+(,\d+){3,}$/, base: 133.0275,
                            rows: [
                                {
                                    name: '任选四',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}, {value: 12}, {value: 13}, {value: 14}, {value: 15}, {value: 16}, {value: 17}, {value: 18}, {value: 19}, {value: 20}]
                                },
                            ]
                        },
                        {
                            name: '任选五',
                            code: '5O5C',
                            tip: '至少选择5个号码投注，选号与开奖号码任意5位一致即中奖',
                            fl: '如：选择 11 2 7 1 9，开奖号码为 15 9 3 2 7 1 6 11即为中奖',
                            sm: '至少选择5个号码投注，选号与开奖号码任意5位一致即中奖',
                            spec: 'number',
                            widget: true,
                            regx: /^\d+(,\d+){4,}$/, base: 533.2569,
                            rows: [
                                {
                                    name: '任选五',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}, {value: 12}, {value: 13}, {value: 14}, {value: 15}, {value: 16}, {value: 17}, {value: 18}, {value: 19}, {value: 20}]
                                },
                            ]
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
                            name: '任选二胆拖',
                            code: '2O2K',
                            tip: '胆码可选1，拖码可选2-10个，拖码个数加胆码个数至少为2',
                            fl: '如：选择胆码 15 ，选择拖码 9 3，开奖号码为 15 9 3 2 7 1 6 11，即为中奖。',
                            sm: '胆码可选1，拖码可选2-10个，拖码个数加胆码个数要大于2，选号与开奖号码一致即中奖',
                            spec: 'number',
                            widget: true,
                            regx: /^\d+;\d+(,\d+)*$/, base: 12.6147,
                            rows: [
                                {
                                    name: '胆号',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}, {value: 12}, {value: 13}, {value: 14}, {value: 15}, {value: 16}, {value: 17}, {value: 18}, {value: 19}, {value: 20}]
                                },
                                {
                                    name: '拖号',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}, {value: 12}, {value: 13}, {value: 14}, {value: 15}, {value: 16}, {value: 17}, {value: 18}, {value: 19}, {value: 20}]
                                }
                            ]
                        },
                        {
                            name: '任选三胆拖',
                            code: '3O3K',
                            tip: '胆码可选1-2，拖码可选2-10个，拖码个数加胆码个数至少为3',
                            fl: '如：选择胆码 15 ，选择拖码 9 3 2，开奖号码为 15 9 3 2 7 1 6 11，即为中奖。',
                            sm: '胆码可选1-2，拖码可选2-10个，拖码个数加胆码个数要大于3，选号与开奖号码一致即中奖',
                            spec: 'number',
                            widget: true,
                            regx: /^\d+(,\d+)?;\d+(,\d+)*$/, base: 38.9908,
                            rows: [
                                {
                                    name: '胆号',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}, {value: 12}, {value: 13}, {value: 14}, {value: 15}, {value: 16}, {value: 17}, {value: 18}, {value: 19}, {value: 20}]
                                },
                                {
                                    name: '拖号',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}, {value: 12}, {value: 13}, {value: 14}, {value: 15}, {value: 16}, {value: 17}, {value: 18}, {value: 19}, {value: 20}]
                                }
                            ]
                        },
                        {
                            name: '任选四胆拖',
                            code: '4O4K',
                            tip: '胆码可选1-3，拖码可选2-10个，拖码个数加胆码个数至少为4',
                            fl: '如：选择胆码 15 ，选择拖码 9 3 2 7，开奖号码为 15 9 3 2 7 1 6 11，即为中奖。',
                            sm: '胆码可选1-3，拖码可选2-10个，拖码个数加胆码个数要大于4，选号与开奖号码一致即中奖',
                            spec: 'number',
                            widget: true,
                            regx: /^\d+(,\d+){0,2};\d+(,\d+)*$/, base: 133.0275,
                            rows: [
                                {
                                    name: '胆号',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}, {value: 12}, {value: 13}, {value: 14}, {value: 15}, {value: 16}, {value: 17}, {value: 18}, {value: 19}, {value: 20}]
                                },
                                {
                                    name: '拖号',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}, {value: 12}, {value: 13}, {value: 14}, {value: 15}, {value: 16}, {value: 17}, {value: 18}, {value: 19}, {value: 20}]
                                }
                            ]
                        },
                        {
                            name: '任选五胆拖',
                            code: '5O5K',
                            tip: '胆码可选1-4，拖码可选2-10个，拖码个数加胆码个数至少为5',
                            fl: '如：选择胆码 15 ，选择拖码 9 3 2 7 1，开奖号码为 15 9 3 2 7 1 6 11，即为中奖。',
                            sm: '胆码可选1-4，拖码可选2-10个，拖码个数加胆码个数要大于5，选号与开奖号码一致即中奖',
                            spec: 'number',
                            widget: true,
                            regx: /^\d+(,\d+){0,3};\d+(,\d+)*$/, base: 533.2569,
                            rows: [
                                {
                                    name: '胆号',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}, {value: 12}, {value: 13}, {value: 14}, {value: 15}, {value: 16}, {value: 17}, {value: 18}, {value: 19}, {value: 20}]
                                },
                                {
                                    name: '拖号',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}, {value: 12}, {value: 13}, {value: 14}, {value: 15}, {value: 16}, {value: 17}, {value: 18}, {value: 19}, {value: 20}]
                                }
                            ]
                        }
                    ]
                }

            ]
        },
        {
            name: '三码',
            methodgroups: [
                {
                    name: '三星前三',
                    methods: [
                        {
                            name: '直选复式',
                            code: '3*DC',
                            tip: '3位各选1个或多个号码投注，选号与开奖号码前3位按位一致即中奖',
                            fl: '如：选择 15 9 3，开奖号码为 15 9 3 2 7 1 6 11即为中奖',
                            sm: '前3位各选1个或多个号码投注，选号与开奖号码前3位按位一致即中奖，选号与开奖号码一致即中奖',
                            spec: 'number',
                            widget: true,
                            regx: /^\d+(,\d+)*(;\d+(,\d+)*){2}$/, base: 13177.7523,
                            rows: [
                                {
                                    name: '第一位',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}, {value: 12}, {value: 13}, {value: 14}, {value: 15}, {value: 16}, {value: 17}, {value: 18}, {value: 19}, {value: 20}]
                                },
                                {
                                    name: '第二位',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}, {value: 12}, {value: 13}, {value: 14}, {value: 15}, {value: 16}, {value: 17}, {value: 18}, {value: 19}, {value: 20}]
                                },
                                {
                                    name: '第三位',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}, {value: 12}, {value: 13}, {value: 14}, {value: 15}, {value: 16}, {value: 17}, {value: 18}, {value: 19}, {value: 20}]
                                }
                            ]
                        },
                        {
                            name: '组选复式',
                            code: '3*GC',
                            tip: '至少选择3个号码投注，选号包含开奖号码前3位即中奖',
                            fl: '如：选择 15 3 9，开奖号码为 15 9 3 2 7 1 6 11即为中奖',
                            sm: '至少选择3个号码投注，选号包含开奖号码前3位（顺序不限）即中奖',
                            spec: 'number',
                            widget: true,
                            regx: /^\d+(,\d+){2,}$/, base: 2196.1009,
                            rows: [
                                {
                                    name: '前三组选',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}, {value: 12}, {value: 13}, {value: 14}, {value: 15}, {value: 16}, {value: 17}, {value: 18}, {value: 19}, {value: 20}]
                                }
                            ]
                        }
                    ]
                },
                {
                    name: '三星后三',
                    methods: [
                        {
                            name: '直选复式',
                            code: '*3DC',
                            tip: '3位各选1个或多个号码投注，选号与开奖号码后3位按位一致即中奖',
                            fl: '如：选择 1 6 11，开奖号码为 15 9 3 2 7 1 6 11即为中奖',
                            sm: '后3位各选1个或多个号码投注，选号与开奖号码后3位按位一致即中奖',
                            spec: 'number',
                            widget: true,
                            regx: /^\d+(,\d+)*(;\d+(,\d+)*){2}$/, base: 13177.7523,
                            rows: [
                                {
                                    name: '第一位',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}, {value: 12}, {value: 13}, {value: 14}, {value: 15}, {value: 16}, {value: 17}, {value: 18}, {value: 19}, {value: 20}]
                                },
                                {
                                    name: '第二位',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}, {value: 12}, {value: 13}, {value: 14}, {value: 15}, {value: 16}, {value: 17}, {value: 18}, {value: 19}, {value: 20}]
                                },
                                {
                                    name: '第三位',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}, {value: 12}, {value: 13}, {value: 14}, {value: 15}, {value: 16}, {value: 17}, {value: 18}, {value: 19}, {value: 20}]
                                }
                            ]
                        },
                        {
                            name: '组选复式',
                            code: '*3GC',
                            tip: '至少选择3个号码投注，选号包含开奖号码后3位即中奖',
                            fl: '如：选择 11 6 1，开奖号码为 15 9 3 2 7 1 6 11即为中奖',
                            sm: '至少选择3个号码投注，选号包含开奖号码后3位（顺序不限）即中奖',
                            spec: 'number',
                            widget: true,
                            regx: /^\d+(,\d+){2,}$/, base: 2196.1009,
                            rows: [
                                {
                                    name: '后三组选',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}, {value: 12}, {value: 13}, {value: 14}, {value: 15}, {value: 16}, {value: 17}, {value: 18}, {value: 19}, {value: 20}]
                                }
                            ]
                        }
                    ]
                }

            ]
        },
        {
            name: '二码',
            methodgroups: [
                {
                    name: '',
                    methods: [
                        {
                            name: '二连直',
                            code: 'B2DC',
                            tip: '从第一位、第二位各选一个号码组成一注',
                            fl: '如：第一位选择3 第二位选择2开奖号码为 15 9 3 2 7 1 6 11即为中奖',
                            sm: '投注的2个号码与开奖的8个号码中任2个连续号码相同且顺序一致即中奖',
                            spec: 'number',
                            widget: true,
                            regx: /^\d+(,\d+)*;\d+(,\d+)*$/, base: 91.7431,
                            rows: [
                                {
                                    name: '第一位',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}, {value: 12}, {value: 13}, {value: 14}, {value: 15}, {value: 16}, {value: 17}, {value: 18}, {value: 19}, {value: 20}]
                                },
                                {
                                    name: '第二位',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}, {value: 12}, {value: 13}, {value: 14}, {value: 15}, {value: 16}, {value: 17}, {value: 18}, {value: 19}, {value: 20}]
                                }
                            ]
                        },
                        {
                            name: '二连组',
                            code: 'B2GC',
                            tip: '从1--20中任意选择或两个以上的号码组成一注',
                            fl: '如：选择 9 15，开奖号码为 15 9 3 2 7 1 6 11即为中奖',
                            sm: '投注的2个号码与开奖的8个号码中任2个连续号码相同（顺序不限）即中奖',
                            spec: 'number',
                            widget: true,
                            regx: /^\d+(,\d+)+$/, base: 45.8716,
                            rows: [
                                {
                                    name: '二连组',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}, {value: 12}, {value: 13}, {value: 14}, {value: 15}, {value: 16}, {value: 17}, {value: 18}, {value: 19}, {value: 20}]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};
lottos.gdklsf = gdklsf;
var new11x5 = angular.copy(gdklsf);
new11x5.name = '重庆快乐十分', new11x5.label = 'CQKLSF', new11x5.adjustTime = 63, new11x5.periodCounts = 97;
lottos.cqklsf = new11x5;