const express = require('express');
const dataService = require('./data/dataService'); // Import the data module

const app = express();
const PORT = 5000;

// Middleware to parse incoming JSON data (optional but good practice)
app.use(express.json());

// Endpoint to fetch posts using our custom data module
app.get('/api/posts', async (req, res) => {
    try {
        // Retrieve data from JSONPlaceholder using our service module
        const posts = await dataService.fetchPosts();
        
        // Respond with the fetched data
        res.status(200).json(posts);
        
        // Print success message in the console
        console.log('Data has been successfully retrieved and sent as a response.');
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve posts from external service.' });
    }
});

// Set up the app to listen on port 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
