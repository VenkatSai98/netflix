import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movieData = useSelector((store) => store.moviesDataList?.newMoviesList);
  const popularMovieData = useSelector(
    (store) => store.moviesDataList?.popularMoviesList
  );

  // [
  //   { title: "Now Playing", movieData },
  //   { title: "Popular Movies", movieData: popularMovieData },
  // ].map((list, index) => (
  //   <MoviesList key={index} title={list.title} movieData={list.movieData} />
  // ));

  return (
    movieData && (
      <div className="bg-black">
        <div className="-mt-52 pl-12 relative z-20">
          <MoviesList title={"Now Playing"} movieData={movieData} />
          <MoviesList title={"Popular Movies"} movieData={popularMovieData} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
