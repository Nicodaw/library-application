var path = require('path');
var http = require('http');
var mongoose = require ("mongoose");
var rootPath = path.normalize(__dirname + '/../../')

module.exports = {

	developement: {
		rootPath: rootPath,
		db: 'mongodb://localhost/library',
		port: process.env.PORT || 5050
	},

	production: {
		rootPath: rootPath,
		db: process.env.MONGOLAB_URI,
		port: process.env.PORT || 5050
	},
	
}