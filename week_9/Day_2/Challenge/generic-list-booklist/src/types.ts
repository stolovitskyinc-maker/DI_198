// Step 1: Book Type
// Every book in our list has these three fields. `id` is what we use as
// the React `key` and as the unique handle we generate when adding a new book.
export interface Book {
  id: number
  title: string
  author: string
}

// A second, unrelated shape — used to prove the `List` component
// isn't hardcoded to books. See src/MoviesSection.tsx.
export interface Movie {
  id: number
  title: string
  year: number
}
