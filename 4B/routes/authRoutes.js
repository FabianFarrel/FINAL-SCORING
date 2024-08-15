const express = require('express');
const jwt = require('jsonwebtoken');
const { registerUser, findUserByUsername } = require('../models/userModel');
const bcrypt = require('bcrypt');

const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  const { email, username, password } = req.body;
  try {
    const user = await registerUser(email, username, password);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await findUserByUsername(username);
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ userId: user.id }, 'your_jwt_secret');
      res.json({ token });
    } else {
      res.status(400).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
