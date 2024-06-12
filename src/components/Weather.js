// Weather.js
import React from "react";

const Weather = ({ weather }) => {
  return (
    <div>
      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].description}</p>
          <p>Sıcaklık: {weather.main.temp}°C</p>
          <p>Nem: {weather.main.humidity}%</p>
          <p>Rüzgar Hızı: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
