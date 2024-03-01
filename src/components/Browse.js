import React, { useEffect } from "react";
import Header from "./Header";
import useMovieList from "../hooks/useMovieList";
import MainContainer from "./videoComponents/MainContainer";
import SecondaryContainer from "./videoComponents/SecondaryContainer";
import usePopularMovieList from "../hooks/usePopularMovieList";
import { useSelector, useDispatch } from "react-redux";
import SuggestionsSearch from "./SuggestionsSearch";
import { getProducts } from "../utils/slice/productSlice";

const Browse = () => {
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(getProducts())
  }, [])
  useMovieList();
  usePopularMovieList();
  const searchText = useSelector((store) => store.searchButtonValue?.searchTextChange);

  return (
    <div>
      <Header />
      {searchText ? 
       <SuggestionsSearch/> :
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      }
    </div>
  );
};

export default Browse;
