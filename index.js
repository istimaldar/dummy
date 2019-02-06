const process = require('process');
const os = require('os');
const express = require('express');
const app = express();
const applicationName = process.env.DUMMY_NAME || "Some random app";
const version = "2";

app.get('/', function (req, res) {
    res.set('Content-Type', 'application/json');
    res.send({hostname: os.hostname(), application: applicationName, version: version});
});

app.listen(8080, function () {
    console.log(`${applicationName} listening on port 8080!`);
});