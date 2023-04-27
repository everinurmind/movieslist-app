import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPopularTVShows } from '../redux/tvShowsSlice';

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
        <ul>
          {filteredTVShows.map((tvShow) => (
            <li key={tvShow.id}>
              <Link to={`/tvShow/${tvShow.id}`}>
                <img src={`https://image.tmdb.org/t/p/w185${tvShow.poster_path}`} alt={`${tvShow.title} poster`} />
                {tvShow.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TVShowList;
