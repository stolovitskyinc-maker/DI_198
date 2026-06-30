const Book = require('../models/bookModel');

exports.getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.getAll();
    res.status(200).json(books);
  } catch (error) {
    next(error);
  }
};

exports.getBookById = async (req, res, next) => {
  try {
    const book = await Book.getById(req.params.bookId);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json(book);
  } catch (error) {
    next(error);
  }
};

exports.createBook = async (req, res, next) => {
  try {
    const { title, author, publishedYear } = req.body;
    
    if (!title || !author || !publishedYear) {
      return res.status(400).json({ message: 'Title, author, and publishedYear are required fields' });
    }

    const newBook = await Book.create(title, author, publishedYear);
    res.status(201).json(newBook);
  } catch (error) {
    next(error);
  }
};
