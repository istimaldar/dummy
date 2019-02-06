const process = require('process');
const os = require('os');
const express = require('express');
const app = express();
const applicationName = process.env.DUMMY_NAME || "Some random app";
const version = "3";
let requestsCounter = 0;

app.get('/', function (req, res) {
    if (requestsCounter >= 7) {
        res.status(500).send("I'm broken. Sorry.")
    } else {
        res.set('Content-Type', 'application/json');
        res.send({hostname: os.hostname(), application: applicationName, version: version});
    }
    requestsCounter++;
});

app.listen(8080, function () {
    console.log(`${applicationName} listening on port 8080!`);
});