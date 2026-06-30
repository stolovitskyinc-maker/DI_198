const pool = require('../config/db');

const Book = {
  getAll: async () => {
    const result = await pool.query('SELECT * FROM books ORDER BY id ASC');
    return result.rows;
  },

  getById: async (id) => {
    const result = await pool.query('SELECT * FROM books WHERE id = $1', [id]);
    return result.rows[0]; // Return the single object directly
  },

  create: async (title, author, publishedYear) => {
    const result = await pool.query(
      'INSERT INTO books (title, author, published_year) VALUES ($1, $2, $3) RETURNING id, title, author, published_year AS "publishedYear"',
      [title, author, publishedYear]
    );
    return result.rows[0];
  }
};

module.exports = Book;
