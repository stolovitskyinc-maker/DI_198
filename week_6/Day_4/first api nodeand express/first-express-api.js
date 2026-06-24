// Step 2: Require the express module and create an Express app
const express = require('express');
const app = express();

// Step 4: Define a GET route at /api/greetings
app.get('/api/greetings', (req, res) => {
    // Send a JSON response with a simple greeting message
    res.json({ message: "Hello! Welcome to your first Express API." });
});

// Step 3: Set up the app to listen on port 3001
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running and listening on http://localhost:${PORT}`);
});
