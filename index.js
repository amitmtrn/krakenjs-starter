'use strict';

const express = require('express');
const kraken  = require('kraken-js');
const winston = require('winston');

const app     = express();
const options = require('./lib/setup');

app.use(kraken(options));

app.on('start', () => {
  winston.info('Application ready to serve requests.');
  winston.info('Environment: %s', app.kraken.get('env:env'));
});

module.exports = app;
