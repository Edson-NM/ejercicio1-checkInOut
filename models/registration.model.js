const { db, DataTypes } = require('../utils/database.util');

// Create Registration model
const Registration = db.define('registration', {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	},
	entranceTime: {
		type: DataTypes.DATE,
		allowNull: false,
	},
	exitTime: {
		type: DataTypes.DATE,
		allowNull: true,
	},
	status: {
		type: DataTypes.STRING,
		allowNull: false,
		defaultValue: 'working',
	},
});

module.exports = { Registration };
