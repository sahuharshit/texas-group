import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAPIResponse } from "../../constants/interface";
import { getAllClients, IClient } from "./thunk";

interface IClientState {
  clientList: IClient[];
}

const initialState: IClientState = {
  clientList: [],
};

const client = createSlice({
  name: "clients",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getAllClients.fulfilled,
      (state, { payload }: PayloadAction<IClient[]>) => {
        state.clientList = payload;
      }
    );
  },
});

export const {} = client.actions;
export default client.reducer;
