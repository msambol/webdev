import db from './db.json'
import { MoviePoster } from './MoviePoster'

const movies = db.movies

export const FeaturedMovie = () => {
  const featuredMovie = movies[0]
  const [month, date, year] = new Date().toLocaleDateString('en-US').split('/')

  return (
    <section>
      <h3>Featured for {month}/{date}/{year}</h3>
      <MoviePoster />
      <p>{featuredMovie.Title}</p>
      <div>{featuredMovie.imdbRating}</div>
    </section>
  )
}
