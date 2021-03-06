﻿
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.get('/', routes.index);
app.post('/', routes.indexPost);
app.get('/unos', routes.unos);
app.post('/unos', routes.unosPost);
app.get('/osnovica', routes.osnovica);
app.get('/tpl', function (req, res) { res.render('tpl') });
app.get('/finansijskakartica', routes.finansijskakartica);
app.get('/unosNovog', routes.unosNovog);
app.post('/unosNovog', routes.unosNovogPost);


http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
