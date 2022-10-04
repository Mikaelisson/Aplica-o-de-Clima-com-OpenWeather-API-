import React, { useState } from "react";

function App() {
  const [clima, setClima] = useState("");
  const [infoClima, setInfoClima] = useState();

  const key = "89c6b977f2b1ca49c13e091e163764b6";

  //buscar dados do local
  const climaAPI = async (city) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=${key}&lang=pt_br`
    );
    const data = await res.json();

    const valueKelvin = -273.15;
    const tempKelvin = data.main.temp;
    const temp = parseInt(valueKelvin + tempKelvin);
    const cityName = data.name;
    const state = city.state;
    const country = city.country;
    const weatherDescription = data.weather[0].description;
    const wind = JSON.stringify((data.wind.speed * 3600) / 1000).split(".")[0]; //converte m/s em m/h em km/h
    const humidity = data.main.humidity;
    const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

    const cityWeatherInformation = {
      temp,
      cityName,
      state,
      country,
      weatherDescription,
      wind,
      humidity,
      icon,
    };

    setInfoClima(cityWeatherInformation);
  };

  //converter nome da cidade em coordenadas
  const geocodificaçãoAPI = async (cidade) => {
    const res = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${cidade}&limit=1&appid=${key}`
    );
    const data = await res.json();
    climaAPI(data[0]);
  };

  const handleChange = (e) => {
    let value = e.target.value;
    setClima(value);
  };

  return (
    <div className="app">
      <h1>Clima e tempo</h1>
      <form>
        <input type="text" onChange={handleChange}></input>
        <button
          onClick={(event) => {
            event.preventDefault();
            if (infoClima) geocodificaçãoAPI(clima);
          }}
        >
          Buscar
        </button>
      </form>
      <div>
        {infoClima
          ? infoClima.cityName
          : "Nenhuma cidade foi localizada, insira o nome da cidade"}
      </div>
    </div>
  );
}

export default App;
