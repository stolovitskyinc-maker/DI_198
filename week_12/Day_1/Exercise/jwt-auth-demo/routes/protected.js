const express = require('express');
const authenticate = require('../middleware/authenticate');

const router = express.Router();

router.get('/profile', authenticate, (req, res) => {
  res.json({ message: `Welcome, ${req.user.username}`, user: req.user });
});

router.get('/verify-token', authenticate, (req, res) => {
  res.json({ valid: true, user: req.user });
});

module.exports = router;