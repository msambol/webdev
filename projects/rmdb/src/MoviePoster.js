import db from './db.json'

const { movies } = db

const featuredMovie = movies[0]

export const MoviePoster = () => (
  <img
    src={featuredMovie.Poster}
    width={75}
  />
)
