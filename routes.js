var Developers = require('./controllers/developers');
var Joi = require('hapi/node_modules/joi');

var routes = [];

// Create the routes for the api
// Test route for route
routes.push({
	method: 'GET',
	path: '/',
	config : {
		handler: function (request, reply) {
			reply('Hello World!');
		}
		
	}
});

// Routes for the users

// List all the users in the developers table or by search query
routes.push({
	method: 'GET',
	path: '/developers',
	config : {
		handler: Developers.list
		}		
});

// List developer by parameter id
// # 'hostname/developers/id'
routes.push({
	method: 'GET',
	path: '/developers/{id}',
	config : {
		handler: Developers.show,
		validate: {
			params: {
				id: Joi.number().integer().min(1)
			}
		}
	}		
});

// Add user to the Developers table
routes.push({
	method: 'POST',
	path: '/developers',
	config : {
		handler: Developers.create
	}	
});

module.exports = routes;