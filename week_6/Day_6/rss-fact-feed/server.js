const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const Parser = require('rss-parser');

const app = express();
const parser = new Parser();
const FEED_URL = 'https://thefactfile.org/feed/';

// Middleware configuration
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// EJS View engine configuration pointing to public/pages
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public/pages'));

// Helper function to pull the full list of unique categories for the search dropdown
async function extractCategories() {
    try {
        const feed = await parser.parseURL(FEED_URL);
        const categories = new Set();
        feed.items.forEach(item => {
            if (item.categories) {
                item.categories.forEach(cat => categories.add(cat));
            }
        });
        return Array.from(categories).sort();
    } catch (error) {
        console.error("Error fetching categories:", error);
        return [];
    }
}

// ROUTE: / (GET) - Display all facts
app.get('/', async (req, res) => {
    try {
        const feed = await parser.parseURL(FEED_URL);
        res.render('index', { posts: feed.items });
    } catch (error) {
        res.status(500).send("Error fetching RSS feed data.");
    }
});

// ROUTE: /search (GET) - Render initial empty search page
app.get('/search', async (req, res) => {
    const categories = await extractCategories();
    res.render('search', { posts: undefined, categories: categories });
});

// ROUTE: /search/title (POST) - Filter facts matching search keyword
app.post('/search/title', async (req, res) => {
    try {
        const searchTitle = req.body.title.toLowerCase();
        const feed = await parser.parseURL(FEED_URL);
        const categories = await extractCategories();
        
        const filteredPosts = feed.items.filter(item => 
            item.title && item.title.toLowerCase().includes(searchTitle)
        );

        res.render('search', { posts: filteredPosts, categories: categories });
    } catch (error) {
        res.status(500).send("Error conducting title search.");
    }
});

// ROUTE: /search/category (POST) - Filter facts matching chosen category
app.post('/search/category', async (req, res) => {
    try {
        const selectedCategory = req.body.category;
        const feed = await parser.parseURL(FEED_URL);
        const categories = await extractCategories();

        const filteredPosts = feed.items.filter(item => 
            item.categories && item.categories.includes(selectedCategory)
        );

        res.render('search', { posts: filteredPosts, categories: categories });
    } catch (error) {
        res.status(500).send("Error conducting category search.");
    }
});

// Start application
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
