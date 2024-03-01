import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movieList = useSelector(
    (store) => store?.moviesDataList?.newMoviesList
  );
  if (!movieList) return null;
  const firstMovieList = movieList[0];
  const { overview, title, id } = firstMovieList;
  return (
    <div>
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movieId = {id}/>
    </div>
  );
};

export default MainContainer;
