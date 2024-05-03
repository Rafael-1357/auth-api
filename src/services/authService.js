const db = require('../db');
const jwtService = require('./jwtService');

async function verifyUser(username) {
  return new Promise((accept, reject) => {
    db.query('SELECT username, password, role FROM users WHERE username = ?', username, (err, results) => {
      if (err) { reject(err); return; }
      accept(JSON.parse(JSON.stringify(results)))
    })
  });
};

module.exports = {
  auth: async (req) => {
    let data = {err: '', result: ''}
    const consultUser = await verifyUser(req.body.username, req.body.password)
    consultUser[0]
      ? consultUser[0].username === req.body.username && consultUser[0].password === req.body.password
        ? data.result = ( await jwtService.createToken(req))
        : data.err = ('Usuário ou senha incorretos')
      : data.err = ('Usuário não encontrado')

    return data;
  }
}