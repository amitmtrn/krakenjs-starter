'use strict';

module.exports = (router) => {

  /**
   * Get current logged in user data
   */
  router.get('/', (req, res) => {
    res.send({ok: true});
  });

};
