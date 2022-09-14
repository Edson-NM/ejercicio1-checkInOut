const { app } =  require('../app');
const { db } = require('./utils/database.util');

const startServer = async () => {
try {
    db.authenticate()

    db.sync()

    // Set server to listen
    const PORT = 4000
    app.listen(PORT, () => {
        console.log(`Express app runnig on port ${PORT}`)
    })
} catch (error) {
    console.log(error)
}
}


startServer()