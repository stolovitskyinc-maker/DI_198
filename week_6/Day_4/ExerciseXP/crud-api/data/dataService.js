const axios = require('axios');

// Function to fetch all posts from the external JSONPlaceholder API
const fetchPosts = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.data;
    } catch (error) {
        console.error('Error fetching data from JSONPlaceholder:', error.message);
        throw error;
    }
};

// Export the fetchPosts function
module.exports = {
    fetchPosts
};
