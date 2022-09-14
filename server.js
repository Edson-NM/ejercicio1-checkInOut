const { app } =  require('../app');
const { db } = require('./utils/database.util');

db.authenticate().then().catch(err => console.log(err))
db.sync().then().catch(err => console.log(err))

const PORT = 4000
    app.listen(PORT, () => {
        console.log(`Express app runnig on port ${PORT}`)
    })

// const startServer = async () => {
// try {
//     await db.authenticate()

//     await db.sync()

//     // Set server to listen
//     const PORT = 4000
//     app.listen(PORT, () => {
//         console.log(`Express app runnig on port ${PORT}`)
//     })
// } catch (error) {
//     console.log(error)
// }
// }


// startServer()