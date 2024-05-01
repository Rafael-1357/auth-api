const db = require('../db');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: '.env' });

async function verifyUser(username, password) {
  return new Promise((accept, reject) => {
    db.query(() => {
      if (err) { reject(err); return; }
      accept(results)
    })
  });
};

function generateAccessToken(username) {
  return jwt.sign(username, process.env.SECRET_KEY, { expiresIn: '1800s' });
}

module.exports = {
  auth: async (req, res) => {
    await verifyUser({username: req.body.username, password: req.body.password})
    const token = generateAccessToken({ username: req.body.username });
    return token;
  }
}