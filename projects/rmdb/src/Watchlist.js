import { MovieList } from './MovieList'

export const Watchlist = ({ watchlistMovies }) => {
  return (
    <section>
      <h3>Watchlist</h3>
      <MovieList movies={watchlistMovies} />
    </section>
  )
}
