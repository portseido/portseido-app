import { configureStore, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "generic",
  initialState: {
    isLoading: false,
  },
  reducers: {
    showLoadingScreen: (state, action) => {
      state.isLoading = true;
    },
    finishLoading: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const showLoadingScreen = slice.actions.showLoadingScreen;
export const finishLoading = slice.actions.finishLoading;
export default slice.reducer;

export const store = configureStore({
  reducer: {
    generic: slice.reducer,
  },
});
