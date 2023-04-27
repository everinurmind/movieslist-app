import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPopularTVShows } from '../redux/tvShowsSlice';
import '../styles/TVShowsList.css';

const TVShowList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTVShows, setFilteredTVShows] = useState([]);
  const dispatch = useDispatch();
  const popularTVShows = useSelector((state) => state.tvShows.popularTVShows);

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
      <input type="text" value={searchTerm} onChange={handleSearchTermChange} placeholder="Search TV Shows" />
      {searchTerm && (
        <ul className="tv-show-list">
          {filteredTVShows.map((tvShow) => (
            <li key={tvShow.id}>
              <Link to={`/tv-shows/${tvShow.id}`}>{tvShow.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TVShowList;
