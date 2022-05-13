import axios from "axios";
import React, { useState } from "react";
import "./App.css";
import Forecast from "./Forecast";
import Actualinfo from "./Actualinfo";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      img: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      coords: response.data.coord,
    });
  }

  function search() {
    const apiKey = "411a942cf48762f8f3d00fd7b552fe5c";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="row">
        <form onSubmit={handleSubmit} className="search-city-bar col-8">
          <input
            type="search"
            className="form-control"
            id="city-form"
            placeholder="Enter the name of your city"
            size="55px"
            onChange={handleCityChange}
          />
        </form>
        <div className="col-2 search-city-button">
          <button
            type="submit"
            className="btn btn-primary mb-3 search"
            id="search"
          >
            Search
          </button>
        </div>
        <div className="col-2 search-city-button">
          <button
            type="button"
            className="btn btn-primary mb-3 current"
            id="current-location"
          >
            Current
          </button>
        </div>
        <Actualinfo data={weatherData} />
        <div className="col-6 block-days" id="weather-forecast">
          <Forecast coordinates={weatherData.coords} />
        </div>{" "}
      </div>
    );
  } else {
    search();
    return "Loading ...";
  }
}
