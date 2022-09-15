const { Registration } = require('../models/registration.model');

const getAllRecords = async (req, res) => {
	try {
		const registration = await Registration.findAll();

		res.status(200).json({
			status: 'success',
			data: {
				registration,
			},
		});
	} catch (error) {
		console.log(error);
	}
};

const getCheckById = async (req, res) => {
	try {
		const { id } = req.params;

		const record = await Registration.findOne({ where: { id } });

		if (!record) {
			res.status(404).json({
				message: 'Record not found with given Id',
			});
		}

		res.status(200).json({
			status: 'success',
			data: {
				record,
			},
		});
	} catch (error) {
		console.log(error);
	}
};

const createNewCheckIn = async (req, res) => {
	try {
		const { entranceTime } = req.body;

		const newRecord = await Registration.create({ entranceTime });

		res.status(201).json({
			status: 'success',
			data: {
				newRecord,
			},
		});
	} catch (error) {
		console.log(error);
	}
};

const updateRecord = async (req, res) => {
	try {
		const { id } = req.params;
		const { exitTime } = req.body;

		const record = await Registration.findOne({ where: { id } });

		if (!record) {
			res.status(404).json({
				message: 'Record not found with given Id',
			});
		}

		const updateExitTime = await record.update({ exitTime, status: 'out' });

		res.status(200).json({
			status: 'success',
			data: {
				updateExitTime,
			},
		});
	} catch (error) {
		console.log(error);
	}
};

const deleteRecord = async (req, res) => {
	try {
		const { id } = req.params;
		// const { status } = req.body;

		const record = await Registration.findOne({ where: { id } });

		if (!record) {
			res.status(404).json({
				message: 'Record not found with given Id',
			});
		}

		await record.update({ status: 'cancelled' });

		res.status(200).json({
			message: 'The registration has been canceled successfully',
		});
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	getAllRecords,
	createNewCheckIn,
	getCheckById,
	updateRecord,
	deleteRecord,
};
