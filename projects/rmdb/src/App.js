import './App.scss'
import { NavBar } from './NavBar'
import { FeaturedMovie } from './FeaturedMovie'
import { Watchlist } from './Watchlist'
import db from './db.json'
import { AllMovies } from './AllMovies'

const { movies } = db

export const App = () => {
  const featuredMovie = movies[0]
  const watchlistMovies = movies.filter(movie => movie.watchlist)

  return (
    <div className="App">
      <NavBar />
      <FeaturedMovie featuredMovie={featuredMovie} />
      <Watchlist watchlistMovies={watchlistMovies} />
      <AllMovies movies={movies} />
    </div>
  )
}
