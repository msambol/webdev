import { MoviePoster } from './MoviePoster'
import './MovieThumbnail.scss'

export const MovieThumbnail = ({ movie, onAdd, children }) => (
  <div className="MovieThumbnail">
    <MoviePoster poster={movie.Poster} />
    {movie.Title}
    {children}
    {onAdd && (<button onClick={() => onAdd(movie)}>+</button>)}
  </div>
)
