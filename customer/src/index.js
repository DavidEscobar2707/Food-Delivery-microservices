const express = require('express');
const { PORT } = require('./config/index');
const {databaseConnection} = require('./database');

const startServer = async() => {
    const app = express();

    await databaseConnection();

    app.use(express.json());

    app.use('/', (req, res, next) => {
        return res.status(200).json({"msg":"Hello from customer"})
    })

    app.listen(PORT, () => {
        console.log(`customer is listening on port = ${PORT}`)
    }).on('error', (err) => {
        console.log(err);
        process.exit();
    })
}
startServer()