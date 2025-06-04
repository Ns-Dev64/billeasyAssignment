const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const {
  addBook, getBooks, getBookById, searchBooks
} = require('../controllers/bookController');

router.post('/', auth, addBook);
router.get('/', getBooks);
router.get('/search', searchBooks);
router.get('/:id', getBookById);

module.exports = router;
