import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import APIRequest from "../../service/APIRequest";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  matches: [],
};

export const fetchMatches = createAsyncThunk(
  "matches/fetchMatches",
  async () => {
    const value = await AsyncStorage.getItem("my-key");

    const config = {
      headers: {
        Authorization: `Bearer ${value}`,
      },
    };
    try {
      const response = await APIRequest.get("/matches", config);
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

const matchesSlice = createSlice({
  name: "matches",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMatches.fulfilled, (state, action) => {
      state.matches = action.payload;
    });
    builder.addCase(fetchMatches.rejected, (state, action) => {
      console.log("Error fetching matches", action.payload);
    });
  },
});

export const { reducer } = matchesSlice;
