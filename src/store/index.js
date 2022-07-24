import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
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

const store = configureStore({
  // here we can have multiple reducer in an other object and it will convert it into a big giant reducer fn
  reducer: counterSlice.reducer,
});

// NOTE : There are alot of beifits of this actions
// We do not have to generate the type:'name' it will prevent us form typos
// and how its works is that : it works like the old redux fn but the name generated automatically
export const counterAction = counterSlice.actions;

export default store;
