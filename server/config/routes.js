var auth = require('./auth')
var http = require('http');
var controllers = require('../controllers')


module.exports = function (app){


	app.get('/api/users', auth.isInRole('admin'), controllers.users.getAllUsers);
	app.post('/api/users', auth.isInRole('admin'), controllers.users.createUser);
	app.put('/api/users', auth.isAuthenticated, controllers.users.updateUser);

	app.get('/api/books', controllers.books.getAllBooks);
	app.post('/api/books', auth.isAuthenticated, controllers.books.createBook);
	app.get('/api/books/:id', controllers.books.getBookById);
	app.put('/api/books', auth.isAuthenticated, controllers.books.updateBook);

	app.get('/partials/:partialArea/:partialName', function(req, res) {
	res.render('../../public/app/' +req.params.partialArea + "/" + req.params.partialName)
})


	app.post('/login', auth.login);
	app.post('/logout', auth.logout);

	app.get('/api/*', function(req,res) {
		res.status(404);
		res.end
	})


	app.get('*', function(req, res) {
		res.render('index', {currentUser: req.user});
	})

}