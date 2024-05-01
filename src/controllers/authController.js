const authService = require('../services/authService');

module.exports = {
  auth: async (req, res) => {
    let data = {err: [], result: []}
    let auth = await authService.auth(req, res);
    data.result.push(auth)

    res.json(data)
    }
}