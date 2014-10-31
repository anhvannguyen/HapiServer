var Sequelize = require('sequelize');

// define model for the Developer users
// Sequelize will automatically define a id, date/time created and date/time updated
module.exports = function (sequelize) {
	var Developer = sequelize.define('Developer', {
		email: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isEmail: true
			}
		},
		password: {
			type: Sequelize.STRING,
			allowNull: false
		},
		firstname: {
			type: Sequelize.STRING
		},
		lastname: {
			type: Sequelize.STRING
		},
		company: {
			type: Sequelize.STRING
		}
	});
	return {
		Developer: Developer
	};

};