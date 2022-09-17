const express = require('express');
const { PORT } = require('./config/index');
const {databaseConnection} = require('./database');
const expressApp = require('./express-app');


const startServer = async() => {
    const app = express();

    await databaseConnection();

    await expressApp(app)

    app.listen(PORT, () => {
        console.log(`customer is listening on port = ${PORT}`)
    }).on('error', (err) => {
        console.log(err);
        process.exit();
    })
}
startServer();