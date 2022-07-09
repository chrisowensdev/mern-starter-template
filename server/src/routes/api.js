const express = require('express');

const sampleRouter = require('./sample/sample.router');

const api = express.Router();

api.use('/sample', sampleRouter);

module.exports = api;
