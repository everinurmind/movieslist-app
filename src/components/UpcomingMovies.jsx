import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { fetchUpcomingMovies } from '../redux/moviesSlice';

function UpcomingMovies() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUpcomingMovies());
  }, [dispatch]);

  const upcomingMovies = useSelector((state) => state.movies.upcomingMovies);

  return (
    <div className="categories-container">
      <div className="header-container">
        <h2>Upcoming Movies</h2>
        <Link to="/"><FaArrowLeft /></Link>
      </div>
      <ul>
        {upcomingMovies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <img src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt={`${movie.title} poster`} />
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UpcomingMovies;
