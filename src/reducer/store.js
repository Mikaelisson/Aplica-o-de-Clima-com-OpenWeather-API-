import { configureStore } from "@reduxjs/toolkit";
import climateReducer from "../actions/climateSlice";

const store = configureStore({
  reducer: {
    climate: climateReducer,
  },
});

export default store;
