const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();

dotenv.config();
app.use(express.json());

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/books', require('./routes/bookRoutes'));
app.use('/api', require('./routes/reviewRoutes'));

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"));

module.exports = app;
