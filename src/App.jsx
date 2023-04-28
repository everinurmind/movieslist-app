import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Details from './pages/movieDetails';
import TVShowDetails from './pages/tvShowDetails';
import TopRatedMovies from './components/TopRatedMovies';
import UpcomingMovies from './components/UpcomingMovies';
import NowPlayingMovies from './components/NowPlayingMovies';
import PopularMovies from './components/PopularMovies';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/movies/:id" element={<Details />} />
        <Route path="/tv-shows/:tvShowId" element={<TVShowDetails />} />
        <Route path="/top-rated-movies" element={<TopRatedMovies />} />
        <Route path="/upcoming-movies" element={<UpcomingMovies />} />
        <Route path="/now-playing-movies" element={<NowPlayingMovies />} />
        <Route path="/popular-movies" element={<PopularMovies />} />
      </Routes>
    </div>
  );
}

export default App;
