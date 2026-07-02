const express = require('express');
const taskRoutes = require('./routes/tasks');

const app = express();
const PORT = process.env.PORT || 3000;

// Global Middleware
app.use(express.json());

// Routes
app.use('/tasks', taskRoutes);

// Catch-all 404 Route
app.use((req, res, next) => {
    res.status(404).json({ error: 'Resource route not found' });
});

// Global Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: 'Internal Server Error',
        message: err.message
    });
});

app.listen(PORT, () => {
    console.log(`Server is running smoothly on http://localhost:${PORT}`);
});
