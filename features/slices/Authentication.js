import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import APIRequest from "../../service/APIRequest";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  token: null,
};

const storeData = async (value) => {
  try {
    await AsyncStorage.setItem("my-key", value.token);
    await AsyncStorage.setItem("my-id", String(value.id));
  } catch (e) {
    // saving error
  }
};

export const AccesLogin = createAsyncThunk(
  "authentication/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await APIRequest.post("/login", {
        email: email,
        password: password,
        // email: "test@test.be",
        // password: "test",
      });
      if (response.status === 200) {
        return response.data.success;
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
    try {
      const response = await APIRequest.post("/users", {
        email: email,
        password: password,
        name: name,
      });
      if (response.status === 201) {
        // console.log("Register success", response);
      } else {
        console.log("Register failed", response.data);
      }
    } catch (error) {
      console.log("error", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const AccesLogout = createAsyncThunk(
//   "authentication/logout",
//   async (thunkAPI) => {
//     const value = await AsyncStorage.getItem("my-key");

//     const config = {
//       headers: {
//         Authorization: `Bearer ${value}`,
//       },
//     };

//     try {
//       const response = await APIRequest.post("/logout", config);
//       if (response.status === 200) {
//         return response.data;
//       } else {
//         return thunkAPI.rejectWithValue("Logout failed");
//       }
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

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
      console.log("Login success", action.payload.token);
      state.token = action.payload.token;
      storeData(action.payload);
    });
    builder.addCase(AccesLogin.rejected, (state, action) => {
      state.token = null;
      console.log("Login failed", action.payload);
    });
    builder.addCase(AccesRegister.fulfilled, (state, action) => {
      state.token = null;
    });
    //   builder.addCase(AccesLogout.fulfilled, (state, action) => {
    //     state.token = null;
    //     AsyncStorage.removeItem("my-key");
    //     AsyncStorage.removeItem("my-id");
    //   });
  },
});

export const { logout } = authenticationSlice.actions;
export const { reducer } = authenticationSlice;
