import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slice/userSlice";
import movieListSlice from "../slice/movieListSlice";
import searchButtonSlice from "../slice/searchButtonSlice";
import languageSlice from "../slice/languageSlice";
import productSlice from "../slice/productSlice";
import userColorSlice from "../slice/userColorSlice";


const appStore = configureStore({
    reducer: {
        userData: userSlice,
        moviesDataList: movieListSlice,
        searchButtonValue: searchButtonSlice,
        languagesList: languageSlice,
        products: productSlice,
        userSelectedColor: userColorSlice
    },
});

export default appStore;