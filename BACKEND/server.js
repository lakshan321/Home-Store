// server.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require('./routes/authRoutes'); // Import the auth routes

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connection Success!"))
.catch((err) => console.error("MongoDB Connection Failed:", err));

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB Database Connected Successfully!");
});

// Use the routes
app.use('/api/auth', authRoutes);  // Set route for authentication

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
