const express = require('express');
const postsRoutes = require('./routes/postsRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Body parsing middleware
app.use(express.json());

// Routes mapping
app.use('/posts', postsRoutes);

// Error Handling: 404 For Invalid Routes
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

// Global Server Error Handler (Catch-all)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    message: 'Something went wrong on the server',
    error: process.env.NODE_ENV === 'development' ? err.message : {}
  });
});

// Start listening
app.listen(PORT, () => {
  console.log(`Server is running smoothly on port ${PORT}`);
});
