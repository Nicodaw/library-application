var Book = require('mongoose').model('Book')



module.exports = {
	getAllBooks: function(req, res, next) {
		Book.find({}).exec(function(err, collection) {
			if (err) {
				console.log('Books could not be loaded: '+ err);
			}
			res.send(collection);
		})
	},
	getBookById: function(req,res,next) {
		Book.findOne({_id: req.params.id}).exec(function(err, book) {
			if (err) {
				console.log('Book could not be loaded: '+ err);
			}
			res.send(book);
		})
	},
	createBook: function(req,res, next) {
		var newBookData = req.body;
		Book.create(newBookData, function(err,book) {
			if (err) {
				console.log("failed to add new book "+err);
				return;
			}
		
		})
	},
	updateBook: function(req,res,next) {
			var updatedBookData = req.body;

		Book.update({_id: req.body._id}, updatedBookData, function() {
			console.log('update successful')
			res.end();
		})

	}

};