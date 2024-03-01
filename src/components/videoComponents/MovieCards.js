import React from "react";

const MovieCards = ({ imagePath }) => {
  return (
    <div className="w-48 pr-4">
      <img
        className=""
        src={"https://image.tmdb.org/t/p/w500/" + imagePath}
        alt="img"
      />
    </div>
  );
};

export default MovieCards;
