const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { registerUser, loginUser } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

// 📌 Register new user
router.post('/register', registerUser);

// 📌 Login user
router.post('/login', loginUser);

// 🔐 Get logged-in user profile (protected)
router.get('/profile', protect, (req, res) => {
  res.json({
    message: 'Access granted ✅',
    user: req.user,
  });
});

// ✅ Public test route
router.get('/test', (req, res) => {
  res.json({ message: '✅ API is working' });
});

// 🔧 TEMP: Reset password route (for fixing login issues)
router.post('/reset-password', async (req, res) => {
  const { email, newPassword } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const hashed = await bcrypt.hash(newPassword, 10);
    user.password = hashed;
    await user.save();

    res.json({ message: '✅ Password reset successful' });
  } catch (error) {
    console.error('Reset Error:', error);
    res.status(500).json({ message: 'Server error while resetting password' });
  }
});

module.exports = router;
