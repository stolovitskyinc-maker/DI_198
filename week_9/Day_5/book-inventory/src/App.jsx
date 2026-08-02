import BookList from './features/books/BookList';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>📚 Book Inventory</h1>
        <p>Powered by Redux Toolkit's <code>createSelector</code></p>
      </header>
      <main>
        <BookList />
      </main>
    </div>
  );
}

export default App;
