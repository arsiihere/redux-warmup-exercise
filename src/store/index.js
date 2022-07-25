import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter-slice";
import authReducer from "./auth-slice";

const store = configureStore({
  // here we can have multiple reducer in an other object and it will convert it into a big giant reducer fn
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store;
