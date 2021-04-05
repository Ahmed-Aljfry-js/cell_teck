import { createSlice } from "@reduxjs/toolkit";

export const floorNumber = createSlice({
  name: "floorNumber",
  initialState: {
    number: 1,
  },
  reducers: {
    increment: (state) => {
      if (state.number < 20) {
        state.number += 1;
      }
    },
    decrement: (state) => {
      if (state.number > 0) {
        state.number -= 1;
      }
    },
    setFloorNumber: (state, action) => {
      state.number = action.payload;
    },

    retailIncrement: (state) => {
      if (state.number < 2) {
        state.number += 1;
      }
    },
    retailDecrement: (state) => {
      if (state.number > 0) {
        state.number -= 1;
      }
    },
  },
});

export const { increment, decrement, setFloorNumber } = floorNumber.actions;

export const getFloorNumber = (state) => state.floorNumber.number;

export default floorNumber.reducer;
