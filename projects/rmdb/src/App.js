import './App.scss'
import { NavBar } from './NavBar'
import { FeaturedMovie } from './FeaturedMovie'
import { Watchlist } from './Watchlist'
import db from './db.json'
import { AllMovies } from './AllMovies'
import { useState } from 'react'
import { LearnMore } from './LearnMore'

const { movies } = db

export const App = () => {
  const featuredMovie = movies[0]
  const [watchlistMovies, setWatchlistMovies] = useState(movies.filter(movie => movie.watchlist))

  const handleAddWatchlist = (movie) => {
    setWatchlistMovies(watchlistMovies.includes(movie) ? watchlistMovies : [...watchlistMovies, movie])
  }

  return (
    <div className="App">
      <NavBar />
      <FeaturedMovie featuredMovie={featuredMovie} />
      <Watchlist watchlistMovies={watchlistMovies} />
      <AllMovies movies={movies} onAdd={handleAddWatchlist} />
      <LearnMore />
    </div>
  )
}
