var path = require('path');
var rootPath = path.normalize(__dirname + '/../../')

module.exports = {

	developement: {
		rootPath: rootPath,
		db: 'mongodb://localhost/library',
		port: process.env.PORT || 5050
	},

	production: {
		rootPath: rootPath,
		db: 'mongodb://admin:rolcaotraci@ds053109.mongolab.com:53109/libraryinventory',
		port: process.env.PORT || 5050
	},
	
}