var express = require('express');
var mongoose = require('mongoose');
var uriUtil = require('mongodb-uri');
var http = require('http');

var env = process.env.NODE_ENV || 'developement';

var app = express();
var config = require('./server/config/config')[env];

require('./server/config/express')(app,config);

require('./server/config/mongoose')(config);

require('./server/config/passport')();

require('./server/config/routes')(app);

var db = mongoose.connection;

	db.once('open', function (err) {
		if (err) {
			console.log("Database could not be opened: "+ err);
			return
		}

	console.log('Database is stable...');
	app.listen(config.port);
	console.log("SERVER RUNNING ON PORT: "+ config.port);
})

	db.on('error', function (err) {
		console.log("Database has crashed: "+err);
});
