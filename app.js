const express = require('express');

// Routers
const { registrationsRouter } = require('./routes/registration.routes');

// Init express app
const app = express();

// Enable express app to use JSON data
app.use(express.json());

// Define endpoints
app.use('/api/v1/registrations', registrationsRouter);

// Catch non-existing endpoint
app.all('*', (req, res) => {
	res.status(404).json({
		message: `${req.method} ${req.url} does not exist in our server`,
	});
});

module.exports = { app };
