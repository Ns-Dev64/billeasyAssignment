const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);
