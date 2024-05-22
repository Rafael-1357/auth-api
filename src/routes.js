const express = require('express');
const router = express.Router();

const authController = require('./controllers/authController');
const registerController = require('./controllers/registerController');

router.post('/auth', authController.auth);
router.post('/register', registerController.register)

module.exports = router;