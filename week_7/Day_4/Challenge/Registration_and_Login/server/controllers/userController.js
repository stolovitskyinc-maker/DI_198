const bcrypt = require('bcrypt');
const UserModel = require('../models/userModel');
const SALT_ROUNDS = 10;

// Registers a new user with hashed password and transactional safety
exports.register = async (req, res) => {
  const { username, password, email, first_name, last_name } = req.body;
  if (!username || !password || !email) return res.status(400).json({ error: 'Missing required fields' });

  try {
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    const newUser = await UserModel.registerUserTransaction({ username, email, first_name, last_name, hashedPassword });
    res.status(201).json({ message: 'User registered!', user: newUser });
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
};

// Authenticates user by comparing hash
exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await UserModel.findByUsername(username);
    const storedHash = await UserModel.getPasswordByUsername(username);
    if (!user || !storedHash || !(await bcrypt.compare(password, storedHash.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    res.status(200).json({ message: 'Login successful!', user: { id: user.id, username: user.username } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Fetches all users
exports.getAllUsers = async (req, res) => {
  try { res.status(200).json(await UserModel.findAll()); }
  catch (error) { res.status(500).json({ error: error.message }); }
};

// Fetches specific user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    user ? res.status(200).json(user) : res.status(404).json({ error: 'User not found' });
  } catch (error) { res.status(500).json({ error: error.message }); }
};

// Updates user details
exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await UserModel.updateById(req.params.id, req.body);
    updatedUser ? res.status(200).json({ message: 'User updated', user: updatedUser }) : res.status(404).json({ error: 'User not found' });
  } catch (error) { res.status(500).json({ error: error.message }); }
};
