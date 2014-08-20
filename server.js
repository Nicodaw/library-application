var express = require('express');
var http = require('http');

var env = process.env.NODE_ENV || 'developement';

var app = express();
var config = require('./server/config/config')[env];

require('./server/config/express')(app,config);

require('./server/config/mongoose')(config);

require('./server/config/passport')();

require('./server/config/routes')(app);


app.listen(config.port);
console.log("SERVER RUNNING ON PORT: "+ config.port);