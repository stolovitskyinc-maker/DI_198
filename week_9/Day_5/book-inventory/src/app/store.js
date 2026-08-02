import { configureStore } from '@reduxjs/toolkit';
import booksReducer from '../features/books/booksSlice';

// 1. Store setup.
// configureStore wires up the Redux DevTools extension and the
// default middleware (including redux-thunk) automatically.
export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});
