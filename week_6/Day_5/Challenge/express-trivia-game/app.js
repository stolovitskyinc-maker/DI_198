// app.js
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse incoming JSON request bodies
app.use(express.json());

// Simple in-memory session store to track game state
// Keys will be mock user IDs to keep scores separate
global.quizSessions = {};

// Import the trivia router module
const triviaRouter = require('./routes/quiz');

// Mount the router at the '/quiz' base path
app.use('/quiz', triviaRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`Trivia Game server running on http://localhost:${PORT}`);
});
