import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectBooks,
  selectHorrorBooks,
  selectFantasyBooks,
  selectScienceFictionBooks,
  selectGenres,
} from './booksSelectors';

// Maps a genre name to the selector that should be used for it.
// 'All' falls back to selectBooks (everything, unfiltered).
const genreToSelector = {
  All: selectBooks,
  Horror: selectHorrorBooks,
  Fantasy: selectFantasyBooks,
  'Science Fiction': selectScienceFictionBooks,
};

function BookList() {
  const [activeGenre, setActiveGenre] = useState('All');
  const genres = useSelector(selectGenres);

  // Pick whichever memoized selector matches the active genre.
  // If a genre doesn't have a dedicated selector (e.g. "Romance",
  // which only exists as data, not as a named selector in this
  // exercise), fall back to filtering selectBooks on the fly.
  const selectorForGenre = genreToSelector[activeGenre];
  const allBooks = useSelector(selectBooks);
  const selectedBooks = useSelector(selectorForGenre ?? selectBooks);
  const books = useMemo(() => {
    if (selectorForGenre) return selectedBooks;
    if (activeGenre === 'All') return allBooks;
    return allBooks.filter((b) => b.genre === activeGenre);
  }, [selectorForGenre, selectedBooks, allBooks, activeGenre]);

  return (
    <div className="book-list">
      <div className="genre-tabs" role="tablist" aria-label="Filter books by genre">
        {genres.map((genre) => (
          <button
            key={genre}
            role="tab"
            aria-selected={activeGenre === genre}
            className={`genre-tab ${activeGenre === genre ? 'active' : ''}`}
            onClick={() => setActiveGenre(genre)}
          >
            {genre}
          </button>
        ))}
      </div>

      <p className="result-count">
        {books.length} {books.length === 1 ? 'book' : 'books'} in{' '}
        <strong>{activeGenre}</strong>
      </p>

      {books.length === 0 ? (
        <p className="empty-state">No books found in this genre.</p>
      ) : (
        <ul className="books">
          {books.map((book) => (
            <li key={book.id} className="book-card">
              <span className="book-title">{book.title}</span>
              <span className="book-author">by {book.author}</span>
              <span className="book-genre">{book.genre}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BookList;
