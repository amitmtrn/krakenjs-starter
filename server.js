'use strict';

const app     = require('./index');
const winston = require('winston');

const port = process.env.PORT || 3000;

app.listen(port, function () {
  winston.info('Server listening on http://localhost:%d', this.address().port);
});
