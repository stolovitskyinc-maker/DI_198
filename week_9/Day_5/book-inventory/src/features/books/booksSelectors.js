import { createSelector } from '@reduxjs/toolkit';

// 3. Selector creation.
// Base selector: grabs the raw books array from the store.
export const selectBooks = (state) => state.books.books;

// A reusable factory so we don't repeat the same filter logic
// for every genre. createSelector memoizes on its input selectors,
// so selectBooks only re-runs the filter when `state.books.books`
// actually changes reference (e.g. after addBook/removeBook), not
// on every unrelated dispatch.
const makeGenreSelector = (genre) =>
  createSelector([selectBooks], (books) =>
    books.filter((book) => book.genre === genre)
  );

export const selectHorrorBooks = makeGenreSelector('Horror');
export const selectFantasyBooks = makeGenreSelector('Fantasy');
export const selectScienceFictionBooks = makeGenreSelector('Science Fiction');

// Bonus: derive the list of genres straight from the data instead of
// hardcoding it in the component, so the UI stays in sync with state.
export const selectGenres = createSelector([selectBooks], (books) => [
  'All',
  ...new Set(books.map((book) => book.genre)),
]);
