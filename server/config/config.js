var path = require('path');
var http = require('http');
var rootPath = path.normalize(__dirname + '/../../')

module.exports = {

	developement: {
		rootPath: rootPath,
		db: 'mongodb://localhost/library',
		port: process.env.PORT || 5050
	},

	production: {
		rootPath: rootPath,
		db: 'mongodb://heroku_app27722429:tep6vefpquqo2ce9ur3usc3p0n@ds063869.mongolab.com:63869/heroku_app27722429',
		port: process.env.PORT || 5050
	},
	
}