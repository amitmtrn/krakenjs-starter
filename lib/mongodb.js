'use strict';

const mongoose = require('mongoose');
const winston  = require('winston');

module.exports = {

  init: (config) => {
    const dbUrl = `mongodb://${config.username}:${config.password}@${config.host}:${config.port}/${config.database}`;

    mongoose.connect(dbUrl, (err) => {
      if (err) {
        winston.log('error', 'db connection error:', err);
      }

      winston.info('db connection open');
    });
  }

};
