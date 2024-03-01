import React from "react";
import MovieCards from "./MovieCards";

const MoviesList = ({ title, movieData }) => {
  //   const titles = movieData.map((item) => item);
  //   let data = movieData.map((poster)=> poster.poster_path)
  return (
    <div className="">
      <h1
        className="py-8 text-white font-semibold text-xl"
      >
        {title}
      </h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movieData?.map((item) => (
            <MovieCards key={item.id} imagePath={item.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
