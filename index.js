var Hapi = require('hapi');
var routes = require('./routes');

// Create the server
var server = new Hapi.Server('localhost', 3000);

// Add the routes
server.route(routes);

// Start the server
server.start(function () {
	console.log('Server running at:', server.info.uri);
});