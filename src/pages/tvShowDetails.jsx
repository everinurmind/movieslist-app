import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchTVShowDetails } from '../redux/tvShowsSlice';

const TVShowDetails = () => {
  const { tvShowId } = useParams();
  const dispatch = useDispatch();
  const tvShowDetails = useSelector((state) => state.tvShows.tvShowDetails);

  useEffect(() => {
    dispatch(fetchTVShowDetails(tvShowId));
  }, [dispatch, tvShowId]);

  return (
    <div>
      {tvShowDetails && (
        <div>
          <h2>{tvShowDetails.name}</h2>
          <p>{tvShowDetails.overview}</p>
          <p>
            Rating:
            {tvShowDetails.vote_average}
          </p>
        </div>
      )}
    </div>
  );
};

export default TVShowDetails;
