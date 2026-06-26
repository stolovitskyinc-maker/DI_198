const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse incoming JSON request bodies
app.use(express.json());

// Import the To-Do router module
const todosRouter = require('./routes/todos');

// Mount the router at the '/todos' base path
app.use('/todos', todosRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`To-Do API server running on http://localhost:${PORT}`);
});
