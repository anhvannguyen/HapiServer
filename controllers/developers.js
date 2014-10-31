var Sequelize = require('sequelize');
var Boom = require('hapi/node_modules/boom')

// Change this to your database configuration
var sequelize = new Sequelize('database', 'username', 'password', {
	dialect: 'postgres',
	port: 5432
});

// sequelize.authenticate().complete(function(err) {
// 	if (!!err) {
// 		console.log('Unable to connect to the database:', err);
// 	} else {
// 		reply('Connection to database established.')
// 		console.log('Connection to database established.');
// 	}
// });

//  Get the developer model and sync with the database
var dev_model = require('../models/developer')(sequelize);
var Developer = dev_model.Developer;
Developer.sync().complete(function (err) {
	if (!!err) {
		console.log('An error occurrred while creating the table: ', err);
	} else {
		console.log('Table successfully created or exist');
	}
})


// Create and add a developer user to the database
module.exports.create = function(request, reply) {
	var newDeveloper = {
		email: request.payload.email,
		password: request.payload.password,
		firstname: request.payload.firstname,
		lastname: request.payload.lastname,
		company: request.payload.company
	}
	Developer.create(newDeveloper).complete(function () {
		reply(newDeveloper).code(200)
	});
}

// Find user base on the parameter id
module.exports.find = function(request, reply) {
	Developer.find({ where : { id : request.params.id } }).complete(function (err, developers) {
		if (!!err || !developers)
			reply(Boom.notFound('User ID does not exist'));
		reply(developers);
	})
}

// Get all the users in the developer table or all based on search query
module.exports.get = function(request, reply) {
	if (request.query) {
		Developer.findAll({ where : request.query }).complete(function (err, developers) {
			if (!!err || !developers)
				reply(Boom.notFound('Unable to find user'));
			reply(developers);
		})
	} else {
		Developer.findAll().complete(function (err, developers) {
			reply(developers);
		})
	}
}
