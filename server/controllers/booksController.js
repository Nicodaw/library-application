var Book = require('mongoose').model('Book');
var http = require('http');



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
			res.send(book);
		
		})
	},
	updateBook: function(req,res,next) {
			var updatedBookData = req.body;

		Book.findOne({_id: req.body._id}, function(err,book) {
			if (err) {
				console.log('Book could not be updated '+ err);
				return;
			}
			else{
			book.author = req.body.author;
			book.title = req.body.title;
			console.log('update successful')
			book.save();
			res.end();
		}
		})

	}
// 		updateBook: function(req,res,next) {
// 			return Book.findOne({_id: req.params.id}).exec(function(err,updatedBook) {
// 				updatedBook.title = req.body.title;
// 				updatedBook.author = req.body.author;
// 				return updatedBook.save(function(err) {
// 					if(!err){
// 						console.log('updated');
// 					}
// 					else {
// 						console.log(err);
// 					}
// 					return res.send(updatedBook);
// 				})
// 			})
// }
		 
	// updateBook: function(req,res) {
	// 	return Book.findById(req.params._id, function(err,book) {
	// 		book.author = req.body.author;
	// 		return book.save(function(err) {
	// 			if(!err){
	// 				console.log('updated');
	// 			}
	// 			else {
	// 				console.log(err);
	// 			}
	// 			return res.send(book);
	// 		})
	// 	})
	// }

};