const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse incoming JSON request bodies
app.use(express.json());

// Simulated Database Array
let posts = [
    { id: 1, title: "Getting Started with Node.js", content: "Node.js is a powerful runtime environment." },
    { id: 2, title: "Understanding Express Routes", content: "Routes define how your app handles client requests." }
];

// 1. GET /posts - Fetch all blog posts
app.get('/posts', (req, res, next) => {
    try {
        res.status(200).json(posts);
    } catch (error) {
        next(error); // Forward to internal server error handler
    }
});

// 2. GET /posts/:id - Fetch a specific post by ID
app.get('/posts/:id', (req, res, next) => {
    try {
        const postId = parseInt(req.params.id);
        const post = posts.find(p => p.id === postId);

        if (!post) {
            return res.status(404).json({ error: `Post with ID ${postId} not found.` });
        }
        res.status(200).json(post);
    } catch (error) {
        next(error);
    }
});

// 3. POST /posts - Create a new blog post
app.post('/posts', (req, res, next) => {
    try {
        const { title, content } = req.body;

        if (!title || !content) {
            return res.status(400).json({ error: "Title and content are required fields." });
        }

        const newPost = {
            id: posts.length > 0 ? Math.max(...posts.map(p => p.id)) + 1 : 1,
            title,
            content
        };

        posts.push(newPost);
        res.status(201).json(newPost);
    } catch (error) {
        next(error);
    }
});

// 4. PUT /posts/:id - Update an existing blog post
app.put('/posts/:id', (req, res, next) => {
    try {
        const postId = parseInt(req.params.id);
        const { title, content } = req.body;
        const postIndex = posts.findIndex(p => p.id === postId);

        if (postIndex === -1) {
            return res.status(404).json({ error: `Post with ID ${postId} not found.` });
        }

        if (!title || !content) {
            return res.status(400).json({ error: "Title and content are required fields for updates." });
        }

        posts[postIndex] = { id: postId, title, content };
        res.status(200).json(posts[postIndex]);
    } catch (error) {
        next(error);
    }
});

// 5. DELETE /posts/:id - Delete a blog post
app.delete('/posts/:id', (req, res, next) => {
    try {
        const postId = parseInt(req.params.id);
        const postIndex = posts.findIndex(p => p.id === postId);

        if (postIndex === -1) {
            return res.status(404).json({ error: `Post with ID ${postId} not found.` });
        }

        posts.splice(postIndex, 1);
        res.status(200).json({ message: `Post with ID ${postId} has been deleted successfully.` });
    } catch (error) {
        next(error);
    }
});

// 6. Handle Invalid Routes (404 Error)
app.use((req, res) => {
    res.status(404).json({ error: "Route not found. Please check your URL and HTTP method." });
});

// 7. Global Server Error Handler (500 Error)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Internal Server Error. Something went wrong on our end." });
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Blog platform server running at http://localhost:${PORT}`);
});
