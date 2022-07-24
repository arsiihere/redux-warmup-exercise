import { createSlice, configureStore } from "@reduxjs/toolkit";

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

const innitialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
  name: "authentication",
  initialState: innitialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  // here we can have multiple reducer in an other object and it will convert it into a big giant reducer fn
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export const counterAction = counterSlice.actions;

export const authAction = authSlice.actions;

export default store;
