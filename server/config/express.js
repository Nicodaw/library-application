var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var SessionStore = require('session-mongoose')(express);
var passport = require('passport')

module.exports = function(app, config) {

	app.set('view engine', 'jade');
	app.set('views', config.rootPath + '/server/views');
	app.use(cookieParser());
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
	  extended: true
	}));
	app.use(session({
		store: new SessionStore({
			url: 'mongodb://localhost/library',
			interval: 1200000
		}),
		secret: 'sloth power',
		cookie: { maxAge: 1200000}
	}));
	app.use(passport.initialize());
	app.use(passport.session());
	app.use(express.static(config.rootPath + '/public'));

}