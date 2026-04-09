import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Redux Toolkit automatically generates increment(), decrement() which are actions
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
