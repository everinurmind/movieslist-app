import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { fetchMovieDetails } from '../redux/moviesSlice';

function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movies.movieDetails);

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
  }, [dispatch, id]);

  const navigate = useNavigate();

  const handleReturn = () => {
    navigate(-1);
  };

  return (
    <div className="container">
      <div className="title">
        <h2>{movie.title}</h2>
        <button type="button" onClick={handleReturn} aria-label="Go back"><FaArrowLeft /></button>
      </div>
      {movie.id && (
      <div className="movie-info">
        <img src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt={`${movie.title} poster`} />
        <div className="movie-info-text">
          <p>
            <strong>Release date:</strong>
            {movie.release_date}
          </p>
          <p>
            <strong>Overview:</strong>
            {movie.overview}
          </p>
          <p>
            <strong>Vote average:</strong>
            {movie.vote_average}
          </p>
          <p>
            <strong>Runtime:</strong>
            {movie.runtime}
            minutes
          </p>
        </div>
      </div>
      )}
    </div>
  );
}

export default Details;
