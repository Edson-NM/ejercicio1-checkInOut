const express =   require('express');

// Routers
const { registrationsRouter } = require('./routes/registration.routes');

// Init express app
const app = express()


// Enable express app to use JSON data
app.use(express.json());


// Define endpoints
app.use('api/v1/registrations', registrationsRouter)


app.all('*',(req, res) => {

    res.status(404).json({
        message: `${req.method} ${req.url} doesn´t exist in our server`
    })

})


module.exports = { app }