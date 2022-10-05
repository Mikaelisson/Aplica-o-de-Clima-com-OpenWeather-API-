import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleChange, cityInformation } from "../actions/climateSlice";

const ClimateForm = () => {
  const city = useSelector((state) => state.climate.valueNameCity);
  const dispatch = useDispatch();

  const key = "89c6b977f2b1ca49c13e091e163764b6";

  const onHandleChange = (event) => {
    let value = event.target.value;
    dispatch(handleChange(value));
  };

  //buscar dados do local
  const climaAPI = async (city) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=${key}&lang=pt_br`
    );
    const data = await res.json();

    const valueKelvin = -273.15;
    const tempKelvin = data.main.temp;

    const cityWeatherInformation = {
      temp: parseInt(valueKelvin + tempKelvin),
      cityName: data.name,
      stateName: city.state,
      country: city.country,
      weatherDescription: data.weather[0].description,
      wind: JSON.stringify((data.wind.speed * 3600) / 1000).split(".")[0], //converte m/s em m/h em km/h
      humidity: data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
    };

    dispatch(cityInformation(cityWeatherInformation));
    console.log(cityWeatherInformation);
  };

  //converter nome da cidade em coordenadas
  const onGeoConditioningAPI = async (city) => {
    await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${key}`
    )
      .then(async (res) => {
        return await res.json();
      })
      .then((res) => {
        climaAPI(res[0]);
      });
  };

  return (
    <form>
      <input type="text" onChange={(event) => onHandleChange(event)}></input>
      <button
        onClick={(event) => {
          event.preventDefault();
          onGeoConditioningAPI(city);
        }}
      >
        Buscar
      </button>
    </form>
  );
};

export default ClimateForm;
