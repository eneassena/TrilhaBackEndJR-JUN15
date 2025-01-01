const express = require('express');
const AuthController = require('../controllers/authController');
const router = express.Router();

router.post('/login', AuthController.authUser);
router.post('/register', AuthController.authRegister);

module.exports = router;
