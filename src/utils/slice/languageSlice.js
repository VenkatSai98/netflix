import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name: "language config",
    initialState:{
        languages: "en"
    },
    reducers: {
        changeLanguage:(state, action)=> {
            state.languages = action.payload
        }
    }
})

export const {changeLanguage} = languageSlice.actions;

export default languageSlice.reducer;