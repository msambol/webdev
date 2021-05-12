import { MovieListSection } from './MovieListSection'

export const AllMovies = ({ movies, onAdd }) => (
  <MovieListSection title="All Movies" subtitle="Discover something new." movies={movies} filterable onAdd={onAdd} />
)
