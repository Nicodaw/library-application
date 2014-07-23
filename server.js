var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');



var env = process.env.NODE_ENV || 'developement';
var port = process.env.PORT || 5050;

var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/server/views');
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));

if (env == 'developement') {

	mongoose.connect('mongodb://localhost/library');
} 
else {
	mongoose.connect('mongodb://admin:rolcaotraci@ds053109.mongolab.com:53109/libraryinventory')
}


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
})


var messageSchema = mongoose.Schema({
	message: String
})

var Message = mongoose.model('Message', messageSchema);
var messageFromDatabase;

Message.remove({}).exec(function(err){
	if (err) {
		console.log('Old messages could not be cleared: '+ err);
		return;
	}
	Message.create({message: 'hi from mongoose'})
		.then(function(model) {
		messageFromDatabase = model.message;
	});

})



app.get('/partials/:partialName', function(req, res) {
	res.render('partials/' + req.params.partialName)
})

app.get('*', function(req, res) {
	res.render('index', {message: messageFromDatabase});
})

app.listen(port);
console.log("SERVER RUNNING ON PORT: "+ port);
console.log(env);