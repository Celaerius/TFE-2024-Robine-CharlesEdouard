import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import APIRequest from "../../service/APIRequest";

const initialState = {
  swipes: [],
};

export const SWIPE_RIGHT = "SWIPE_RIGHT";
export const SWIPE_LEFT = "SWIPE_LEFT";

export const sendSwipe = createAsyncThunk("swipes/sendSwipe", async (data, thunkAPI) => {
  // console.log("ok", data);
  try {
    const response = await APIRequest.post("/swipes", {
      swiper_id: data.swiperId,
      swipee_id: data.swipeeId,
      is_right_swipe: data.isRightSwipe,
    });
    console.log("response", response);
    if (response.data.ismatching === true) {
      alert("It's a match!");
    }
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
});

const swipeSlice = createSlice({
  name: "swipes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendSwipe.fulfilled, (state, action) => {
      state.swipes.push(action.payload);
      console.log("Swipe sent", action.payload);
    });
    builder.addCase(sendSwipe.rejected, (state, action) => {
      console.log("Error sending swipe", action.payload);
    });
  },
});

export const { reducer } = swipeSlice;
