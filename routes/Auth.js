const express = require('express');
const router = express.Router();
const { register, logIn, update, logOut, deleteUser } = require('../controllers/Auth');

router.post('/register', register);

module.exports = router;
