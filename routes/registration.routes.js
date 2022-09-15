const express = require('express');
const registrationsRouter = express.Router();

// Controllers
const {
	getAllRecords,
	createNewCheckIn,
	getCheckById,
	updateRecord,
	deleteRecord,
} = require('../controllers/registrations.controllers');

registrationsRouter.get('/', getAllRecords);
registrationsRouter.get('/:id', getCheckById);
registrationsRouter.post('/', createNewCheckIn);
registrationsRouter.patch('/:id', updateRecord);
registrationsRouter.delete('/:id', deleteRecord);

module.exports = { registrationsRouter };
