import { createSlice } from "@reduxjs/toolkit";

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

export const authAction = authSlice.actions;

export default authSlice.reducer;
