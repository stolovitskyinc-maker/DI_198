// Step 3-5: Main BookApp Component
import { useState } from 'react'
import type { FormEvent } from 'react'
import List from './components/List'
import MoviesSection from './MoviesSection'
import type { Book } from './types'

const initialBooks: Book[] = [
  { id: 1, title: 'The Hobbit', author: 'J.R.R. Tolkien' },
  { id: 2, title: 'Dune', author: 'Frank Herbert' },
  { id: 3, title: 'The Left Hand of Darkness', author: 'Ursula K. Le Guin' },
]

function BookApp() {
  // Step 3: manage the book list in state, prepopulated with a few entries.
  const [books, setBooks] = useState<Book[]>(initialBooks)

  // Controlled inputs for the "add a book" form.
  const [title, setTitle] = useState<string>('')
  const [author, setAuthor] = useState<string>('')

  // Step 4: adding a new book.
  // We derive the new id from the current max id (rather than books.length)
  // so ids stay unique even after items are removed in the future.
  const addBook = (newTitle: string, newAuthor: string): void => {
    const nextId = books.length > 0 ? Math.max(...books.map((b) => b.id)) + 1 : 1

    const newBook: Book = {
      id: nextId,
      title: newTitle,
      author: newAuthor,
    }

    setBooks((prevBooks) => [...prevBooks, newBook])
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    const trimmedTitle = title.trim()
    const trimmedAuthor = author.trim()

    if (!trimmedTitle || !trimmedAuthor) {
      return
    }

    addBook(trimmedTitle, trimmedAuthor)
    setTitle('')
    setAuthor('')
  }

  return (
    <>
      <h1>📚 Book List</h1>
      <p className="subtitle">A generic List component, reused for books.</p>

      <form className="add-book-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit" disabled={!title.trim() || !author.trim()}>
          Add Book
        </button>
      </form>

      {/* Step 5: the generic List component decides nothing about
          books specifically — `renderItem` supplies that logic. */}
      <List<Book>
        items={books}
        getKey={(book) => book.id}
        emptyMessage="No books yet — add one above."
        renderItem={(book) => (
          <div className="item-card">
            <strong>{book.title}</strong>
            <span>by {book.author}</span>
          </div>
        )}
      />

      <MoviesSection />
    </>
  )
}

export default BookApp
