var express = require('express');
var ejs = require('ejs');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var routes = require('./routes/routes');//路由
var socket_io = require('socket.io');


var app = express();
var dir=process.env.dir||"app";

//设置vm模版
app.set("views", __dirname + "/"+dir+"/views");
app.engine('.html', ejs.__express);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(favicon(__dirname + '/config/favicon.ico'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({
    secret: 'ig session',
    resave: false,
    saveUninitialized: true
}));
app.use(express.static(path.join(__dirname + "/"+dir+"")));

//路由
routes(app);

module.exports = app;