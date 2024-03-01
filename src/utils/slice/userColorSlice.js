import { createSlice } from "@reduxjs/toolkit";

const userColorSlice = createSlice({
  name: "userSelectedColor",
  initialState: {
    setText: "", // Rename from setColor to setText
    setColor: "", // Rename from setText to setColor
  },
  reducers: {
    changeText: (state, action) => {
      state.setText = action.payload;
    },
    changeColor: (state, action) => {
      state.setColor = action.payload;
    }
  },
});

export const { changeText, changeColor } = userColorSlice.actions;
export default userColorSlice.reducer;

