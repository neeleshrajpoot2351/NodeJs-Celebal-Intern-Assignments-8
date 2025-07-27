const express = require('express');
const router = express.Router();
const { login, protected } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');


router.post('/login', login);


router.get('/protected', protect, protected);

module.exports = router;
