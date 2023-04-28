import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchTVShowDetails } from '../redux/tvShowsSlice';
import '../styles/Details.css';

const TVShowDetails = () => {
  const { tvShowId } = useParams();
  const dispatch = useDispatch();
  const tvShow = useSelector((state) => state.tvShows.tvShowDetails);

  useEffect(() => {
    dispatch(fetchTVShowDetails(tvShowId));
  }, [dispatch, tvShowId]);

  return (
    <div className="container">
      <h2>{tvShow.name}</h2>
      {tvShow.id && (
      <div className="tvShow-info">
        <img src={`https://image.tmdb.org/t/p/w185${tvShow.poster_path}`} alt={`${tvShow.name} poster`} />
        <div className="tvShow-info-text">
          <p>
            <strong>First air date:</strong>
            {tvShow.first_air_date}
          </p>
          <p>
            <strong>Overview:</strong>
            {tvShow.overview}
          </p>
          <p>
            <strong>Vote average:</strong>
            {tvShow.vote_average}
          </p>
          <p>
            <strong>Number of seasons:</strong>
            {tvShow.number_of_seasons}
          </p>
          <p>
            <strong>Number of episodes:</strong>
            {tvShow.number_of_episodes}
          </p>
        </div>
      </div>
      )}
    </div>
  );
};

export default TVShowDetails;
