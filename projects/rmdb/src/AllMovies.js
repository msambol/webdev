import { MovieList } from './MovieList'

export const AllMovies = ({movies}) => (
  <section>
    <h3>All Movies</h3>
    <MovieList movies={movies} />
  </section>
)
