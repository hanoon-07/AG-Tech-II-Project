import express from 'express';
import { 
  uploadBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook
} from '../controllers/bookController.js';

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

export default router;
