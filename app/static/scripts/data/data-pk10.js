window.pk10 = {
    name: '北京PK10',
    label: 'BJPK10',
    cate: '3D',
    histype: 'pk10',
    category: 'game3d',
    number: 3,
    midNum: 5,
    maxNumber: 9,
    tabs: [
        {
            name: '猜冠军',
            label: 'sanxing',
            methodgroups: [
                {
                    name: '猜冠军',
                    methods: [
                        {
                            name: '猜冠军',
                            code: '1*DC',
                            tip: '从1-10中选择一个号码，只要开奖的冠军车号与所选号码一致即中奖。如：选择5，开奖号码为5 * * * * * * * * *，即为中奖。',
                            spec: 'number',
                            separator: ';',
                            widget: true,
                            regx: /^\d+(;\d+)*$/,
                            base: 20,
                            rows: [
                                {
                                    name: '第一名',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: '猜前两名',
            label: 'sanxing',
            methodgroups: [
                {
                    name: '猜前两名',
                    methods: [
                        {
                            name: '复式',
                            code: '2*EDC',
                            tip: '从1-10中选择两个号码，只要开奖的第一名、第二名车号与所选号码相同且顺序一致即中奖。如：第一名选择1，第二名选择2，开奖号码 1 2 * * * * * * * *，即为中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^\d+(,\d+)*;\d+(,\d+)*$/,
                            base: 180,
                            rows: [
                                {
                                    name: '第一名',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}]
                                },
                                {
                                    name: '第二名',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}]
                                }
                            ]
                        },
                        {
                            name: '单式',
                            code: '2*DS',
                            tip: ' 从1-10中选择两个号码，只要开奖的第一名、第二名车号与所选号码相同且顺序一致即中奖。如：第一名选择1，第二名选择2，开奖号码 1 2 * * * * * * * *，即为中奖。',
                            spec: 'luru',
                            regx: /^\d+,\d+(;\d+,\d+)*$/,
                            base: 180
                        }
                    ]
                }
            ]
        },
        {
            name: '猜前三名',
            label: 'sanxing',
            methodgroups: [
                {
                    name: '猜前三名',
                    methods: [
                        {
                            name: '复式',
                            code: '3*EDC',
                            tip: '从1-10中选择三个号码，只要开奖的第一名、第二名、第三名车号与所选号码相同且顺序一致即中奖。如：第一名选择1，第二名选择2，第三名选择3，开奖号码 1 2 3 * * * * * * *，即为中奖。',
                            spec: 'number',
                            widget: true,
                            regx: /^\d+(,\d+)*(;\d+(,\d+)*){2}$/,
                            base: 1440,
                            rows: [
                                {
                                    name: '第一名',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}]
                                },
                                {
                                    name: '第二名',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}]
                                },
                                {
                                    name: '第三名',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}]
                                }
                            ]
                        },
                        {
                            name: '单式',
                            code: '3*DS',
                            tip: '从1-10中选择三个号码，只要开奖的第一名、第二名、第三名车号与所选号码相同且顺序一致即中奖。如：第一名选择1，第二名选择2，第三名选择3，开奖号码 1 2 3 * * * * * * *，即为中奖。',
                            spec: 'luru',
                            regx: /^\d+(,\d+){2}(;\d+(,\d+){2})*$/,
                            base: 1440
                        }
                    ]
                }
            ]
        },
        {
            name: '定位胆',
            label: 'sanxing',
            methodgroups: [
                {
                    name: '定位胆',
                    methods: [
                        {
                            name: '1~5名定位胆',
                            code: 'DP',
                            tip: '于第一名、二名、三名、四名、五名分别自1~10选择任意的1个或多个号码投注只要当期开奖结果与所选的号码相同且顺序一致时，即为中奖。如：定第一名为1，开奖号码为"1*********"即为中奖',
                            spec: 'number',
                            widget: true,
                            regx: /^(.{0}|(\d+(,\d+)*))(;(.{0}|(\d+(,\d+)*))){9}$/,
                            base: 20,
                            rows: [
                                {
                                    name: '第一名',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}]
                                },
                                {
                                    name: '第二名',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}]
                                },
                                {
                                    name: '第三名',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}]
                                },
                                {
                                    name: '第四名',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}]
                                },
                                {
                                    name: '第五名',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}]
                                },

                            ]
                        }, {
                            name: '6~10名定位胆',
                            code: 'DP',
                            tip: '于第六名、七名、八名、九名、十名分别自1~10选择任意的1个或多个号码投注只要当期开奖结果与所选的号码相同且顺序一致时，即为中奖。如：定第六名为1，开奖号码为"*****1****"即为中奖',
                            spec: 'number',
                            widget: true,
                            regx: /^(.{0}|(\d+(,\d+)*))(;(.{0}|(\d+(,\d+)*))){9}$/,
                            base: 20,
                            rows: [
                                {
                                    name: '第六名',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}]
                                },
                                {
                                    name: '第七名',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}]
                                },
                                {
                                    name: '第八名',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}]
                                },
                                {
                                    name: '第九名',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}]
                                },
                                {
                                    name: '第十名',
                                    nums: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: '大小',
            methodgroups: [
                {
                    name: '大小',
                    methods: [
                        {
                            name: '第一名',
                            code: 'GB1',
                            tip: '选择大或小进行投注，只要开奖的第一名车号的大小(注：1,2,3,4,5为小；6,7,8,9,10为大)与所选项一致即中奖。如：选择大，开奖号码为7 * * * * * * * * *，即为中奖。',
                            spec: 'daxiaodanshuang',
                            regx: /^0|1$/,
                            base: 4,
                            rows: [
                                {name: '第一名', nums: [{value: '小', trueValue: 0}, {value: '大', trueValue: 1}]}
                            ]
                        }, {
                            name: '第二名',
                            code: 'GB2',
                            tip: '选择大或小进行投注，只要开奖的第二名车号的大小(注：1,2,3,4,5为小；6,7,8,9,10为大)与所选项一致即中奖。如：选择大，开奖号码为* 7 * * * * * * * *，即为中奖。',
                            spec: 'daxiaodanshuang',
                            regx: /^0|1$/,
                            base: 4,
                            rows: [
                                {name: '第二名', nums: [{value: '小', trueValue: 0}, {value: '大', trueValue: 1}]}
                            ]
                        }, {
                            name: '第三名',
                            code: 'GB3',
                            tip: ' 选择大或小进行投注，只要开奖的第三名车号的大小(注：1,2,3,4,5为小；6,7,8,9,10为大)与所选项一致即中奖。如：选择大，开奖号码为* * 7 * * * * * * *，即为中奖。',
                            spec: 'daxiaodanshuang',
                            regx: /^0|1$/,
                            base: 4,
                            rows: [
                                {name: '第三名', nums: [{value: '小', trueValue: 0}, {value: '大', trueValue: 1}]}
                            ]
                        }
                    ]
                }

            ]
        },
        {
            name: '单双',
            methodgroups: [
                {
                    name: '单双',
                    methods: [
                        {
                            name: '第一名',
                            code: 'GO1',
                            tip: ' 选择单或双进行投注，只要开奖的第一名车号的单双(注：1,3,5,7,9为单；2,4,6,8,10为双)与所选项一致即中奖。如：选择双，开奖号码为8 * * * * * * * * *，即为中奖。',
                            spec: 'daxiaodanshuang',
                            regx: /^0|1$/,
                            base: 4,
                            rows: [
                                {name: '第一名', nums: [{value: '单', trueValue: 1}, {value: '双', trueValue: 0}]}
                            ]
                        }, {
                            name: '第二名',
                            code: 'GO2',
                            tip: '选择单或双进行投注，只要开奖的第二名车号的单双(注：1,3,5,7,9为单；2,4,6,8,10为双)与所选项一致即中奖。如：选择双，开奖号码为* 8 * * * * * * * *，即为中奖。',
                            spec: 'daxiaodanshuang',
                            regx: /^0|1$/,
                            base: 4,
                            rows: [
                                {name: '第二名', nums: [{value: '单', trueValue: 1}, {value: '双', trueValue: 0}]}
                            ]
                        }, {
                            name: '第三名',
                            code: 'GO3',
                            tip: ' 选择单或双进行投注，只要开奖的第三名车号的单双(注：1,3,5,7,9为单；2,4,6,8,10为双)与所选项一致即中奖。如：选择双，开奖号码为* * 8 * * * * * * *，即为中奖。',
                            spec: 'daxiaodanshuang',
                            regx: /^0|1$/,
                            base: 4,
                            rows: [
                                {name: '第三名', nums: [{value: '单', trueValue: 1}, {value: '双', trueValue: 0}]}
                            ]
                        }
                    ]
                }

            ]
        }
    ]
};
lottos.pk10 = pk10, lottos.pk10.adjustTime = 90;