var _=require("underscore");
module.exports = function (app) {

    app.post('/chat/friends', function (req, res) {
        res.json({
            "status": 1,
            "msg": "ok",
            "data": [
                {
                    "name": "在线好友",
                    "nums": 3,
                    "id": 1,
                    "item": [
                        {
                            "id": "az8321550",
                            "name":"nobody"
                        },
                        {
                            "id": "as8321550",
                            "name":"test1"
                        },
                        {
                            "id": "aq8321550",
                            "name":"test2"
                        }
                    ]
                },
                {
                    "name": "分组1",
                    "nums": 16,
                    "id": 2,
                    "item": [
                        {
                            "id": "1000033",
                            "name": "苏醒",
                            "face": "http://tp1.sinaimg.cn/1296241304/180/5613166991/1"
                        },
                        {
                            "id": "10000333",
                            "name": "马云",
                            "face": "http://tp4.sinaimg.cn/2145291155/180/5601307179/1"
                        },
                        {
                            "id": "100003",
                            "name": "鬼脚七",
                            "face": "http://tp1.sinaimg.cn/1722052204/180/5662731258/1"
                        },
                        {
                            "id": "100004",
                            "name": "谢楠",
                            "face": "http://tp4.sinaimg.cn/1665074831/180/5617130952/0"
                        },
                        {
                            "id": "100005",
                            "name": "徐峥",
                            "face": "http://tp2.sinaimg.cn/1783286485/180/5677568891/1"
                        }
                    ]
                }
            ]
        })
    });

};