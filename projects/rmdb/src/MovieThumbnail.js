import { MoviePoster } from './MoviePoster'
import './MovieThumbnail.scss'

export const MovieThumbnail = ({ movie: { Poster, Title } }) => (
  <div className="MovieThumbnail">
    <MoviePoster poster={Poster} />
    {Title}
  </div>
)
