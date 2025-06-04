const Book = require('../models/bookModel');
const Review = require('../models/reviewModel');

exports.addBook = async (req, res) => {
  const book = await Book.create(req.body);
  res.status(201).json(book);
};

exports.getBooks = async (req, res) => {
  const { author, genre, page = 1, limit = 10 } = req.query;
  const filter = {};
  if (author) filter.author = new RegExp(author, 'i');
  if (genre) filter.genre = new RegExp(genre, 'i');

  const books = await Book.find(filter)
    .skip((page - 1) * limit)
    .limit(parseInt(limit));
  res.json(books);
};

exports.getBookById = async (req, res) => {
  const book = await Book.findById(req.params.id);
  const reviews = await Review.find({ book: book._id }).populate('user', 'username');
  const avgRating = reviews.reduce((acc, r) => acc + r.rating, 0) / (reviews.length || 1);
  res.json({ ...book.toObject(), avgRating, reviews });
};

exports.searchBooks = async (req, res) => {
  const { q } = req.query;
  const books = await Book.find({
    $or: [
      { title: new RegExp(q, 'i') },
      { author: new RegExp(q, 'i') }
    ]
  });
  res.json(books);
};
