import React from "react";
import ClimateForm from "./components/ClimateForm";
import WeatherInformation from "./components/WeatherInformation";

function App() {
  return (
    <div className="app">
      <h1>Clima e tempo</h1>
      <ClimateForm />
      <WeatherInformation />
    </div>
  );
}

export default App;
