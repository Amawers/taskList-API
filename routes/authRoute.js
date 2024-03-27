const express = require('express');
const router = express.Router();
const { register, logIn, update, logOut, deleteUser } = require('../controllers/authController');

router.post('/register', register);
router.post('/update', update);


module.exports = router;
