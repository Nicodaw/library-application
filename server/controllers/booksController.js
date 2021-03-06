var Book = require('mongoose').model('Book');
var http = require('http');



module.exports = {
	getAllBooks: function(req, res, next) {
		Book.find({}).lean().exec(function(err, collection) {
			if (err) {
				console.log('Books could not be loaded: '+ err);
			}
			res.send(collection);
		})
	},
	getBookById: function(req,res,next) {
		Book.findOne({_id: req.params.id}).lean().exec(function(err, book) {
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
			book.subTitle = req.body.subTitle;
			book.taken = req.body.taken;
			book.inventoryNum = req.body.inventoryNum;
			book.returnDate = req.body.returnDate;
			book.isFormated = req.body.isFormated;
			book.shelf = req.body.shelf;
			book.year = req.body.year;
			book.subAuthor = req.body.subAuthor;
			book.genre = req.body.genre;
			book.signature = req.body.signature;
			book.price = req.body.price;
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