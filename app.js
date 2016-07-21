'use strict';

// define globals
var express = require('express'),
    io = require('socket.io'),
    http = require('http'),
    app = express(),
    server = http.createServer(app),
    io = io.listen(server),
    path = require('path'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser');

// set up our socket server
require('./sockets/base')(io);

// start the server
server.listen(3000);

// optional - set socket.io logging level
io.set('log level', 1000);

// middleware settings
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));

console.log(app.get('env'));

if (app.get('env') === 'development') {
  app.use(express.static(__dirname +  '/angular-frontend/app/'));
} else {
  app.use(express.static(__dirname +  '/public'));
}

/// catch 404 and forwarding to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = app;
