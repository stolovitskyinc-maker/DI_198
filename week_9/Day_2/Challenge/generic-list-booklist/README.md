# Generic List — Book App (TypeScript + React)

A Vite + React + TypeScript project for the "Building a TypeScript and
React Todo List with Generic Components" daily challenge.

## Setup

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Where each piece lives

| Step | File |
|---|---|
| 1 — `Book` type | `src/types.ts` |
| 2 — Generic `List` component | `src/components/List.tsx` |
| 3 & 4 — `BookApp`, state, `addBook` | `src/BookApp.tsx` |
| 5 — Rendering with `renderItem` | `src/BookApp.tsx` |
| Bonus — reusing `List` for a different type | `src/MoviesSection.tsx` |

## How the generics work

`List<T>` takes an `items: T[]` array and a `renderItem: (item: T) => ReactNode`
function. It has no idea what shape `T` is — it just loops over the items and
calls `renderItem` on each one. That's what lets the exact same component
render a list of `Book`s in `BookApp.tsx` and a list of `Movie`s in
`MoviesSection.tsx` with no changes to `List.tsx` itself.

```tsx
<List<Book>
  items={books}
  getKey={(book) => book.id}
  renderItem={(book) => (
    <div className="item-card">
      <strong>{book.title}</strong>
      <span>by {book.author}</span>
    </div>
  )}
/>
```

## Adding a book

Type a title and author into the form and submit. `addBook` computes a new
unique `id` (one higher than the current max) and appends the new book to
state with `setBooks((prev) => [...prev, newBook])`, so React re-renders the
list with the new entry included.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — type-check and build for production
- `npm run preview` — preview the production build locally

Node.js 18+ is recommended.
