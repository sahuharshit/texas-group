import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAPIResponse } from "../../constants/interface";

const initialState = {
  isLoggedIn: false,
  setAppUser: {},
};

const app = createSlice({
  name: "app",
  initialState,
  reducers: {
    isLoggedInTrue: (state, { payload }) => {
      state.isLoggedIn = payload;
    },

    setAppUser: (state, { payload }) => {
      state.setAppUser = payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { isLoggedInTrue, setAppUser } = app.actions;
export default app.reducer;
