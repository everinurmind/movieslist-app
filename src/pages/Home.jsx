import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaArrowCircleRight } from 'react-icons/fa';
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
      <div className="links-container">
        <Link to="/popular-movies" className="link">
          <h5>Popular Movies</h5>
          <FaArrowCircleRight className="circle" />
        </Link>
        <Link to="/top-rated-movies" className="link">
          <h5>Top Rated Movies</h5>
          <FaArrowCircleRight className="circle" />
        </Link>
        <Link to="/now-playing-movies" className="link">
          <h5>Now Playing Movies</h5>
          <FaArrowCircleRight className="circle" />
        </Link>
        <Link to="/upcoming-movies" className="link">
          <h5>Upcoming Movies</h5>
          <FaArrowCircleRight className="circle" />
        </Link>
      </div>
    </div>
  );
}

export default Home;
