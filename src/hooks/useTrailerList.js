import { useEffect } from "react";
import { MOVIE_OPTION } from "../utils/constants/constants";
import { trailerList } from "../utils/slice/movieListSlice";
import { useDispatch, useSelector } from "react-redux";

const useTrailerList = (id) => {
  const dispatch = useDispatch();
  const ifStoreDataAldeadyExists = useSelector(
    (store) => store?.moviesDataList?.trailerList
  );

  const apiCall = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
      MOVIE_OPTION
    );
    const jsonData = await data.json();
    const filteredVideos = jsonData?.results?.filter(
      (video) => video?.type === "Trailer"
    );

    const trailerVideos = filteredVideos?.length
      ? filteredVideos[0]
      : jsonData?.results[0];
    dispatch(trailerList(trailerVideos));
  };

  useEffect(() => {
    if (!ifStoreDataAldeadyExists) apiCall();
  }, []);
};

export default useTrailerList;