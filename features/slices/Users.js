import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import APIRequest from "../../service/APIRequest";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  users: [],
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const value = await AsyncStorage.getItem("my-key");

  const config = {
    headers: {
      Authorization: `Bearer ${value}`,
    },
  };
  try {
    const response = await APIRequest.get("/users", config);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      console.log("Error fetching users", action.payload);
    });
  },
});

export const { reducer } = usersSlice;
