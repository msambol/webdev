import { MovieList } from './MovieList'
import { useState } from 'react'
import { Section } from './Section'

export const MovieListSection = ({ title, subtitle, movies, filterable, onAdd }) => {
  const [filterType, setFilterType] = useState(null)
  const filteredMovies = filterType ? movies.filter(m => m.Type === filterType) : movies
  return (
    <Section title={title} subtitle={subtitle}>
      {filterable && (
        <div>
          <button onClick={() => { setFilterType(null) }}>All</button>
          <button onClick={() => { setFilterType('series') }}>TV Series</button>
          <button onClick={() => { setFilterType('movie') }}>Movies</button>
        </div>
      )}
      <MovieList movies={filteredMovies} onAdd={onAdd} />
    </Section>
  )
}
