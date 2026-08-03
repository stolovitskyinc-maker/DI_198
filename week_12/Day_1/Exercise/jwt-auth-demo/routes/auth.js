const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { users, refreshTokens } = require('../db');

const router = express.Router();

function generateAccessToken(user) {
  return jwt.sign({ id: user.id, username: user.username }, process.env.JWT_ACCESS_SECRET, { expiresIn: '15m' });
}

function generateRefreshToken(user) {
  return jwt.sign({ id: user.id }, process.env.JWT_REFRESH_SECRET, { expiresIn: '7d' });
}

// --- REGISTER ---
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password || password.length < 8) {
    return res.status(400).json({ error: 'Username required, password must be 8+ chars' });
  }
  if (users.find(u => u.username === username)) {
    return res.status(409).json({ error: 'Username already taken' });
  }

  const passwordHash = await bcrypt.hash(password, 12);
  const user = { id: users.length + 1, username, passwordHash };
  users.push(user);

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);
  refreshTokens.add(refreshToken);

  setAuthCookies(res, accessToken, refreshToken);
  res.status(201).json({ message: 'Registered', user: { id: user.id, username: user.username } });
});

// --- LOGIN ---
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);

  if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);
  refreshTokens.add(refreshToken);

  setAuthCookies(res, accessToken, refreshToken);
  res.json({ message: 'Logged in', user: { id: user.id, username: user.username } });
});

// --- REFRESH ---
router.post('/refresh', (req, res) => {
  const token = req.cookies.refreshToken;
  if (!token || !refreshTokens.has(token)) {
    return res.status(401).json({ error: 'Invalid or missing refresh token' });
  }

  jwt.verify(token, process.env.JWT_REFRESH_SECRET, (err, payload) => {
    if (err) return res.status(403).json({ error: 'Refresh token expired or invalid' });

    const user = users.find(u => u.id === payload.id);
    if (!user) return res.status(404).json({ error: 'User not found' });

    const newAccessToken = generateAccessToken(user);
    res.cookie('accessToken', newAccessToken, cookieOptions(15 * 60 * 1000));
    res.json({ message: 'Access token refreshed' });
  });
});

// --- LOGOUT ---
router.post('/logout', (req, res) => {
  const token = req.cookies.refreshToken;
  if (token) refreshTokens.delete(token); // revoke it
  res.clearCookie('accessToken');
  res.clearCookie('refreshToken');
  res.json({ message: 'Logged out' });
});

function cookieOptions(maxAgeMs) {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // HTTPS only in prod
    sameSite: 'strict',
    maxAge: maxAgeMs,
  };
}

function setAuthCookies(res, accessToken, refreshToken) {
  res.cookie('accessToken', accessToken, cookieOptions(15 * 60 * 1000));
  res.cookie('refreshToken', refreshToken, cookieOptions(7 * 24 * 60 * 60 * 1000));
}

module.exports = router;