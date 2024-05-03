const authService = require('../services/authService');

module.exports = {
  auth: async (req, res) => {
    let auth = await authService.auth(req);
    res.json(auth)
  }
}