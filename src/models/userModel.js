const db = require('../database/db');

const UserModel = {
  getByEmailAndSenha: (users, callback) => {
    const {email,senha} = users;
    db.all('SELECT * FROM users where email=? and senha=?', [email,senha], callback);
  },
  createUsers: (users, callback) => {
    const {nome,email,senha} = users;
    db.run('INSERT INTO users (nome,email,senha) VALUES (?,?,?)', [
      nome,email,senha
    ], callback);
  }
};

module.exports = UserModel;
