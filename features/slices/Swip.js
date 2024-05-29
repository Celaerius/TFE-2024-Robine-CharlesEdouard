import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  swipes: [],
};

export const SWIPE_RIGHT = "SWIPE_RIGHT";
export const SWIPE_LEFT = "SWIPE_LEFT";

export const sendSwipe = createAsyncThunk(
  "swipes/sendSwipe",
  async ({ swiperId, swipeeId, isRightSwipe }) => {
    console.log("ok", swiperId, swipeeId, isRightSwipe);
    try {
      const response = await axios.post("/swipe", {
        swiper_id: swiperId,
        swipee_id: swipeeId,
        is_right_swipe: isRightSwipe,
      });
      if (response.data.ismatching === true) {
        alert("It's a match!");
      }
    } catch (error) {
      return error.message;
    }
  }
);

const swipeSlice = createSlice({
  name: "swipes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendSwipe.fulfilled, (state, action) => {
      state.swipes.push(action.payload);
    });
    builder.addCase(sendSwipe.rejected, (state, action) => {
      console.log("Error sending swipe", action.payload);
    });
  },
});

export const { reducer } = swipeSlice;
