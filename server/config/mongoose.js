var mongoose = require('mongoose');
var user = require('../models/User');
var encryption = require('../utilities/encryption');
var book = require('../models/Book')

module.exports = function(config) {
	mongoose.connect(config.db);
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
