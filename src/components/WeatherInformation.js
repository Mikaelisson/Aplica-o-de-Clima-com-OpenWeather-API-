import React from "react";

import { useSelector } from "react-redux";

import LocalizationIcon from "../assets/svg/LocalizationIcon";
import WindIcon from "../assets/svg/WindIcon";
import HumidityIcon from "../assets/svg/HumidityIcon";

const WeatherInformation = () => {
  const weatherInformation = useSelector(
    (state) => state.climate.weatherInformation
  );

  return (
    <div className="weather-information">
      {weatherInformation ? (
        <div className="card">
          <div className="info-1">
            <img
              src={weatherInformation.icon}
              alt={`Icone identificador do clima ${weatherInformation.weatherDescription}`}
            ></img>
            <div>
              <p className="temp">{`${weatherInformation.temp}°C`}</p>
              <p className="weatherDescription">{`${weatherInformation.weatherDescription}`}</p>
            </div>
          </div>

          <div className="info-2">
            <LocalizationIcon className="localization-icon" />
            {`${weatherInformation.cityName}, ${weatherInformation.stateName}/${weatherInformation.country}`}
          </div>

          <div className="info-3">
            <div>
              <WindIcon className="wind-icon" />
              {`${weatherInformation.wind}km/h`}
            </div>
            <div>
              <HumidityIcon className="humidity-icon" />
              {`${weatherInformation.humidity}%`}
            </div>
          </div>
        </div>
      ) : (
        <div className="error-city">
          Cidade não localizada, tente novamente.
        </div>
      )}
    </div>
  );
};

export default WeatherInformation;
