import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import APIRequest from "../../service/APIRequest";

const initialState = {
  token: null,
};

export const AccesLogin = createAsyncThunk(
  "authentication/login",
  async ({ email, password }, tunkapi) => {
    const response = await APIRequest.post("/login", { email, password });
    return response.data.token;
  }
);

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(AccesLogin.fulfilled, (state, action) => {
      state.token = action.payload;
    });
  },
});

export const { logout } = authenticationSlice.actions;
export const { reducer } = authenticationSlice;
