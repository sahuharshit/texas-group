import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchUtils } from "../../utils/fetchUtils";

export interface IClient {
  name: string;
  email: string;
  mobile: string;

  createdAt: string;
  updatedAt: string;
  subscribedEvents: string[];
}

export const getAllClients = createAsyncThunk<IClient[]>(
  "getEvents",
  async (_, { rejectWithValue }) => {
    try {
      return await FetchUtils.getRequest<IClient[]>("/user");
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
