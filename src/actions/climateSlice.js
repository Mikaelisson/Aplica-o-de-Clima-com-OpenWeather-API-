import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  valueNameCity: "",
  weatherInformation: "",
};

export const climateSlice = createSlice({
  name: "climate",
  initialState,
  reducers: {
    handleChange: (state, { payload }) => {
      state.valueNameCity = payload;
      return state;
    },
    cityInformation: (state, { payload }) => {
      state.weatherInformation = payload;
      return state;
    },
  },
});

export const { handleChange, cityInformation } = climateSlice.actions;

export default climateSlice.reducer;
