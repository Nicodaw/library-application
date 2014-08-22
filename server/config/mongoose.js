var mongoose = require('mongoose');
var uriUtil = require('mongodb-uri');
var http = require('http');
var user = require('../models/User');
var book = require('../models/Book');

module.exports = function(config) {
	var options = {
	 server: { 
	 	socketOptions: { 
	 		keepAlive: 1, 
	 		connectTimeoutMS: 30000
	 		} 
	 	}, 
    replset: { 
        socketOptions: { 
        	keepAlive: 1,
        	connectTimeoutMS : 30000 
        	} 
        } 
    };

	mongoose.set('debug', true);
	var mongooseUri = uriUtil.formatMongoose(config.db)
	mongoose.connect(mongooseUri, options);

	var db = mongoose.connection;

	db.once('open', function (err) {
		if (err) {
			console.log("Database could not be opened: "+ err);
			return
		}

	console.log('Database is stable...')
})

	db.on('error', function (err) {
		console.log("Database has crashed: "+err);
});


	user.seedInitialUsers();
	book.seedInitialBooks();


};
