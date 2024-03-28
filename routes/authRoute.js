const express = require('express');
const router = express.Router();
const { register, logIn, update, logOut, deleteUser } = require('../controllers/authController');

const { authenticateUser } = require('../middlewares/authMiddleware');

router.post('/register', register);
router.post('/login', logIn);
router.put('/update', authenticateUser, update);
router.delete('/delete', authenticateUser, deleteUser);

module.exports = router;
