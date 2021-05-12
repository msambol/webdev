import { MovieList } from './MovieList'
import { useState } from 'react'

export const MovieListSection = ({ title, movies, filterable }) => {
  const [filterType, setFilterType] = useState(null)
  const filteredMovies = filterType ? movies.filter(m => m.Type === filterType) : movies
  return (
    <section>
      <h3>{title}</h3>
      {filterable && (
        <div>
          <button onClick={() => { setFilterType(null) }}>All</button>
          <button onClick={() => { setFilterType('series') }}>TV Series</button>
          <button onClick={() => { setFilterType('movie') }}>Movies</button>
        </div>
      )}
      <MovieList movies={filteredMovies} />
    </section>
  )
}
