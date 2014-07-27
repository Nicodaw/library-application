var Book = require('mongoose').model('Book')



module.exports.getAllBooks = function(req, res, next) {
		Book.find({}).exec(function(err, collection) {
			if (err) {
				console.log('Books could not be loaded: '+ err);
			}
			res.send(collection);
		})
	}
