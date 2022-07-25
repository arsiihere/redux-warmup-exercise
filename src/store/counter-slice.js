import { createSlice } from "@reduxjs/toolkit";

const inntialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: inntialCounterState,
  reducers: {
    // HERE IS MUTATING THE STATE IS NOT FORBIDDEN
    increment(state, action) {
      state.counter++;
    },
    decrement(state, action) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload.amount;
    },
    toggleCounter(state, action) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterAction = counterSlice.actions;

export default counterSlice.reducer;
