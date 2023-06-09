import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaArrowCircleRight } from 'react-icons/fa';
import { fetchTopRatedMovies } from '../redux/moviesSlice';
import '../styles/Components.css';

function TopRatedMovies() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopRatedMovies());
  }, [dispatch]);

  const topRatedMovies = useSelector((state) => state.movies.topRatedMovies);

  return (
    <div className="categories-container">
      <h2>Top Rated Movies</h2>
      <ul>
        {topRatedMovies.map((movie) => (
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

export default TopRatedMovies;
