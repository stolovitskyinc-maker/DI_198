import { createSlice } from '@reduxjs/toolkit';

// 2. Initial state: a hardcoded array of books.
// Each book has an id, title, author, and genre.
const initialState = {
  books: [
    { id: 1, title: 'The Shining', author: 'Stephen King', genre: 'Horror' },
    { id: 2, title: 'Dracula', author: 'Bram Stoker', genre: 'Horror' },
    { id: 3, title: "The Haunting of Hill House", author: 'Shirley Jackson', genre: 'Horror' },
    { id: 4, title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
    { id: 5, title: 'A Game of Thrones', author: 'George R. R. Martin', genre: 'Fantasy' },
    { id: 6, title: 'The Name of the Wind', author: 'Patrick Rothfuss', genre: 'Fantasy' },
    { id: 7, title: 'Dune', author: 'Frank Herbert', genre: 'Science Fiction' },
    { id: 8, title: "Ender's Game", author: 'Orson Scott Card', genre: 'Science Fiction' },
    { id: 9, title: 'Foundation', author: 'Isaac Asimov', genre: 'Science Fiction' },
    { id: 10, title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Romance' },
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    // Included so the exercise is easy to extend later
    // (e.g. addBook, removeBook) without changing the shape of the state.
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
