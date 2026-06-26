// app.js
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse incoming JSON request bodies
app.use(express.json());

// Import the books router module
const booksRouter = require('./routes/books');

// Mount the router at the '/books' base path (Step 5)
app.use('/books', booksRouter);

// Start the server (Step 6)
app.listen(PORT, () => {
    console.log(`Book API server running on http://localhost:${PORT}`);
});
