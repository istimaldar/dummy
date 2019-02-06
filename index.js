const process = require('process');
const os = require('os');
const express = require('express');

const applicationName = process.env.DUMMY_NAME || "Some random app";
const version = "4";

const app = express();

app.get('/', function (req, res) {
    res.set('Content-Type', 'application/json');
    res.send({hostname: os.hostname(), application: applicationName, version: version});
});

app.listen(8080, function () {
    console.log(`${applicationName} listening on port 8080!`);
});