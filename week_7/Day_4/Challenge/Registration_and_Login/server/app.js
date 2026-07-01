const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware for parsing JSON requests
app.use(express.json());

// Bind modular API endpoints
app.use('/api', userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running smoothly on http://localhost:${PORT}`);
});
