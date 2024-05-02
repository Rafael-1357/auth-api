const jwt = require('jsonwebtoken');
require('dotenv').config({ path: '.env' });

function generateAccessToken(username) {
  return jwt.sign(username, process.env.SECRET_KEY, { expiresIn: '1800s' });
}

module.exports = {
  createToken: async () => {
    const token = generateAccessToken({ username: req.body.username });
    return token;
  }
}