const db = require('../db');
const jwtService = require('./jwtService');

async function verifyUser(username) {
  return new Promise((accept, reject) => {
    db.query('SELECT username, password, role FROM users WHERE username = ?', username, (err, results) => {
      if (err) { reject(err); return; }
      accept(results)
    })
  });
};

module.exports = {
  auth: async (req) => {
    const user = await verifyUser(req.body.username, req.body.password)
    const token = jwtService.createToken()
    return user;
  }
}