'use strict'

const HTTP = require('http');

const HOSTNAME = '127.0.0.1';
const PORT = 3333;

const express = require('express');
const app = express();

const SERVER = HTTP.createServer(app);

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/cats', function (req, res) {
    res.send(`Meow!`);
});

app.get('/dogs', function (req, res) {
    res.send(`Woof!`);
});

app.get('/cats_and_dogs', function (req, res) {
    res.send(`Dogs and cats living together...mass hysteria!!`);
});




SERVER.listen(PORT, HOSTNAME, () => {
    console.log(`Server is running at http://${HOSTNAME}:${PORT}`);
});