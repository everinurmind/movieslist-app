import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchPopularTVShows } from '../redux/tvShowsSlice';
import '../styles/TVShowsList.css';

const TVShowList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTVShows, setFilteredTVShows] = useState([]);
  const dispatch = useDispatch();
  const popularTVShows = useSelector((state) => state.tvShows.popularTVShows);
  const isLoading = useSelector((state) => state.tvShows.isLoading);
  const error = useSelector((state) => state.tvShows.error);

  useEffect(() => {
    dispatch(fetchPopularTVShows());
  }, [dispatch]);

  useEffect(() => {
    const filteredShows = popularTVShows.filter((tvShow) => {
      const showName = tvShow.name.toLowerCase();
      const searchTermLower = searchTerm.toLowerCase();
      return showName.includes(searchTermLower);
    });
    setFilteredTVShows(filteredShows);
  }, [popularTVShows, searchTerm]);

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchTermChange}
          placeholder="Search TV Shows"
        />
      </div>
      {isLoading && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {!isLoading && !error && searchTerm !== '' && (
        <div className="tv-show-grid">
          {filteredTVShows.map((tvShow) => (
            <TVShowCard key={tvShow.id} tvShow={tvShow} />
          ))}
        </div>
      )}
    </div>
  );
};

TVShowList.propTypes = {
  tvShow: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
};

TVShowList.defaultProps = {
  tvShow: {},
};

const TVShowCard = ({ tvShow }) => (
  <div className="tv-show-card">
    <Link to={`/tv-shows/${tvShow.id}`}>
      <h3>{tvShow.name}</h3>
    </Link>
  </div>
);

TVShowCard.propTypes = {
  tvShow: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
};

TVShowCard.defaultProps = {
  tvShow: {},
};

export default TVShowList;
