const registerService = require('../services/registerService')

module.exports = {
  register: async (req, res) => {
    let register = await registerService.register(req);
    console.log(register)
    res.json(register);
  }
}