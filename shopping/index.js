const express = require('express');

const app = express();

app.use(express.json());

app.use('/', (req, res, next) => {
    return res.status(200).json({"msg":"Hello from costumer"})
})

app.listen(8081, () => {
    console.log("costumer is listening")
});