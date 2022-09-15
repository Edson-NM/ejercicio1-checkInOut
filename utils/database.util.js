const { Sequelize, DataTypes } = require('sequelize');

// const db = new Sequelize({
// 	dialect: 'postgres',
// 	host: 'localhost',
// 	username: 'postgres',
// 	password: 'pass1234',
// 	database: 'checkInOut',
// 	port: 5432,
// 	logging: false,
// });

// Stablish db connection
const db = new Sequelize({
	dialect: 'postgres',
	host: 'ec2-52-200-215-149.compute-1.amazonaws.com',
	username: 'dujkeyknhnznqb',
	password: '96cd139b510cf5a78c69bbcb4ecb4b2d7570b8d4960809a77cefc6353b2568c3',
	port: 5432,
	database: 'd5k2uhltqq1tvk',
	dialectOptions: {
		ssl: {
			require: true,
			rejectUnauthorized: false,
		},
	},
	logging: false,
});

module.exports = { db, DataTypes };
