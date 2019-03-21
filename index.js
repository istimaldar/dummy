const process = require('process');
const express = require('express');

const applicationName = process.env.DUMMY_NAME || "Some random app";

const app = express();

app.get('/', function (req, res) {
    res.status(500).send("I'm broken. Sorry.")
});

app.listen(8080, function () {
    console.log(`${applicationName} listening on port 8080!`);
});