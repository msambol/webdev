import './App.scss'
import { NavBar } from './NavBar'
import { FeaturedMovie } from './FeaturedMovie'
import { Watchlist } from './Watchlist'

export const App = () => {
  return (
    <div className="App">
      <NavBar />
      <FeaturedMovie />
      <Watchlist />
    </div>
  )
}
