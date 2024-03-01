import { createSlice } from "@reduxjs/toolkit";

const movieListSlice = createSlice({
  name: "movies list",
  initialState: {
    newMoviesList: null,
    trailerVideos: null,
    popularMoviesList: null,
  },
  reducers: {
    moviesList: (state, action) => {
      state.newMoviesList = action.payload;
    },
    trailerList: (state, action) => {
      state.trailerVideos = action.payload;
    },
    popularMovies: (state, action) => {
      state.popularMoviesList = action.payload;
    }

  },
});

export const { moviesList, trailerList, popularMovies } = movieListSlice.actions;

export default movieListSlice.reducer;
