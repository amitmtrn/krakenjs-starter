'use strict';

const mongodb = require('../lib/mongodb');

module.exports = {
  onconfig: (config, next) => {
    const mongodbConfig = config.get('mongodb');

    db.init(mongodbConfig);

    next(null, config);
  }

}
