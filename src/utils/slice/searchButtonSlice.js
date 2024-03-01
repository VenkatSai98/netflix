import { createSlice } from "@reduxjs/toolkit";

const searchButtonSlice = createSlice({
  name: "searchButton",
  initialState: {
    searchTextChange: false
  },
  reducers: {
    setSearchButton: (state) => {
      state.searchTextChange = !state.searchTextChange;
    },
  },
});

export const { setSearchButton } = searchButtonSlice.actions;

export default searchButtonSlice.reducer;
