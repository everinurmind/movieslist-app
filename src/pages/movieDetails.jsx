import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../redux/moviesSlice';
import '../styles/Details.css';

function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movies.movieDetails);

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
  }, [dispatch, id]);

  return (
    <div className="container">
      <h2>{movie.title}</h2>
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
