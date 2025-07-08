const { protect } = require('../middleware/authMiddleware'); // ✅ Fixed import
const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');

// Public routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Protected route
router.get('/profile', protect, (req, res) => {
  res.json({
    message: 'Access granted ✅',
    user: req.user,
  });
});

// Test route to confirm server is running
router.get('/test', (req, res) => {
  res.json({ message: '✅ API is working' });
});

module.exports = router;
