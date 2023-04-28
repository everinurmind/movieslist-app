import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaArrowCircleRight } from 'react-icons/fa';
import { fetchUpcomingMovies } from '../redux/moviesSlice';
import '../styles/Components.css';

function UpcomingMovies() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUpcomingMovies());
  }, [dispatch]);

  const upcomingMovies = useSelector((state) => state.movies.upcomingMovies);

  return (
    <div className="categories-container">
      <h2>Upcoming Movies</h2>
      <ul>
        {upcomingMovies.map((movie) => (
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

export default UpcomingMovies;
