const express = require('express');

const { 
  uploadBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook
}  = require('../controllers/bookController.js');

const router = express.Router();

// Create a Book
router.post('/', uploadBook);

// Get all Books
router.get('/', getAllBooks);

// Get a Single Book by ID
router.get('/:id', getSingleBook);

// Update a Book by ID
router.put('/:id', updateBook);

// Delete a Book by ID
router.delete('/:id', deleteBook);

module.exports = router;