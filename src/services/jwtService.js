const jwt = require('jsonwebtoken');
require('dotenv').config({ path: '.env' });

function generateAccessToken(credentials) {
  return jwt.sign(credentials, process.env.SECRET_KEY, { expiresIn: '1800s' });
}

module.exports = {
  createToken: async (req) => {
    const token = generateAccessToken
      ({
        username: req.body.username, password: req.body.password
      });
      
    return token;
  }
}