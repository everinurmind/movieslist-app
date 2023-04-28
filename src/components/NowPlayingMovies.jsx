import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaArrowCircleRight } from 'react-icons/fa';
import { fetchNowPlayingMovies } from '../redux/moviesSlice';
import '../styles/Components.css';

function NowPlayingMovies() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNowPlayingMovies());
  }, [dispatch]);

  const nowPlayingMovies = useSelector((state) => state.movies.nowPlayingMovies);

  return (
    <div className="categories-container">
      <h2>Now Playing Movies</h2>
      <ul>
        {nowPlayingMovies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <img src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt={`${movie.title} poster`} />
              {movie.title}
              <FaArrowCircleRight />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NowPlayingMovies;
