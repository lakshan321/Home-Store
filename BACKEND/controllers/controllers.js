// controllers/Controller.js
const User = require('../models/User');  // Assuming you have your User model in models/User.js

// Signup controller
exports.signup = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if user already exists
    const userExists = await User.findOne({ username });
    if (userExists) return res.status(400).json({ message: 'User already exists' });

    // Create a new user
    const newUser = new User({ username, password });
    await newUser.save();

    // Send success response
    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error creating user', error: err.message });
  }
};
