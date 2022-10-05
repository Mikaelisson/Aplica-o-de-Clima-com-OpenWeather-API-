import React from "react";
import ClimateForm from "./components/ClimateForm";

import { useSelector } from "react-redux";

function App() {
  const weatherInformation = useSelector(
    (state) => state.climate.weatherInformation
  );

  return (
    <div className="app">
      <h1>Clima e tempo</h1>
      <ClimateForm />
      <div className="weather-information">{weatherInformation.cityName}</div>
    </div>
  );
}

export default App;
