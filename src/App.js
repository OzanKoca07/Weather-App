import React, { useState } from "react";
import Form from "./components/Form";
import Weather from "./components/Weather";
import "./App.css";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  // başlangıç değerleri (initial edilmeden önceki) değerleri null atarız.

  const API_KEY = "66579f34ee547052dd8d73f76c1038eb";

  const getWeather = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();
    setWeather(data);
  };

  return (
    <div className="App">
      <h1>Hava Durumu Uygulaması</h1>
      <Form getWeather={getWeather} setCity={setCity} />
      <Weather weather={weather} />
    </div>
  );
};

export default App;

