const express = require('express');
const router = express.Router();

const authController = require('./controllers/authController');

router.get('/auth', authController.auth);

module.exports = router;