var mongoose = require('mongoose');
var passport = require('passport');
var crypto = require('crypto');
var LocalPassport = require('passport-local');


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


	var userSchema = mongoose.Schema({
		username: String,
		firstName: String,
		lastName: String,
		salt: String,
		hashPass: String
	})

	userSchema.method({
		authenticate: function(password) {
			if (generateHashedPassword(this.salt, password) === this.hashPass) {
				return true;
			}
			else {
				return false;
			}
		}
	})


	var User = mongoose.model('User', userSchema);

	User.find({}).exec(function (err, collection) {
		if (err) {
			console.log('Cannot find users: '+ err);
			return
		}

				if (collection.length === 0) {
			var salt;
			var hashedPwd;

			salt = generateSalt();
			hashedPwd = generateHashedPassword(salt, "angel");
			User.create({username: 'angel.simeonov', firstName: 'Angel', lastName: 'Simeonov', salt: salt, hashPass: hashedPwd})

			salt = generateSalt();
			hashedPwd = generateHashedPassword(salt, "pesho");
			User.create({username: 'nicodaw', firstName: 'Pesho', lastName: 'Tomov', salt: salt, hashPass: hashedPwd})
	
			salt = generateSalt();
			hashedPwd = generateHashedPassword(salt, "mariq");
			User.create({username: 'Strahil', firstName: 'Mariq', lastName: 'Georgieva', salt: salt, hashPass: hashedPwd})
		
			console.log('Users added to database');
		}




	})

	passport.use(new LocalPassport(function (username, password, done){

		User.findOne({username: username}).exec(function(err,user) {
			if (err) {
				console.log("Error loading user: "+err);
				return
			}
			if (user) {
				return done(null, user);
			}
			else {
				return done(null, false);
			}
		})
	}));

	passport.serializeUser(function(user, done) {
		if (user) {
			return done(null,user._id);
		}
	})

	passport.deserializeUser(function(id,done) {
		User.findOne({_id: id}).exec(function(err,user){
			if (err) {
				console.log("Error loading user: "+err);
				return
			}
			if (user) {
				return done(null, user);
			}
			else {
				return done(null, false);
			}
			})
	})

};

function generateSalt() {
	return crypto.randomBytes(128).toString("base64");
}

function generateHashedPassword(salt, pwd) {
	var hmac = crypto.createHmac('sha1', salt);
	return hmac.update(pwd).digest('hex');

};