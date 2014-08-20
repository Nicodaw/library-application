var path = require('path');
var rootPath = path.normalize(__dirname + '/../../')

module.exports = {

	developement: {
		rootPath: rootPath,
		db: 'mongodb://localhost/library',
		port: 5050
	},

	production: {
		rootPath: rootPath,
		db: process.env.MONGOLAB_URI
	},
	
}