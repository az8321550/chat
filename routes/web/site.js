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

    app.get('/login', function (req, res) {
        res.render('login', app.locals.middle);
    });

    app.get('/forbid', function (req, res) {
        res.render('forbid', app.locals.middle);
    });

    app.get('/his3.html', function (req, res) {
        res.render('his3', app.locals.middle);
    });

    app.get('/signout', function (req, res) {
        req.session.username = '';
        res.redirect('/login');
    });
};