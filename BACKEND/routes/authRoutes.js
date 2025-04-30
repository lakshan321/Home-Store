// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { signup } = require('../controllers/Controller');  // Import the signup controller

// POST route for user signup
router.post('/signup', signup);

module.exports = router;
