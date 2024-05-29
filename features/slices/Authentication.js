import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import APIRequest from "../../service/APIRequest";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  token: null,
};

const storeData = async (value) => {
  try {
    await AsyncStorage.setItem("my-key", value);
  } catch (e) {
    // saving error
  }
};

export const AccesLogin = createAsyncThunk(
  "authentication/login",
  async ({ email, password }, thunkAPI) => {
    try {
      console.log("ok", email, password);
      const response = await APIRequest.post("/login", {
        email: email,
        password: password,
      });
      if (response.status === 200) {
        return response.data.success.token;
      } else {
        return thunkAPI.rejectWithValue("Login failed");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const AccesRegister = createAsyncThunk(
  "authentication/register",
  async ({ email, password, name }, thunkAPI) => {
    console.log("ok");
    try {
      const response = await APIRequest.post("/users", {
        email: email,
        password: password,
        name: name,
      });
      if (response.status === 201) {
        console.log("Register success", response);
      } else {
        console.log("Register failed", response.data);
      }
    } catch (error) {
      console.log("error", error);
      return thunkAPI.rejectWithValue(error.message);
    }
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
      storeData(action.payload);
    });
    builder.addCase(AccesLogin.rejected, (state, action) => {
      state.token = null;
      console.log("Login failed", action.payload);
    });
    builder.addCase(AccesRegister.fulfilled, (state, action) => {
      state.token = null;
    });
  },
});

export const { logout } = authenticationSlice.actions;
export const { reducer } = authenticationSlice;
