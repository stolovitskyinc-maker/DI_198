// Step 4: Import express and create the app
const express = require('express');
const app = express();

// Step 5: Import the posts data
const posts = require('./data');

// Step 7: GET all posts
app.get('/api/posts', (req, res) => {
    res.json(posts);
});

// Step 8: GET a specific post using a Route Parameter (:postID)
app.get('/api/posts/:postID', (req, res) => {
    // Route parameters come as strings; parse it to an integer to match our data ID type
    const postId = parseInt(req.params.postID);
    
    // Find the post matching the ID
    const foundPost = posts.find(post => post.id === postId);

    // If post doesn't exist, send 404
    if (!foundPost) {
        return res.status(404).json({ message: "Post not found" });
    }

    // If found, send the post data
    res.json(foundPost);
});

// Step 9: GET filtered posts using a Query String (?title=...)
app.get('/api/search', (req, res) => {
    const { title } = req.query;

    // If no title query parameter is provided, return all posts or an error
    if (!title) {
        return res.status(400).json({ message: "Please provide a title query parameter. Example: /api/search?title=express" });
    }

    const searchTerm = title.toLowerCase();

    // Filter posts whose titles contain the given text
    const filteredPosts = posts.filter(post => 
        post.title.toLowerCase().includes(searchTerm)
    );

    // If no matches are found, send a message
    if (filteredPosts.length === 0) {
        return res.json({ message: `No posts found matching the title: "${title}"` });
    }

    // Send the filtered array
    res.json(filteredPosts);
});

// Step 6: Listen on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Blog API is running at http://localhost:${PORT}`);
});
