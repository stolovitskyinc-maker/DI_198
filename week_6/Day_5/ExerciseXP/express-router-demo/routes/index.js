const express = require('express');
const router = express.Router();

// Define the Homepage route
router.get('/', (req, res) => {
    res.send('Welcome to the Homepage!');
});

// Define the About Us route
router.get('/about', (req, res) => {
    res.send('Welcome to the About Us page!');
});

// Export the router module so app.js can use it
module.exports = router;
