import { useEffect } from "react";
import { MOVIE_OPTION } from "../utils/constants/constants";
import { moviesList } from "../utils/slice/movieListSlice";
import { useDispatch, useSelector } from "react-redux";

const useMovieList = () => {
  const dispatch = useDispatch();
  const ifStoreDataAldeadyExists = useSelector(
    (store) => store?.moviesDataList?.newMoviesList
  );

  const fetchData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      MOVIE_OPTION
    );
    const jsonData = await data.json();
    dispatch(moviesList(jsonData?.results));
  };
  useEffect(() => {
    if (!ifStoreDataAldeadyExists) fetchData();
  }, []);
};

export default useMovieList;