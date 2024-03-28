const express = require('express');
const router = express.Router();
const { register, logIn, update, logOut, deleteUser } = require('../controllers/authController');

const { authenticateUser } = require('../middlewares/authMiddleware');

router.post('/register', register);
router.post('/login', logIn);
router.post('/update', authenticateUser, update);


module.exports = router;
