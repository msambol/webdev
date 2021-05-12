import db from './db.json'

const movies = db.movies

export const Watchlist = () => {
  const watchlistMovies = [movies[1], movies[2], movies[4]]

  return (
    <section>
      <h3>Watchlist</h3>
      <ul>
        <li>{watchlistMovies[0].Title}</li>
        <li>{watchlistMovies[1].Title}</li>
        <li>{watchlistMovies[2].Title}</li>
      </ul>
    </section>
  )
}
