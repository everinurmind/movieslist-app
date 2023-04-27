import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  fetchTopRatedMovies,
  fetchUpcomingMovies,
  fetchNowPlayingMovies,
  fetchPopularMovies,
} from '../redux/moviesSlice';

function Home() {
  const dispatch = useDispatch();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    dispatch(fetchTopRatedMovies());
    dispatch(fetchUpcomingMovies());
    dispatch(fetchNowPlayingMovies());
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    const filteredMovies = movies.filter((movie) => movie.title.toLowerCase().includes(query));
    setMovies(filteredMovies);
  };

  return (
    <div className="home">
      <input type="text" placeholder="Search movies" onChange={handleSearch} />
      <div className="links">
        <Link to="/popular-movies">Popular Movies</Link>
        <Link to="/top-rated-movies">Top Rated Movies</Link>
        <Link to="/now-playing-movies">Now Playing Movies</Link>
        <Link to="/upcoming-movies">Upcoming Movies</Link>
      </div>
      <ul className="movie-list">
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
