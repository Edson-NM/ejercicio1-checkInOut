const express =   require('express');

// Init express app
const app = express()


// Enable express app to use JSON data
app.use(express.json());


app.all('*',(req, res) => {
       
})



module.exports = { app }