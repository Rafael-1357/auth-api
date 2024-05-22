const db = require('../db');

async function registerUser(username, password, email) {
  return new Promise((accept, reject) => {
    db.query('SELECT username FROM users WHERE username = ?', [username], (err, results) => {
      if (err) { return reject(err); }
      if (results.length > 0) {
        return accept(err)
      } else {
          if (err) {
            return reject(err);
          }
          db.query('INSERT INTO users (username, password, email, role) VALUES (?, ?, ?, ?)', [username, password, email, 'user'], (err, results) => {
            if (err) {
              return reject(err);
            }
            accept('User registered successfully');
          });
      }
    });
  })
}

module.exports = {
  register: async (req) => {
    let data = { err: [], result: [] }
    const register = await registerUser(req.body.username, req.body.password, req.body.email)
    return data
  }
}