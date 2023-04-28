import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './moviesSlice';
import tvShowsReducer from './tvShowsSlice';

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    tvShows: tvShowsReducer,
  },
});

export default store;
