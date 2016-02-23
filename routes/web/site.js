var _=require("underscore");
module.exports = function (app) {

    //登录中间件
    app.use(function (req, res, next) {
        app.locals.middle = {
            username: req.session.username,
        }
        return next()
    })

    app.get('/', function (req, res) {
        res.render('index', app.locals.middle);
    });

    app.get('/chat', function (req, res) {
        res.render('chat', app.locals.middle);
    });


    app.post('/chat/friends', function (req, res) {
        if(req.body.username=="az8321550"){
            res.json({
                "status": 1,
                "msg": "ok",
                "data": [
                    {
                        "name": "上级用户",
                        "nums": 1,
                        "item": [
                            {
                                "id": "fadacai",
                                "name": "sb",
                                "online":false
                            }
                        ]
                    },
                    {
                        "name": "下级用户",
                        "nums": 1,
                        "item": [
                            {
                                "id": "下级1",
                                "name": "下级",
                                "online":true
                            }
                        ]
                    },
                ]
            })
        }else{
            res.json({
                "status": 1,
                "msg": "ok",
                "data": [
                    {
                        "name": "上级用户",
                        "nums": 1,
                        "item": [
                            {
                                "id": "fadacai",
                                "name": "sb",
                                "online":false
                            }
                        ]
                    },
                    {
                        "name": "下级用户",
                        "nums": 1,
                        "item": [
                            {
                                "id": "az8321550",
                                "name": "nobody",
                                "online":false
                            }
                        ]
                    },
                ]
            })
        }
    });
};