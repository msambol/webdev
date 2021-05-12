import { MovieListSection } from './MovieListSection'

export const Watchlist = ({ watchlistMovies }) => (
  <MovieListSection title="Watchlist" subtitle="Dive into your favorites!" movies={watchlistMovies} />
)
