import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaArrowCircleRight } from 'react-icons/fa';
import { fetchPopularMovies } from '../redux/moviesSlice';
import '../styles/Components.css';

function PopularMovies() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  const popularMovies = useSelector((state) => state.movies.popularMovies);

  return (
    <div className="categories-container">
      <h2>Popular Movies</h2>
      <ul>
        {popularMovies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <img src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt={`${movie.title} poster`} />
              {movie.title}
              <FaArrowCircleRight className="circle" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PopularMovies;
