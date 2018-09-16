const { clearHash } = require('../services/cache');

module.exports = async (req, res, next) => {
  // A trick to allow route handler to make its work
  // and then perform stuff written here
  await next();

  clearHash(req.user.id);
};
