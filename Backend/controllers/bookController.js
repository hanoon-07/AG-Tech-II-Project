import bookModel from '../models/bookModel.js';

// Create a Book
export const uploadBook = async (req, res) => {
  try {

    const { bookName, authorName, relatedCourseName, bookUpload, bookThumbnail} = req.body;
    console.log("Request sent to the past paper: ",req.body);

    if (!bookName || !authorName || !relatedCourseName || !bookThumbnail || !bookUpload || bookUpload.length === 0) {
      return res.status(400).json({
        status: 'fail',
        message: 'Please provide all required fields!',
      });
    }
    const newBook = await bookModel.create({
        bookName,
        authorName,
        relatedCourseName,
        bookThumbnail,
        bookUpload,
      });
  
      res.status(201).json({
        status: 'success',
        message: 'Book Uploaded Successfully!',
        data: newBook,
      });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get All Books
export const getAllBooks = async (req, res) => {
  try {
    const books = await bookModel.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Single Book by ID
export const getSingleBook = async (req, res) => {
  try {
    const book = await bookModel.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Book by ID
export const updateBook = async (req, res) => {
  try {
    const updatedBook = await bookModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete Book by ID
export const deleteBook = async (req, res) => {
  try {
    const deletedBook = await bookModel.findByIdAndDelete(req.params.id);
    if (!deletedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
