import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "thunkTesting",
  initialState: {
    data: [],
  },
  reducers: {
    fetchProducts: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;

export const getProducts = () => {
  return async function getThunkData(dispatch) {
    const fetchApi = await fetch("https://fakestoreapi.com/products");
    const apiResponse = await fetchApi.json();
    // console.log(apiResponse, "api");
    dispatch(fetchProducts(apiResponse));
  };
};