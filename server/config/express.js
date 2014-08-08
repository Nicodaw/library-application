var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('cookie-session');
var passport = require('passport')

module.exports = function(app, config) {

	app.set('view engine', 'jade');
	app.set('views', config.rootPath + '/server/views');
	app.use(cookieParser());
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
	  extended: true
	}));
	// app.use(session({secret: 'sloth power',
	// 				 saveUninitialized:true,
	// 				 resave: true}));
	app.use(session({
		keys: ['sporo', 'loro'],
		maxage: 1200000
	}))
	app.use(passport.initialize());
	app.use(passport.session());
	app.use(express.static(config.rootPath + '/public'));

}