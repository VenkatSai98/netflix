import React from "react";
import { useSelector } from "react-redux";
import useTrailerList from "../../hooks/useTrailerList";

const VideoBackground = ({movieId}) => {
  const trailerData = useSelector(
    (store) => store.moviesDataList?.trailerVideos
  );
  useTrailerList(movieId);
  return (
    <div>
      <iframe
        className="w-full aspect-video"
        src={"https://www.youtube.com/embed/" + trailerData?.key +"?autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;

