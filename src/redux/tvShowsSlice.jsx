import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiKey = '43f6e36cafa8a53b2e6d7e6c4ae05d7d';
const baseUrl = 'https://api.themoviedb.org/3';

export const fetchPopularTVShows = createAsyncThunk(
  'tv/popular',
  async () => {
    const response = await fetch(`${baseUrl}/tv/popular?api_key=${apiKey}`);
    const data = await response.json();
    return data.results;
  },
);

export const fetchTVShowDetails = createAsyncThunk(
  'tv/tvShowDetails',
  async (tvShowId) => {
    const response = await fetch(`${baseUrl}/tv/${tvShowId}?api_key=${apiKey}`);
    const data = await response.json();
    return data;
  },
);

const tvShowsSlice = createSlice({
  name: 'tvShows',
  initialState: {
    popularTVShows: [],
    tvShowDetails: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularTVShows.fulfilled, (state, action) => ({
        ...state,
        popularTVShows: action.payload,
      }))
      .addCase(fetchTVShowDetails.fulfilled, (state, action) => ({
        ...state,
        tvShowDetails: action.payload,
      }));
  },
});

export default tvShowsSlice.reducer;
