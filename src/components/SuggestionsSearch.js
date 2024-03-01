import React, { useRef } from "react";
import { languages } from "../utils/constants/languageConstants";
import { useSelector } from "react-redux";

const SuggestionsSearch = () => {
  const searchValue = useRef(null);
  const handleSearchResults = () => {
    // console.log(searchValue.current.value);
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => console.table(data.address))
        .catch(()=> console.log("Error while Fetching"));
    });
  };
  const langKey = useSelector((store) => store?.languagesList?.languages);
  return (
    <>
      <img
        className="absolute h-full lg:h-auto -z-20"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="netflix-bg-img"
      />
      <div className="pt-[15%] flex justify-center">
        <form
          className="bg-slate-400 grid grid-cols-12 w-1/2 rounded-lg"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            className="border border-cyan-200 col-span-9 rounded-xl p-3 font-medium focus:outline-none mx-2 my-1"
            placeholder={languages[langKey].placeHolderValue}
            ref={searchValue}
          />

          {/* languages[langKey].search is more dynamic. It allows you to access the search property based on a variable (langKey in this case).
           This can be useful when the language is determined dynamically during the execution of the program or when you want to create a more flexible 
           and reusable piece of code. */}
          <button
            className="border bg-red-700 col-span-3 text-white font-normal p-3 rounded-lg my-1 mr-3"
            onClick={handleSearchResults}
          >
            {languages[langKey].search}
          </button>
        </form>
      </div>
    </>
  );
};

export default SuggestionsSearch;
