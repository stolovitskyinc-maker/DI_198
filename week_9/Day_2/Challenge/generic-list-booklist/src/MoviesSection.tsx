// Bonus: reusing the exact same generic `List` component for a completely
// different shape of data, to demonstrate why generics are worth it here.
// Nothing in List.tsx had to change to support this.
import List from './components/List'
import type { Movie } from './types'

const movies: Movie[] = [
  { id: 1, title: 'Arrival', year: 2016 },
  { id: 2, title: 'Spirited Away', year: 2001 },
]

function MoviesSection() {
  return (
    <>
      <h1 style={{ fontSize: '1.1rem', marginTop: '2rem' }}>🎬 Movies (same List component)</h1>
      <List<Movie>
        items={movies}
        getKey={(movie) => movie.id}
        renderItem={(movie) => (
          <div className="item-card">
            <strong>{movie.title}</strong>
            <span>{movie.year}</span>
          </div>
        )}
      />
    </>
  )
}

export default MoviesSection
