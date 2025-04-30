// backend/models/models.js

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Create a schema for the user
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, // Ensure username is unique
  },
  password: {
    type: String,
    required: true,
  },
});

// Hash password before saving the user to the database
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10); // Hash password with salt rounds
  next();
});

// Method to compare passwords during login
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Create and export the model
const User = mongoose.model('User', userSchema);
module.exports = User;
