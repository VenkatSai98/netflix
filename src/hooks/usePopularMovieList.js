import React from "react";
import { MOVIE_OPTION } from "../utils/constants/constants";
import { popularMovies } from "../utils/slice/movieListSlice";
import { useDispatch } from "react-redux";

const usePopularMovieList = async () => {
  const dispatch = useDispatch();
  const popularMovieList = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    MOVIE_OPTION
  );
  const popularMovieListData = await popularMovieList.json();
  dispatch(popularMovies(popularMovieListData?.results));
};

export default usePopularMovieList;
