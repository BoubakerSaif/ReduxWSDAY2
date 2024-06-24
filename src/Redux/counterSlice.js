import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state, action) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count > 0 ? (state.count -= 1) : state.count;
    },
    incrementByAmount: (state, action) => {
      state.count = state.count + Number(action.payload);
    },
    decrementByAmount: (state, action) => {
      state.count = state.count - Number(action.payload);
    },
  },
});

export default counterSlice.reducer;
export const { increment, decrement, incrementByAmount, decrementByAmount } =
  counterSlice.actions;
