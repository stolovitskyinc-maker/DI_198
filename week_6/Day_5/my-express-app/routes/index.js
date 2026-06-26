// routes/index.js
const express = require('express');
const router = express.Router();

// Define the root route
router.get('/', (req, res) => {
  res.send('Welcome to the Homepage!');
});

// Define the about route
router.get('/about', (req, res) => {
  res.send('Welcome to the About Us page!');
});

// Export the router so it can be used in app.js
module.exports = router;
