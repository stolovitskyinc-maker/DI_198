const express = require('express');
const app = express();
const PORT = 5000;

// Middleware to parse incoming JSON request bodies
app.use(express.json());

// Initial data array containing sample book objects
let books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", publishedYear: 1925 },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", publishedYear: 1960 },
    { id: 3, title: "1984", author: "George Orwell", publishedYear: 1949 }
];

// 1. Read all route: GET /api/books
app.get('/api/books', (req, res) => {
    res.status(200).json(books);
});

// 2. Read single route: GET /api/books/:bookId
app.get('/api/books/:bookId', (req, res) => {
    const bookId = parseInt(req.params.bookId);
    const book = books.find(b => b.id === bookId);

    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }
    
    res.status(200).json(book);
});

// 3. Create route: POST /api/books
app.post('/api/books', (req, res) => {
    const { title, author, publishedYear } = req.body;

    // Optional basic validation to make sure fields are provided
    if (!title || !author || !publishedYear) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    // Generate an incremented ID safely
    const nextId = books.length > 0 ? Math.max(...books.map(b => b.id)) + 1 : 1;

    const newBook = {
        id: nextId,
        title,
        author,
        publishedYear: parseInt(publishedYear)
    };

    books.push(newBook);
    res.status(201).json(newBook);
});

// Start the server and listen on port 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
