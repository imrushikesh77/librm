import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    searchResults: [],
    allData: [], // Ensure correct initial state
}

const titleSlice = createSlice({
    name: 'title',
    initialState,
    reducers: {
      setSearchResults: (state, action) => {
        state.searchResults = action.payload;
      },
      clearSearchResults: (state) => {
        state.searchResults = [];
      },
      setAllData: (state, action) => {
        state.allData = action.payload; // Ensure correct state key
      },
    },
});

export const { setSearchResults, clearSearchResults, setAllData } = titleSlice.actions;
export default titleSlice.reducer;
