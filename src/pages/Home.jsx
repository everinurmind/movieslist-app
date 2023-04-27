import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  fetchTopRatedMovies,
  fetchUpcomingMovies,
  fetchNowPlayingMovies,
  fetchPopularMovies,
} from '../redux/moviesSlice';
import '../styles/Home.css';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopRatedMovies());
    dispatch(fetchUpcomingMovies());
    dispatch(fetchNowPlayingMovies());
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  return (
    <div className="home">
      <div className="links">
        <Link to="/popular-movies">Popular Movies</Link>
        <Link to="/top-rated-movies">Top Rated Movies</Link>
        <Link to="/now-playing-movies">Now Playing Movies</Link>
        <Link to="/upcoming-movies">Upcoming Movies</Link>
      </div>
    </div>
  );
}

export default Home;
