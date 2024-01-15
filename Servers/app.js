const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000; // Choose your preferred port number

// MongoDB Atlas connection URI
const mongoURI = 'mongodb+srv://DLEC_database:DLEC_user01@cluster0.bcgtl1a.mongodb.net/';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB Atlas');
});

mongoose.connection.on('error', (err) => {
  console.log('MongoDB connection error:', err);
});

// Define your routes and middleware below

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
