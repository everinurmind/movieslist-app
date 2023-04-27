/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiKey = '43f6e36cafa8a53b2e6d7e6c4ae05d7d';
const baseUrl = 'https://api.themoviedb.org/3';

export const fetchMovies = createAsyncThunk(
  'movies/allMovies',
  async () => {
    const response = await fetch(`${baseUrl}/movie?api_key=${apiKey}`);
    const data = await response.json();
    return data.results;
  },
);

export const fetchTopRatedMovies = createAsyncThunk(
  'movies/topRated',
  async () => {
    const response = await fetch(`${baseUrl}/movie/top_rated?api_key=${apiKey}`);
    const data = await response.json();
    return data.results;
  },
);

export const fetchUpcomingMovies = createAsyncThunk(
  'movies/upcoming',
  async () => {
    const response = await fetch(`${baseUrl}/movie/upcoming?api_key=${apiKey}`);
    const data = await response.json();
    return data.results;
  },
);

export const fetchNowPlayingMovies = createAsyncThunk(
  'movies/nowPlaying',
  async () => {
    const response = await fetch(`${baseUrl}/movie/now_playing?api_key=${apiKey}`);
    const data = await response.json();
    return data.results;
  },
);

export const fetchPopularMovies = createAsyncThunk(
  'movies/popular',
  async () => {
    const response = await fetch(`${baseUrl}/movie/popular?api_key=${apiKey}`);
    const data = await response.json();
    return data.results;
  },
);

export const fetchMovieDetails = createAsyncThunk(
  'movies/movieDetails',
  async (movieId) => {
    const response = await fetch(`${baseUrl}/movie/${movieId}?api_key=${apiKey}`);
    const data = await response.json();
    return data;
  },
);

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    topRatedMovies: [],
    upcomingMovies: [],
    nowPlayingMovies: [],
    popularMovies: [],
    movieDetails: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopRatedMovies.fulfilled, (state, action) => {
        state.topRatedMovies = action.payload;
      })
      .addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
        state.upcomingMovies = action.payload;
      })
      .addCase(fetchNowPlayingMovies.fulfilled, (state, action) => {
        state.nowPlayingMovies = action.payload;
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.popularMovies = action.payload;
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.movieDetails = action.payload;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.allMovies = action.payload;
      });
  },
});

export default moviesSlice.reducer;
