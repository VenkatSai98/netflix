import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[17%] w-full aspect-video pl-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-extrabold text-3xl py-6">{title}</h1>
      <p className="font-medium-400 w-1/4">{overview}</p>
      <button className="bg-white text-black p-4 px-16 text-xl rounded-lg mt-6">
        ▶ Play
      </button>
      <button className="bg-gray-600 p-4 px-16 text-xl bg-opacity-50 rounded-lg mx-3">
        More Info
      </button>
    </div>
  );
};

export default VideoTitle;
