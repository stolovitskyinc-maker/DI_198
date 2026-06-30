const express = require('express');
const booksRoutes = require('./routes/booksRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Body parsing middleware
app.use(express.json());

// Main API Route Mapping
app.use('/api/books', booksRoutes);

// Fallback Route Error Handling
app.use((req, res) => {
  res.status(404).json({ message: 'API endpoint route not found' });
});

// Centralized Server Error Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'An internal server error occurred' });
});

// Server Initialization Loop
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
