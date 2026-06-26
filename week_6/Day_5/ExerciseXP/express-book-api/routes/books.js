// routes/books.js
const express = require('express');
const router = express.Router();

// Sample in-memory database for storing books
let books = [
    { id: 1, title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }
];

// 1. Get all books
router.get('/', (req, res) => {
    res.json(books);
});

// 2. Add a new book
router.post('/', (req, res) => {
    const { title, author, year } = req.body;
    
    if (!title || !author) {
        return res.status(400).json({ error: "Title and author are required fields" });
    }

    const newBook = {
        id: books.length > 0 ? books[books.length - 1].id + 1 : 1,
        title,
        author,
        year: year || "Unknown"
    };

    books.push(newBook);
    res.status(201).json(newBook);
});

// 3. Update a book by ID
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { title, author, year } = req.body;
    
    const book = books.find(b => b.id === id);

    if (!book) {
        return res.status(404).json({ error: "Book not found" });
    }

    if (title !== undefined) book.title = title;
    if (author !== undefined) book.author = author;
    if (year !== undefined) book.year = year;

    res.json(book);
});

// 4. Delete a book by ID
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const bookIndex = books.findIndex(b => b.id === id);

    if (bookIndex === -1) {
        return res.status(404).json({ error: "Book not found" });
    }

    const deletedBook = books.splice(bookIndex, 1);
    res.json({ message: "Book deleted successfully", book: deletedBook[0] });
});

// Export the router module so app.js can use it
module.exports = router;
