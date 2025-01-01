const { getPrivateKey } = require('../middleware/auth');
const UserModel = require('../models/userModel');
const jwt = require('jsonwebtoken');


const AuthController = {
  authUser: (req, res) => { 
    let user = {
      email: req.body.email,
      senha: req.body.senha
    }
    UserModel.getByEmailAndSenha(user, (err, row) => {
        if(err) return res.status(500).send(err.message)
        
        if(row.length > 0) {
            const payload = {user: JSON.stringify({
                nome: row[0].nome,
                email: row[0].email
            })};
            const options = { expiresIn: '1m' };
            const token = jwt.sign(payload, getPrivateKey(), options);  // send the JWT to the client
            res.status(200).json({token:token});
        } else {
            res.send('access denied');
        }
    });
  },

  trataTransectionDB:(err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({data: row});
  },

  authRegister: (req, res) => {
    UserModel.createUsers(req.body,(err,row) => {
      this.trataTransectionDB(err,row)
    });
  },
};

module.exports = AuthController;
